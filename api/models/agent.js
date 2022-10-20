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
  //! Second Set
  electionType: {
    type: String,
    required: true,
  },
  //! Step 3
  agentType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

// const StateRep = models.StateRepSchema || model("StateRep", StateRepSchema);
const Agents = model("agents", AgentSchema);

export default Agents;
