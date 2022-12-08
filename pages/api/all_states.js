import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if ((req.method = "GET")) {
    try {
      const data = await db
        .collection("agents")
        .find(
          {},
          {
            projection: {
              state: 1,
              _id: 0,
            },
          }
        )
        .toArray();
      res.status(200).json({ length: data.length, data: data });
    } catch (e) {
      console.log(e);
      console.log("Oops an error occured");
    }
  }
}
