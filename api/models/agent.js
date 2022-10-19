import { Schema, model, models } from "mongoose";

const AgentSchema = new Schema({
  //! First Set
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
  address: {
    type: String,
    required: true,
  },
  //! Second Set
  agentType: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  lga: {
    type: String,
    required: true,
  },
  ward: {
    type: String,
    required: true,
  },
  //! Others
  imgUrl: {
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
