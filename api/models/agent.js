import { Schema, model, models } from "mongoose";

const AgentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
    required: true,
  },
  statecode: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

// const StateRep = models.StateRepSchema || model("StateRep", StateRepSchema);
const Agents = model("agents", AgentSchema);

export default Agents;
