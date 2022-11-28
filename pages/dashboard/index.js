import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
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
        <title>APCAIMS | ADMIN</title>
      </Head>

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
        <Link href={`lga/${user.name}`}>
          <div className="card">
            <div className="topbar orange"></div>
            <div className="content">
              <h3>LGA</h3>
            </div>
          </div>
        </Link>
        <Link href={`/state/${user.name}`}>
          <div className="card">
            <div className="topbar green"></div>
            <div className="content">
              <h3>Agents List</h3>

              {/* <p>76 Agents</p> */}
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
      <div className="section">
        <h1>Wards</h1>
        {/* <ul className="">
        <li>The iou</li>
        <li>The iou</li>
        <li>The iou</li>
      </ul> */}
      </div>
    </div>
  );
}
