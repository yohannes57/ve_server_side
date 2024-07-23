import mongoose from "mongoose";
import express from "express";
import {
  createFacts,
  getAllFacts,
  deleteFact,
  updateFact,
} from "../controllers/factController.mjs";

//create router object
const router = express.Router();

//create routes
router.post("/facts", createFacts);
router.get("/facts", getAllFacts);
router.put("/facts/:id", updateFact);
router.delete("/facts/:id", deleteFact);

export default router;
//---------------------sample data
/*
sample data
[
  {
    "title": "Ethiopia: Birthplace of Coffee",
    "description": "Ethiopia is widely considered to be the birthplace of coffee. Legend has it that a goat herder named Kaldi discovered coffee after noticing that his goats became energetic after eating the berries from a certain tree."
  },
  {
    "title": "Unique Calendar",
    "description": "Ethiopia has its own calendar, which is about seven to eight years behind the Gregorian calendar. It has 13 months: 12 months of 30 days and an extra month called Pagumē of 5 or 6 days depending on the year."
  },
  {
    "title": "Lalibela's Rock-Hewn Churches",
    "description": "Lalibela is famous for its 11 medieval monolithic cave churches, which were carved out of rock in the 12th century. These churches are still used for worship today."
  },
  {
    "title": "Lucy: An Ancient Ancestor",
    "description": "The skeleton of one of the oldest and most complete hominids ever found, known as Lucy, was discovered in Ethiopia. She lived around 3.2 million years ago and belongs to the species Australopithecus afarensis."
  },
  {
    "title": "Simien Mountains",
    "description": "The Simien Mountains in Ethiopia are one of the major highlands of Africa. Their tallest peak, Ras Dashen, is the highest point in Ethiopia and the 10th highest in Africa."
  },
  {
    "title": "The Only African Alphabet",
    "description": "Ethiopia is home to the Ge'ez script, which is the only native African alphabet still in use today. It is used for liturgical purposes in the Ethiopian Orthodox Church and is also the script for several Ethiopian languages."
  },
  {
    "title": "Ancient Christian Heritage",
    "description": "Ethiopia was one of the first regions in the world to adopt Christianity as the state religion in the 4th century. The Ethiopian Orthodox Church remains a significant part of Ethiopian culture."
  },
  {
    "title": "Never Colonized",
    "description": "Ethiopia is one of the few African countries that was never colonized by a European power. It successfully resisted Italian invasion at the Battle of Adwa in 1896, securing its sovereignty."
  },
  {
    "title": "The Great Rift Valley",
    "description": "The Great Rift Valley, which runs through Ethiopia, is one of the most significant geographical features in the world. It is known for its archaeological significance and rich biodiversity."
  },
  {
    "title": "Diverse Ecosystems",
    "description": "Ethiopia boasts a wide range of ecosystems, from the arid Danakil Depression, one of the hottest places on Earth, to the lush highlands and the fertile Rift Valley, making it a land of extreme natural contrasts."
  },
  {
    "title": "Ancient Civilization of Aksum",
    "description": "The ancient Kingdom of Aksum was a powerful trading empire that flourished in Ethiopia from about 100 AD to 940 AD. It is known for its impressive obelisks and was one of the great civilizations of the ancient world."
  },
  {
    "title": "Ethiopian Airlines",
    "description": "Founded in 1945, Ethiopian Airlines is the largest and most successful airline in Africa. It is renowned for its safety record and extensive network connecting Africa to the world."
  }
]

*/
