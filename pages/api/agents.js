import { controller } from "../../api/agents/index";
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { getAll } = controller;

  const { db } = await connectToDatabase();

  switch (req.method) {
    case "GET": {
      return getAll(db, req, res);
    }
    // case "POST": {
    //   return addPost(req, res);
    // }

    // case "PUT": {
    //   return updatePost(req, res);
    // }

    // case "DELETE": {
    //   return deletePost(req, res);
    // }
  }
}
