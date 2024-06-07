import axios from "axios";

export const getProduct = async (req, res, next) => {
    const shopifyProductUrl = `https://${process.env.API_key}:${process.env.PASSWORD}@${process.env.STORE_NAME}.myshopify.com/admin/api/${process.env.VERSION_API}/products.json`

  try {
    const response = await axios.get(
        shopifyProductUrl
    );

    // Extract products from the response data
    const products = response.data.products;

    // Send response with status 200 and JSON data containing products
    res.status(200).json(products);
  } catch (err) {
    // Pass error to the error-handling middleware
    next(err);
  }
};
