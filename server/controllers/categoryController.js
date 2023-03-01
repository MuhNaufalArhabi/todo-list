const Categoty = require('../models/category');
const { ObjectId } = require('mongodb');

class CategotyController {
    static async create(req, res, next){
        try {
            const {name} = req.body
            await Categoty.create(name, new ObjectId(req.user.id))
            res.status(201).json({message: "Succes create category"})
        } catch (error) {
            next(error)
        }
    }

    static async getAll(req, res, next){
        try {
            const category = await Categoty.findAll(new ObjectId(req.user.id))
            res.status(200).json(category)
        } catch (error) {
            next(error)
        }
    }

    static async getById(req, res, next) {
        try {
            const id = new ObjectId(req.params.id)
            const category = await Categoty.findByPk(id)
            res.status(200).json(category)
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next){
        try {
            const id = req.params.id
            await Categoty.destroy(id)
            res.status(200).json({message: 'Succes delete category'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategotyController