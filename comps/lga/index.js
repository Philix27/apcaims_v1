import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
// import { lgas } from "../../constants/lga";
import { data } from "../../constants/states/index";

export default function LGAs({ userState, agentsList }) {
  const [agts, setAgents] = useState(agentsList);
  const selectedLg = data.states.filter((val) =>
    val.state.toLowerCase().includes(userState.toLowerCase())
  );

  const router = useRouter();
  function filterLga(lganame) {
    let ags = agentsList.filter((ag) => ag.lga == lganame);
    return ags.length;
  }
  return (
    <div className="section">
      <div className="tableSection">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>LGA</th>
              <th>No. Agents</th>
            </tr>
          </thead>
          <tbody>
            {selectedLg[0].lga.map((lga, index) => (
              // {selectedState[0].lga.map((lga, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{lga.name}</td>
                <td>{filterLga(lga.name)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 700 }}>
              <th>Total</th>
              <th>{`${selectedLg[0].lga.length} LGAs`}</th>
              <th>{agentsList.length} Agents</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
