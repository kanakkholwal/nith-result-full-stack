import Subject from "@models/subject";
import connectMongo from '@libs/connectMongo';
import dotenv from "dotenv";
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {

    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const { method } = req;

        if (method === 'GET') {
            let subjects = await Subject.find({});
            if (subjects) {
                console.log('Saved subjects', subjects)
                res.status(200).send(subjects);
            } else {
                return res.status(400).send('That subjects not exists!');
            }

        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

