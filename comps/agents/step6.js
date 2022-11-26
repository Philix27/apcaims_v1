import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";

// const SPONSOR_CODE = "FREE_REG";
const ListOfRefCodes = [
  "ABIA_1175",
  "ADADAMAWA_1676",
  "AKWAIBOM_5633",
  "ANAMBRA_5975",
  "BAUCHI_3396",
  "BAYELSA_8809",
  "BENUE_9044",
  "BORNO_9349",
  "CROSSRIVER_7053",
  "DELTA_8630",
  "EBONYI_1738",
  "EDO_1034",
  "EKITI_9002",
  "ENUGU_6620",
  "GOMBE_2559",
  "IMO_1179",
  "JIGAWA_9880",
  "KADUNA_3310",
  "KANO_0403",
  "KATSINA_3987",
  "KEBBI_7654",
  "KOGI_8357",
  "KWARA_4775",
  "LAGOS_7654",
  "NASARAWA_4789",
  "NIGER_9458",
  "OGUN_8463",
  "ONDO_6840",
  "OSUN_3756",
  "OYO_6734",
  "PLATEAU_8315",
  "RIVERS_3204",
  "SOKOTO_3587",
  "TARABA_8723",
  "YOBE_6235",
  "ZAMFARA_8364",
  "FCT_9826",
];

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
  const [correctRefCode, setCorrectRefCode] = useState("");
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
      sponsorCode: correctRefCode || "",
      sponsored: true,
    });
    agent.isApproved = true;
    agent.transactionRef = _reference;
    agent.sponsorCode = correctRefCode || "";
    agent.sponsored = true;
    // console.log(agent);
    setStepIndex(6);
    uploadImageToFb();

    //! postAgent(agent);
  };
  const testRefCode = () => {
    const _reference = Date.UTC.toString();
    setAgent({
      ...agent,
      isApproved: true,
      transactionRef: _reference,
      sponsorCode: correctRefCode || "",
      sponsored: true,
    });
    agent.isApproved = true;
    agent.transactionRef = _reference;
    agent.sponsorCode = correctRefCode || "";
    agent.sponsored = true;
    console.log(agent);
    setStepIndex(6);
    // uploadImageToFb();

    //! postAgent(agent);
  };

  const handleChangeRef = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "sponsorsCode") {
      // if (value.length > 10) value = value.slice(0, 10);

      if (ListOfRefCodes.includes(value)) {
        setRefMatch(true);
        setCorrectRefCode(value);
        console.log(value);
      } else {
        setRefMatch(false);
      }
    }
    setRefCode(value);
    // console.log(refCode);
    // console.log(agent);
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
                // onClick={testRefCode}
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
