import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user";

const userSchema = new Schema<IUser>({
	username: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	age: { type: Number, required: true},
	gender: { type: String, required: true},
	profilePhoto: { type: String, required: true},
	address: [{ type: String, required: false }]
})

const User = mongoose.model<IUser>("User", userSchema, "users")

export default User;