import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Chart from "../../comps/chart";
import { data } from "../../constants/states/";

export default function AdminPage({ agentsList }) {
  const router = useRouter();
  const query = router.query;
  const userState = query.state;

  const allStates = data.states.map((val) => val.state);

  function getCount(stateName) {
    let ags = agentsList.data.filter((ag) => ag.state == stateName);
    return ags.length;
  }
  console.log("agentsList");
  console.log(agentsList);
  const agentCount = allStates.map((val) => getCount(val));
  console.log("agentCount");
  console.log(agentCount);

  const [userData, setUserData] = useState({
    labels: allStates,
    datasets: [
      {
        label: "Agent count",
        data: agentCount,
      },
    ],
  });

  return (
    <div>
      <Chart chartdata={userData} title={"All States"} chartType="BAR" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  try {
    let art;
    art = await axios(`https://rxedu-api.vercel.app/api/v1/agent_all`);
    // art = await axios(`localhost:3007/api/v1/agent_all`);
    console.log(art);
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
