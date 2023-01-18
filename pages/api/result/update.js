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

        if (method === 'PUT') {
            const { Name, RollNo, Branch, Batch, semesters } = req.body;

            let student = await Student.findOneAndUpdate({ RollNo }, { Name, RollNo, Branch, Batch, semesters }, {
                new: true
            });

            if (!student) {
                return res.status(400).send('That student not exists!');
            } else {
                res.status(200).send(student);
            }

        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

