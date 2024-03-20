import { NextFunction, Request, Response } from 'express'
import { body, check, validationResult } from 'express-validator'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	// validate the request
	await check('username', 'Kullanıcı adı boş olamaz.').notEmpty().run(req);
	await check('password', 'Şifre boş olamaz.').notEmpty().run(req);

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const user = await User
		.findOne({ username: username })
		.exec();

	if (!user) {
		return res.status(401).json({ message: 'Yanlış kullanıcı adı veya şifre' });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if(!isPasswordValid){
		return res.status(401).json({ message: 'Yanlış kullanıcı adı veya şifre' });
	}

	const token = jwt.sign(
		{ id: 'user.id' },
		process.env.JWT_SECRET as string,
		{
			expiresIn: '4w',
		}
	)

	return res.status(200).json({ message: 'Giriş başarılı.', token });
}


export const register = async (req: Request, res: Response) => {

	const { username, password, email, age, gender, address } = req.body;
	const file = req.file as any;

	if(!file) {
		return res.status(400).json({ message: 'Profil resmi yüklenmedi.' });
	}

	// validate the request
	await check('username', 'Kullanıcı adı boş olamaz.').notEmpty().run(req);
	await check('password', 'Şifre boş olamaz.').notEmpty().run(req);
	await check('email', 'Email boş olamaz.').notEmpty().run(req);
	await check('age', 'Yaş boş olamaz.').notEmpty().isNumeric().run(req);
	await check('gender', 'Cinsiyet boş olamaz.').notEmpty().run(req);
	await check('address', 'Adres alanı boş olamaz.').notEmpty().run(req);

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	// Check if user already exists with email and username
	const userExist = await User.findOne({ $or: [{ username }, { email }] }).exec()
	if(userExist) {
		return res.status(400).json({ message: 'Kullanıcı adı veya email zaten kullanılıyor.' });
	}

	const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS as string);

	// Format multipart form data multiline to string array
	const formattedAddresses = address.split('\n');
	const user = new User({
		username,
		password: hashedPassword,
		email,
		age,
		gender,
		profilePhoto: file.filename,
		address: formattedAddresses
	});

	await user.save();

	return res.status(200).json({ message: 'Kayıt başarılı.' });
}