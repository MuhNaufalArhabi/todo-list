const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET

const hashPass = (pass) => {
    return bcrypt.hashSync(pass)
}

const comparePass = (pass, hash) => {
    return bcrypt.compareSync(pass, hash)
}

const encode = (payload) => {
    return jwt.sign(payload, secret)
}

const decode = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {
    hashPass,
    comparePass,
    encode,
    decode
}