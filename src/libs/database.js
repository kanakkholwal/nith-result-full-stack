import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const client = new MongoClient(process.env.MONGODB_URL);

const database = client.db("result-db");

export default database;
