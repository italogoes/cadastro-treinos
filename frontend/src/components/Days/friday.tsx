import { useState, useEffect } from "react"
import axios from "axios"

interface Exercicio {
    id: React.Key
    nome: String
    descricao: String
    src: string
    diaSemana: string
}

const Friday = () => {
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
    console.log(data)

    return (
        <div className="exercicios-container">
            <h2>Exercícios da Sexta-Feira</h2>
            {data.map((item) => (
                item.diaSemana == 'sexta' ? (
                    <div key={item.id} className="exercicio-single">
                        <h4 className="nome">Exercício: {item.nome}</h4>
                        <img className="imagem" src={`http://localhost:4000/${item.src}`} alt="Imagem representando o treino" />
                        <p className="series">Séries: {item.descricao}</p>
                    </div>
                ) : null
            ))}
        </div>
    )
}

export default Friday