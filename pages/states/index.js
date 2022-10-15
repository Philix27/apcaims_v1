import React from "react";
import StatesComp from "../../comps/states";
import Head from "next/head";

export default function States() {
  return (
    <div className="wrapper">
      <Head>
        <title>APCAIMS | States</title>
      </Head>
      <div className="comp">
        <StatesComp />
      </div>
    </div>
  );
}
