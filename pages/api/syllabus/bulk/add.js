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

        if (method === 'POST') {
            const { bulkStudentArray } = req.body;

            const options = { ordered: true };
            let students = await Student.insertMany([...bulkStudentArray], options);

            if (students) {
                return res.status(200).json({ message: `${students.insertedCount} student data are added` });
            } else {
                return res.status(400).json({ message: 'Students not inserted' });
            }
        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

