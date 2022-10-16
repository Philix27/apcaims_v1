import connectMongo from "../../utils/connectMongo";
// import StateRep from "../../api/models/stateRep";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function staterep(req, res) {
  try {
    console.log("Connecting to mongo");
    await connectMongo();
  } catch (error) {
    console.log(error);
  }
}
