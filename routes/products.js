// Import the express module
import express from 'express';
import {getProduct} from '../controllers/product.js'
// Create a new router object using express.Router()
const router = express.Router();

// Define a route for GET requests to the root URL ('/')
router.get('/',getProduct)

// Export the router so it can be used in other parts of the application
export default router;
