// Import the express module
import express from 'express';
import {AddToCart} from '../controllers/add.js'
import {fetchProduct} from '../controllers/add.js'
// Create a new router object using express.Router()
const router = express.Router();

// Define a route for GET requests to the root URL ('/')
router.post('/',AddToCart)
router.get('/',fetchProduct)

// Export the router so it can be used in other parts of the application
export default router;
