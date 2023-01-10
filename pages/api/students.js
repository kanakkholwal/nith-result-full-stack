import Student from "@models/student";
import connectMongo from '@libs/connectMongo';
// import connectDB from '@middleware/mongoose';

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
        switch (method) {
            case 'POST':
                {
                    const { Name, RollNo, Branch, Batch, semesters } = req.body;

                    let student = await Student.findOne({ RollNo });

                    if (student) {
                        return res.status(400).send('That student already exists!');
                    } else {
                        student = new Student({ Name, RollNo, Branch, Batch, semesters });
                        await student.save();
                        res.status(200).send(student);
                    }
                }
                break
            case 'PUT': {

                const { Name, RollNo, Branch, Batch, semesters } = req.body;

                let student = await Student.findOne({ RollNo });

                if (!student) {
                    return res.status(400).send('That student not exists!');
                } else {
                    res.status(200).send("student");
                }

            }
                break
            case 'DELETE':
                {
                    const { Name, RollNo, Branch, Batch, semesters } = req.body;
                    let student = await Student.findOne({ RollNo });

                    if (!student) {
                        return res.status(400).send('That student not exists!');
                    } else {
                        Student.deleteOne({ RollNo }).then(function () {
                            console.log("Blog deleted"); // Success
                            return res.status(200).send('That student is deleted from Database');

                        }).catch(function (error) {
                            console.log(error); // Failure
                            return res.status(500).send('Failed to delete the student');

                        });
                    }

                }
                break

            default:
                const { Name, RollNo, Branch, Batch, semesters } = req.body;


            // let student = await Student.findOne({ RollNo });
            // if (student) {
            //     res.status(200).send(student);
            // } else {
            //     return res.status(400).send('That student not exists!');
            // }
        }


    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

