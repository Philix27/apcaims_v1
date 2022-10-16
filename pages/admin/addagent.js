import React, { useState, useEffect } from "react";
import Axios from "axios";
import { states } from "../../constants/states";
import { lgas } from "../../constants/lga";

export default function AddPepNotesComp({ title }) {
  // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}pep_note/`;
  //   const [emptyField, setEmptyField] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [localGov, setLocalGov] = useState(lgas);

  const [article, setArticle] = useState({
    category: "PEP",
    title: "",
    content: "",
    imageUrl: "",
  });

  const agentTypes = [
    "PRESIDENTIAL",
    "GUBERNATORIAL",
    "SENATORIAL",
    "HOUSE OF REPRESENTATIVES",
    "STATE HOUSE OF ASSEMBLY",
  ];
  //   function postArticle(_article) {
  //     Axios.post("https://rxedu-api.vercel.app/api/v1/pep_mcq_demo", article)
  //       .then((response) => {
  //         setIsSuccessful(true);

  //         setArticle({
  //           category: "PEP",
  //           title: "",
  //           content: "",
  //           imageUrl: "",
  //         });
  //         // console.log("Successfully Sent to: " + apiUrl);

  //         setTimeout(() => {
  //           setIsSuccessful(false);
  //         }, 5000);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         console.log("Opps an error ocured");
  //       });
  //   }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setArticle({ ...article, [name]: value });

    console.log("Article Objj");
    console.log(article);
    // console.log(apiUrl);
  };

  const onStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setArticle({ ...article, [name]: value });
    const sel = lgas.filter((_val) => _val.statecode == value);
    setLocalGov(sel);
    console.log("LGA Objj");
    console.log(sel);
    // console.log(apiUrl);
  };

  const handleSubmit = (e) => {
    if (article.title && article.content) {
      e.preventDefault();
      postArticle(article);
    } else {
      console.log("Something is missing");
    }
  };

  return (
    <div className="comp">
      <div className="section formsPage">
        {/* <h2>Step 1</h2> */}
        <div className="successDiv">
          {isSuccessful && <p>Sent Successfully </p>}
        </div>
        <div>
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
            <h2>Step 2</h2>
            <div className="input_box">
              <label htmlFor="form-category">Agent Type</label>
              <select
                name="category"
                defaultValue="pharmacology"
                onChange={handleChange}
              >
                {/* <option selected="selected">Pharmacology</option> */}

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
                defaultValue="Abia"
                onChange={onStateChange}
                id="form-category"
              >
                {/* <option selected="selected">Pharmacology</option> */}

                {states.map((_val, index) => {
                  return (
                    <option value={_val.statecode} key={index}>
                      {_val.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="form-lga">LGA</label>
              <select
                name="state"
                // defaultValue="Abia"
                onChange={handleChange}
                id="form-lga"
              >
                {/* <option selected="selected">Pharmacology</option> */}

                {localGov.map((_val, index) => {
                  return (
                    <option value={_val.statecode} key={index}>
                      {_val.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>

          <div className="buttons">
            <input
              type="submit"
              value="Next"
              onClick={handleSubmit}
              className="btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
