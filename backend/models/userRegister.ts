let mongoose = require('mongoose')

const userRegisterSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const UserRegister = mongoose.model('UserRegister', userRegisterSchema)

module.exports = UserRegister