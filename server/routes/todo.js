const route = require('express').Router()
const TodoController = require('../controllers/todoController');

route.post('/', TodoController.create)
route.get('/', TodoController.getAll)
route.get('/:id', TodoController.getById)
route.patch('/:id', TodoController.update)
route.delete('/:id', TodoController.delete)

module.exports = route