import express from 'express';
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer')
const path = require('path')

// Controllers
const exercioController = require('./controllers/exercicioController')

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Configurar o middleware Multer para o upload de imagens
const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        cb(null, 'uploads/');
    },
    filename: (req: any, file: any, cb: any) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});

const upload = multer({ storage });

// Routes
app.get('/', (req: any, res: any) => {
    res.send('ola')
})

app.get('/exercicios', exercioController.searchExercicio)
app.post('/exercicios', upload.single('imagem'), exercioController.createExercicio)

app.listen(port, () => {
    console.log(`Servidor ligado na porta: ${port}!`)
})

const uri: string = 'mongodb+srv://projeto-cadastro-academia:projeto-cadastro-academia@projeto-cadastro-exerci.hxblypq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conectado ao MongoDB Atlas');
    })
    .catch((error: any) => {
        console.error('Erro ao conectar ao MongoDB Atlas:', error);
    });