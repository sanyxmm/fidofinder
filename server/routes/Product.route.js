import express from "express";
import { Product } from "../models/Product.Model.js";

const router = express.Router();

router.post("/addProduct", async (req, res) => {
    const {img, title, price, stock } = req.body;

  try {
    // Create a new product
    const newProduct = new Product({
      img,
      title,
      price,
      stock,
      quantity:1,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Respond with success message and the product
    res.status(201).json({
      message: 'Product added successfully!',
      product: savedProduct
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.put("/updateProduct",async(req,res)=>{
    const {productId,quantity} = req.body;
    try{
const product = await Product.findById(productId);
if(!product)
return res.status(404).json({message:'product does not exist'})
product.stock += quantity;
const updatedProduct = await product.save();
return res.status(200).json({message:'Product Udated Successfully',
Product:updatedProduct})
    }
    catch{
return res.status(500).json({message:'interenal Server error'});
    }
})
router.get("/allProducts",async(req,res)=>{

    try {
        // Fetch all products from the database
        const products = await Product.find();

        // Send success response with all products
        return res.status(200).json({
            message: 'Products fetched successfully',
            products: products
        });
    } catch (error) {
        // Log the error for debugging
        console.error('Error fetching products:', error);

        // Send a 500 error response
        return res.status(500).json({ message: 'Internal Server Error' });
    }
})

export {router as ProductRouter};