import { Router } from "express";
import { getcartContrller,createCartController,getCartByIdController,UpdateCartController,UpdateCartProductController,DeleteCartController,DeleteCartProductController } from "../Controllers/cart.controllers.js";
const router = Router();

router.get("/", getcartContrller);

router.post("/", createCartController);

router.get("/:cid", getCartByIdController);

router.put('/:cid', UpdateCartController);

router.put('/:cid/product/:pid', UpdateCartProductController);

router.delete('/:cid', DeleteCartController)

router.delete("/:cid/product/:pid", DeleteCartProductController);

export default router;

