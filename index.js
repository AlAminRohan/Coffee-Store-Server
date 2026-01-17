const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//coffee_monster
// 5rOwKl9NZwlqlGOf

// console.log(process.env.DB_User);
// console.log(process.env.DB_Password);

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.99nsciw.mongodb.net/?appName=Cluster0`;

// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.99nsciw.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req,res) =>{
    res.send('This is Coffee Store Server');
})

app.listen(port, () => {
    console.log(`Coffee Store Server is running on port: ${port}`);
});