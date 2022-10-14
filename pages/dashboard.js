import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard">
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
