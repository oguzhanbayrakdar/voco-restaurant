import mongoose from "mongoose";

export interface IComment {
	user: mongoose.Types.ObjectId;
	restaurant: mongoose.Types.ObjectId;
	comment: string;
	rating: number;
	date: Date;
}