import express from 'express';
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const upload = require('./config/multer')

// Controllers
const exercioController = require('./controllers/exercicioController')
const userResgisterController = require('./controllers/userRegisterController')

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cors())

// Routes Exercícios
app.get('/exercicios', exercioController.searchExercicio)
app.post('/exercicios', upload.single('file'), exercioController.createExercicio)

// Routes Users
app.post('/registrar', userResgisterController.createUser)
app.post('/entrar', userResgisterController.loginUser)

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