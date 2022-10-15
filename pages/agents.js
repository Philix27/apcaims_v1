import React from "react";
import Head from "next/head";
import AgentsComp from "../comps/agents";

export default function AgentsPage() {
  return (
    <div className="wrapper">
      <Head>
        <title>APCAIMS | Agents</title>
      </Head>
      <div className="comp">
        <AgentsComp />
      </div>
    </div>
  );
}
