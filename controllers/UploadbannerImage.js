import Image from "../models/UploadImage.js";

const UploadImage = async (req, res, next) => {
  try {
    const { ImageURL } = req.body;

    if (!ImageURL) {
      return res.status(400).json({ message: "ImageURL is required" });
    }
    // Save image metadata to MongoDB
    const image = new Image({ ImageURL });
    await image.save();

    res.json({
      message: "Image has been uploaded and saved to database successfully",
      file: { ImageURL },
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

const getAllUploadedImages = async (req, res, next) => {
  try {
    const images = await Image.find();
    if (!images || images.length === 0) {
      return res.status(404).json({ error: "No images found" });
    }
    res.json(images);
  } catch (error) {
    next(error); // Passes the error to the next middleware
  }
};

export { UploadImage, getAllUploadedImages };
