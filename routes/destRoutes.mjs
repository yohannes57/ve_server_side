import mongoose from "mongoose";
import express from "express";
import {
  createDestination,
  getAllDestinations,
  getDestinationById,
  getDestinationByName,
  removeDestination,
  updateDestinationCollection,
} from "../controllers/destController.mjs";

//create router object
const router = express.Router();

//create routes
router.post("/destination", createDestination);
router.get("/destination", getAllDestinations);
router.get("/destination/:id", getDestinationById);
router.get("/destinations/:destinationName", getDestinationByName);
router.put("/destination/:id", updateDestinationCollection);
router.delete("/destination/:id", removeDestination);

export default router;
/*
sample data 
[
  {
    "name": "Lalibela",
    "description": "Lalibela is a town in northern Ethiopia famous for its rock-cut monolithic churches.",
    "imageUrl": "https://example.com/lalibela.jpg",
    "highlights": ["rock-cut churches", "historical significance"],
    "thingsToDo": ["sightseeing", "historical tours"],
    "location": {
      "latitude": 12.034,
      "longitude": 39.043
    }
  },
  {
    "name": "Simien Mountains National Park",
    "description": "Simien Mountains National Park is a UNESCO World Heritage Site known for its dramatic landscapes and wildlife.",
    "imageUrl": "https://example.com/simien_mountains.jpg",
    "highlights": ["dramatic landscapes", "wildlife"],
    "thingsToDo": ["hiking", "wildlife watching", "camping"],
    "location": {
      "latitude": 13.183,
      "longitude": 38.067
    }
  },
  {
    "name": "Axum",
    "description": "Axum is an ancient city in northern Ethiopia known for its obelisks and archaeological sites.",
    "imageUrl": "https://example.com/axum.jpg",
    "highlights": ["obelisk of Axum", "archaeological sites"],
    "thingsToDo": ["historical tours", "museum visits"],
    "location": {
      "latitude": 14.122,
      "longitude": 38.724
    }
  },
  {
    "name": "Blue Nile Falls",
    "description": "Blue Nile Falls is a waterfall on the Blue Nile river in Ethiopia, known for its scenic beauty.",
    "imageUrl": "https://example.com/blue_nile_falls.jpg",
    "highlights": ["scenic beauty", "waterfall"],
    "thingsToDo": ["sightseeing", "hiking"],
    "location": {
      "latitude": 11.523,
      "longitude": 37.570
    }
  },
  {
    "name": "Omo Valley",
    "description": "Omo Valley is a region in southwestern Ethiopia known for its indigenous tribes and cultural diversity.",
    "imageUrl": "https://example.com/omo_valley.jpg",
    "highlights": ["indigenous tribes", "cultural diversity"],
    "thingsToDo": ["cultural tours", "photography"],
    "location": {
      "latitude": 5.451,
      "longitude": 36.652
    }
  }
]
*/
