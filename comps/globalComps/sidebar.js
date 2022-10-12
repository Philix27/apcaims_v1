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
            <li className="sidebar_start_list_item">
              <Link href="/">
                <a className="link">HOME</a>
              </Link>
            </li>
            <li className="sidebar_start_list_item">
              <Link href="#about">
                <a className="link">STATES</a>
              </Link>
            </li>
            <li className="sidebar_start_list_item">
              <Link href="/project">
                <a className="link">LGAs</a>
              </Link>
            </li>
            <li className="sidebar_start_list_item">
              <Link href="#blogs">
                <a className="link">WARDS</a>
              </Link>
            </li>
            <li className="sidebar_start_list_item">
              <Link href="#blogs">
                <a className="link">POLLING</a>
              </Link>
            </li>
            <li className="sidebar_start_list_item">
              <Link href="#blogs">
                <a className="link">SUMMARY</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
