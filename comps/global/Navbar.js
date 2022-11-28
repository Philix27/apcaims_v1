import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  const show = "show";
  const [showNav, setShowNav] = useState(false);

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
      <div className="navbar ">
        {/* <Link href="/">
          <img className="logo" src="/images/logo.png" />
        </Link> */}

        <label className="brand">APCAIMS</label>

        <ul className={showNav ? "show" : ""}>
          <li
            className={_path == "/" ? "active" : ""}
            onClick={() => setShowNav(!showNav)}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {!user && (
            <li
              onClick={() => setShowNav(!showNav)}
              className={_path == "/agents/add" ? "active" : ""}
            >
              <Link href="/agents/add">
                <a>Add Agent</a>
              </Link>
            </li>
          )}

          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/sponsor" ? "active" : ""}
          >
            <Link href="/sponsor">
              <a>Sponsor</a>
            </Link>
          </li>

          {user ? (
            <li onClick={() => setShowNav(!showNav)}>
              <Link href="/login">
                <a className="link" onClick={logOut}>
                  Logout
                </a>
              </Link>
            </li>
          ) : (
            <li
              onClick={() => setShowNav(!showNav)}
              className={_path == "/login" ? "active" : ""}
            >
              <Link href="/login">
                <a className="link">Login</a>
              </Link>
            </li>
          )}

          {user && (
            <li
              onClick={() => setShowNav(!showNav)}
              className={_path == "/dashboard" ? "active" : ""}
            >
              <Link href="/dashboard">
                <a>{user.name}</a>
              </Link>
            </li>
          )}
          {!user && (
            <li
              onClick={() => setShowNav(!showNav)}
              className={_path == "/faq" ? "active" : ""}
            >
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
          )}
          {user && (
            <li
              onClick={() => setShowNav(!showNav)}
              className={_path == "/faq_admin" ? "active" : ""}
            >
              <Link href="/faq_admin">
                <a>FAQ ADMIN</a>
              </Link>
            </li>
          )}

          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/guide" ? "active" : ""}
          >
            <Link href="/guide">
              <a>Help</a>
            </Link>
          </li>
        </ul>
        <label className="icon">
          {showNav ? (
            <FaTimes onClick={() => setShowNav(!showNav)} />
          ) : (
            <FaBars onClick={() => setShowNav(!showNav)} />
          )}
        </label>
      </div>
    </>
  );
}
