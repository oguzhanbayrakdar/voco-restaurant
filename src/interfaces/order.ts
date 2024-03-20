import mongoose from "mongoose"
import { IProduct } from "./product"
import { IComment } from "./comment"

export interface IOrder {
	user: mongoose.Types.ObjectId
	
	restaurant: mongoose.Types.ObjectId
	
	products: IProduct[]
	
	address: string;

	comment: IComment;
}