import mongoose from "mongoose";
import express from "express";

import {
  getThingsToDo,
  createThingsToDo,
} from "../controllers/thingsToDoController.mjs";

const router = express.Router();

router.post("/thingstodo", createThingsToDo);
router.get("/thingstodo", getThingsToDo);

export default router;
