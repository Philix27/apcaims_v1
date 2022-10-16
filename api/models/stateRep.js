import { Schema, model, models } from "mongoose";

const stateRepSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// const StateRep = () => {
//   if (models.StateRep) {
//     // StateRep = models.StateRepSchema;
//     return models.StateRepSchema;
//   } else {
//     // models.StateRepSchema;
//     return model("staterep", StateRepSchema);
//   }
// };

// const StateRep = models.StateRep || model("staterep", stateRepSchema);
// const StateRep = model("staterep", StateRepSchema);

module.exports = models.Staterep || model("Staterep", stateRepSchema);

// export default StateRep;
