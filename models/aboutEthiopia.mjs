import mongoose, { model } from "mongoose";

let AboutEthiopiaSchema = new mongoose.Schema({
  history: {
    type: String,
    required: true,
  },
  culture: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  government: {
    type: String,
    required: true,
  },
});

let AboutEthiopia = mongoose.model("AboutEthiopia", AboutEthiopiaSchema);

export default AboutEthiopia;
