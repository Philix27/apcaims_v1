import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
      console.log(fetchUser());
    }
  }, []);
  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="dasboardWrapper">
      <Head>
        <title>APCAIMS | ADMIN</title>
      </Head>
      <div className="dashboard">
        <div className="card">
          <div className="topbar red"></div>
          <div className="content">
            <h3>AGENTS</h3>
            <p>All agents</p>
            <div className="btnDiv">
              <Link href="/agents">
                <a className="btn">View All</a>
              </Link>
              <Link href="/admin/addagent">
                <a className="btn"> Add</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>Agents Category</h2> */}
      <div className="dashboard">
        <div className="card">
          <div className="topbar orange"></div>
          <div className="content">
            <h3>PRESIDENTIAL</h3>
            <p>45 Agents</p>
          </div>
        </div>
        <div className="card">
          <div className="topbar green"></div>
          <div className="content">
            <h3>GUBERNATORIAL</h3>
            <p>76 Agents</p>
          </div>
        </div>
        <div className="card">
          <div className="topbar teal"></div>
          <div className="content">
            <h3>SENATORIAL</h3>
            <p>89 Agents</p>
          </div>
        </div>
        <div className="card">
          <div className="topbar purple"></div>
          <div className="content">
            <h3>HOUSE OF REPRESENTATIVES</h3>
            <p>67 Agents</p>
          </div>
        </div>
        <div className="card">
          <div className="topbar blood"></div>
          <div className="content">
            <h3>STATE HOUSE OF ASSEMBLY</h3>
            <p>67 Agents</p>
          </div>
        </div>
      </div>
    </div>
  );
}