import Collection from "../models/ListCollection.js";

const ListCollection = async (req, res, next) => {
  try {
    const { collection_name } = req.body;

    if (!collection_name) {
      return res.status(400).json({ message: "Collection name is required" });
    }

    const collection = new Collection({ collection_name });
    await collection.save();

    res.status(201).json({ message: "Collection added successfully" });
  } catch (error) {
    next(error);
  }
};

const getListCollection = async (req, res, next) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (error) {
    next(error);
  }
};

export { ListCollection, getListCollection };
