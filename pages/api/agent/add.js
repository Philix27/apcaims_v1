import connectMongo from "../../../api/connectMongo";
import Agents from "../../../api/models/agent";
// import StateRepKit from "../../../api/controller/staterep";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function agentRep(req, res) {
  try {
    console.log("Connecting to mongo");
    await connectMongo();
    const data = await Agents.create();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
}
