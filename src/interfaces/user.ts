import { Document } from 'mongoose';

export interface IUser extends Document{
	username: string
	password: string
	email: string
	age: number
	gender: string
	profilePhoto: string
	address: string[]
}