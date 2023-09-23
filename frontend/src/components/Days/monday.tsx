import { useState, useEffect, ReactElement } from "react"
import axios from "axios"

interface Exercicio {
    id: React.Key
    nome: String
    descricao: String
    src: string
}

const Monday = () => {
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
    },[])
    console.log(data)

    return(
        <>
            <h1>Exercícios da Segunda-Feira</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>Exercício: {item.nome}</h1>
                    <img src={`http://localhost:4000/${item.src}`} alt="" />
                    <p>Séries: {item.descricao}</p>
                </div>
            ))}
        </>
    )
}

export default Monday