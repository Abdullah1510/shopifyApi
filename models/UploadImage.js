// UploadImage.js
import mongoose from "mongoose";

const uploadImageSchema = new mongoose.Schema({
  ImageURL: { type: String, required: true },
});

const Image = mongoose.model("Image", uploadImageSchema);

export default Image;
