const Todo = require('../schema/todoSchema');

class TodoModel {
    static async create(name, user, category) {
        return await Todo.create({name, status: false, user, category})
    }

    static async findAll(id, category){
        const options = {
            user: id
        }
        if(category){
            options.category = category 
        }
        return await Todo.find(options).populate('category')
    }


    static async findByPk(_id){
        return await Todo.findById(_id)
    }

    static async update(status, id){
        return await Todo.updateOne({_id: id}, {$set: {status}})
    }

    static async destroy(id){
        return await Todo.deleteOne({_id: id})
    }

    static async bulkDestroy(id){
        return await Todo.deleteMany({category:id})
    }
}

module.exports = TodoModel