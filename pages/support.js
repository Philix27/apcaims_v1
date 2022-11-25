import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { Landing } from "../comps/global/Landing";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "YOUR_SERVICE_ID",
  //         "YOUR_TEMPLATE_ID",
  //         form.current,
  //         "YOUR_PUBLIC_KEY"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <>
      <Landing
        title="Contact us"
        imgUrl="images/contact.jpg"
        subtitle="We run a 247 customer care technical support services."
      />
      <div className="section formsPage contactUs">
        <motion.div
          className="sect "
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
        >
          <form
            className="form"
            action="mailto:aapcaims@gmail.com"
            method="post"
            type="text/plain"
          >
            <h2>Email Us</h2>

            <div className="input_box">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                required
                minLength={5}
                id="name"
                placeholder="Enter email address"
                name="name"
              />
            </div>
            <div className="input_box">
              <label htmlFor="form-comment" className="label">
                Comment
              </label>
              {/* <input
                type="text"
                required
                id="form-comment"
                placeholder="Write your comment..."
                name="comment"
                // cols="40"
                rows="10"
                // minLength={5}
                // multiline

                // value={agent.email}
                // onChange={handleChange}
              /> */}
              <textarea
                type="text"
                required
                id="form-comment"
                placeholder="Write your comment..."
                name="comment"
                rows="10"
              ></textarea>
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
