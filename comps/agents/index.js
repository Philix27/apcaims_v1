import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { agents } from "../../constants/agents";

export default function AgentsComp({ agentsList }) {
  const [statesToDisplay, setStatesToDisplay] = useState(agents);
  const router = useRouter();

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = agentsList.data.filter((agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setStatesToDisplay(tempList);
  };
  console.log(agentsList);

  const onDelete = (agent) => {
    Axios.delete(`https://rxedu-api.vercel.app/api/v1/agent/${agent._id}`)
      .then((response) => {
        setIsSuccessful(true);

        console.log("Successfully Deleted ");
        alert("Deleted Successfully");
        router.reload(window.location.pathname);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
      });
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
            {agentsList.data.map((agent, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>
                  <img src={agent.image} alt={agent.name}></img>
                </td>
                <td>{agent.name}</td>
                <td>{agent.email}</td>
                <td>{agent.state}</td>
                <td>{agent.lga}</td>
                <td>{agent.phone}</td>
                <td>
                  {agent.isApproved ? (
                    <FcApproval className="icon" />
                  ) : (
                    <FcDisapprove className="icon" />
                  )}
                </td>
                <td>
                  <AiFillEdit className="green icon" />
                </td>
                <td>
                  <a onClick={() => onDelete(agent)}>
                    <AiFillDelete className="red icon" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
