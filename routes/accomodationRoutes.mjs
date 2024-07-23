import express from "express";
import {
  createAccommodation,
  getAccommodationById,
  getAllAccommodations,
  removeAccommodation,
  updateAccommodation,
} from "../controllers/accomodationController.mjs";

let router = express.Router();

router.post("/accomodation", createAccommodation);
router.get("/accomodation", getAllAccommodations);
router.get("/accomodation/:id", getAccommodationById);
router.put("/accomodation/:id", updateAccommodation);
router.delete("/accomodation/:id", removeAccommodation);

export default router;
