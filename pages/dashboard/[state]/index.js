import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { data } from "../../../constants/states";

export default function Dashboard({ agentsList, stateValue }) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    statecode: "",
    img: "",
    userType: "",
  });

  const getAllLga = data.states.filter((val) =>
    val.state.toLowerCase().includes(stateValue.toLowerCase())
  );

  function filterAgentTypes(agentType) {
    let ags = agentsList.data.filter((ag) => ag.agentType == agentType);
    return ags.length;
  }
  function filterElectionTypes(electionType) {
    let ags = agentsList.data.filter((ag) => ag.electionType == electionType);
    return ags.length;
  }

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
      // console.log(fetchUser());
    } else {
      setUser(fetchUser());
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="dasboardWrapper">
      <Head>
        <title>{user.name} | ADMIN</title>
      </Head>
      <div className="spacer"></div>
      <div className="headingSection">
        <h1>{user.name} State Dashboard</h1>
      </div>
      <div className="dashboard">
        <Link href="/agents/add">
          <a className="card">
            <div className="bgAgent">
              <div className="content">
                <h3>ADD AGENT</h3>
                <p>Add an agent to your state</p>
              </div>
            </div>
          </a>
        </Link>
        <Link href={`/lga/${user.name}`}>
          <div className="card">
            <div className="topbar orange"></div>
            <div className="content">
              <h3>LGA</h3>
              <p>{getAllLga[0].lga.length} LGAs</p>
            </div>
          </div>
        </Link>
        <Link href={`/state/${user.name}`}>
          <div className="card">
            <div className="topbar green"></div>
            <div className="content">
              <h3>Agents List</h3>

              <p>{agentsList.data.length} Agents</p>
            </div>
          </div>
        </Link>

        <Link href={`/summary/${user.name}`}>
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>SUMMARY</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="headingSection">
        <h1>Agent Types</h1>
      </div>

      <div className="dashboard">
        <Link href={`/state/${user.name}`}>
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>PRESIDENTIAL</h3>
              <p>{filterAgentTypes("PRESIDENTIAL")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href={`/state/${user.name}`}>
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>STATE</h3>
              <p>{filterAgentTypes("STATE")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>LOCAL GOVERNMENT</h3>
              <p>{filterAgentTypes("LOCAL GOVERNMENT")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href={`/state/${user.name}`}>
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>WARD</h3>
              <p>{filterAgentTypes("WARD")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>POLLING UNIT</h3>
              <p>{filterAgentTypes("POLLING UNIT")} Agents</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="headingSection">
        <h1>Election Types</h1>
      </div>
      <div className="dashboard">
        <Link href="#">
          <div className="card">
            <div className="topbar blood"></div>
            <div className="content">
              <h3>PRESIDENTIAL</h3>
              <p>{filterElectionTypes("PRESIDENTIAL")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar blood"></div>
            <div className="content">
              <h3>SENATORIAL</h3>
              <p>{filterElectionTypes("SENATORIAL")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar blood"></div>
            <div className="content">
              <h3>STATE HOUSE OF ASSEMBLY</h3>
              <p>{filterElectionTypes("STATE HOUSE OF ASSEMBLY")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar blood"></div>
            <div className="content">
              <h3>HOUSE OF REPS.</h3>
              <p>{filterElectionTypes("HOUSE OF REPS.")} Agents</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar blood"></div>
            <div className="content">
              <h3>GUBERNATORIAL</h3>
              <p>{filterElectionTypes("GUBERNATORIAL")} Agents</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="headingSection">
        <h1>Wards</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const art = await axios.get(
    `https://rxedu-api.vercel.app/api/v1/agents_by_state?state=${query.state}`
  );

  // console.log(art);
  return {
    props: {
      agentsList: art.data,
      stateValue: query.state,
    },
  };
}
