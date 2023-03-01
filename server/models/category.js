const Todo = require('../schema/categorySchema');

class TodoModel {
    static async create(name, user){
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        return await Todo.create({name, user, color})
    }

    static async findAll(id){
        return await Todo.find({user: id})
    }

    static async findByPk(id){
        return await Todo.findById({_id: id})
    }

    static async destroy(id){
        return await Todo.remove({_id: id})
    }
}

module.exports = TodoModel