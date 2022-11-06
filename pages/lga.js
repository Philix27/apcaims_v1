import React, { useState, useEffect } from "react";
import LGAs from "../comps/lga";
import Head from "next/head";
import { useRouter } from "next/router";

export default function States() {
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
      console.log("fetchUser()");
      console.log(fetchUser());
      setUser(fetchUser());
      // setUser(null);
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
        <LGAs userState={user.statecode} />
      </div>
    </div>
  );
}
