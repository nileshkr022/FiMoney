import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import cors from "cors";
import { swaggerUiMiddleware, swaggerUiSetup } from "./swagger.js";
dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use("/", authRoutes);
app.use("/products", productRoutes);
app.use("/api-docs", swaggerUiMiddleware, swaggerUiSetup);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
