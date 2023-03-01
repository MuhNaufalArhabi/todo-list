const Todo = require('../models/todo');
const {ObjectId} = require('mongodb');

class TodoController{
    static async create(req, res, next) {
        try {
            const {name, category} = req.body
            await Todo.create(name, new ObjectId(req.user.id), new ObjectId(category))
            res.status(201).json({message: "Succes create Todo"})            
        } catch (error) {
            next(error)
        }
    }

    static async getAll(req, res, next) {
        try {
            const id = new ObjectId(req.user.id)
            let {category} = req.query
            if (category){
                category = new ObjectId(category)
            }
            const todo = await Todo.findAll(id,category)
            res.status(200).json(todo)
        } catch (error) {
            next(error)
        }
    }

    static async getById(req, res, next) {
        try {
            const id = req.params.id
            const todo = await Todo.findByPk(id)
            res.status(200).json(todo)
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id
            const status = req.body.status
            await Todo.update(status, id)
            res.status(200).json({message: 'Succes update todo'})
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const id = new ObjectId(req.params.id)
            const todo = await Todo.destroy(id)
            res.status(200).json({message: 'Succes delete todo', todo})
        } catch (error) {
            next(error)  
        }
    }
}

module.exports = TodoController