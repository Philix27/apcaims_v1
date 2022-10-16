import connectMongo from "../../../api/connectMongo";
import StateRep from "../../../api/models/stateRep";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @param {import('mongoose').Schema}
 */

export default async function staterep(req, res) {
  try {
    console.log("Connecting to mongo");
    await connectMongo();
    await StateRep.create(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    console.log(error);
  }
}
