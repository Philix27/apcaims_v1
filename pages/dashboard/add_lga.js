import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const graphql_CreateLga = gql`
  mutation createLga($name: String, $stateId: Int) {
    createLga(name: $name, stateId: $stateId) {
      name
    }
  }

  # mutation ($createLgaInput: {name: String, stateId: Int} ) {
  #   createLga(createLgaInput: $createLgaInput) {
  #     name
  #   }
  # }
`;

// const graphql_CreateLga = gql`
//   mutation CreateLga($name: String, $stateId: Int!) {
//     createLga(createLgaInput: { name: $name, stateId: $name }) {
//       name
//     }
//   }
// `;
// mutation($createLgaInput : CreateLgaInput!){
//   createLga(createLgaInput: $createLgaInput){
//    name
//   }
// }

export default function AddLga() {
  const [lgaValue, setLgaValue] = useState("");
  const [createLga, { data, loading, error }] = useMutation(
    gql`
      mutation {
        createLga(name: lgaValue, stateId: 1) {
          name
        }
      }
    `
  );

  const handleSubmit = () => {
    console.log(lgaValue);

    createLga();
    setLgaValue("");

    useMutation(graphql_CreateLga, {
      name: lgaValue,
      stateId: 1,
    });
  };

  return (
    <div className="section addLga">
      <h3>ABIA state</h3>

      <form className="form">
        <div className="input_box">
          <label htmlFor="lga" className="label">
            LGA Name
          </label>
          <input
            type="text"
            id="lga"
            placeholder="Name of LGA "
            name="lga"
            required
            onChange={(e) => setLgaValue(e.target.value.trim())}
          />
        </div>
        <div className="btnContainer">
          <div className="buttons">
            <input
              type="button"
              value="Submit"
              onClick={handleSubmit}
              className="btn"
            />
          </div>
        </div>
      </form>
      <div>
        <h3>List added</h3>
      </div>
    </div>
  );
}
