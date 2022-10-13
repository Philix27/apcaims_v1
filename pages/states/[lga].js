import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import { lgas } from "../../constants/lga";

export default function ShowLGA({ code }) {
  const [statesToDisplay, setStatesToDisplay] = useState(lgas);

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = states.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setStatesToDisplay(tempList);
  };

  return (
    <div className="section specificLGA">
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
            <th>LGA</th>
            <th>State Code</th>
          </tr>
          {code.map((v, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{v.name}</td>
              <td>{v.statecode}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = lgas.map((v, index) => {
    return {
      params: { lga: `${v.statecode}` },
      // params: { id: index },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  // console.log("Params Parameter");
  // console.log(params);
  const filteredLga = lgas.filter((v) =>
    v.statecode.toLowerCase().includes(params.lga.toLowerCase())
  );
  // console.log(`Filtered: ${filteredLga}`);
  return {
    props: {
      code: filteredLga,
    },
  };
}
