import React from "react";
import { motion } from "framer-motion";

export default function Form1({
  agent,
  stepIndex,
  handleChange,
  data,
  localGov,
  handleNext,
  wards,
}) {
  const styleHide = "hide";
  const styleShow = "show";

  return (
    <motion.div
      className={`sect step1 ${stepIndex === 0 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
    >
      <form action="#" className="form">
        <h2>
          Step 1 <span>Personal Details</span>
        </h2>

        <div className="input_box">
          <label htmlFor="form-name" className="label">
            Name
          </label>
          <input
            type="text"
            rows="2"
            id="form-name"
            placeholder="First and Last name"
            name="name"
            value={agent.name}
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
            value={agent.email}
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
            rows="2"
            id="form-address"
            placeholder="Home Address"
            name="address"
            value={agent.address}
            onChange={handleChange}
          />
        </div>
        <div className="input_box">
          <label htmlFor="form-state">State</label>
          <select
            name="state"
            defaultValue="Select a state"
            onChange={handleChange}
            value={agent.state}
            id="form-state"
          >
            <option disabled="true">Select an state</option>

            {data.states.map((_val, index) => {
              return (
                <option value={_val.state} key={index}>
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
            // defaultValue="Abia"
            onChange={handleChange}
            value={agent.lga}
            id="form-lga"
          >
            <option disabled="true">Select a LGA</option>

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
            // defaultValue="Abia"
            value={agent.ward}
            onChange={handleChange}
            id="form-ward"
          >
            <option disabled="true">Select an state</option>
            {wards.map((_val, index) => {
              return (
                <option value={_val} key={index}>
                  {_val}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      <div className="btnContainer">
        <div className="buttons">
          <input
            type="submit"
            value="Next"
            onClick={handleNext}
            className="btn"
          />
        </div>
      </div>
    </motion.div>
  );
}
