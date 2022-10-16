import React from "react";
import { lgas } from "../../constants/lga";
import { states } from "../../constants/states";

export default function ShowLGA({ code, selectedState }) {
  return (
    <div className="section specificLGA">
      <h2>{selectedState.name} State Local Government Areas</h2>
      <div className="tableSection">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>LGA</th>
              <th>State Code</th>
            </tr>
          </thead>
          <tbody>
            {code.map((v, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{v.name}</td>
                <td>{v.statecode}</td>
              </tr>
            ))}
          </tbody>
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
  const filteredLga = lgas.filter((v) =>
    v.statecode.toLowerCase().includes(params.lga.toLowerCase())
  );
  const uniqueState = states.filter((v) =>
    v.statecode.toLowerCase().includes(params.lga.toLowerCase())
  );
  // console.log(uniqueState);
  return {
    props: {
      code: filteredLga,
      selectedState: uniqueState[0],
    },
  };
}
