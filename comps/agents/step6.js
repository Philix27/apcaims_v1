import React from "react";
import { motion } from "framer-motion";
import { usePaystackPayment } from "react-paystack";

export default function Form6({
  agent,
  stepIndex,
  handlePrev,
  setAgent,
  // handlePayment,
  uploadImageToFb,
  setStepIndex,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  // const reference = `${new Date()}`;
  const dateToday = new Date(); // Mon Jun 08 2020 16:47:55 GMT+0800 (China Standard Time)
  const reference = Date.parse(dateToday);

  const config = {
    reference: reference,
    email: agent.email,
    amount: 100000, // #1,000
    publicKey: "pk_live_bcddf6973cdcbd5811ae519ab726adb9cce4091f",
    phone: agent.phone,
  };
  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    const onSuccess = (reference) => {
      console.log("OnSucess");
      setAgent({ isApproved: true, transactionRef: reference });
      setStepIndex(6);
      uploadImageToFb();
    };

    const onClose = () => {
      console.log("closed");
    };

    initializePayment(onSuccess, onClose);
  };

  return (
    <motion.div
      className={`sect step5 ${stepIndex === 5 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <div className="payment">
        <h2>
          Step 6 <span> Payment</span>
        </h2>

        <p>
          You are to make a payment of just a thousand naira (₦1,000) to
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
        <div className="buttons">
          <input
            type="submit"
            value="Submit"
            onClick={uploadImageToFb}
            className="btn"
          />
        </div>
        {/* <div className="buttons">
          <input
            type="submit"
            value="Proceed"
            onClick={handlePayment}
            className="btn"
          />
        </div> */}
      </div>
    </motion.div>
  );
}
