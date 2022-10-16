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
    if (req.method == "GET") {
      //   const { email, password } = req.body;
      console.log(req);
      const _user = await User.findOne({ email: email });
      console.log("_user");
      console.log(_user);
      // res.redirect("/");
      if (!_user) {
        res.json({ msg: "Sorry you do not have an account" });
      } else if (_user.password != password) {
        res.json({ msg: "Wrong Password" });
      } else if (_user.password === password) {
        res.status(201).json({ msg: "Congrats", data: _user });
      }
    }
  } catch (error) {
    // res.status(400).json({ status: "Sorry an error occured" });
    console.log(error);
  }
}
