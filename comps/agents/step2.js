import React from "react";
import { motion } from "framer-motion";

export default function Form2({
  agent,
  stepIndex,
  handleChange,
  data,
  localGov,
  userState,
  wards,
  handleNext,
  handlePrev,
}) {
  const styleHide = "hide";
  const styleShow = "show";

  return (
    <motion.div
      className={`sect step1 ${stepIndex === 1 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
    >
      <form onSubmit={handleNext} className="form">
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
            <option disabled>Select an state</option>

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
            <option disabled={true}>Select an state</option>
            {wards.map((_val, index) => {
              return (
                <option value={_val} key={index}>
                  {_val}
                </option>
              );
            })}
          </select>
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
  );
}
