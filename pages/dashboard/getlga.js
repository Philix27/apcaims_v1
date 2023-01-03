import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { data } from "../../constants/states/index";

export default function AddLga() {
  const [localGovs, setLocalGov] = useState([]);

  const handleChange = (e) => {
    const selectedState = e.target.value;

    const selection = data.states.filter((_val) => _val.state == selectedState);

    setLocalGov(selection[0].lga);
  };

  return (
    <div className="section addLga">
      <h3>Get LGAs</h3>

      <form className="form">
        <div className="input_box">
          <label htmlFor="form-state">State</label>
          <select
            name="state"
            onChange={handleChange}
            // value={agent.state}
            required
            id="form-state"
          >
            <option disabled>Select a state</option>

            {data.states.map((_val, index) => {
              return (
                <option value={_val.state.toUpperCase()} key={index}>
                  {_val.state}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="lgaList">
        <h3>List</h3>
        {localGovs.map((lga, index) => (
          <div key={index} className="listItem">
            {index + 1}. <span className="lgaTitle">{lga.name}</span>
            <CopyToClipboard text={lga.name.trim()}>
              <button>Copy</button>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
