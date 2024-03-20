import { Request, Response } from "express";
import Product from "../models/product";
import Order from "../models/order";
import Comment from "../models/comment";
import Restaurant from "../models/restaurant";


// Problem 2
export const findNearestRestaurants = async (req: Request, res: Response) => {
	
	const latitude = 39.93;
	const longitude = 32.85;
	const maxDistance = 100000;

	const restaurants = await Restaurant
		.find({
			'address.coordinates': {
				$near: {
					$geometry: {
						type: 'Point',
						coordinates: [longitude, latitude]
					},
					$maxDistance: maxDistance
				}
			}
		})
		.limit(5)
		.exec();

	return res.status(200).json({ restaurants });
}

// Problem 3
export const addProducts = async (req: Request, res: Response) => {

	const products = [
		{
			name: 'Küçük boy peynirli pizza',
			price: 50
		},
		{
			name: 'Orta boy mantarlı pizza',
			price: 100
		},
		{
			name: 'Hamburger',
			price: 120
		}
	]
	
	const addProducts = await Product.insertMany(products);

	return res.status(200).json({ message: 'Ürünler başarıyla eklendi.', addProducts });
}

// Problem 4
export const showComments = async (req: Request, res: Response) => {

	// restaurant id
	const id = "";
	const skip = 0;
	const limit = 20;

	const comments = await Comment
		.find({ restaurant: id })
		.populate('user')
		.where({ 'user.gender': 'M'})
		.sort({ 'user.age': -1 })
		.skip(skip * limit)
		.limit(limit)
		.exec();

}

// Problem 5
export const showFilteredResult = async (req: Request, res: Response) => {

	const restaurants = await Restaurant
		.find({
			$or: [
				{ type: { $in: ['Fast Food', 'Ev Yemekleri']}},
				{ description: /fast/i },
			],
			rating: { $gte: 4 }
		}, { name: 1, description: 1, rating: 1 })
		.exec();

}

// Problem 6
export const getRestaurants = async (req: Request, res: Response) => {

	const limit = parseInt(req.query.pageSize as string)
	const page = parseInt(req.query.page as string)
	const restaurants = await Restaurant
		.find()
		.skip((page - 1) * limit)
		.limit(limit)
		.sort({ rating: -1 })
		.exec();

	return res.status(200).json({ restaurants });
}