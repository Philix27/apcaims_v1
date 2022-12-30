import { storage } from "../utils/firebase";
import { ref, deleteObject } from "firebase/storage";
import axios from "axios";
// import Agent from "../types/agent"

export default async function deleteAgent(agentID, imgUrl) {
  const desertRef = ref(storage, imgUrl);

  await deleteObject(desertRef)
    .then(() => {
      axios
        .delete(`https://rxedu-api.vercel.app/api/v1/agent/${agentID}`)
        .then((val) => {
          console.log("Deleted Successfully");
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function updateAgentInfo(agent) {
  axios
    .patch(`https://rxedu-api.vercel.app/api/v1/agent/${agentID}`, agent)
    .then((val) => {
      console.log("Deleted Successfully");
    });
}
