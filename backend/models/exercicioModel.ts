let mongoose = require('mongoose')

const exercicioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    diaSemana: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    imagePath: String
})

const Exercicio = mongoose.model('Exercicio', exercicioSchema)

module.exports = Exercicio