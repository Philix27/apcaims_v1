import React from "react";
import Head from "next/head";
import Footer from "./globalComps/Footer/Footer";
import Navbar from "./globalComps/Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>APC State | LGAs | Wards </title>
        <meta name="portfolio" content="Created by Eligbue" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
