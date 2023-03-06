const { hashPass } = require("../helpers");
const User = require("../schema/userSchema");

class UserModel {
  static async create({ name, phoneNumber, email, username, password }) {
    return await User.create({
      name,
      phoneNumber: "+62" + phoneNumber,
      email,
      username,
      password: hashPass(password),
    });
  }

  static async findOne(username) {
    return await User.findOne({ username });
  }

  static async findByPk(id) {
    return await User.findOne({ _id: id });
  }
}

module.exports = UserModel;
