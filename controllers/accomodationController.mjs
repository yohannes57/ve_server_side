import mongoose from "mongoose";
import Accommodation from "../models/accomodations.mjs";
import { errors } from "../errors.mjs";

// Create accommodation
export const createAccommodation = async (req, res) => {
  try {
    const { name, description, imageUrl, address, priceRange, amenities } =
      req.body;
    const accommodation = await Accommodation.create({
      name,
      description,
      imageUrl,
      address,
      priceRange,
      amenities,
      contact,
    });
    console.log(accommodation);
    res.status(201).json({ accommodation });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while creating accommodation" });
  }
};

// Get all accommodations
export const getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.status(200).json({ accommodations });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while retrieving accommodations" });
  }
};

// Get accommodation by ID
export const getAccommodationById = async (req, res) => {
  let id = req.params.id;
  try {
    let accommodation = await Accommodation.findById({ _id: id });
    if (!accommodation)
      res.status(404).json({ message: "Accommodation not found" });
    res.status(200).json({ accommodation });
  } catch (error) {
    errors(res, error);
  }
};

// Update accommodation
export const updateAccommodation = async (req, res) => {
  let id = req.params.id;
  const {
    name,
    description,
    imageUrl,
    address,
    priceRange,
    amenities,
    contact,
  } = req.body;
  try {
    let accommodationToBeUpdated = await Accommodation.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          description,
          imageUrl,
          address,
          priceRange,
          amenities,
          contact,
        },
      },
      { new: true }
    );
    if (!accommodationToBeUpdated) {
      res.status(404).json({ message: "Accommodation not found" });
    } else {
      res.status(200).json({ accommodation: accommodationToBeUpdated });
    }
  } catch (error) {
    errors(res, error);
  }
};

// Delete accommodation
export const removeAccommodation = async (req, res) => {
  let id = req.params.id;
  try {
    let removedAccommodation = await Accommodation.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({ message: "Accommodation is deleted successfully" });
  } catch (error) {
    errors(res, error);
  }
};
