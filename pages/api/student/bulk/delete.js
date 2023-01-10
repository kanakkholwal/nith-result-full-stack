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

        if (method === 'DELETE') {
            const { bulkStudentArray } = req.body;

            let students = await Student.deleteMany({ RollNo: { $in: bulkStudentArray } });

            if (students) {
                return res.status(200).json({ message: `${students.deletedCount} student data are added` });
            } else {
                return res.status(400).json({ message: 'Students not deleted' });
            }
        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

