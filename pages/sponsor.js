import { Landing } from "../comps/global/Landing";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Landing
        title="Sponsor Agents"
        imgUrl="images/contact.jpg"
        subtitle="You can sponsor agents for"
      />
      <div className="section formsPage contactUs">
        <motion.div
          className="sect "
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
        >
          <form className="form">
            {/* <h2>Email Us</h2> */}
            <p>
              Each unit is per registration. Enter amount in multiples of ₦500
            </p>
            <div className="input_box">
              <label htmlFor="name" className="label">
                Unit
              </label>
              <input
                type="number"
                readOnly
                required
                minLength={5}
                id="name"
                placeholder="Enter email address"
                name="name"
              />
            </div>
            <div className="input_box">
              <label htmlFor="name" className="label">
                Enter Amount
              </label>
              <input
                type="number"
                required
                id="name"
                placeholder="Enter email address"
                name="name"
              />
            </div>

            <div className="btnContainer">
              <div className=" buttons">
                <input
                  type="submit"
                  value="Send"
                  // onClick={handlePrev}
                  className="btn"
                />
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
