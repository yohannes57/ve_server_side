import mongoose from "mongoose";
import Destination from "../models/destination.mjs";
import { errors } from "../errors.mjs";

//create destination
export const createDestination = async (req, res) => {
  try {
    const { name, description, imageUrl, highLights, thingsToDo, location } =
      req.body;
    const destination = await Destination.create({
      name: name,
      description: description,
      imageUrl: imageUrl,
      highLights: highLights,
      thingsToDo: thingsToDo,
      location: location,
    });
    console.log(destination);
    res.status(201).json({ destination: destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "sth wrong while creating product" });
  }
};

//getAllDestinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json({ destinations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "sth wrong while creating product" });
  }
};

//getDestinationById
export const getDestinationById = async (req, res) => {
  let id = req.params.id;
  try {
    let destination = await Destination.findById({ _id: id });
    if (!destination) res.status(404).json({ message: "customer not found" });
    res.status(200).json({ destination });
  } catch (error) {
    errors(res, error);
  }
};

//getDestination and update the content
export const updateDestinationCollection = async (req, res) => {
  let id = req.params.id;
  const { name, description, imageUrl, highLights, thingsToDo, location } =
    req.body;
  try {
    let destinationToBeUpdated = await Destination.findByIdAndUpdate(
      { _id: id },
      {
        $set: { name, description, imageUrl, highLights, thingsToDo, location },
      },
      { new: true }
    );
    if (!destinationToBeUpdated) {
      res.status(404).json({ message: "destination not found" });
    } else {
      res.status(200).json({ destinationToBeUpdated });
    }
  } catch (error) {
    errors(res, error);
  }
};

//find destination and delete
export const removeDestination = async (req, res) => {
  let id = req.params.id;
  try {
    let removeDest = await Destination.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Destination is deleted successfully" });
  } catch (error) {
    errors(res, error);
  }
};

//end
