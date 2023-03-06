const error = (err, req, res, next) => {
    console.log(err.message)
    let code = 500
    let message = 'Internal server error'

    if(err.name === 'ValidationError'){
        code =400
        message = err._message
    } else if(err.name === 'MongoServerError'){
        code = 400
        message = "Duplicate input"
    } else if(err.name === 'InvalidToken' || err.name === 'JsonWebTokenError'){
        code = 401
        message = "No Authorize"
    } else if(err.name === 'userOrPasswordWrong'){
        code = 401
        message = 'Email or password wrong'
    } else if(err.name === 'ValidationPhone'){
        code = 400
        message = "Phone number start without 0 or +62"
    }

    res.status(code).json({message})
}

module.exports = error