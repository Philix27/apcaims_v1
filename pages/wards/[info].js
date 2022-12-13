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

  const getStatesInfo = () =>
    data.states.filter((state) => state.state == info);

  return (
    <div className="wards">
      <div>
        {getStatesInfo().map((state, index) => (
          <div className="info" key={index}>
            {state.lga.map((lga, lgaIndex) => (
              <div className="info" key={lgaIndex}>
                <div className="tile">
                  <h4>{`${lgaIndex + 1}. ${lga.name}`}</h4>
                </div>
                <div className="moreInfo">
                  {lga.wards.map((ward, wardInex) => (
                    <div className="moreInfoList" key={wardInex}>
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
