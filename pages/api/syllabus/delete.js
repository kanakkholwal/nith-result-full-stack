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

        if (method === 'DELETE') {
            const { SubjectCode } = req.body;
            let subject = await Subject.findOne({ SubjectCode });

            if (!subject) {
                return res.status(400).send('That subject not exists!');
            } else {
                Subject.deleteOne({ RollNo }).then(function () {
                    console.log("subject deleted"); // Success
                    return res.status(200).json({ message: 'That subject is deleted from Database' });

                }).catch(function (error) {
                    console.log(error); // Failure
                    return res.status(500).json({
                        message: 'Failed to delete the subject',
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

