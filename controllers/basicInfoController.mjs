import mongoose from "mongoose";
import basicInfo from "../models/basicInfo.mjs";
import { errors } from "../errors.mjs";

//----------createBasicInfo
export const createBasicInfo = async (req, res) => {
  const { catagory, details, lastUpdated } = req.body;
  try {
    let info = await basicInfo.create({
      catagory: catagory,
      details: details,
      lastUpdated: lastUpdated,
    });
    res.status(201).json({ info });
    console.log(info);
  } catch (error) {
    errors(res, error);
  }
};
//-------------getAllBasicInformations
export const getAllBasicInfos = async (req, res) => {
  try {
    let getAllinfo = await basicInfo.find();
    res.status(200).json({ getAllinfo });
  } catch (error) {
    errors(res, error);
  }
};
//------------updateBasicInformation
export const updateBasicInfo = async (req, res) => {
  let id = req.params.id;
  const { catagory, details, lastUpdated } = req.body;
  try {
    let updatedBasicInfo = await basicInfo.updateOne(
      { _id: id },
      { $set: { catagory, details, lastUpdated } },
      { new: true }
    );
    res.status(201).json({ updatedBasicInfo });
    console.log("updated succefully");
  } catch (error) {
    errors(res, error);
  }
};
//------------remove basicInfo
export const removeBasicInfo = async (req, res) => {
  let id = req.params.id;
  try {
    let deletedBasicInfo = await basicInfo.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "info deleted succefully" });
    console.log(deletedBasicInfo);
  } catch (error) {
    errors(res, error);
  }
};
//---------------
