import React, { useState, useEffect } from "react";
import LGAs from "../../comps/lga";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

export default function LGAPage({ agentsList }) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    statecode: "",
    img: "",
    userType: "",
  });

  useEffect(() => {
    if (!fetchUser()) {
      router.push("/");
    } else {
      setUser(fetchUser());
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
        <LGAs userState={user.name} agentsList={agentsList.data} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  // try {
  let art;
  art = await axios(
    `https://rxedu-api.vercel.app/api/v1/agents_by_state?state=${query.state}`
  );
  console.log(art);
  // return {
  //   props: {
  //     agentsList: art.data,
  //   },
  // };
  // } catch (error) {}
  // console.log(art);
  return {
    props: {
      agentsList: art.data,
    },
  };
}
