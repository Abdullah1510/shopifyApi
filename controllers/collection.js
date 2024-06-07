import axios from "axios";

export const getCollection = async (req, res, next) => {
  const { handle } = req.query;
  const shopifyCollectionUrl = `https://${process.env.API_key}:${process.env.PASSWORD}@${process.env.STORE_NAME}.myshopify.com/admin/api/${process.env.VERSION_API}/`;

  try {
    let response;
    if (handle) {
      // If handle is provided, fetch the collection with the specified handle
      response = await axios.get(`${shopifyCollectionUrl}/smart_collections.json?handle=${handle}`);
    } else {
      // If handle is not provided, fetch all collections
      response = await axios.get(`${shopifyCollectionUrl}/smart_collections.json`);
    }

    // Extract collections from the response data
    const collections = response.data.smart_collections;

    // Send response with status 200 and JSON data containing collections
    res.status(200).json(collections);
  } catch (err) {
    // Pass error to the error-handling middleware
    next(err);
  }
};


export const getCollectionProduct = async (req, res, next) => {
  const { collection_id } = req.params;
  const { min_price, max_price, sort_by } = req.query;
  console.log({ min_price, max_price, sort_by })

  let shopifyCollectionProductUrl = `https://${process.env.API_key}:${process.env.PASSWORD}@${process.env.STORE_NAME}.myshopify.com/admin/api/${process.env.VERSION_API}/collections/${collection_id}/products.json`;
console.log(shopifyCollectionProductUrl)
  // Check if any query parameters are provided
  if (min_price || max_price || sort_by) {
    // If query parameters are provided, construct the URL with filtering and sorting
    shopifyCollectionProductUrl += `?`;

    if (min_price) {
      shopifyCollectionProductUrl += `filter.v.price.gte=${min_price}&`;
    }

    if (max_price) {
      shopifyCollectionProductUrl += `filter.v.price.lte=${max_price}&`;
    }

    if (sort_by) {
      shopifyCollectionProductUrl += `sort_by=${sort_by}&`;
    }

    // Remove the trailing '&' if present
    shopifyCollectionProductUrl = shopifyCollectionProductUrl.replace(/&$/, '');
    console.log(shopifyCollectionProductUrl)
  }

  try {
    const response = await axios.get(shopifyCollectionProductUrl);

    // Extract products from the response data
    const products = response.data.products;

    // Send response with status 200 and JSON data containing products
    res.status(200).json(products);
  } catch (err) {
    // Pass error to the error-handling middleware
    next(err);
  }
};


// http://localhost:3000/getcollection/431146205429?min_price={min || 0} &max_price={max ||sort_by}&sort_by={best-selling}



// https://${process.env.API_key}:${process.env.PASSWORD}@${process.env.STORE_NAME}.myshopify.com/admin/api/${process.env.VERSION_API}/collections/${collection_id}/products.json