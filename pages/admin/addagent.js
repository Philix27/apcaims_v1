import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { data } from "../../constants/states/";
import { agentParams } from "../../constants/agentparams";
import { motion } from "framer-motion";
import { storage } from "../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Form1 from "../../comps/agents/step1";
import Form2 from "../../comps/agents/step2";
import Form3 from "../../comps/agents/step3";

export default function AddAgentsPage({ title }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [localGov, setLocalGov] = useState([]);
  const [wards, setWards] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [showSenatorialDistrict, setShowSenatorialDistrict] = useState(false);
  const [senatorial_district, setSenatorial_district] = useState([]);
  const [showFedConst, setFedConst] = useState(false);
  const [showStateConst, setStateConst] = useState(false);

  const [agent, setAgent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    lga: "",
    ward: "",
    electionType: "",
    agentType: "",
    statecode: "",
    bankName: "",
    accountNumber: "",
    image: "",
    status: "NEW",
  });

  const handleElectionType = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };

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
    } else if (name == "electionType") {
      // const selectedState = data.senDist.filter(
      //   (_val) => _val.state == agent.state
      // );
      // console.log("senatorial_district");
      // console.log(senatorial_district);

      if (value == "SEN") {
        const selectedState = data.senDist.filter(
          (_val) => _val.state == agent.state
        );
        setSenatorial_district(selectedState[0]);
        console.log(senatorial_district);
        setShowSenatorialDistrict(true);
      } else {
        setShowSenatorialDistrict(false);
      }
      if (value == "HOU") {
        setFedConst(true);
      } else {
        setFedConst(false);
      }
      if (value == "ASS") {
        setStateConst(true);
      } else {
        setStateConst(false);
      }
    }
    setAgent({ ...agent, [name]: value });
    console.log(agent);
  };

  const handlePrev = (e) => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };
  const handleNext = () => {
    if (stepIndex < 3) {
      setStepIndex(stepIndex + 1);
    }
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
        <Form1
          agent={agent}
          stepIndex={stepIndex}
          handleChange={handleChange}
          data={data}
          localGov={localGov}
          handleNext={handleNext}
          wards={wards}
        />
        <Form2
          agent={agent}
          stepIndex={stepIndex}
          agentParams={agentParams}
          showSenatorialDistrict={showSenatorialDistrict}
          handleChange={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          senatorial_district={senatorial_district}
        />
        <Form3
          agent={agent}
          stepIndex={stepIndex}
          handleSubmit={handleSubmit}
          agentParams={agentParams}
          handleChange={handleChange}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}
