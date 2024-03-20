import mongoose from "mongoose"

export interface IRestaurant{
	name: string
	description: string
	logo: string
	address: {
		city: string
		district: string
		details: string,
		coordinates: {
			latitude: number
			longitude: number
		}
	},
	branchCode: string
	type: string[] // Türk Mutfağı, Fast Food vs.
	menu: mongoose.Types.ObjectId;
	rating?: number // İlk başta olmayacak
}