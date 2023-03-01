const User = require("../models/user");
const {ObjectId} = require('mongodb');
const { comparePass, encode } = require("../helpers");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, phoneNumber, email, username, password } = req.body;
      await User.create({ name, phoneNumber, email, username, password });
      res.status(201).json({ message: "Succes create account" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne(username);

      if (!user) {
        throw { name: "userOrPasswordWrong" };
      }
      if (!comparePass(password, user.password)) {
        throw { name: "userOrPasswordWrong" };
      }
      const access_token = encode({id: user._id.toString()});
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
