const exercicioModel = require('../models/exercicioModel');

interface exercicio {
    nome: string;
    descricao: string | number;
    diaSemana: any;
}

exports.createExercicio = async (req: any, res: any) => {
    try {
        const { nome, descricao, diaSemana }: exercicio = req.body;

        const file = req.file

        const exercicio = new exercicioModel({ nome, descricao, diaSemana, src: file.path });

        await exercicio.save();

        res.status(201).json(exercicio);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar exercício.' });
    }
};


exports.searchExercicio = async (req: any, res: any) => {
    try {
        const dados = await exercicioModel.find({});
        res.json({dados})
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os dados no banco...', error });
    }
};