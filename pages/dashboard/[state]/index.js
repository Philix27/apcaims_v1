import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { data } from "../../../constants/states";
import { utils } from "../../../utils";
import { MdPersonAddAlt1, MdGroups } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { bgColors } from "../../../constants/chartColors";
import Chart from "../../../comps/chart_bar";

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

  const query = router.query;
  const userState = query.state;

  const selectedLg = data.states.filter((val) =>
    val.state.toLowerCase().includes(userState.toLowerCase())
  );
  console.log("selectedLg");
  console.log(selectedLg);

  function getCount(lganame) {
    let ags = agentsList.data.filter((ag) => ag.lga == lganame);
    return ags.length;
  }
  const label = [
    "SENATORIAL",
    "STATE HOUSE OF ASSEMBLY",
    "PRESIDENTIAL",
    "HOUSE OF REPS.",
    "GUBERNATORIAL",
  ];
  const electionTypeCount = [
    filterElectionTypes("SENATORIAL"),
    filterElectionTypes("STATE HOUSE OF ASSEMBLY"),
    filterElectionTypes("PRESIDENTIAL"),
    filterElectionTypes("HOUSE OF REPS."),
    filterElectionTypes("GUBERNATORIAL"),
  ];

  const [userData, setUserData] = useState({
    labels: label,
    datasets: [
      {
        label: "LGAs",
        data: electionTypeCount,
        backgroundColor: bgColors,
      },
    ],
  });

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
          <div className="topCard colorx">
            <h1>
              <MdPersonAddAlt1 />
            </h1>

            <span className="smallName">Add an agent to your state</span>
          </div>
        </Link>

        <Link href={`/lga/${user.name}`}>
          <div className="topCard orange">
            <h1>{getAllLga[0].lga.length}</h1>
            <span className="smallName">Local Government Areas</span>
          </div>
        </Link>

        <Link href={`/state/${user.name}`}>
          {/* <Link href={`#`}> */}
          <div className="topCard primary">
            <span className="icons">
              <MdGroups size={30} />
            </span>
            <h1>{utils.numberWithCommas(agentsList.data.length)}</h1>
            <span className="smallName">Agents</span>
          </div>
        </Link>
        <Link href={`/summary/${user.name}`}>
          <div className="topCard teal">
            <h1>
              <GoGraph />
            </h1>
            {/* <h1>SUMMARY</h1> */}
            <span className="smallName">Summary</span>
          </div>
        </Link>
      </div>

      <div className="headingSection">
        <h1>Election Types</h1>
      </div>
      <div className="dashboard">
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>PRESIDENTIAL</h3>
              <p>
                {utils.numberWithCommas(filterElectionTypes("PRESIDENTIAL"))}
                <span className="smallName">Agents</span>
              </p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>SENATORIAL</h3>
              <p>
                {utils.numberWithCommas(filterElectionTypes("SENATORIAL"))}
                <span className="smallName">Agents</span>
              </p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>STATE HOUSE OF ASSEMBLY</h3>
              <p>
                {utils.numberWithCommas(
                  filterElectionTypes("STATE HOUSE OF ASSEMBLY")
                )}
                <span className="smallName">Agents</span>
              </p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>HOUSE OF REPS.</h3>
              <p>
                {utils.numberWithCommas(filterElectionTypes("HOUSE OF REPS."))}
                <span className="smallName">Agents</span>
              </p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div className="topbar teal"></div>
            <div className="content">
              <h3>GUBERNATORIAL</h3>
              <p>
                {utils.numberWithCommas(filterElectionTypes("GUBERNATORIAL"))}
                <span className="smallName">Agents</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="headingSection">{/* <h1>Wards</h1> */}</div>
      {/* <div className="chart">
        <Chart
          chartdata={userData}
          title="Election Type"
          chartType="DOUGHNUT"
        />
      </div> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const art = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/agents?state=${query.state}`
  );

  return {
    props: {
      agentsList: art.data,
      stateValue: query.state,
    },
  };
}
