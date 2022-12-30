import React, { useState } from "react";
import { motion } from "framer-motion";
import { agentParams } from "../constants/agentparams";
import { useRouter } from "next/router";
import {
  editpage,
  card,
  headings,
  successMsg,
  loadingMsg,
} from "../styles/edit_page.module.scss";
import axios from "axios";

export default function EditAgentComp({ agentInfo }) {
  const router = useRouter();

  const HOU = "HOUSE OF REPS.";
  const STAT = "STATE HOUSE OF ASSEMBLY";
  const SEN = "SENATORIAL";
  const GUBA = "GUBERNATORIAL";
  const PRES = "PRESIDENTIAL";

  const errorMsgs = [];

  const [agent, setAgent] = useState(agentInfo);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showSenatorialDistrict, setShowSenatorialDistrict] = useState(false);
  const [showFedConst, setFedCosnt] = useState(false);
  const [showStateConst, setStateConst] = useState(false);
  const [senatorial_district, setSenatorial_district] = useState([]);
  const [agentTypeList, setAgentTypeList] = useState([]);
  const [newValues, setNewValue] = useState({
    agentType: "",
    electionType: PRES,
  });
  // TODO: Set conditionals for the listTypes

  function validateStep1() {
    if (agent.name || agent.name.length < 10) {
      errorMsgs.push("Name must be more than 10 characters");
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (name == "electionType") {
      if (value == PRES) {
        setAgentTypeList([
          "PRESIDENTIAL",
          "STATE",
          "LOCAL GOVERNMENT",
          "WARD",
          "POLLING UNIT",
        ]);
        setFedCosnt(false);
        setStateConst(false);
        setShowSenatorialDistrict(false);
      } else if (value == HOU) {
        setFedCosnt(true);
        setStateConst(false);
        setShowSenatorialDistrict(false);
        setAgentTypeList([
          "HOUSE OF REPS",
          "LOCAL GOVERNMENT",
          "WARD",
          "POLLING UNIT",
        ]);
      } else if (value == STAT) {
        setFedCosnt(false);
        setStateConst(true);
        setShowSenatorialDistrict(false);
        setAgentTypeList(["HOUSE OF ASSEMBLY", "WARD", "POLLING UNIT"]);
      } else if (value == GUBA) {
        setFedCosnt(false);
        setStateConst(false);
        setShowSenatorialDistrict(false);
        setAgentTypeList(["STATE", "LOCAL GOVERNMENT", "WARD", "POLLING UNIT"]);
      } else if (value == SEN) {
        setFedCosnt(false);
        setStateConst(false);
        setShowSenatorialDistrict(true);
        setAgentTypeList([
          "SENATORIAL",
          "LOCAL GOVERNMENT",
          "WARD",
          "POLLING UNIT",
        ]);
      }
    }
    setNewValue({ ...newValues, [name]: value });
  };
  const updateInformation = async (newData) => {
    await axios.patch(
      `https://rxedu-api.vercel.app/api/v1/agent/${agent._id}`,
      newData
    );
    // console.log("Updated successfully");
    setUpdateSuccessful(true);
    setLoading(false);
    window.setTimeout(() => {
      router.reload(window.location.pathname);
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("In submit func");
    if (newValues.agentType && newValues.electionType) {
      console.log("Submit Pass");
      setLoading(true);
      updateInformation(newValues);
    }
  };
  return (
    <div className={editpage}>
      <motion.div
        className={card}
        initial={{ x: "-100vw", opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.7, delay: 1, type: "tween" }}
      >
        <form onSubmit={handleSubmit} className="form">
          <h2>
            {agent.firstName} {agent.lastName}'s Data
          </h2>
          <div className={headings}>
            <h3>Previous Data</h3>
            <p>Election Type: {agent.electionType}</p>
            <p>Agent Type: {agent.agentType}</p>
            <h3>Select new group</h3>
          </div>
          <div className="input_box">
            <label htmlFor="form-election-type">Election Type</label>
            <select
              name="electionType"
              value={newValues.electionType}
              id="form-election-type"
              required
              onChange={handleChange}
            >
              <option>Select a election type</option>
              {agentParams.electionTypes.map((_val, index) => {
                return (
                  <option value={_val.title} key={index}>
                    {_val.title}
                  </option>
                );
              })}
            </select>
          </div>

          {/* {showSenatorialDistrict && (
            <div className="input_box">
              <label htmlFor="form-senatorial" className="label">
                Senatorial District
              </label>
              <input
                type="text"
                id="form-senatorial"
                placeholder="Enter Senatorial District"
                name="senatorial_district"
                required
                minLength={3}
                onChange={handleChange}
              />
            </div>
          )}
          {showFedConst && (
            <div className="input_box">
              <label htmlFor="form-fed_const" className="label">
                Federal Constituency
              </label>
              <input
                type="text"
                id="form-fed_const"
                placeholder="Enter Fedral Constituency"
                name="fed_const"
                required
                minLength={3}
                onChange={handleChange}
              />
            </div>
          )}
          {showStateConst && (
            <div className="input_box">
              <label htmlFor="form-state_const" className="label">
                State Constituency
              </label>
              <input
                type="text"
                id="form-state_const"
                placeholder="Enter State Constituency"
                name="state_const"
                required
                minLength={3}
                onChange={handleChange}
              />
            </div>
          )} */}

          <div className="input_box">
            <label htmlFor="form-category">Agent Type</label>
            <select
              name="agentType"
              id="form-category"
              value={newValues.agentType}
              onChange={handleChange}
            >
              {agentTypeList.map((_val, index) => {
                return (
                  <option value={_val} key={index}>
                    {`${_val} AGENT`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btnContainer">
            <div className="buttons">
              <input
                type="submit"
                value="Update"
                onClick={handleSubmit}
                className="btn"
              />
            </div>
          </div>
          {isLoading && (
            <div className={loadingMsg}>
              <p>Updating...</p>
            </div>
          )}
          {updateSuccessful && (
            <div className={successMsg}>
              <p>Updated successfully!</p>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
