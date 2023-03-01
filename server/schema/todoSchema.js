const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
}) 

module.exports = mongoose.model('todo', TodoSchema)