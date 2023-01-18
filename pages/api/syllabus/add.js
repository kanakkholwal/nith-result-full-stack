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

        if (method === 'POST') {
            const { SubjectName, SubjectCode, Units, Books, details } = req.body;

            let subject = await Subject.findOne({ SubjectCode });

            if (subject) {
                return res.status(400).send('That subject already exists!');
            } else {
                subject = new Subject({ SubjectName, SubjectCode, Units, Books, details });
                await subject.save();
                res.status(200).send(student);
            }
        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

