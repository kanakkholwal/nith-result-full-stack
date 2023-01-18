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

        if (method === 'PUT') {
            const { SubjectName, SubjectCode, Units, Books, details } = req.body;

            let subject = await Subject.findOneAndUpdate({ SubjectCode }, { SubjectName, Units, Books, details }, {
                new: true
            });

            if (!subject) {
                return res.status(400).send('That subject not exists!');
            } else {
                res.status(200).send(subject);
            }

        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

