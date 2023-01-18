import Student from "@models/student";
import connectMongo from '@libs/connectMongo';

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
            const { Name, RollNo, } = req.body;


            let student = await Student.findOne({ RollNo });
            if (student) {
                res.status(200).send(student);
            } else {
                return res.status(400).send('That student not exists!');
            }
        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

