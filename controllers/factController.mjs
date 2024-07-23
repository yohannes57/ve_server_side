import mongoose from "mongoose";
import Facts from "../models/facts.mjs";
import { errors } from "../errors.mjs";

//------------------create facts
export const createFacts = async (req, res) => {
  const { title, content, catagory, imageUrl, source } = req.body;
  try {
    const facts = await Facts.create({
      title: title,
      content: content,
      catagory: catagory,
      imageUrl: imageUrl,
      source: source,
    });
    console.log(facts);
    res.status(201).json({ facts: facts });
  } catch (error) {
    errors(res, error);
  }
};
//----------getFacts
export const getAllFacts = async (req, res) => {
  try {
    const facts = await Facts.find();
    res.status(200).json({ facts });
  } catch (error) {
    errors(res, error);
  }
};
//-------------update the fact
export const updateFact = async (req, res) => {
  let id = req.params.id;
  const { title, content, catagory, imageUrl, source } = req.body;
  try {
    let updatedFact = await Facts.FindByIdAndUpdate(
      { _id: id },
      { $set: { title, content, catagory, imageUrl, source } },
      { new: true }
    );
    if (!updatedFact) res.status(404).json({ message: "sth wrong" });
    res.status(200).json({ updatedFact });
  } catch (error) {
    errors(res, error);
  }
};
//delte facts
export const deleteFact = async (req, res) => {
  let id = req.params.id;
  try {
    let deleletedFact = await Facts.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Facts is deleted successfully" });
  } catch (error) {
    errors(res, error);
  }
};
