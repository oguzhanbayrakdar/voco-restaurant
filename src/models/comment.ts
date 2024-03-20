import mongoose, { Schema } from "mongoose";
import { IComment } from "../interfaces/comment";

const commentSchema = new Schema<IComment>({
	user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
	restaurant: { type: Schema.Types.ObjectId, required: true, ref: "Restaurant"  },
	comment: { type: String, required: true },
	rating: { type: Number, required: true },
	date: { type: Date, required: true }
})

const Comment = mongoose.model<IComment>("Comment", commentSchema, "comments")

export default Comment;