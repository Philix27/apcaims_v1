import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { states } from "../../constants/states";
import { MdVisibility } from "react-icons/md";
import { lgas } from "../../constants/lga";

export default function StatesComp() {
  const [statesToDisplay, setStatesToDisplay] = useState(states);
  const router = useRouter();

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = states.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setStatesToDisplay(tempList);
  };

  const lgaCount = (statecode) => {
    const _v = lgas.filter((val) => val.statecode === statecode);
    return _v.length;
  };

  return (
    <div className="section">
      <div className="tableSection">
        <div className="input">
          <input
            type="search"
            placeholder="Search for a state..."
            onChange={onSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>States</th>
              <th>View</th>
              <th>LG Count</th>
            </tr>
          </thead>
          <tbody>
            {statesToDisplay.map((state, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{state.name}</td>
                <td>
                  <a href={`states/${state.statecode}`}>
                    <MdVisibility className="icon" />{" "}
                  </a>
                </td>
                <td>{lgaCount(state.statecode)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
