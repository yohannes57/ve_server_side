import mongoose from "mongoose";

const basicInfoSchema = new mongoose.Schema({
  catagory: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now(),
  },
});

const basicInfo = mongoose.model("BasicInfo", basicInfoSchema);

export default basicInfo;
