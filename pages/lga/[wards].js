import React from "react";
import { lgas } from "../../constants/lga";

export default function ShowLGA({ code }) {
  return (
    <div className="section specificLGA">
      <div className="tableSection">
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
  const filteredLga = wards.filter((v) =>
    v.statecode.toLowerCase().includes(params.lga.toLowerCase())
  );
  return {
    props: {
      code: filteredLga,
    },
  };
}
