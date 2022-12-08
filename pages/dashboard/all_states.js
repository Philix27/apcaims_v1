import axios from "axios";
import React, { useState, useEffect } from "react";
import Chart from "../../comps/chart";
import { bgColors } from "../../constants/chartColors";
import { data } from "../../constants/states/";
import { utils } from "../../utils";
import { Circles } from "react-loader-spinner";

export default function AllStatesPage({}) {
  const [loading, setLoading] = useState(true);
  const [gentsList, setGentsList] = useState([]);

  function getCount(fGentList, state) {
    if (fGentList.data.length > 1) {
      let ags = fGentList.data.filter((ag) => ag.state == state);
      return ags.length;
    } else {
      return 0;
    }
  }

  const label = data.states.map((val) => val.state);
  const agentCount = (_gentsList) =>
    data.states.map((val) => getCount(_gentsList, val.state));

  async function fetchStates() {
    try {
      let art;
      art = await axios(`${process.env.NEXT_PUBLIC_DOMAIN}/api/all_states`);
      setGentsList(art.data);
      setLoading(false);
      console.log("completed fetching");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchStates();
  }, []);

  if (loading) {
    return (
      <div className="section">
        <h1>Fetching Data...</h1>
        <div className="loader">
          <Circles
            height="200"
            width="200"
            color="#1663b0"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      </div>
    );
  } else {
    const userData = {
      labels: label,
      datasets: [
        {
          label: "Agents",
          data: agentCount(gentsList),
          minBarLength: 10,
          backgroundColor: bgColors,
          xAxisID: "States",
          yAxisID: "Agent count",
          scaleShowValues: true,
          scales: {
            x: {
              ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90,
              },
            },
          },
        },
      ],
    };

    return (
      <div>
        {/* <div className="section">
          <h1>Agent's Count</h1>
        </div> */}

        <Chart
          chartdata={userData}
          title={`${utils.numberWithCommas(gentsList.length)} Agents`}
          chartType="DOUGHNUT"
        />
      </div>
    );
  }
}
