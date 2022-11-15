import React, { useState, useEffect } from "react";
import { data } from "../constants/states/";
import { useRouter } from "next/router";
import Link from "next/link";
import BecomeAgentBtn from "../comps/BecomeAgentBtn";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export default function Home({ content }) {
  const router = useRouter();
  const md = new MarkdownIt();
  const cc = md.render(content);

  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (fetchUser()) {
      setUser(fetchUser()[0]);
      setUserLoggedIn(true);
    } else {
      // setUser();
      setUserLoggedIn(false);
    }
  }, []);

  function login(_user) {
    const userLoggedIn = data.sr.filter((_v) => {
      if (_v.email == _user.email && _v.password == _user.password) {
        return _v;
      }
    });
    console.log(userLoggedIn);
    if (userLoggedIn[0]) {
      if (
        userLoggedIn[0].email == _user.email &&
        userLoggedIn[0].password == _user.password
      ) {
        setUserLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(userLoggedIn[0]));

        // router.push("/admin");
        router.reload(window.location.pathname);
        console.log("Logged in successfully");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Wrong email/password Password");
    }
    // console.log("Logged in successfully");
  }

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    // console.log(user);5t
  };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      e.preventDefault();
      login(user);
    } else {
      console.log("Something is missing");
    }
  };

  return (
    <div className="wrapper">
      {/* <BecomeAgentBtn /> */}
      {isUserLoggedIn ? (
        // <Guide />
        <div className="guide">
          <div className="markdown-section">
            <div dangerouslySetInnerHTML={{ __html: cc }}></div>
            {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
          </div>
        </div>
      ) : (
        // <div className="textArea">
        //   <p>
        //     This is a Poll Agent Data Capture Application designed specifically
        //     for the All Progressive Congress (APC) for the purpose of election
        //     monitoring, reporting and forensics.
        //   </p>
        //   <p>Only an authorized person can have acces to the full data.</p>
        // </div>
        <div className="section formsPage">
          <form action="#" className="form">
            {/* <form action="/api/auth/login" className="form" method="GET"> */}
            <div className="input_box">
              <label htmlFor="form-email" className="label">
                Email
              </label>
              <input
                type="text"
                id="form-email"
                placeholder="example@gmail.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="form-password" className="label">
                Password
              </label>
              <input
                type="password"
                id="form-password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="buttons">
              <input
                type="submit"
                value="Login"
                onClick={handleSubmit}
                className="btn"
              />
            </div>
          </form>
          <div className="buttons">
            <Link className="btn" href="/addagent">
              Become an agent
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const slug = "guide";
  const markdownWithMeta = fs.readFileSync(
    path.join("_md", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
    },
  };
}
