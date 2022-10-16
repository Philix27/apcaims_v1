import React from "react";
import LGAs from "../../comps/lga";
import Head from "next/head";

export default function States() {
  return (
    <div className="lgaWrapper">
      <div className="comp">
        <Head>
          <title>APCAIMS | LGA</title>
        </Head>
        <LGAs />
      </div>
    </div>
  );
}
