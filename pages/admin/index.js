import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { data } from "../../constants/states";
import axios from "axios";
import { utils } from "../../utils";
import { parse } from "uuid";
import DynamicChart from "../../comps/dynamic_chart";
import { bgColors } from "../../constants/chartColors";

export default function Dashboard({ statesCount }) {
  const router = useRouter();
  const query = router.query;
  const userState = query.state;

  function stateAgentCount(nameOfState) {
    let counterValue = statesCount.data.map((st) => {
      if (st._id.toUpperCase() == nameOfState.toUpperCase()) {
        return parseInt(st.agentCount);
      }
    });

    return counterValue;
  }

  const label = data.states.map((val, i) => val.state);

  function dataSets() {
    let vv = label.map((v) => {
      var cc = statesCount.data.filter(
        (st) => st._id.toUpperCase() == v.toUpperCase()
      );
      return cc.agentCount;
    });

    return vv;
  }

  const [userData, setUserData] = useState({
    labels: statesCount.data.map((val) => val._id),
    datasets: [
      {
        axis: "y",
        label: "LGAs",
        data: statesCount.data.map((val) => val.agentCount),
        backgroundColor: bgColors,
      },
    ],
  });

  return (
    <div className="dasboardWrapper">
      <Head>
        <title>{userState} | ADMIN</title>
      </Head>
      <div className="spacer"></div>

      <div className="headingSection">
        <h1>All States</h1>
      </div>
      {/* <div className="headingSection">
        <a className="btn" onClick={() => getAgentsCounts()}>
          Run
        </a>
      </div> */}
      <DynamicChart
        chartdata={userData}
        title="Agents in all states"
        chartType="BAR"
      />
      {/* <Chart chartdata={userData} title="Agents by " chartType="DOUGHNUT" /> */}
      <div className="dashboard">
        {data.states.map((val, i) => (
          <Link passHref href={`/dashboard/${val.state}`} key={i}>
            <div className="card">
              <div className="topbar teal"></div>
              <div className="content">
                <h3>{val.state}</h3>
                <p>Informations and details for state.</p>
                {/* <p>{utils.numberWithCommas(stateAgentCount(val.state))}</p> */}
                <p>{stateAgentCount(val.state)} agents</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const art = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/all_states`
  );

  return {
    props: {
      statesCount: art.data,
    },
  };
}
