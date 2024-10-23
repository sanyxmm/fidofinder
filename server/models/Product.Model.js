// models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  img: {type:String},
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },// Available stock
  quantity: { type: Number, required: true }, 
  description: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);
export {ProductModel as Product}
