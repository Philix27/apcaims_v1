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
        <div>
          <input
            type="search"
            placeholder="Search for a state..."
            onChange={onSearch}
          />
        </div>
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>LGA</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Edit Status</th>
            <th>Delete</th>
          </tr>
          {statesToDisplay.map((state, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{state.name}</td>
              <td>{state.email}</td>
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
        </table>
      </div>
    </div>
  );
}
