import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
// import { lgas } from "../../constants/lga";
import { data } from "../constants/states/index";
import { utils } from "../utils";
import Link from "next/link";

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
  function filterElectionType(lganame, electionType) {
    let ags = agentsList.filter(
      (ag) => ag.lga == lganame && ag.electionType == electionType
    );
    return ags.length;
  }
  function filterAgentType(lganame, agentType) {
    let ags = agentsList.filter(
      (ag) => ag.lga == lganame && ag.agentType == agentType
    );
    return ags.length;
  }

  return (
    <div>
      <div className="lgatable">
        {selectedLg[0].lga.map((lga, index) => (
          <div className="info" key={index}>
            <div className="tile">
              <h4>{`${index + 1}. ${lga.name}`}</h4>
              <p>{utils.numberWithCommas(filterLga(lga.name))} agents</p>
            </div>
            <div className="moreInfo">
              <h4>Election Type</h4>
              <div className="moreInfoList">
                <p>PRESIDENTIAL:</p>
                <p>{filterElectionType(lga.name, "PRESIDENTIAL")}</p>
              </div>
              <div className="moreInfoList">
                <p>SENATORIAL:</p>
                <p>{filterElectionType(lga.name, "SENATORIAL")}</p>
              </div>
              <div className="moreInfoList">
                <p>STATE HOUSE OF ASSEMBLY:</p>
                <p>{filterElectionType(lga.name, "STATE HOUSE OF ASSEMBLY")}</p>
              </div>
              <div className="moreInfoList">
                <p>HOUSE OF REPS.:</p>
                <p>{filterElectionType(lga.name, "HOUSE OF REPS.")}</p>
              </div>
              <div className="moreInfoList">
                <p>GUBERNATORIAL:</p>
                <p>{filterElectionType(lga.name, "GUBERNATORIAL")}</p>
              </div>
            </div>
            <div className="moreInfo">
              <h4>Agent Type</h4>

              <div className="moreInfoList">
                <p>PRESIDENTIAL:</p>
                <p>{filterAgentType(lga.name, "PRESIDENTIAL")}</p>
              </div>
              <div className="moreInfoList">
                <p>STATE:</p>
                <p>{filterAgentType(lga.name, "STATE")}</p>
              </div>
              <div className="moreInfoList">
                <p>LOCAL GOVERNMENT:</p>
                <p>{filterAgentType(lga.name, "LOCAL GOVERNMENT")}</p>
              </div>
              <div className="moreInfoList">
                <p>WARD:</p>
                <p>{filterAgentType(lga.name, "WARD")}</p>
              </div>
              <div className="moreInfoList">
                <p>POLLING UNIT:</p>
                <p>{filterAgentType(lga.name, "POLLING UNIT")}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="totalTile">
          <h4>Total Agent Count</h4>
          <p>{utils.numberWithCommas(agentsList.length)} agents</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

{
  /* <div className="tableSection"> */
}
{
  /* <table>
          <thead>
            <tr>
              <th>No</th>
              <th>LGA</th>
              <th>No. Agents</th>
            </tr>
          </thead>
          <tbody>
            {selectedLg[0].lga.map((lga, index) => (
              // <Link href={`/lga_info/${useState}_${lga.name}`} passHref>
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{lga.name}</td>
                <td>{utils.numberWithCommas(filterLga(lga.name))} </td>
              </tr>
              // </Link>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 700 }}>
              <th>Total</th>
              <th>{`${selectedLg[0].lga.length} LGAs`}</th>
              <th>{utils.numberWithCommas(agentsList.length)} Agents</th>
            </tr>
          </tfoot>
        </table> */
}
