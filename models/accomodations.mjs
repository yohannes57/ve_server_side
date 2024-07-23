import mongoose from "mongoose";

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  type: { type: String, required: true },
  // e.g., Hotel, Guest House, Lodge
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  amenities: [String],
  // Array of amenities offered
  priceRange: { type: String, required: true },
  // e.g., Budget, Mid-Range, Luxury
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
  },
  rating: { type: Number, min: 0, max: 5 },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      rating: { type: Number, min: 0, max: 5, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const accommodations = mongoose.model("Accomodation", accommodationSchema);

//export
export default accommodations;
