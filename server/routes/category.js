const route = require('express').Router()
const CategotyController = require('../controllers/categoryController');

route.post('/', CategotyController.create)
route.get('/', CategotyController.getAll)
route.get('/:id', CategotyController.getById)
route.delete('/:id', CategotyController.delete)

module.exports = route