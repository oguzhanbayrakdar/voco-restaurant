import mongoose, { Schema } from "mongoose";
import { IMenu } from "../interfaces/menu";

const menuSchema = new Schema<IMenu>({
	name: { type: String, required: true },
	banner: { type: String, required: true },
	restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
	products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
})

const Menu = mongoose.model<IMenu>("Menu", menuSchema, "menus")

export default Menu;