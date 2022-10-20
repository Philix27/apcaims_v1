import React, { useState, useEffect } from "react";
import LGAs from "../../comps/lga";
import Head from "next/head";
import { useRouter } from "next/router";
import { data } from "../../constants/states/";

export default function States() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
      console.log(fetchUser());
      setUser(fetchUser());
    } else {
      setUser(null);
    }
  }, []);

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="lgaWrapper">
      <div className="comp">
        <Head>
          <title>APCAIMS | LGA</title>
        </Head>
        {/* <LGAs userState={user.state} /> */}
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const { params } = context;

//   // const stateFiltered = data.states.filter((v) => {
//   // if (stateFiltered)
//   //   const _stateFiltered = v.statecode
//   //     .toLowerCase()
//   //     .includes(params.lga.toLowerCase());
//   //   return _stateFiltered;
//   // });
//   console.log(params);

//   // const uniqueState = states.filter((v) =>
//   //   v.statecode.toLowerCase().includes(params.lga.toLowerCase())
//   // );

//   // console.log(uniqueState);
//   return {
//     props: {
//       code: params,
//       // selectedState: JSON.parse(uniqueState[0]),
//     },
//   };
// }
