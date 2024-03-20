import express from 'express';
import mongoose from 'mongoose';
import { ServerApiVersion } from 'mongodb';
import * as userController from './controllers/user';
import * as restaurantController from './controllers/restaurant';
import { authenticateToken } from './services/auth';
import multer from 'multer';
import crypto from 'crypto';
import {seedDatabase} from './seedData';

require('dotenv').config();

const mongoURI = 'mongodb://rstapp:12345678@localhost:27017/restaurantAppDb';
mongoose.connect(mongoURI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
}).then(() => {
	console.log('Connected to MongoDB')
	seedDatabase()
	//ping db
	mongoose.connection.db.admin().ping()
		.then((result: any) => {
			console.log('Ping result: ', result);
		})
}).catch((error) => {
	console.log('Error connecting to MongoDB: ', error);
});

const app = express()
// Multer Configuration
const storage = multer.diskStorage(
	{
		destination: (req, file, cb) => {
			cb(null, 'uploads/'); // Profil resmini yüklediği yer.
		},	
		filename: (req, file, cb) => {
			// Dosya adını rastgele oluşturuyoruz.
			const ext = file.originalname.split('.').pop();
			const name = crypto.randomBytes(16).toString('hex') + '.' + ext;
			cb(null, name); // Request içine gidecek olan dosya adı.
		},
	},
);
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
//Auth Routes
app.post('/auth/login', userController.login);
app.post('/auth/register', upload.single('profilePhoto'), userController.register);

app.get('/restaurant', restaurantController.getRestaurants);

app.listen(3000, () => console.log(`Server running on port 3000`));
