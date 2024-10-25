import mongoose from "mongoose";

let thingstodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bestTime: {
    type: String,
  },
});
let ThingsToDo = mongoose.model("ThingsToDo", thingstodoSchema);
export default ThingsToDo;
