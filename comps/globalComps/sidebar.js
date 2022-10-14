import React from "react";
import { useRouter } from "next/router";

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
                HOME
              </li>
            </a>
            <a className="link" href="/dashboard">
              <li
                className={
                  _path == "/dashboard"
                    ? "activeItem"
                    : "sidebar_start_list_item"
                }
              >
                DASHBOARD
              </li>
            </a>
            <a className="link" href="/states">
              <li
                className={
                  _path == "/states" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                STATES
              </li>
            </a>
            <a className="link" href="/lga">
              <li
                className={
                  _path == "/lga" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                LGAs
              </li>
            </a>
            <a className="link" href="/">
              <li
                className={
                  _path == "/wards" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                WARDS
              </li>
            </a>

            <a className="link" href="/">
              <li
                className={
                  _path == "/agents" ? "activeItem" : "sidebar_start_list_item"
                }
              >
                AGENTS
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
