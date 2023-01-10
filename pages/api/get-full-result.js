import { connectToDatabase } from "@libs/mongodb"

export default async function handler(req, res) {
    if (req.method === 'GET') {

        const { client, db } = await connectToDatabase();

        const isConnected = await client.connect();

        if (isConnected) {
            console.log("connected ...")
            const cursor = db.collection('result').find({});
            console.log(cursor);
            res.status(200).json({ cursor })

        }
        else {
            res.status(500).json({ error: "Couldn't connect to database" })
        }



    }
}
