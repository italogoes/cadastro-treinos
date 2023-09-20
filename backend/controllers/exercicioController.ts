const exercicioModel = require('../models/exercicioModel')
const multer = require('multer')

interface exercicio {
    nome: String,
    descricao: String | Number,
    diaSemana: any
}

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req: any, file: any, cb: any) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage });

exports.createExercicio = upload.single('image'), async (req: any, res: any) => {
    try {
        const { nome, descricao, diaSemana }: exercicio = req.body;
        console.log(nome)

        if(nome != '' || descricao != ''){
            const imagePath = req.file ? req.file.path : ''; // Caminho da imagem
            const exercicio = new exercicioModel({ nome, descricao, diaSemana, imagePath })
            await exercicio.save()
            res.status(201).json(exercicio)
        } else {
            res.status(400).json({ message: 'Erro ao criar tarefa.' })
            return
        }
        
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa.'})
        return
    }
}

exports.searchExercicio = async (req: any, res: any) => {
    try {
        const dados = await exercicioModel.find({})
        res.json(dados)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os dados no banco...', error })
    }
}