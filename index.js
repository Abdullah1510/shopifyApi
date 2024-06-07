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


// Nodejs API set up project in backend
// let API_key = "8e758d24da87dd1966614c336918ee03"
// let secret_key = "ba1000db46ad7d616d3786035d2a7c51"
//let access_token with password= "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"
// url https://${8e758d24da87dd1966614c336918ee03}:${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}@eeelena.myshopify.com/admin/api/2024-04/products.json
// https://8e758d24da87dd1966614c336918ee03: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@eeelena.myshopify.com/admin/api/2024-04/products.json
// app_version="2024-04"
// https://8e758d24da87dd1966614c336918ee03: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@eelena.myshopify.com/admin/api/2024-04/products.json

// https://565e79af1dcbe9321dec9f2186e546e1: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@everly-cosmetics.myshopify.com/admin/api/2024-04/products.json

// Retrieve a list of list of particular collection in that case best collection
// https://8e758d24da87dd1966614c336918ee03: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@eelena.myshopify.com/admin/api/2024-04/collections/431146205429/products.json

// retrieve a  single luist list of collection
// https://8e758d24da87dd1966614c336918ee03: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@eelena.myshopify.com/admin/api/2024-04/collections/431146205429.json
// SHOPIFY_PRODUCT_URL =https://8e758d24da87dd1966614c336918ee03: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@eelena.myshopify.com/admin/api/2024-04/products.json
// SHOPIFY_COLLECTION_URL =https://8e758d24da87dd1966614c336918ee03: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@eelena.myshopify.com/admin/api/2024-04/smart_collections.json

// get productURl :http://localhost:3000/getproduct
// getCollectionUrl:http://localhost:3000/getcollection
// getCollectionProductURl: http://localhost:3000/getcollection/431146369269

// balance.json:https://8e758d24da87dd1966614c336918ee03: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@eelena.myshopify.com/admin/api/2024-04/shopify_payments/balance.json
// cart API Refrence:
