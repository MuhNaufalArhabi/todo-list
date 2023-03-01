const { decode } = require('../helpers');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const { access_token } = req.headers
    
        const payload = decode(access_token)
    
        const user = await User.findByPk(payload.id)
    
        if(!user) {
            throw {name: 'InvalidToken'}
        }
    
        req.user = {
            id: payload.id
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = auth