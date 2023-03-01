const route = require('express').Router()
const user = require('./user');
const todo = require('./todo');
const auth = require('../middleware/auth');
const category = require('./category');

route.use('/', user)
route.use(auth)
route.use('/todo', todo)
route.use('/category', category)

module.exports = route