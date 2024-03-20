import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interfaces/product";

const productSchema = new Schema<IProduct>({
	name: { type: String, required: true },
	price: { type: Number, required: true },
})

const Product = mongoose.model<IProduct>("Product", productSchema, "products")

export default Product;