import React, { useState, useEffect } from "react";
import Axios from "axios";
import { usersList } from "../constants/users";
import { useRouter } from "next/router";
import { fetchUser } from "../api/auth";
// import { fetchUser } from "../api/auth";

export default function Home() {
  const router = useRouter();
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
  }, {});

  // function login(_user) {
  //   Axios.post("/api/auth/login", _user)
  //     .then((response) => {
  //       setUser({
  //         email: "",
  //         password: "",
  //       });
  //       console.log("Successfully Sent to: " + apiUrl);
  //       console.log(response);
  //       setTimeout(() => {
  //         setIsSuccessful(false);
  //       }, 5000);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       console.log("Opps an error ocured");
  //     });
  // }

  function login(_user) {
    const userLoggedIn = usersList.filter((_v) => {
      if (_v.email == _user.email && _v.password == _user.password) {
        return _v;
      }
    });

    if (userLoggedIn) {
      setUserLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(userLoggedIn));

      router.push("/admin");
      console.log("Logged in successfully");
    }
    // console.log("Logged in successfully");
  }

  const logOut = () => {
    localStorage.clear();
    console.log("local Storage cleared");
    // router.push("/");
  };

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
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
      {isUserLoggedIn ? (
        <div className="textArea">
          <h3>Welcome {user.name}</h3>
          <p>
            This is a Poll Agent Data Capture Application designed specifically
            for the All Progressive Congress (APC) for the purpose of election
            monitoring, reporting and forensics.
          </p>
          <p>Only an authorized person can have acces to the full data.</p>
        </div>
      ) : (
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
                type="text"
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
        </div>
      )}
    </div>
  );
}
