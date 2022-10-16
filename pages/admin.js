import React from "react";
import Head from "next/head";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Head>
        <title>APCAIMS | Dashboard</title>
      </Head>

      <div className="card">
        <div className="topbar red"></div>
        <div className="content">
          <h3>AGENTS</h3>
          <p>All agents</p>
          <div className="btnDiv">
            <a className="btn"> View All</a>
            <a className="btn"> Add</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar orange"></div>
        <div className="content">
          <h3>State Representative</h3>
          <p>Each representing a state </p>
          <div className="btnDiv">
            <a className="btn"> View All</a>
            <a className="btn"> Add</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar green"></div>
        <div className="content">
          <h3>LGA</h3>
          <p>All Local Government Areas</p>
          <div className="btnDiv">
            <a className="btn"> View All</a>
            <a className="btn"> Add</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar teal"></div>
        <div className="content">
          <h3>Ward</h3>
          <p>Wards under each Local Government</p>
          <div className="btnDiv">
            <a className="btn"> View All</a>
            <a className="btn"> Add</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar purple"></div>
        <div className="content">
          <h3>Polling Units</h3>
          <p>Units in each Wards</p>
          <div className="btnDiv">
            <a className="btn"> View All</a>
            <a className="btn"> Add</a>
          </div>
        </div>
      </div>
    </div>
  );
}
