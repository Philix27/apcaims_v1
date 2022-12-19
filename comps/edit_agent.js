import React, { useState } from "react";
import { motion } from "framer-motion";
import { data } from "../constants/states";

export default function EditAgentComp({ agentInfo }) {
  const styleHide = "hide";
  const styleShow = "show";
  const errorMsgs = [];
  const [agent, setagent] = useState(agentInfo);
  function validateStep1() {
    if (agent.name || agent.name.length < 10) {
      errorMsgs.push("Name must be more than 10 characters");
    }
  }

  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <div className="section">
      <motion.div
        className={`sect step1`}
        initial={{ x: "-100vw", opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
      >
        <form onSubmit={handleSubmit} className="form">
          <h2>
            Step 1 <span>Personal Details</span>
          </h2>

          <div className="input_box">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              required
              // maxLength={11}
              value={agent.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="formLastName" className="label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              name="lastName"
              required
              // maxLength={11}
              value={agent.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="input_box">
            <label htmlFor="form-gender">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={agent.gender}
              required
              id="form-gender"
              placeholder="Selectt"
            >
              <option disabled>Select Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>

          <div className="input_box">
            <label htmlFor="form-email" className="label">
              Email
            </label>
            <input
              type="text"
              required
              minLength={4}
              id="form-email"
              placeholder="Enter email address"
              name="email"
              value={agent.email}
              onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="form-phone" className="label">
              Phone Number
            </label>
            <input
              type="number"
              required
              id="form-phone"
              minLength={11}
              maxLength={15}
              placeholder="e.g 08101234567"
              name="phone"
              value={agent.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="form-address" className="label">
              Address
            </label>
            <input
              type="text"
              id="form-address"
              required
              placeholder="Home Address"
              name="address"
              value={agent.address}
              onChange={handleChange}
            />
          </div>

          <div className="input_box">
            <label htmlFor="dateOfBirth" className="label">
              Date of Birth
            </label>
            <input
              type="date"
              // type="datetime-local"
              id="dateOfBirth"
              placeholder="Date"
              name="dateOfBirth"
              value={agent.dateOfBirth}
              min="1910-01-01"
              max="2002-01-01"
              required
              onChange={handleChange}
            />
          </div>

          <div className="btnContainer">
            <div className="buttons">
              <input
                type="submit"
                value="Next"
                // onClick={handleNext}
                className="btn"
              />
            </div>
          </div>
          <h2>
            Step 2 <span>Location Details</span>
          </h2>

          <div className="input_box">
            <label htmlFor="form-state">State</label>
            <select
              name="state"
              onChange={handleChange}
              value={agent.state}
              required
              id="form-state"
            >
              <option disabled>Select a state</option>

              {data.states.map((_val, index) => {
                return (
                  <option value={_val.state.toUpperCase()} key={index}>
                    {_val.state}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input_box">
            <label htmlFor="form-lga">LGA</label>
            <select
              name="lga"
              onChange={handleChange}
              value={agent.lga}
              required
              id="form-lga"
            >
              <option disabled={true}>Select a LGA</option>

              {localGov.map((_val, index) => {
                return (
                  <option value={_val.name} key={index}>
                    {_val.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input_box">
            <label htmlFor="form-ward">Wards</label>
            <select
              name="ward"
              value={agent.ward}
              onChange={handleChange}
              required
              id="form-ward"
            >
              <option disabled={true}>Select a ward</option>
              {wards.map((_val, index) => {
                return (
                  <option value={_val} key={index}>
                    {_val}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input_box">
            <label htmlFor="form-polling-unit" className="label">
              Polling Unit
            </label>
            <input
              type="number"
              id="form-polling-unit"
              placeholder="eg 001, 002"
              name="pollingUnit"
              value={agent.pollingUnit}
              required
              minLength={3}
              onChange={handleChange}
            />
          </div>
          <div className="btnContainer">
            <div className=" buttons">
              <input
                type="submit"
                value="Go Back"
                onClick={handlePrev}
                className="btn"
              />
            </div>
            <div className="buttons">
              <input
                type="submit"
                value="Next"
                //   onClick={handleNext}
                className="btn"
              />
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
