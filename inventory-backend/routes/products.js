import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addProduct,
  updateProductQuantity,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "60d21b4667d0d8992e610c85"
 *         name:
 *           type: string
 *           example: Phone
 *         type:
 *           type: string
 *           example: Electronics
 *         sku:
 *           type: string
 *           example: PHN-001
 *         image_url:
 *           type: string
 *           example: "https://example.com/phone.jpg"
 *         description:
 *           type: string
 *           example: Latest model phone
 *         quantity:
 *           type: integer
 *           example: 5
 *         price:
 *           type: number
 *           example: 799.99
 */

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Get a paginated list of products
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: "Page number (default: 1)"
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: "Results per page (default: 10)"
 *     responses:
 *       200:
 *         description: Array of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized (JWT missing/invalid)
 */
router.get("/", auth, getProducts);

/**
 * @openapi
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - sku
 *               - image_url
 *               - description
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Phone
 *               type:
 *                 type: string
 *                 example: Electronics
 *               sku:
 *                 type: string
 *                 example: PHN-001
 *               image_url:
 *                 type: string
 *                 example: https://example.com/phone.jpg
 *               description:
 *                 type: string
 *                 example: Latest model phone
 *               quantity:
 *                 type: integer
 *                 example: 5
 *               price:
 *                 type: number
 *                 example: 799.99
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product_id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *       400:
 *         description: Invalid product data
 *       401:
 *         description: Unauthorized (JWT missing/invalid)
 */
router.post("/", auth, addProduct);

/**
 * @openapi
 * /products/{id}/quantity:
 *   put:
 *     summary: Update quantity of a product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Product MongoDB ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       200:
 *         description: Product updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid product ID or request
 *       404:
 *         description: Product not found
 *       401:
 *         description: Unauthorized (JWT missing/invalid)
 */
router.put("/:id/quantity", auth, updateProductQuantity);

export default router;
