import express from "express";
import {
  createAboutEthiopia,
  getAllAboutEthiopia,
} from "../controllers/aboutController.mjs";

let aboutRoutes = express.Router();

aboutRoutes.post("/aboutethiopia", createAboutEthiopia);
aboutRoutes.get("/aboutethiopia", getAllAboutEthiopia);
aboutRoutes.get("/aboutethiopia/:nameId", getAllAboutEthiopia);

export default aboutRoutes;
