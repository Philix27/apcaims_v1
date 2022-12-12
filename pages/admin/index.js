import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { data } from "../../constants/states";
import axios from "axios";
import { utils } from "../../utils";
import { parse } from "uuid";

export default function Dashboard({ statesCount }) {
  const router = useRouter();
  const query = router.query;
  const userState = query.state;
  // console.log(statesCount);

  function stateAgentCount(nameOfState) {
    console.log(nameOfState);
    let counterValue = statesCount.data.map((st) => {
      if (st._id.toUpperCase() == nameOfState.toUpperCase()) {
        return parseInt(st.agentCount);
      }
    });

    return counterValue;
  }
  // function stateAgentCount(nameOfState) {
  //   console.log(nameOfState);
  //   let ags = statesCount.data.filter(
  //     (st) => st._id.toUpperCase() == nameOfState.toUpperCase()
  //   );

  //   return ags.length;
  // }

  return (
    <div className="dasboardWrapper">
      <Head>
        <title>{userState} | ADMIN</title>
      </Head>
      <div className="spacer"></div>

      <div className="headingSection">
        <h1>All States</h1>
      </div>

      <div className="dashboard">
        {data.states.map((val, i) => (
          <Link passHref href={`/dashboard/${val.state}`} key={i}>
            <div className="card">
              <div className="topbar teal"></div>
              <div className="content">
                <h3>{val.state}</h3>
                <p>Informations and details for state.</p>
                {/* <p>{utils.numberWithCommas(stateAgentCount(val.state))}</p> */}
                <p>{stateAgentCount(val.state)}</p>
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
