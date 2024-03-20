import mongoose, { Schema } from "mongoose";
import { IRestaurant } from "../interfaces/restaurant";

const restaurantSchema = new Schema<IRestaurant>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	logo: { type: String, required: true },
	address: {
		city: { type: String, required: true },
		district: { type: String, required: true },
		details: { type: String, required: true },
		coordinates: {
			latitude: { type: Number, required: true },
			longitude: { type: Number, required: true }
		}
	},
	branchCode: { type: String, required: true },
	type: [{ type: String, required: true }],
	menu: { type: Schema.Types.ObjectId, ref: "Menu" },
	rating: { type: Number, required: false },
})

const Restaurant = mongoose.model<IRestaurant>("Restaurant", restaurantSchema, "restaurants")

export default Restaurant