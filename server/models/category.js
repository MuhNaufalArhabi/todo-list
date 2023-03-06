const Category = require("../schema/categorySchema");
const Todo = require("../schema/todoSchema");

class CategoryModel {
  static async create(name, user) {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return await Category.create({ name, user, color });
  }

  static async findAll(id) {
    return await Category.find({ user: id });
  }

  static async findByPk(id) {
    return await Category.findById({ _id: id });
  }

  static async destroy(id) {
    return await Category.remove({ _id: id });
  }
}

module.exports = CategoryModel;
