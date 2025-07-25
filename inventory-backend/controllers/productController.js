
import Product from "../models/product.js";
import mongoose from "mongoose";

export async function addProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product_id: product._id });
  } catch {
    res.status(400).json({ error: "Invalid product data" });
  }
}

export async function updateProductQuantity(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { quantity: req.body.quantity },
      { new: true }
    );
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch {
    res.status(400).json({ error: "Invalid request" });
  }
}

export async function getProducts(req, res) {
  let { page = 1, limit = 10 } = req.query;
  page = parseInt(page); limit = parseInt(limit);
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.json(products);
}
