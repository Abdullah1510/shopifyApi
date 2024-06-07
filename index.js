import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import getProductRouter from "./routes/products.js";
import getCollection from "./routes/collections.js";
import addToCartRouter from "./routes/adds.js";
import imageUploadRouter from "./routes/UploadImageRoutes.js";
import listCollectionsRouter from './routes/ListCollection.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Middleware to enable CORS
app.use(cors({
  origin: '*', // Adjust the origin as needed, e.g., 'http://example.com'
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

// Mount the routers at their respective routes
app.use("/getproduct", getProductRouter);
app.use("/getcollection", getCollection);
app.use("/addToCart", addToCartRouter);
app.use("/uploadImage", imageUploadRouter);
app.use("/collection", listCollectionsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Start the server
app.listen(port, (err) => {
  if (!err) {
    console.log(`Connected to backend on port ${port}`);
  } else {
    console.error("Error starting the server:", err);
  }
});















































