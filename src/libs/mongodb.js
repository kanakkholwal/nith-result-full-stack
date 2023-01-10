import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env'
    )
}

if (!MONGODB_DB) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env'
    )
}



export async function connectToDatabase() {
    const client = new MongoClient(MONGODB_URI);


    return {
        db: client.db(MONGODB_DB),
        client
    }




}