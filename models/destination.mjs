import mongoose from "mongoose";
//create schema
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  highLights: [],
  thingsToDo: [],
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
});

//create the model
const Destination = mongoose.model("Destination", destinationSchema);

// export
export default Destination;
