import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
export default function Layout(props) {
  return (
    <>
      <Head>
        <title>APC State | LGAs | Wards </title>
        <meta name="portfolio" content="Created by Eligbue" />
      </Head>
      <Navbar />
      <Sidebar />
      {props.children}
      <Footer />
    </>
  );
}
