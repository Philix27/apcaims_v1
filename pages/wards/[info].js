import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { data } from "../../constants/states/index";
import { utils } from "../../utils";
import Link from "next/link";

export default function LGAs() {
  const router = useRouter();
  let { info } = router.query;
  // let ll = info.split("_");
  // console.log(ll);
  // const property = {
  //   state: ll[0],
  //   lga: ll[1],
  // };

  function getWards() {
    var lgaSelected = data.lgas.filter((lga) => lga.name == property.lga);
    return lgaSelected[0].wards;
  }
  function getLgas() {
    var ss = data.lgas.filter((state) => state.state == info);
    const stateSelected = ss[0];
    console.log(ss);
    console.log(stateSelected);
    // console.log(stateSelected.lga);
    // return stateSelected.lga;
    return [];
  }
  const getStatesInfo = () =>
    data.states.filter((state) => state.state == "DELTA");

  return (
    <div className="wards">
      <div>
        {/* {getLgas()} */}
        {/* {console.log(getStatesInfo())} */}
        {/* {getLgas().map((lga, index) => (
          <div className="info" key={index}>
            <div className="tile">
              <h4>{`${index + 1}. ${lga.name}`}</h4>
            </div>
          </div>
        ))} */}
        {getStatesInfo().map((state, index) => (
          <div className="info" key={index}>
            {state.lga.map((lga, index) => (
              <div className="info">
                <div className="tile">
                  <h4>{`${index + 1}. ${lga.name}`}</h4>
                </div>
                <div className="moreInfo">
                  {lga.wards.map((ward) => (
                    <div className="moreInfoList">
                      <p>{ward}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
