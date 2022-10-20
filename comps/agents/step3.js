import React from "react";
import { motion } from "framer-motion";

export default function Form3({
  agent,
  stepIndex,
  agentParams,
  showSenatorialDistrict,
  handlePrev,
  handleNext,
  handleChange,
  senatorial_district,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  return (
    <motion.div
      className={`sect step2 ${stepIndex === 2 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <form onSubmit={handleNext} className="form">
        <h2>Step 3{/* <span>Type of Election</span> */}</h2>
        <div className="input_box">
          <label htmlFor="form-election-type">Election Type</label>
          <select
            name="electionType"
            value={agent.electionType}
            id="form-election-type"
            required
            onChange={handleChange}
          >
            <option>Select an election type</option>
            {agentParams.electionTypes.map((_val, index) => {
              return (
                <option value={_val.title} key={index}>
                  {_val.title}
                </option>
              );
            })}
          </select>
        </div>
        {showSenatorialDistrict && (
          <div className="input_box">
            <label htmlFor="form-election-type">Senatorial District</label>
            <select
              name="senatorialDistrict"
              id="form-election-type"
              onChange={handleChange}
              // value={agent.senatorialDistrict}
              value="ABIA"
            >
              <option disabled={true}>Select an election type</option>
              {senatorial_district.sd.map((_val, index) => {
                return (
                  <option value={_val.name} key={index}>
                    {_val.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
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
              // onClick={handleNext}
              className="btn"
            />
          </div>
        </div>
      </form>
    </motion.div>
  );
}
