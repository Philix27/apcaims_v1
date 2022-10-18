import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    if (fetchUser()) {
      setUser(fetchUser()[0]);
      console.log(fetchUser());
    } else {
      setUser();
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  const logOut = () => {
    localStorage.clear();
    setUser({ email: "", name: "" });
    router.push("/");
  };
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
                width={50}
                height={40}
              />
            </a>
          </Link>
          <div className="title">
            <h3>APC DATA CAPTURE</h3>
          </div>
          <div className="nav_bg">
            <ul className="nav_start_list">
              <li className="nav_start_list_item">
                <div className="bars_close">
                  <label htmlFor="check">
                    <FaTimes />
                  </label>
                </div>
              </li>
              {user ? (
                <li className="nav_start_list_item">
                  <Link href="/#">
                    <a className="link">{user.email}</a>
                  </Link>
                </li>
              ) : (
                <li className="nav_start_list_item">
                  <Link href="/">
                    <a className="link">Not Signed In</a>
                  </Link>
                </li>
              )}
              {user && (
                <li className="nav_start_list_item">
                  <Link href="/#">
                    <a className="link" onClick={logOut}>
                      Logout
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
