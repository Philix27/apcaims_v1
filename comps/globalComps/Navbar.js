import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="check" className="check" />
        <div className="bars">
          <label htmlFor="check">
            <FaBars />
          </label>
        </div>

        <div className="nav_start">
          <Link href="/">
            <a>
              <img
                className="logo"
                src="/images/logo.png"
                width={90}
                height={45}
              />
            </a>
          </Link>
          {/* <Image className={logo} src="/images/logo.png" width={90} height={45}/> */}
          <div className="nav_bg">
            <ul className="nav_start_list">
              <li className="nav_start_list_item">
                <div className="bars_close">
                  <label htmlFor="check">
                    <FaTimes />
                  </label>
                </div>
              </li>

              <li
                className={
                  _path == "/pharmacist"
                    ? "active_list_item"
                    : "nav_start_list_item"
                }
              >
                <Link href="/">
                  <a className="link">LOGIN</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/blogs" ? "active_list_item" : "nav_start_list_item"
                }
              >
                <Link href="/">
                  <a className="link">Email</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/books" ? "active_list_item" : "nav_start_list_item"
                }
              >
                <Link href="/">
                  <a className="link">USER</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
