import React from "react";
import { motion } from "framer-motion";

export default function Form5({
  agent,
  stepIndex,
  agentParams,
  handleChange,
  handlePrev,
  handleSubmit,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  return (
    <motion.div
      className={`sect step2 ${stepIndex === 4 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <div className="preview">
        <h2>
          Step 5 <span> Preview</span>
        </h2>

        <div className="content">
          <h2>
            Name: <span> {agent.name}</span>
          </h2>
          <hr />
          <h2>
            Email: <span> {agent.email}</span>
          </h2>
          <hr />
          <h2>
            Phone: <span> {agent.phone}</span>
          </h2>
          <hr />
          <h2>
            Address: <span> {agent.address}</span>
          </h2>
          <hr />
          <h2>
            State: <span> {agent.state}</span>
          </h2>
          <hr />
          <h2>
            LGA: <span> {agent.lga}</span>
          </h2>
          <hr />
          <h2>
            Ward: <span> {agent.ward}</span>
          </h2>
          <hr />
          <h2>
            Image: <span> {agent.image}</span>
          </h2>
        </div>
      </div>
      <div className="btnContainer">
        <div className=" buttons">
          <input
            type="button"
            value="Go Back"
            onClick={handlePrev}
            className="btn"
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            className="btn"
          />
        </div>
      </div>
    </motion.div>
  );
}
