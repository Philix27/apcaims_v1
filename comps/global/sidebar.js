import React from "react";
import { useRouter } from "next/router";
import { RiDashboardFill, RiHome5Fill } from "react-icons/ri";
import {
  MdOutlineSupportAgent,
  MdLocationPin,
  MdMyLocation,
  MdOutlineShareLocation,
  MdGroups,
  MdAdminPanelSettings,
} from "react-icons/md";

export default function Sidebar() {
  const router = useRouter();
  const _path = router.pathname;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_start">
          <img className="logo" src="/images/logo.png" width={90} height={45} />
          <ul className="sidebar_start_list">
            <a className="link" href="/">
              <li
                className={
                  _path == "/" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <RiHome5Fill />
                </span>
                HOME
              </li>
            </a>
            {/* <a className="link" href="/dashboard">
              <li
                className={
                  _path == "/dashboard"
                    ? "activeItem"
                    : "sidebar_start_list_item"
                }
              >
                <span>
                  <RiDashboardFill />
                </span>
                DASHBOARD
              </li>
            </a> */}
            {/* <a className="link" href="/states">
              <li
                className={
                  _path == "/states" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdLocationPin />
                </span>
                STATES
              </li>
            </a> */}
            <a className="link" href="/lga">
              <li
                className={
                  _path == "/lga" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdMyLocation />
                </span>
                LGAs
              </li>
            </a>
            {/* <a className="link" href="/">
              <li
                className={
                  _path == "/wards" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdOutlineShareLocation />{" "}
                </span>
                WARDS
              </li>
            </a> */}
            {/* <a className="link" href="/">
              <li
                className={
                  _path == "/wards" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdOutlineShareLocation />{" "}
                </span>
                Polling Units
              </li>
            </a> */}
            <a className="link" href="/agents">
              <li
                className={
                  _path == "/agents" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdGroups />
                </span>
                AGENTS
              </li>
            </a>
            <a className="link" href="/admin">
              <li
                className={
                  _path == "/admin" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                <span>
                  <MdAdminPanelSettings />
                </span>
                ADMIN
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
