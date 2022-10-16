import connectMongo from "../../../api/connectMongo";
import StateRep from "../../../api/models/stateRep";
import StateRepKit from "../../../api/controller/staterep";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function staterep(req, res) {
  try {
    console.log("Connecting to mongo");
    await connectMongo();
    const data = await StateRep.find();
    // StateRepKit.getAll(req, res);

    res.status(201).json({ length: data.length, data });
  } catch (error) {
    console.log(error);
  }
}
