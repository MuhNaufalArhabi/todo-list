const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categoryScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('category', categoryScheme)