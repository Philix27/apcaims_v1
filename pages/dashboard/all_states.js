import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Chart from "../../comps/chart";
import { bgColors } from "../../constants/chartColors";
import { data } from "../../constants/states/";

export default function SummaryPage({ agentsList }) {
  const router = useRouter();
  const query = router.query;
  const userState = query.state;

  //   const selectedLg = data.states.filter((val) =>
  //     val.state.toLowerCase().includes(userState.toLowerCase())
  //   );
  //   console.log("selectedLg");
  //   console.log(selectedLg);

  function getCount(state) {
    let ags = agentsList.data.filter((ag) => ag.state == state);
    return ags.length;
  }

  const label = data.states.map((val, index) => val.state);
  const agentCount = data.states.map((val) => getCount(val.state));
  //   const agentCount = [1, 2, 4, 6, 7, 8, 55, 3, 12, 5, 34, 98];

  const [userData, setUserData] = useState({
    labels: label,
    datasets: [
      {
        label: "LGAs",
        data: agentCount,
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
  });

  return (
    <div>
      <Chart
        chartdata={userData}
        title="Agents in the various LGAs"
        chartType="DOUGHNUT"
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    let art;
    art = await axios(`${process.env.NEXT_PUBLIC_DOMAIN}/api/all_states`);
    return {
      props: {
        agentsList: art.data,
      },
    };
  } catch (error) {
    console.log("Opps an error");
    return {
      props: {
        agentsList: [],
      },
    };
  }
  // console.log(art);
}
