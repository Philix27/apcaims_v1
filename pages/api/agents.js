import connectMongo from "../../api/connectMongo";
import AgentsKit from "../../api/controller/agents";
import express from "express";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const router = express.Router();
router.route("/").get(StateRepKit.getAll).post(StateRepKit.create);
router
  .route("/:id")
  .get(StateRepKit.getSingle)
  .patch(StateRepKit.update)
  .delete(StateRepKit.deleteAgent);

export default router;
