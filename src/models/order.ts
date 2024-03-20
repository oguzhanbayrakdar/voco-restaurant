import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/order";

const orderSchema = new Schema<IOrder>(
	{
		user: { type: Schema.Types.ObjectId, ref: "User" },
		restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
		products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
		address: { type: String, required: true },
		comment: { type: String, required: false },
		rating: { type: Number, required: false }
	},
	{
		versionKey: false,
		timestamps: true
	}
)

const Order = mongoose.model<IOrder>("Order", orderSchema, "orders")

export default Order;