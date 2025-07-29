import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
const router = express.Router();
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "60d21b4667d0d8992e610c85"
 *         username:
 *           type: string
 *           example: testuser
 *         password:
 *           type: string
 *           example: $2b$10$aL6x...
 */

/**
 * @openapi
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: testuser
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       409:
 *         description: Username already exists
 *       400:
 *         description: Missing username or password
 */
router.post("/register", registerUser);
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Log in as a user and receive a JWT
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: testuser
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: JWT access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *       400:
 *         description: Missing username or password
 */
router.post("/login", loginUser);
export default router;
