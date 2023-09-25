import { useState, useEffect } from "react"
import axios from "axios"

interface Exercicio {
    _id: any
    nome: String
    descricao: String
    src: string
    diaSemana: string
}

const Thursday = () => {
    const [data, setData] = useState<Exercicio[]>([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:4000/exercicios')
                const updatedData = response.data.dados.map((item: Exercicio) => ({
                    ...item,
                    src: item.src ? item.src.replace(/\\/g, '/') : ''
                }));
                setData(updatedData);
            } catch (error) {
                console.log('Erro ao buscar dados: ', error)
            }
        }

        fetchData()
    }, [])
    
    const handleDelete = async (exercicioId: any) => {
        try {
            await axios.delete(`http://localhost:4000/exercicios/${exercicioId}`);

            // Atualize o estado para refletir a exclusão
            setData((prevData) => prevData.filter((item) => item._id !== exercicioId));
        } catch (error) {
            console.error('Erro ao excluir exercício: ', error);
        }
    }

    return (
        <div className="exercicios-container">
            <h2>Exercícios da Quinta-Feira</h2>
            {data.map((item) => (
                item.diaSemana == 'quinta' ? (
                    <div key={item._id} className="exercicio-single">
                        <input type="text" hidden id={item._id} />
                        <h4 className="nome">Exercício: {item.nome}</h4>
                        <img className="imagem" src={`http://localhost:4000/${item.src}`} alt="Imagem representando o treino" />
                        <p className="series">Séries: {item.descricao}</p>
                        <button className="btn-excluir-exercicio" onClick={() => handleDelete(item._id)}><img width="40" height="40" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever"/></button>
                    </div>
                ) : null
            ))}
        </div>
    )
}

export default Thursday