import { Landing } from "../comps/global/Landing";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { async } from "@firebase/util";

export default function Contact() {
  const dateToday = new Date(); // Mon Jun 08 2020 16:47:55 GMT+0800 (China Standard Time)
  const reference = Date.parse(dateToday);
  const [sponsor, setSponsor] = useState({
    name: "",
    email: "",
    phone: "",
    amount: 0,
    unit: 0,
    refcode: "",
    registrationDate: Date.now(),
  });
  const [ReadOnly, setMakeAllReadOnly] = useState(false);
  const [refvalid, setRefValid] = useState(false);
  const [refLength, setRefLength] = useState(false);
  const [refSearchMsg, setRefSearchMsg] = useState("");

  const config = {
    reference: reference,
    email: sponsor.email,
    // amount: `${sponsor.amount}00`,
    amount: `10000`,
    publicKey: "pk_live_bcddf6973cdcbd5811ae519ab726adb9cce4091f",
    phone: sponsor.phone,
    firstname: sponsor.name,
    metadata: sponsor,
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    const onSuccess = async (reference) => {
      console.log("OnSucess");
      await axios.post("https://rxedu-api.vercel.app/api/v1/sponsor", sponsor);
    };

    const onClose = () => {
      // console.log("closed");
    };

    initializePayment(onSuccess, onClose);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "amount") {
      if (value.length > 10) value = value.slice(0, 10);
      sponsor.unit = Math.trunc(value / 500);
    }
    if (name == "phone") {
      if (value.length > 11) value = value.slice(0, 11);
    }
    if (name == "refcode") {
      if (value.length > 9) value = value.slice(0, 10);
      if (value.length <= 5) setRefLength(true);
      if (value.length >= 6 && value.length <= 10) {
        setRefLength(false);
        //! Verifying Refcode
      } else {
        setRefLength(true);
      }
    }
    setSponsor({ ...sponsor, [name]: value });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    if (
      sponsor.email &&
      sponsor.name &&
      sponsor.phone &&
      sponsor.unit &&
      sponsor.amount &&
      sponsor.refcode
    ) {
      if (sponsor.refcode.length > 6 && sponsor.refcode.length < 10) {
        setRefLength(false);
        console.log("Passed 1");

        try {
          const data = await axios.get(
            `https://rxedu-api.vercel.app/api/v1/sponsor_by_ref/?refcode=${sponsor.refcode}`
          );

          console.log(data.data.data[0]);
          if (data.data.data[0]) {
            setRefSearchMsg("Already in use");
            setRefValid(false);
          } else {
            //! Proceed
            setRefValid(true);
            setMakeAllReadOnly(true);
            handlePayment();
          }
          // console.log("SOmething found - Success");
        } catch (e) {
          setRefSearchMsg("Sorry an error occured");
        }
      } else {
        setRefLength(true);
      }
    } else {
      console.log("Something missing");
    }
  };

  return (
    <>
      <Landing
        title="Sponsor Agents"
        imgUrl="images/sponsor.jpg"
        subtitle="You can sponsor agents for"
        opacity={0.55}
      />
      <div className="section formsPage contactUs">
        <motion.div
          className="sect "
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
        >
          <form className="form" action="#">
            {/* <h2>Email Us</h2> */}
            <p>
              Each unit is per registration. Enter amount in multiples of ₦500
            </p>
            <div className="input_box">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                required
                readOnly={ReadOnly}
                minLength={5}
                id="name"
                placeholder="Full name"
                name="name"
                value={sponsor.name}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                required
                minLength={5}
                readOnly={ReadOnly}
                id="email"
                placeholder="Enter email address"
                name="email"
                onChange={handleChange}
                value={sponsor.email}
              />
            </div>
            <div className="input_box">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                required
                readOnly={ReadOnly}
                id="phone"
                placeholder="e.g 08123456789"
                name="phone"
                value={sponsor.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="refcode" className="label">
                Ref Code
              </label>
              <input
                required
                minLength={7}
                readOnly={ReadOnly}
                id="refcode"
                placeholder="e.g SHOLAK"
                name="refcode"
                value={sponsor.refcode}
                onChange={handleChange}
              />
              {refLength && (
                <p className="errorMsg">Must be between 6 - 10 characters</p>
              )}
            </div>
            <div className="input_box">
              <label htmlFor="unit" className="label">
                Unit
              </label>
              <input
                type="number"
                readOnly
                required
                minLength={5}
                id="unit"
                placeholder="0 agents"
                name="unit"
                value={sponsor.unit}
                // onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="amount" className="label">
                Enter Amount
              </label>
              <input
                type="number"
                required
                readOnly={ReadOnly}
                id="amount"
                placeholder="Enter amount in ₦"
                name="amount"
                value={sponsor.amount}
                onChange={handleChange}
              />
            </div>

            <div className="btnContainer">
              {refvalid ? (
                <div className=" buttons">
                  <input
                    type="button"
                    value="Proceed to Payment"
                    onClick={handleSubmit}
                    className="btn"
                  />
                </div>
              ) : (
                <div className=" buttons">
                  <input
                    type="button"
                    value="Validate"
                    onClick={handleSubmit}
                    className="btn"
                  />
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
