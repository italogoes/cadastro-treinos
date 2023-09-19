import express from 'express';
const mongoose = require('mongoose');

const exercioController = require('./controllers/exercicioController')

const app = express()
const port = 4000

app.get('/', (req: any, res: any) => {
    res.send('ola')
})

app.post('/exercicios', exercioController.createExercicio)

app.listen(port, () => {
    console.log(`Servidor ligado na porta: ${port}!`)
})

const uri = 'mongodb+srv://projeto-cadastro-academia:projeto-cadastro-academia@projeto-cadastro-exerci.hxblypq.mongodb.net/?retryWrites=true&w=majority';

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