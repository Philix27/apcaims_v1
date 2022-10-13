import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_start">
          <img className="logo" src="/images/logo.png" width={90} height={45} />
          <ul className="sidebar_start_list">
            <a className="link" href="/">
              <li className="sidebar_start_list_item">HOME</li>
            </a>
            <a className="link" href="/states">
              <li className="sidebar_start_list_item">STATES</li>
            </a>
            <a className="link" href="/lga">
              <li className="sidebar_start_list_item">LGAs</li>
            </a>
            <a className="link" href="/">
              <li className="sidebar_start_list_item">WARDS</li>
            </a>
            <a className="link" href="/">
              <li className="sidebar_start_list_item">POLLING</li>
            </a>
            <a className="link" href="/">
              <li className="sidebar_start_list_item">SUMMARY</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
