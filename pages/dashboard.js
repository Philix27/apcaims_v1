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
          <h3>Total States</h3>
          <p>39 States</p>
        </div>
      </div>
      <div className="card">
        <div className="topbar orange"></div>
        <div className="content">
          <h3>Total LGA</h3>
          <p>39 States</p>
        </div>
      </div>
      <div className="card">
        <div className="topbar green"></div>
        <div className="content">
          <h3>Total Wards</h3>
          <p>39 States</p>
        </div>
      </div>
      <div className="card">
        <div className="topbar teal"></div>
        <div className="content">
          <h3>Total Polling Units</h3>
          <p>39 States</p>
        </div>
      </div>
      <div className="card">
        <div className="topbar purple"></div>
        <div className="content">
          <h3>Total Agents</h3>
          <p>39 States</p>
        </div>
      </div>
    </div>
  );
}
