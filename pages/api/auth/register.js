import connectMongo from "../../../api/connectMongo";
import User from "../../../api/models/users";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res

 */

export default async function index(req, res) {
  try {
    console.log("Connecting to mongo");
    await connectMongo();
    if (req.method == "POST") {
      const _user = await User.create(req.body);
      // res.redirect("/");
      if (!_user) {
        res.json({ code: "Unable to create user" });
      } else {
        res.status(201).json(req.body);
      }
    } else if (req.method == "GET") {
      const _users = await User.find().sort("name");
      // res.redirect("/");
      if (!_user) {
        res.json({ code: "Unable to get users" });
      } else {
        res.status(201).json({ length: _users.length, data: req.body });
      }
    }
  } catch (error) {
    // res.status(400).json({ status: "Sorry an error occured" });
    console.log(error);
  }
}
