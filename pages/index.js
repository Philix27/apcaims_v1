import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { AiFillEye } from "react-icons/ai";

export default function Home() {
  const [agentList, setAgentList] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [notAgent, setNotAgent] = useState(true);

  const handleSubmit = async (e) => {
    console.log("Submitted");
    console.log(searchValue);
    if (searchValue) {
      axios
        .get(
          `https://rxedu-api.vercel.app/api/v1/agent_by_nin?nin=${searchValue.searchTerm}`
        )
        .then((response) => {
          setAgentList(response.data.data);
          console.log("Working");
          console.log(response.data.data);
          // console.log(`Length: ${response}`);
          console.log(response);
        })
        .catch(() => {
          console.log("Opps an error ocured - Local");
        });
    } else {
      console.log("No Value");
    }
  };

  const handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchValue({ ...searchValue, [name]: value });
    console.log(searchValue);
  };

  return (
    <div className="wrapper">
      <div className="section formsPage">
        <h2> Enter your NIN to verify your account</h2>
        <form action="#" className="form">
          <div className="input_box">
            {/* <label htmlFor="form-email" className="label">
              Enter your NIN to verify your account
            </label> */}
            <input
              type="text"
              id="form-email"
              placeholder="National Identity Number"
              name="searchTerm"
              onChange={handleChange}
              // value={user.email}
            />
          </div>
          <div className="buttons">
            <input
              type="submit"
              value="Search"
              onClick={handleSubmit}
              className="btn"
            />
          </div>
        </form>
        {agentList.map((gh, index) => {
          const namer = `${gh.lastName} ${gh.firstName}`;
          return (
            <div className="agentCard">
              <div className="content">
                <p>{namer.toUpperCase()}</p>
                {/* <p>{gh.email}</p> */}
              </div>
              <Link href={`/agents/${gh._id}`}>
                <div className="iconButton">
                  <AiFillEye />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
