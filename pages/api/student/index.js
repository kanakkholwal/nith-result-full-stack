import Student from "@models/student";
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
            let students = await Student.find({});
            if (students) {
                console.log('Saved students', students)
                res.status(200).send(students);
            } else {
                return res.status(400).send('That students not exists!');
            }

        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

