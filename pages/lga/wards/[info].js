import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { data } from "../../../constants/states/index";
import { utils } from "../../../utils";
import Link from "next/link";

export default function LGAs() {
  const router = useRouter();
  let { info } = router.query;
  let ll = info.split("_");
  console.log(ll);
  const property = {
    state: ll[0],
    lga: ll[1],
  };

  function getWards() {
    var lgaSelected = data.lgas.filter((lga) => lga.name == property.lga);
    return lgaSelected[0].wards;
  }
  return (
    <div className="wards">
      <div>
        <h3>{property.lga} Wards</h3>
        {getWards().map((ward, index) => (
          <div className="info" key={index}>
            <div className="tile">
              <h4>{`${index + 1}. ${ward}`}</h4>
              <p className="small">Ward</p>
            </div>
            <div className="moreInfo">
              <div className="moreInfoList">
                <p>PRESIDENTIAL:</p>
              </div>

              <div className="moreInfoList">
                <p>TOTAL:</p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="totalTile">
          <h4>Total Agent Count</h4>
        </div> */}
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { query } = context;
//   console.log(query);
//   // try {
//   let art;
//   art = await axios(
//     `${process.env.NEXT_PUBLIC_DOMAIN}/api/lga_info?state=${query.state}`
//   );

//   return {
//     props: {
//       agentsList: art.data,
//     },
//   };
// }
