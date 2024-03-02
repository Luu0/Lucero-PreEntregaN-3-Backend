import mongoose from "mongoose";
import { Schema,model } from "mongoose";


// const productSchema = new mongoose.Schema(
//   {
//     productId: { type: Schema.Types.ObjectId, ref: "products", required: true },
//     quantity: { type: Number, required: true, min: 1 },
//   },
//   { _id: false }
// );

// const cartSchema = new mongoose.Schema({
//   products: { type: [productSchema], required: true, max: 25 },
// });


const cartSchema = new mongoose.Schema({
  products:{
    type:[
      {
        product:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'products'
        },
        quantity:{type:Number, default: 1}
      },
    ],
    _id:false
  }
});

const CartModel = model("carts", cartSchema);

export {CartModel};