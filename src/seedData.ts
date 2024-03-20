import { IRestaurant } from "./interfaces/restaurant";
import { MongoClient } from 'mongodb';
import mongoose from "mongoose";
import { IMenu } from "./interfaces/menu";

const _menus: IMenu[] = [
	{
		name: "KFC Kadıköy İskele Menü",
		banner: "kfc-banner.png",
		restaurant: "KFC",
		products: [
			{
				name: "Bucket",
				price: 50
			},
			{
				name: "Twister",
				price: 20
			},
			{
				name: "Crispy Tavuk",
				price: 30
			},
			{
				name: "Hot Wings",
				price: 25
			}
		]
	},
	{
		name: "KFC Osmangazi Anatolium AVM Menü",
		banner: "kfc-banner.png",
		restaurant: "KFC",
		products: [
			{
				name: "Bucket",
				price: 50
			},
			{
				name: "Twister",
				price: 20
			},
			{
				name: "Crispy Tavuk",
				price: 30
			},
			{
				name: "Hot Wings",
				price: 25
			}
		]
	},
	{
		name: "Burger King Kadıköy İskele Menü",
		banner: "burgerking-banner.png",
		restaurant: "Burger King",
		products: [
			{
				name: "Whopper",
				price: 30
			},
			{
				name: "King Chicken",
				price: 25
			},
			{
				name: "King Nuggets",
				price: 20
			},
			{
				name: "King Sundae",
				price: 15
			}
		]
	},
	{
		name: "Burger King Bursa Nilüfer Podyum AVM Menü",
		banner: "burgerking-banner.png",
		restaurant: "Burger King",
		products: [
			{
				name: "Whopper",
				price: 30
			},
			{
				name: "King Chicken",
				price: 25
			},
			{
				name: "King Nuggets",
				price: 20
			},
			{
				name: "King Sundae",
				price: 15
			}
		]
	},
	{
		name: "Starbucks Kadıköy İskele Menü",
		banner: "starbucks-banner.png",
		restaurant: "Starbucks",
		products: [
			{
				name: "Latte",
				price: 15
			},
			{
				name: "Cappucino",
				price: 20
			},
			{
				name: "Mocha",
				price: 25
			},
			{
				name: "Frappucino",
				price: 30
			}
		]
	},
	{
		name: "Starbucks Bursa Kent Meydanı Menü",
		banner: "starbucks-banner.png",
		restaurant: "Starbucks",
		products: [
			{
				name: "Latte",
				price: 15
			},
			{
				name: "Cappucino",
				price: 20
			},
			{
				name: "Mocha",
				price: 25
			},
			{
				name: "Frappucino",
				price: 30
			}
		]
	},
	{
		name: "Köfteci Yusuf Kadıköy İskele Menü",
		banner: "kofteci-yusuf-banner.png",
		restaurant: "Köfteci Yusuf",
		products: [
			{
				name: "Köfte",
				price: 15
			},
			{
				name: "Tavuk Şiş",
				price: 20
			},
			{
				name: "Adana Kebap",
				price: 25
			},
			{
				name: "Urfa Kebap",
				price: 30
			}
		]
	},
	{
		name: "Köfteci Yusuf Bursa Yıldırım Menü",
		banner: "kofteci-yusuf-banner.png",
		restaurant: "Köfteci Yusuf",
		products: [
			{
				name: "Köfte",
				price: 15
			},
			{
				name: "Tavuk Şiş",
				price: 20
			},
			{
				name: "Adana Kebap",
				price: 25
			},
			{
				name: "Urfa Kebap",
				price: 30
			}
		]
	}

]
const placeholderMenuId = new mongoose.Types.ObjectId()
let _restaurants: IRestaurant[] = [
	{
		name: "KFC",
		description: "Kentucky Fried Chicken",
		logo: "kfc.png",
		address: {
			city: "İstanbul",
			district: "Kadıköy",
			details: "Kadıköy İskele",
			coordinates: {
				latitude: 39.01384,
				longitude: 25.03539
			}
		},
		branchCode: "KFC-KADIKÖY",
		type: ["Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "KFC",
		description: "Kentucky Fried Chicken",
		logo: "kfc.png",
		address: {
			city: "Bursa",
			district: "Osmangazi",
			details: "Anatolium AVM",
			coordinates: {
				latitude: 40.01384,
				longitude: 23.03539
			}
		},
		branchCode: "KFC-OSMANGAZI",
		type: ["Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "Burger King",
		description: "Burger King",
		logo: "burgerking.png",
		address: {
			city: "İstanbul",
			district: "Kadıköy",
			details: "Kadıköy İskele",
			coordinates: {
				latitude: 41.01384,
				longitude: 29.03539
			}
		},
		branchCode: "BK-KADIKÖY",
		type: ["Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "Burger King",
		description: "Burger King",
		logo: "burgerking.png",
		address: {
			city: "Bursa",
			district: "Nilüfer",
			details: "Podyum AVM Nilüfer/Bursa",
			coordinates: {
				latitude: 40.01384,
				longitude: 28.03539
			}
		},
		branchCode: "BK-NILUFER",
		type: ["Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "Starbucks",
		description: "Starbucks",
		logo: "starbucks.png",
		address: {
			city: "İstanbul",
			district: "Kadıköy",
			details: "Kadıköy İskele",
			coordinates: {
				latitude: 41.01384,
				longitude: 29.03539
			}
		},
		branchCode: "STARBUCKS-KADIKÖY",
		type: ["Cafe","Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "Starbucks",
		description: "Starbucks Kent Meydanı AVM",
		logo: "starbucks.png",
		address: {
			city: "Bursa",
			district: "Osmangazi",
			details: "Kent Meydanı AVM",
			coordinates: {
				latitude: 27.01384,
				longitude: 31.03539
			}
		},
		branchCode: "STARBUCKS-KENT-MEYDANI",
		type: ["Cafe","Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "Köfteci Yusuf",
		description: "Köfteci Yusuf Kadıköy İskele",
		logo: "kofteciyusuf.png",
		address: {
			city: "İstanbul",
			district: "Kadıköy",
			details: "Kadıköy İskele",
			coordinates: {
				latitude: 35.01384,
				longitude: 24.03539
			}
		},
		branchCode: "KOFTECIYUSUF-KADIKÖY",
		type: ["Türk Mutfağı", "Fast Food"],
		menu: placeholderMenuId
	},
	{
		name: "Köfteci Yusuf",
		description: "Köfteci Yusuf Yıldırım Bursa",
		logo: "kofteciyusuf.png",
		address: {
			city: "Bursa",
			district: "Yıldırım",
			details: "Hastane Caddesi No: 12 Yıldırım/Bursa",
			coordinates: {
				latitude: 18.4,
				longitude: 22.9
			}
		},
		branchCode: "KOFTECIYUSUF-YILDIRIM",
		type: ["Türk Mutfağı","Fast Food"],
		menu: placeholderMenuId
	}
]

export async function seedDatabase(){
	const uri = 'mongodb://rstapp:12345678@localhost:27017/restaurantAppDb';
	const client = new MongoClient(uri);

	try {
    await client.connect(); // Veritabanına bağlan

    const database = client.db('restaurantAppDb'); // Veritabanını seç

		// Collection isimlerini getir hali hazırda veriler varsa seed verilerini ekleme.
    const allCollections = await database.listCollections().toArray();
    const allCollectionNames = allCollections.map(collection => collection.name);
		
    // Seed verilerini koleksiyona ekle
		if(!allCollectionNames.includes('menus') && !allCollectionNames.includes('restaurants')){
			const menuCollection = database.collection('menus');
			const menus = await menuCollection.insertMany(_menus);

			for (const key in menus.insertedIds) {
				_restaurants[parseInt(key)].menu = menus.insertedIds[key]
				// rastgele rating atıyoruz.
				const rating = Math.floor(Math.random() * 10) + 1;
				_restaurants[parseInt(key)].rating = rating;
			}	
			const restaurantCollection = database.collection('restaurants');
			await restaurantCollection.insertMany(_restaurants);
			console.log('Seed verileri başarıyla eklendi.');
		}else{
			console.log('Seed verileri zaten ekli.');
		}
  } catch (error) {
    console.error('Seed verileri eklenirken bir hata oluştu:', error);
  } finally {
    await client.close(); // Bağlantıyı kapat
  }
}