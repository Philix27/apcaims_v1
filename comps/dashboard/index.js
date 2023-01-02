import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { data } from "../../constants/states/index";
import { utils } from "../../utils";
import { MdPersonAddAlt1, MdGroups } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { bgColors } from "../../constants/chartColors";
import LgaList from "../../comps/dashboard/lgaList";
import WardList from "./wardList";
import StateList from "./stateList";
// import {
//   dasboardWrapper,
//   spacer,
//   headingSection,
//   dashboard,
//   topCard,
//   orange,
//   tabSection,
//   active,
// } from "../../styles/dashboard.module.scss";

export default function DashboardComp({ agentsList, userState = "DELTA" }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    statecode: "",
    img: "",
    userType: "",
  });

  const getAllWards = () => {
    let all_wards = [];
    getAllLga[0].lga.map((lga) => {
      all_wards.concat(lga.wards);
      lga.wards.map((val) => all_wards.push(val));
    });
    return all_wards.length;
  };

  const getAllLga = data.states.filter((val) =>
    val.state.toLowerCase().includes(userState.toLowerCase())
  );

  const selectedLg = data.states.filter((val) =>
    val.state.toLowerCase().includes(userState.toLowerCase())
  );

  function getCount(lganame) {
    let ags = agentsList.data.filter((ag) => ag.lga == lganame);
    return ags.length;
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = [
    <LgaList state="DELTA" />,
    <LgaList state="DELTA" />,
    <LgaList state="DELTA" />,
  ];

  function setTabActive(position) {
    setActiveIndex(position);
    // console.log("position", position);
    // console.log("activeIndex", activeIndex);
  }
  return (
    <div className="dasboard_new">
      <Head>
        <title>{userState} | ADMIN</title>
      </Head>
      <div className="spacer"></div>
      <div className="tabSection">
        <nav>
          <label
            className={activeIndex == 0 ? " active" : ""}
            onClick={() => setTabActive(0)}
          >
            State Rep
          </label>
          <label
            className={activeIndex == 1 ? " active" : ""}
            onClick={() => setTabActive(1)}
          >
            Local Government
          </label>
          <label
            className={activeIndex == 2 ? " active" : ""}
            onClick={() => setTabActive(2)}
          >
            Wards
          </label>
          <label
            className={activeIndex == 3 ? " active" : ""}
            onClick={() => setTabActive(3)}
          >
            Polling Unit
          </label>
          <label
            className={activeIndex == 4 ? " active" : ""}
            onClick={() => setTabActive(4)}
          >
            Agents
          </label>
          <label
            className={activeIndex == 5 ? " active" : ""}
            onClick={() => setTabActive(5)}
          >
            All States
          </label>
        </nav>
        <hr />
      </div>
      <section className="contentSection">
        <div className={activeIndex == 0 ? "showWidget" : "hideWidget"}>
          <LgaList state="DELTA" />
        </div>
        <div className={activeIndex == 1 ? "showWidget" : "hideWidget"}>
          <WardList state="DELTA" />
        </div>
        <div className={activeIndex == 2 ? "showWidget" : "hideWidget"}>
          <LgaList state="DELTA" />
        </div>
        <div className={activeIndex == 3 ? "showWidget" : "hideWidget"}>
          <LgaList state="DELTA" />
        </div>
        <div className={activeIndex == 4 ? "showWidget" : "hideWidget"}>
          <LgaList state="DELTA" />
        </div>
        <div className={activeIndex == 5 ? "showWidget" : "hideWidget"}>
          <StateList />
        </div>
      </section>
    </div>
  );
}
