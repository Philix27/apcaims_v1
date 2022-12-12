import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const agents = db.collection("agents");

  if ((req.method = "GET")) {
    try {
      const data = await agents
        .aggregate([{ $match: {} }, { $group: { _id: "$state" } }])
        // .find(
        //   {},
        //   {
        //     projection: {
        //       state: 1,
        //       _id: 0,
        //     },
        //   }
        // )

        // .limit(30)
        .toArray();
      res.status(200).json({ length: data.length, data: data });
    } catch (e) {
      console.log(e);
      console.log("Oops an error occured");
    }
  }
}
