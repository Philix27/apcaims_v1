export const getAll = async (db, req, res) => {
  const { state: state } = req.query;
  try {
    const data = await db
      .collection("agents")
      .find(
        { state: state },
        {
          projection: {
            firstName: 1,
            lastName: 1,
            lga: 1,
            electionType: 1,
            // agentType: 1,
            _id: 0,
          },
        }
      )
      // .limit(10)
      .toArray();
    res.status(200).json({ data: data });
  } catch (e) {
    console.log(e);
    console.log("Oops an error occured");
  }
};
