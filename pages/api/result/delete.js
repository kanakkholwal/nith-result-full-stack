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
            const { RollNo } = req.body;
            let student = await Student.findOne({ RollNo });

            if (!student) {
                return res.status(400).send('That student not exists!');
            } else {
                Student.deleteOne({ RollNo }).then(function () {
                    console.log("student deleted"); // Success
                    return res.status(200).json({ message: 'That student is deleted from Database' });

                }).catch(function (error) {
                    console.log(error); // Failure
                    return res.status(500).json({
                        message: 'Failed to delete the student',
                        error
                    });

                });
            }
        }

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

