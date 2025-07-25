import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addProduct,
  updateProductQuantity,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", auth, addProduct);
router.put("/:id/quantity", auth, updateProductQuantity);
router.get("/", auth, getProducts);

export default router;
