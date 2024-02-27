import { Router } from "express";
import { FindProductsByIDController, FindProductsController,CreateProductController, UpdateProductController, DeleteProductController } from "../Controllers/product.controllers.js";
import authMiddleware from "./Custom/authMiddleware.js";

const router = Router();

router.get("/", FindProductsController );

router.get("/:id", FindProductsByIDController);

router.post("/",authMiddleware, CreateProductController);

router.put("/:id",authMiddleware, UpdateProductController);

router.delete("/:id",authMiddleware, DeleteProductController);

export default router;