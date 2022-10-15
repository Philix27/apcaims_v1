import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { lgas } from "../../constants/lga";

export default function LGAs() {
  const [statesToDisplay, setStatesToDisplay] = useState(lgas);
  const router = useRouter();

  // console.log(lgas);
  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = lgas.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setStatesToDisplay(tempList);
  };

  return (
    <div className="section">
      <div className="tableSection">
        <div className="input">
          <input
            type="search"
            placeholder="Find a LGA..."
            onChange={onSearch}
          />
        </div>

        <table>
          <tr>
            <th>No</th>
            <th>LGA</th>
            <th>State Code</th>
          </tr>
          {statesToDisplay.map((state, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{state.name}</td>
              <td>{state.statecode}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
