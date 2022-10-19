import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { data } from "../../constants";
import { motion } from "framer-motion";
import { storage } from "../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function AddAgentsPage({ title }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [localGov, setLocalGov] = useState([]);
  const [wards, setWards] = useState([]);
  const [saveStep1, setSaveStep1] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const styleHide = "hide";

  const [agent, setAgent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    agentType: "",
    state: "",
    lga: "",
    ward: "",
    imgUrl: "",
    status: "NEW",
  });

  const agentTypes = [
    "PRESIDENTIAL",
    "GUBERNATORIAL",
    "SENATORIAL",
    "HOUSE OF REP",
    "STATE HOUSE OF ASSEMBLY",
  ];

  function postAgent(agent) {
    Axios.post("/api/agents", article)
      .then((response) => {
        setIsSuccessful(true);

        console.log("Successfully Sent to: ");
        alert("Successfully Added");

        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
      });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name == "state") {
      setWards([]);
      setLocalGov([]);
      const selectedState = data.states.filter((_val) => _val.state == value);
      setLocalGov(selectedState[0].lga);
    } else if (name == "lga") {
      const selectedLocalGov = localGov.filter((_val) => _val.name == value);
      setWards(selectedLocalGov[0].wards);
    } else if (name == "image") {
      const _file = e.target.files[0];
      if (_file) {
        if (_file.size < 100000) {
          setProfileImage(_file);
          console.log("Hurray! we have a file");
        } else {
          console.log(_file);
          console.log("Image is above 50kb");
        }
      } else {
        console.log("no file yet");
      }
    }
    setAgent({ ...agent, [name]: value });
    console.log(agent);
  };

  const handlePrev = (e) => {
    setSaveStep1(false);
  };
  const handleNext = () => {
    setSaveStep1(true);
  };

  async function uploadImageToFb() {
    if (profileImage == null) return;
    const imageRef = ref(storage, `apcaims/${profileImage.name + v4()}`);
    uploadBytes(imageRef, profileImage).then((res) => {
      getDownloadURL(res.ref).then((url) => {
        setImgUrl(url);
        console.log(url);
      });
      // alert("Image Uploaded at ");
    });
  }

  const handleSubmit = async (e) => {
    if (
      agent.name &&
      agent.email &&
      agent.address &&
      agent.phone &&
      agent.state &&
      agent.lga &&
      agent.ward &&
      agent.status &&
      agent.agentType
    ) {
      e.preventDefault();
      //  await uploadImageToFb()
      await uploadImageToFb();
      setAgent({ ...agent, imgUrl: imgUrl });
      postAgent(agent);
    } else {
      console.log("Something is missing");
    }
  };

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
      // console.log(fetchUser());
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="addAgent">
      <div className="section formsPage">
        <div className="successDiv">
          {isSuccessful && <p>Sent Successfully </p>}
        </div>
        <motion.div
          className={`sect step1 ${saveStep1 && styleHide}`}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7, delay: 1, type: "tween" }}
        >
          <form action="#" className="form">
            <h2>Step 1</h2>

            <div className="input_box">
              <label htmlFor="form-name" className="label">
                Name
              </label>
              <input
                type="text"
                rows="2"
                id="form-name"
                placeholder="Name of agent"
                name="name"
                // value={ques.category}
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
                // value={ques.category}
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
                // value={ques.category}
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
                // value={ques.category}
                onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="form-image">Profile Image</label>
              <input
                type="file"
                id="form-image"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </div>
          </form>
          <div className="buttons">
            <input
              type="submit"
              value="Next"
              // onClick={handleSubmit}
              onClick={handleNext}
              className="btn"
            />
          </div>
        </motion.div>

        <motion.div
          className={`sect step2 ${!saveStep1 && styleHide}`}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7, delay: 1, type: "tween" }}
        >
          <div className=" buttons">
            <input
              type="submit"
              value="Go Back"
              onClick={handlePrev}
              className="btn"
            />
          </div>
          <form action="#" className="form">
            <h2>Step 2</h2>
            <div className="input_box">
              <label htmlFor="form-category">Agent Type</label>
              <select
                name="agentType"
                id="form-category"
                defaultValue={agentTypes[0]}
                onChange={handleChange}
              >
                {agentTypes.map((_val, index) => {
                  return (
                    <option value={_val} key={index}>
                      {_val}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="form-category">State</label>
              <select
                name="state"
                defaultValue="ABIA"
                onChange={handleChange}
                id="form-category"
              >
                {/* <option selected="selected">Pharmacology</option> */}

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
                id="form-lga"
              >
                {/* <option selected="selected">Pharmacology</option> */}

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
                onChange={handleChange}
                id="form-ward"
              >
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

          <div className="buttons">
            <input
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              className="btn"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
