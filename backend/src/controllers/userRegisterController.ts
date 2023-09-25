const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Model
const userRegisterModel = require('../models/userRegister')

interface UserRegister {
    nome: String
    email: String
    password: String
}

exports.createUser = async (req: any, res: any) => {
    try {
        const { nome, email, password }: UserRegister = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new userRegisterModel({ nome, email, password: hashedPassword })
        await user.save()

        res.json({ message: 'Usuário cadastrado com sucesso!' })
    } catch (error) {
        res.json(({ message: 'Erro ao cadastrar usuário', error }))
    }
}

exports.loginUser = async (req: any, res: any) => {
    try {
        const { email, password }: UserRegister = req.body
        const user = await userRegisterModel.findOne({ email })

        if(!user) {
            return res.status(401).json({ error: 'Credenciais inválidas.' });
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword) {
            return res.status(401).json({ error: 'Credenciais inválidas.' });
        }

        const token = jwt.sign({ userId: user._id }, 'SEU_SEGREDO_JWT');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login.' });
    }
}