import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";

const SPONSOR_CODE = "FREE_REG";
export default function Form6({
  agent,
  stepIndex,
  handlePrev,
  setAgent,
  // handlePayment,
  uploadImageToFb,
  postAgent,
  setStepIndex,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  // const reference = `${new Date()}`;
  const dateToday = new Date(); // Mon Jun 08 2020 16:47:55 GMT+0800 (China Standard Time)
  const reference = Date.parse(dateToday);
  const [refCode, setRefCode] = useState("");
  const [refMatch, setRefMatch] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  // #500
  const config = {
    reference: reference,
    email: agent.email,
    amount: 50000,
    publicKey: "pk_live_bcddf6973cdcbd5811ae519ab726adb9cce4091f",
    phone: agent.phone,
    firstname: agent.firstName,
    lastname: agent.lastName,
    metadata: agent,
  };
  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    const onSuccess = (reference) => {
      console.log("OnSucess");
      setAgent({ ...agent, isApproved: true, transactionRef: reference });
      // agent.transactionRef = reference;
      // agent.isApproved = true;
      setStepIndex(6);
      uploadImageToFb();
    };

    const onClose = () => {
      // console.log("closed");
    };

    initializePayment(onSuccess, onClose);
  };

  const sendWithoutPay = () => {
    const _reference = Date.UTC.toString();
    setAgent({
      ...agent,
      isApproved: true,
      transactionRef: _reference,
      sponsorCode: SPONSOR_CODE,
      sponsored: true,
    });
    agent.isApproved = true;
    agent.transactionRef = _reference;
    agent.sponsorCode = SPONSOR_CODE;
    agent.sponsored = true;
    // console.log(agent);
    setStepIndex(6);
    uploadImageToFb();

    //! postAgent(agent);
  };

  const handleChangeRef = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "sponsorsCode") {
      // if (value.length > 10) value = value.slice(0, 10);
      if (value === SPONSOR_CODE) {
        setRefMatch(true);
      } else {
        setRefMatch(false);
      }
    }
    setRefCode(value);
    console.log(refCode);
  };

  return (
    <motion.div
      className={`sect step5 ${stepIndex === 5 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <form className="form" action="#">
        <div className="payment">
          <h2>
            Step 6 <span> Payment</span>
          </h2>
          <p>
            You are to make a payment of just five hundred naira (₦500) to
            complete this registration.
          </p>
          <p>Click Proceed to continue.</p>
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
          {/* <div className="buttons">
          <input
            type="submit"
            value="Submit"
            onClick={tester}
            className="btn"
          />
        </div> */}
          <div className="buttons">
            <input
              type="button"
              value="Proceed"
              onClick={handlePayment}
              className="btn"
            />
          </div>
        </div>

        <div className="payment">
          <h2>Sponsored</h2>
          <p>If you have a sponsor kindly enter their reference code.</p>
        </div>

        <div className="input_box">
          <label htmlFor="form-sponsorsCode" className="label">
            Sponsors Code
          </label>
          <input
            id="form-sponsorsCode"
            placeholder="Ref Code"
            name="sponsorsCode"
            value={refCode}
            onChange={handleChangeRef}
            // value={ques.category}
          />
        </div>

        {refMatch && (
          <div className="btnContainer">
            <div className="buttons">
              <input
                type="button"
                value="Submit"
                onClick={sendWithoutPay}
                className="btn"
              />
            </div>
          </div>
        )}

        {/* {showSubmit && (
          <div className="btnContainer">
            <div className="buttons">
              <input
                type="button"
                value="Submit"
                onClick={submitFile}
                className="btn"
              />
            </div>
          </div>
        )} */}
      </form>
    </motion.div>
  );
}
