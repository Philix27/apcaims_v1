import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { data } from "../../constants/states";
import { utils } from "../../utils";
import { MdPersonAddAlt1, MdGroups } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { bgColors } from "../../constants/chartColors";
import Chart from "../../comps/chart_bar";

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
        {data.states.map((val) => (
          <Link passHref href={`/dashboard/${val.state}`}>
            <div className="card">
              <div className="topbar teal"></div>
              <div className="content">
                <h3>{val.state}</h3>
                <p>All state's info</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
