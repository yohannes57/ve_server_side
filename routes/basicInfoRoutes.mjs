import express from "express";
import {
  createBasicInfo,
  getAllBasicInfos,
  removeBasicInfo,
  updateBasicInfo,
} from "../controllers/basicInfoController.mjs";

let router = express.Router();

router.post("/basicinfo", createBasicInfo);
router.get("/basicinfo", getAllBasicInfos);
router.put("/basicinfo/:id", updateBasicInfo);
router.delete("/basicinfo/:id", removeBasicInfo);

export default router;
