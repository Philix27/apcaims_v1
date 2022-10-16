import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Head>
        <title>APCAIMS | ADMIN</title>
      </Head>
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
      <div className="card">
        <div className="topbar orange"></div>
        <div className="content">
          <h3>PRESIDENTIAL</h3>
          <p>45 Agents</p>
          <div className="btnDiv">
            <Link href="/">
              <a className="btn">View All</a>
            </Link>
            <Link href="/">
              <a className="btn"> Add</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar green"></div>
        <div className="content">
          <h3>GUBERNATORIAL</h3>
          <p>76 Agents</p>
          <div className="btnDiv">
            <Link href="/">
              <a className="btn">View All</a>
            </Link>
            <Link href="/">
              <a className="btn"> Add</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar teal"></div>
        <div className="content">
          <h3>SENATORIAL</h3>
          <p>89 Agents</p>
          <div className="btnDiv">
            <Link href="/">
              <a className="btn">View All</a>
            </Link>
            <Link href="/">
              <a className="btn"> Add</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar purple"></div>
        <div className="content">
          <h3>HOUSE OF REPRESENTATIVES</h3>
          <p>67 Agents</p>
          <div className="btnDiv">
            <Link href="/">
              <a className="btn">View All</a>
            </Link>
            <Link href="/">
              <a className="btn"> Add</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="topbar blood"></div>
        <div className="content">
          <h3>STATE HOUSE OF ASSEMBLY</h3>
          <p>67 Agents</p>
          <div className="btnDiv">
            <Link href="/">
              <a className="btn">View All</a>
            </Link>
            <Link href="/">
              <a className="btn"> Add</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
