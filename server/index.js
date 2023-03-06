require('dotenv').config();

const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT ||4000
const route = require('./routes');
const error = require('./middleware/error-handler');

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@todo-list.2279mtg.mongodb.net/?retryWrites=true&w=majority`)


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(route)

app.use(error)

app.listen(port)
// mongoConnect()
// .then(() => {
//     app.listen(port)
// })
// .catch((err) => {
//     console.log(err)
// })