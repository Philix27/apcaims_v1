import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>APC DATA CAPTURE </title>
        <meta name="APC DATA CAPTURE" content="Created by Eligbue" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Navbar />
      <Sidebar />
      {props.children}
      {/* <Footer /> */}
    </>
  );
}
