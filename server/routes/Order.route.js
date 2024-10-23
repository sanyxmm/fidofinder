import express from "express";
import { Order } from "../models/Order.model.js";
import { Product } from "../models/Product.Model.js";
import {authenticate} from '../middleware/authenticate.js'

const router = express.Router();

router.post("/placeOrder",authenticate, async (req, res) => {
    const { items, totalAmount,shippingAddress,petDetails } = req.body;
  
    try {
      // Validate if all products have enough stock
      for (const item of items) {
        const product = await Product.findById(item._id);
        if (!product) {
          return res.status(404).json({ message: `Product with id ${item._id} not found.` });
        }
        if (product.stock < item.quantity) {
          return res.status(400).json({ message: `Out of Stock: ${product.title}` });
        }
      }
  
      // If stock is sufficient, proceed to update inventory and create an order
      for (const item of items) {
        const product = await Product.findById(item._id);
        product.stock -= item.quantity; // Reduce stock by the ordered quantity
        await product.save();
      }
      if (Object.keys(shippingAddress).length === 0) {
        return res.status(400).json({ message: "Please fill shippingAddress" });
      }
      else if (Object.keys(petDetails).length === 0) {
        return res.status(400).json({ message: "Please fill petDetails" });
      }
      // Create and save the order
      const order = new Order({
        userId: req.user.id,
        items: items,
        totalAmount :totalAmount,
        shippingAddress:shippingAddress,
        petDetails:petDetails,
        orderStatus: 'Processing',
      });
  
      const savedOrder = await order.save();
  
      return res.status(201).json({
        message: 'Order placed successfully!',
        order: savedOrder,
      });
    } 
    catch (error) {
      console.error('Error placing order:', error);
      if (Object.keys(shippingAddress).length === 0) {
        return res.status(400).json({ message: "Please fill shippingAddress" });
      }
      else if (Object.keys(petDetails).length === 0) {
        return res.status(400).json({ message: "Please fill petDetails" });
      }
      else
      return res.status(500).json({ message: 'Internall Server Error' });
}
});

export {router as OrderRouter};