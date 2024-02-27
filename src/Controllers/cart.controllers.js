import { findCart, findById, createCart, updateProducts, deleteProductFromCart } from "../Services/cart.services.js";

export const getcartContrller = async (req, res) => {
  try{
    const Carts = await findCart();
    res.json({
      data: Carts,
      message: "Cart List"
    });
  }catch(error){
    res.json({
      error,
      message: "Error",
    });
  }
};

export const createCartController = async (req, res) => {
  try {
    const Cart = await createCart(req.body);

    res.json({
      Cart,
      message: "Cart created",
    });
  } catch (error) {
    res.json({
      error,
      message: "Error",
    });
  }
};

export const getCartByIdController = async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await findById(cid);

    if (!cart) return res.json({ message: "Cart not found" });

    res.json({
      cart,
      message: "Cart found",
    });
  } catch (error) {

    res.status(500).json({
      error: error.message,  
      message: "Error",
    });
  }
};

export const UpdateCartController = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (typeof quantity !== 'number') {
      return res.status(400).json({ message: "Invalid quantity format" });
    }

    let cart = await findById(req.params.cid);

    cart.products.forEach((product) => {
      product.quantity += quantity;
    });

    const updatedCart = await updateProducts(cart._id, cart);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export const UpdateCartProductController = async (req, res) => {
  try {
    let cart = await findById(req.params.cid);

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    const productIndex = cart.products.findIndex((p) => p._id.toString() === req.params.pid);

    if (productIndex !== -1) {
      cart.products[productIndex].quantity = req.body.quantity;

      const updatedCart = await updateProducts(cart._id, cart);

      return res.status(200).json(updatedCart);
    } else {
      return res.status(404).json({ error: "Product not found in Cart" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

export const DeleteCartController = async (req,res)=>{
  try{
      let deleted = await findById(req.params.cid)
      deleted.products = []
      let updatedCart = updateProducts(req.params.cid,deleted)
      res.status(201).json(deleted.message)
  }
  catch(err){ res.status(500).json({error:err})}
  
};

export const DeleteCartProductController = async (req, res) => {
  const { cid, pid } = req.params;
  try {
    const result = await deleteProductFromCart(cid, pid);
    res.json({
      result,
      message: "Product deleted"
  });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};