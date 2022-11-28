import axios from "axios";
import React, { useState } from "react";
import BarChart from "../../comps/barchart";

export default function SummaryPage({ agentsList }) {
  function getCount(lganame) {
    let ags = agentsList.filter((ag) => ag.lga == lganame);
    return ags.length;
  }
  const label = agentsList.data.map((lga) => lga.name);

  const [userData, setUserData] = useState({
    labels: label[0],
    datasets: [
      {
        label: "Users Gained",
        data: agentsList.data(),
      },
    ],
  });

  return <div>SummaryPage</div>;
}

export async function getServerSideProps(context) {
  const { query } = context;
  try {
    let art;
    art = await axios(
      `https://rxedu-api.vercel.app/api/v1/agents_by_state?state=${query.state}`
    );
    return {
      props: {
        agentsList: art.data,
      },
    };
  } catch (error) {
    return {
      props: {
        agentsList: [],
      },
    };
  }
  // console.log(art);
}
