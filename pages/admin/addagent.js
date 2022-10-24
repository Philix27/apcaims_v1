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
import Form4 from "../../comps/agents/step4";
import { AlertSuccessful } from "../../comps/agents/alert";

export default function AddAgentsPage({ title }) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    statecode: "",
    img: "",
    userType: "",
  });

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
    } else {
      console.log("fetchUser()");
      console.log(fetchUser());
      setUser(fetchUser());
      // setUser(null);
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  const [agentTypeList, setAgentTypeList] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [localGov, setLocalGov] = useState([]);
  const [wards, setWards] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  //! Show TextForm
  const [showSenatorialDistrict, setShowSenatorialDistrict] = useState(false);
  const [showFedConst, setFedCosnt] = useState(false);
  const [showStateConst, setStateConst] = useState(false);
  const [senatorial_district, setSenatorial_district] = useState([]);
  const [agent, setAgent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: user.statecode,
    lga: "",
    ward: "",
    electionType: "",
    agentType: "",
    bankName: "",
    accountNumber: "",
    image: "",
    status: "NEW",
  });

  const HOU = "HOUSE OF REP.";
  const STAT = "STATE HOUSE OF ASSEMBLY";
  const SEN = "SENATORIAL";
  const GUBA = "GUBANATORIAL";
  const PRES = "PRESIDENTIAL";

  function postAgent(agent) {
    Axios.post("https://rxedu-api.vercel.app/api/v1/agent", agent)
      .then((response) => {
        // setIsSuccessful(true);

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
      // const selectedState = data.states.filter(
      //   (_val) => _val.state == user.statecode
      // );
      setLocalGov(selectedState[0].lga);
    } else if (name == "lga") {
      const selectedLocalGov = localGov.filter((_val) => _val.name == value);
      setWards(selectedLocalGov[0].wards);
    } else if (name == "image") {
      const _file = e.target.files[0];
      if (_file) {
        if (_file.size < 5000000) {
          setProfileImage(_file);
          console.log("Hurray! we have a file");
        } else {
          console.log(_file);
          alert("Image is above 5MB");
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
      // console.log(selectedState);

      if (value == PRES) {
        setAgentTypeList(["STATE", "LOCAL GOVERNMENT", "WARD", "POLLING UNIT"]);
        setFedCosnt(false);
        setStateConst(false);
        setShowSenatorialDistrict(false);
      } else if (value == HOU) {
        setFedCosnt(true);
        setStateConst(false);
        setShowSenatorialDistrict(false);
        setAgentTypeList(["LOCAL GOVERNMENT", "WARD", "POLLING UNIT"]);
      } else if (value == STAT) {
        setFedCosnt(false);
        setStateConst(true);
        setShowSenatorialDistrict(false);
        setAgentTypeList(["WARD", "POLLING UNIT"]);
      } else if (value == GUBA) {
        setFedCosnt(false);
        setStateConst(false);
        setShowSenatorialDistrict(false);
        setAgentTypeList(["LOCAL GOVERNMENT", "WARD", "POLLING UNIT"]);
      } else if (value == SEN) {
        setFedCosnt(false);
        setStateConst(false);
        setShowSenatorialDistrict(true);
        setAgentTypeList(["LOCAL GOVERNMENT", "WARD", "POLLING UNIT"]);
      }
    }
    setAgent({ ...agent, [name]: value });
    console.log(agent);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (stepIndex < 3) {
      setStepIndex(stepIndex + 1);
    }
  };

  async function uploadImageToFb() {
    console.log("Inside Upload");
    if (profileImage == null) {
      alert("Select an image");
      return;
    } else {
      console.log("Started Upload");
      const imageRef = ref(storage, `apcaims/${profileImage.name + v4()}`);
      uploadBytes(imageRef, profileImage).then((res) => {
        getDownloadURL(res.ref).then((url) => {
          console.log(`Valid Url: ${url}`);
          agent.image = url;
          postAgent(agent);
        });
      });
    }
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
      console.log("Before Upload");
      uploadImageToFb();
      // agent.image = imgUrl;
      // console.log(imgUrl);
      // setAgent({ ...agent });
      // postAgent(agent);
    } else {
      console.log("Something is missing");
    }
  };

  return (
    <div className="addAgent">
      <div className="successDiv">{isSuccessful && <AlertSuccessful />}</div>
      <div className="section formsPage">
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
          handleChange={handleChange}
          data={data}
          localGov={localGov}
          userState={user.statecode}
          wards={wards}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
        <Form3
          agent={agent}
          stepIndex={stepIndex}
          agentParams={agentParams}
          showSenatorialDistrict={showSenatorialDistrict}
          handleChange={handleChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          senatorial_district={senatorial_district}
          showFedConst={showFedConst}
          showStateConst={showStateConst}
          agentTypeList={agentTypeList}
        />
        <Form4
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
