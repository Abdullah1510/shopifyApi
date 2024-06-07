// UploadImage.js
import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  collection_name: { type: String, required: true },
});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;
