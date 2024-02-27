import { findProducts,createProduct,updateProduct,deleteProduct,getProductById } from "../Services/product.services.js";

export const FindProductsController = async (req, res) => {
  try {
      const { limit, page, query, sort } = req.query;
      const products = await findProducts(limit, page, query, sort);
      res.json({
          data: products,
          message: "Product list"
      })
  }
  catch (error) {
      console.log(error);
      res.json({
          error,
          message: "error"
      });
  }
};

export const FindProductsByIDController = async (req,res)=>{
  const {id} = req.params;
  try{
    const product = getProductById(Number(id));
    return res.status(200).json(product);
  }catch(error){
    return res.status(404).json({ message: error.message });
  }
};

export const CreateProductController = async (req, res) => {
  try {
    const post = await createProduct(req.body);
    res.json({
      post,
      message: "Product created",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
};

export const UpdateProductController = async (req,res)=>{
  try {
    const { id } = req.params;

    const product = await updateProduct(id, req.body);

    res.json({
      product,
      message: "Product updated",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
};

export const DeleteProductController = async (req,res)=>{
  try {
    const { id } = req.params;
    const cart = await deleteProduct(id);

    res.json({
      cart,
      message: "Product deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
      message: "Error",
    });
  }
};



