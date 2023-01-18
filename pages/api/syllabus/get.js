import Subject from "@models/subject";
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
            const { SubjectCode } = req.body;


            let subject = await Subject.findOne({ SubjectCode });
            if (subject) {
                res.status(200).send(subject);
            } else {
                return res.status(400).send('That subject not exists!');
            }
        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

