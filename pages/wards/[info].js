import React from "react";
import { useRouter } from "next/router";
import { data } from "../../constants/states/index";
import axios from "axios";

export default function Wards({ agentsList }) {
  const router = useRouter();
  let { info } = router.query;
  console.log(agentsList);
  const getStatesInfo = () =>
    data.states.filter((state) => state.state == info);

  function getWardsCount(lga, ward) {
    const fl = agentsList.data.filter((ag) => ag.lga == lga && ag.ward == ward);
    return fl.length;
  }

  return (
    <div className="wards">
      <div>
        {getStatesInfo().map((state, index) => (
          <div className="info" key={index}>
            {state.lga.map((lga, lgaIndex) => (
              <div className="info" key={lgaIndex}>
                <div className="tile">
                  <h4>{`${lgaIndex + 1}. ${lga.name}`}</h4>
                  <p>agents</p>
                </div>
                <div className="moreInfo">
                  {lga.wards.map((ward, wardInex) => (
                    <div className="moreInfoList" key={wardInex}>
                      <p>{ward}</p>
                      <p>{getWardsCount(lga.name, ward)}</p>
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

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);

  let art;
  art = await axios(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/lga_wards?state=${query.info}`
  );

  // console.log(art);
  return {
    props: {
      agentsList: art.data,
    },
  };
}
