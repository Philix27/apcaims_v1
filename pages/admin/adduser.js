import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { states } from "../../constants/states";

export default function AddUser({ title }) {
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    userType: "",
    password: "",
    phone: "",
    state: "",
  });

  const userType = ["STATEREP", "DEV"];

  function postUserInfo(_user) {
    Axios.post("/api/auth/register", _user)
      .then((response) => {
        setIsSuccessful(true);

        setUser({
          name: "",
          email: "",
          userType: "",
          password: "",
          phone: "",
          state: "",
        });
        console.log("Successfully Sent to: " + apiUrl);

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

    console.log("User Objj");
    console.log(user);
  };

  const handleSubmit = (e) => {
    if (
      user.name &&
      user.email &&
      user.password &&
      user.state &&
      user.state &&
      user.userType
    ) {
      e.preventDefault();
      postUserInfo(user);
    } else {
      console.log("Something is missing");
    }
  };

  const router = useRouter();

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
      // console.log(fetchUser());
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="comp">
      <div className="section formsPage">
        <div className="successDiv">
          {isSuccessful && <p>Successfully Registered </p>}
        </div>
        <div>
          {/* <form action="/api/auth/reg" method="POST" className="form"> */}
          <form className="form">
            <h2>Register a state admin</h2>
            <div className="input_box">
              <label htmlFor="form-name" className="label">
                Name
              </label>
              <input
                type="text"
                rows="2"
                id="form-name"
                placeholder="Name of user"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>

            <div className="input_box">
              <label htmlFor="form-email" className="label">
                Email
              </label>
              <input
                type="text"
                rows="2"
                id="form-email"
                placeholder="Enter email address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="form-phone" className="label">
                Phone Number
              </label>
              <input
                type="text"
                rows="2"
                id="form-phone"
                placeholder="e.g 08101234567"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="form-userType">User Type</label>
              <select
                name="userType"
                defaultValue="STATEREP"
                onChange={handleChange}
                id="form-userType"
                value={user.userType}
              >
                {userType.map((_val, index) => {
                  return (
                    <option value={_val} key={index}>
                      {_val}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="form-state">State</label>
              <select
                name="state"
                // defaultValue="Abia"
                onChange={handleChange}
                value={user.state}
                id="form-state"
              >
                {states.map((_val, index) => {
                  return (
                    <option value={_val.statecode} key={index}>
                      {_val.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="form-password" className="label">
                Password
              </label>
              <input
                type="text"
                rows="2"
                id="form-password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </form>

          <div className="buttons">
            <input
              type="submit"
              value="Next"
              onClick={handleSubmit}
              className="btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
