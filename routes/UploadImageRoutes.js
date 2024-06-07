import express from "express";
const router = express.Router();
import {
  UploadImage,
  getAllUploadedImages,
} from "../controllers/UploadbannerImage.js";

// POST route to upload an image
router.post("/", UploadImage);
// router.get('/',)
router.get("/images", getAllUploadedImages);

export default router;
