import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
// import { Modal } from "../global/Modal";
// import AgentModalContent from "./modalContent";
import Link from "next/link";
// import { list } from "firebase/storage";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import deleteAgent from "../../functions/deleteagent";
import Pagination from "./pagination";

const electionTypes = [
  "ALL",
  "PRESIDENTIAL",
  "STATE HOUSE OF ASSEMBLY",
  "GUBERNATORIAL",
  "HOUSE OF REPS.",
  "SENATORIAL",
];
export default function AgentsComp({ agentsList, totalCount, length }) {
  //* pagination params
  const [agts, setAgents] = useState(agentsList);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [agentsPerPage, setAgentsPerPage] = useState(50);

  //* Get current agents
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = agts.slice(indexOfFirstAgent, indexOfLastAgent);
  // const currentAgents = agentsList.slice(1, 7);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickedAgent, setClickedAgent] = useState({});
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  var buttonCount = totalCount / length;
  buttonCount = Math.trunc(buttonCount);
  buttonCount++;

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = agts.filter((agent) => {
      const names = `${agent.firstName} ${agent.lastName} ${agent.name}`;
      if (agent.name) {
        return agent.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return names.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setAgents(tempList);
  };

  const changeToCateorySelect = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    console.log("Value", value);
    console.log("Before");
    console.log(agts);
    if (value == "ALL") {
      setAgents(agentsList);
    } else {
      // setAgents(agentsList);
      var tempList = agentsList.filter(
        (agent) => agent.electionType.toLowerCase() == value.toLowerCase()
      );

      setAgents(tempList);
    }
  };

  const onDelete = (agent) => {
    Axios.delete(`https://rxedu-api.vercel.app/api/v1/agent/${agent._id}`)
      .then((response) => {
        setIsSuccessful(true);
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

  function _showModal(agent) {
    console.log("agent");
    console.log(agent);
    setClickedAgent(agent);
    setShowModal(true);
  }

  var listWidget = [];

  for (let i = 0; i < buttonCount; i++) {
    listWidget.push(<div>{i}</div>);
  }

  return (
    <div className=" agentsList">
      <div className="card">
        <form className="form">
          <div className="input_box">
            <input
              type="search"
              placeholder="Search for an agent"
              onChange={onSearch}
            />
          </div>
          <div className="input_box">
            <select
              name="category"
              defaultValue="All"
              value={selectedCategory}
              onChange={changeToCateorySelect}
            >
              {electionTypes.map((_category, index) => {
                return (
                  <option value={_category} key={index}>
                    {_category}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>

      <div className="tableSection">
        <table>
          <thead>
            <tr>
              <th>No</th>
              {/* <th>Img</th> */}
              <th>Name</th>
              <th>Agent Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentAgents.map((agent, index) => {
              const namer = `${agent.lastName} ${agent.firstName}`;
              return (
                <tr key={index}>
                  <td>{index + indexOfFirstAgent + 1}.</td>
                  {/* <td>
                    <img src={agent.image} alt={agent.name}></img>
                  </td> */}
                  <td>{namer.toUpperCase()}</td>
                  <td>{agent.agentType}</td>
                  <td>
                    <Link href={`/agents/edit/${agent._id}`}>
                      <a>
                        <FaUserEdit className="icon" />
                      </a>
                    </Link>
                  </td>
                  <td>
                    <AiFillDelete
                      className="icon delete"
                      // onClick={() => deleteAgent(agent._id, agent.image)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div>{listWidget.map((wid, index) => wid)}</div> */}
        <Pagination
          agentsPerPage={agentsPerPage}
          totalAgents={agentsList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
