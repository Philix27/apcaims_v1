import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Home() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function login(_user) {
    Axios.post("/api/auth/login", _user)
      .then((response) => {
        setUser({
          email: "",
          password: "",
        });
        console.log("Successfully Sent to: " + apiUrl);
        console.log(response);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
      });
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
      <div className="section formsPage">
        <form action="/api/auth/login" className="form" method="GET">
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
              // onClick={handleSubmit}
              className="btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
