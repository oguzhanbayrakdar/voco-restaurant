import { IProduct } from "./product"

export interface IMenu{
	name: string
	banner: string
	restaurant: any
	products: IProduct[]
}