import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const CreateTraining: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [diaSemana, setDiaSemana] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('descricao', descricao);
            formData.append('diaSemana', diaSemana);
            if (file) {
                formData.append('file', file);
            }

            const response = await axios.post('http://localhost:4000/exercicios', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Exercício cadastrado com sucesso!', response.data);

            setNome('')
            setDescricao('')
            setDiaSemana('Selecione um dia')
            setFile(null)
            
        } catch (error) {
            console.log('Não foi possível cadastrar o exercício.', error);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile: any = e.target.files?.[0];
        setFile(selectedFile);
    };

    return (
        <div className='training'>
            <h2>Cadastrar novo treino</h2>

            <div className='form-cadastrar-exercicio'>
                <form onSubmit={handleSubmit}>

                    <label>
                        Nome do treino:<br></br>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>

                    <label>
                        Séries:<br></br>
                        <input
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </label>

                    <label>Dia da Semana:<br></br>
                        <select value={diaSemana} onChange={(e) => setDiaSemana(e.target.value)}>
                            <option>Selecione um dia</option>
                            <option value='segunda'>Segunda</option>
                            <option value='terca'>Terça</option>
                            <option value='quarta'>Quarta</option>
                            <option value='quinta'>Quinta</option>
                            <option value='sexta'>Sexta</option>
                        </select>
                    </label>

                    <label className='label-imagem'>
                        Imagem:<br></br>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>

                    <button type="submit" className='btn-criar-exercicio'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CreateTraining;
