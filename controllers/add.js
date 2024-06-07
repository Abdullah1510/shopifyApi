import axios from 'axios';

export const AddToCart = async (req, res, next) => {
    const { id, quantity } = req.body;
    console.log({ id, quantity });

    try {
        // Make request to Shopify API to add product to cart
        const formData = {
            "items": [{
                id: id,
                quantity: quantity
            }]
        };

        const response = await axios.post(
            'https://eelena.myshopify.com/cart/add.js',
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(`${process.env.API_key}:${process.env.PASSWORD}`).toString('base64')
                }
            }
        );

        console.log(response.data, "abdul");
        
        // Send response back to the client
        res.send(response.data);
    } catch (error) {
        // Handle the error
        console.error('Error adding product to cart:', error);
        // Pass the error to the error-handling middleware
        next(error);
    }
};

export const fetchProduct = async (req, res) => {
    try {
        const response = await axios.get("https://eelena.myshopify.com/cart.js", {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${process.env.API_key}:${process.env.PASSWORD}`).toString('base64')
            }
        });

        // Handle the response here
        console.log(response)
        res.status(200).json(response.data);
    } catch (error) {
        // Handle error
        console.error('Error fetching product:', error);
        res.status(500).send('Error fetching product');
        next(error);
    }
};