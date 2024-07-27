import mongoose from "mongoose";

const factsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
  },
  catagory: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  source: {
    type: String,
  },
});
//create model
const Facts = mongoose.model("Facts", factsSchema);

export default Facts;
