// Import the express module
import express from "express";
import {
  getCollection,
  getCollectionProduct,
} from "../controllers/collection.js";

// Create a new router object using express.Router()
const router = express.Router();

// Define a route for GET requests to the root URL ('/')
router.get("/", getCollection);

router.get("/:collection_id", getCollectionProduct);
// Export the router so it can be used in other parts of the application
export default router;
