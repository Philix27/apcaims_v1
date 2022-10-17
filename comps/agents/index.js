import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { agents } from "../../constants/agents";

export default function AgentsComp() {
  const [statesToDisplay, setStatesToDisplay] = useState(agents);
  const router = useRouter();

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = agents.filter((product) =>
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
            placeholder="Search for an agent"
            onChange={onSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>State</th>
              <th>LGA</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Edit Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {statesToDisplay.map((state, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>
                  <img src={state.img} alt={state.name}></img>
                </td>
                <td>{state.name}</td>
                <td>{state.email}</td>
                <td>{state.statecode}</td>
                <td>{state.lga}</td>
                <td>{state.phone}</td>
                <td>
                  {state.isApproved ? (
                    <FcApproval className="icon" />
                  ) : (
                    <FcDisapprove className="icon" />
                  )}
                </td>
                <td>
                  <AiFillEdit className="green icon" />
                </td>
                <td>
                  <AiFillDelete className="red icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
