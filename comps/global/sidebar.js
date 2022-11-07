import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RiDashboardFill, RiHome5Fill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import {
  MdMyLocation,
  MdGroups,
  MdAdminPanelSettings,
  MdOutlineEmail,
} from "react-icons/md";

export default function Sidebar() {
  const router = useRouter();
  const _path = router.pathname;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (fetchUser()) {
      setUser(fetchUser());
    } else {
      setUser(null);
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  const logOut = () => {
    localStorage.clear();
    setUser({});
    router.reload(window.location.pathname);
    // router.push("/");
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_start">
          {/* <img className="logo" src="/images/logo.png" /> */}
          <img className="logo" src="/images/logo.png" width={45} height={45} />
          <label className="brand">APC DATA CAPTURE</label>
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
            {user && (
              <a className="link" href="/agents">
                <li
                  className={
                    _path == "/agents"
                      ? "activeItem"
                      : "sidebar_start_list_item"
                  }
                >
                  <span>
                    <MdGroups />
                  </span>
                  AGENTS
                </li>
              </a>
            )}
            {user && (
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
            )}
            {user && (
              <a className="link" href="/">
                <li className={"sidebar_start_list_item"}>
                  <span>
                    <MdOutlineEmail />
                  </span>
                  {user.email}
                </li>
              </a>
            )}
            {!user && (
              <a className="link" href="/">
                <li className={"sidebar_start_list_item"}>
                  <span>
                    <MdAdminPanelSettings />
                  </span>
                  Not Signed In
                </li>
              </a>
            )}
            {user && (
              <a className="link" href="/" onClick={logOut}>
                <li className={"sidebar_start_list_item"}>
                  <span>
                    <BiLogOut />
                  </span>
                  Logout
                </li>
              </a>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
