import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Chart from "../../comps/chart";
import { data } from "../../constants/states";
import { utils } from "../../utils";

export default function AdminPage({ agentsList }) {
  const router = useRouter();
  const query = router.query;
  const userState = query.state;
  const [isLoading, setLoading] = useState(true);
  const allStates = data.states.map((val) => val.state);

  // function getCount(stateName) {
  //   let ags = agentsList.data.filter((ag) => ag.state == stateName);
  //   return ags.length;
  // }
  // console.log("agentsList");

  // const agentCount = allStates.map((val) => getCount(val));
  // console.log("agentCount");
  // console.log(agentCount);

  // const [userData, setUserData] = useState({
  //   labels: allStates,
  //   datasets: [
  //     {
  //       label: "Agent count",
  //       data: agentCount,
  //     },
  //   ],
  // });
  async function getStateAgentCount(state) {
    var art = [];
    try {
      // election-5iwoohvdw-philix.vercel.app
      art = await axios.get(
        `https://rxedu-api.vercel.app/api/v1/agents_by_state?state=${state}`
      );
      art = art.data.data;
      console.log(art.length);
      setLoading(false);
    } catch (e) {
      setLoading(true);
    }

    return art.length;
  }

  useEffect(async () => {
    var state = "DELTA";
    var art = await axios.get(
      `https://rxedu-api.vercel.app/api/v1/agents_by_state?state=${state}`
    );
    art = art.data.data;
    console.log(art.length);

    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div className="section">
      <h1>Total Agents Registered </h1>
      <h2>{utils.numberWithCommas(agentsList.totalCount)}</h2>
      {!isLoading && <h3>{getStateAgentCount("DELTA")}</h3>}
      {/* <Chart chartdata={userData} title={"All States"} chartType="BAR" /> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  let art;
  art = await axios.get(`https://rxedu-api.vercel.app/api/v1/agent`);
  // art = await axios(`localhost:3007/api/v1/agent_all`);

  return {
    props: {
      agentsList: art.data,
    },
  };
}
