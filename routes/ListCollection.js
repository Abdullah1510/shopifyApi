import express from "express";
import {
  ListCollection,
  getListCollection,
} from "../controllers/ListCollections.js";

const router = express.Router();

router.post("/", ListCollection);
router.get("/", getListCollection);

export default router;
