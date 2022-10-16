import { Schema, model, models } from "mongoose";

const StateRepSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const StateRep = models.StateRepSchema || model("staterep", StateRepSchema);
// const StateRep = model("staterep", StateRepSchema);

export default StateRep;
