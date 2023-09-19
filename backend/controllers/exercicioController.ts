const exercicioModel = require('../models/exercicioModel')

interface exercicio {
    nome: String,
    descricao: String | Number,
    diaSemana: any
}

exports.createExercicio = async (req: any, res: any) => {
    try {
        const { nome, descricao, diaSemana }: exercicio = req.body;
        const imagePath = req.file ? req.file.path : ''; // Caminho da imagem
        const exercicio = new exercicioModel({ nome, descricao, diaSemana, imagePath })
        await exercicio.save()
        res.status(201).json(exercicio)
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa.'})
    }
}