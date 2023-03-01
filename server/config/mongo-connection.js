// const { MongoClient } = require('mongodb');

// const uri = process.env.CONNECTION_MONGODB

// let db

// const client = new MongoClient(uri)

// async function mongoConnect(){
//     try {
//         db = client.db("todo_db")
//     } catch (error) {
//         await client.close()
//     }
// }

// function getDB() {
//     return db
// }

// module.exports = { getDB, mongoConnect}

// const mongoose = require('mongoose');
// require('dotenv').config()

// mongoose.connect(process.env.CONNECTION_MONGODB)
//     .then()