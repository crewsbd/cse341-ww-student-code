require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function query(queryObject) {
    await client.connect();
    result = await client.db("week1").collection("users").findOne(queryObject);
    await client.close();
    return result;
}

module.exports = { query };
