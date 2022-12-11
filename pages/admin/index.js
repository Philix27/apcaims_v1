import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { data } from "../../constants/states";

export default function Dashboard({ agentsList, stateValue }) {
  const router = useRouter();
  const query = router.query;
  const userState = query.state;

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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
