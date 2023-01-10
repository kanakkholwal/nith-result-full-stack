import mongoose from 'mongoose';
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

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(MONGODB_URI + "/" + MONGODB_DB, {
        useUnifiedTopology: true,

        useNewUrlParser: true
    });
    return handler(req, res);
};

export default connectDB;