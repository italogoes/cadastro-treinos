import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <main>
                <h1>FocusDay</h1>
            </main>
            <div className='lista-dias-semana'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/createTraining" className='btn-cadastrar'>
                            🏋️‍♀️ Cadastrar Treino 🏋️‍♀️
                            </NavLink>
                        </li>
                        <h3>Dias de treinos</h3>
                        <li>
                            <NavLink to="/monday" className='btn-dia-semana'>
                                Segunda-feira 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/monday" className='btn-dia-semana'>
                                Terça-feira
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/monday" className='btn-dia-semana'>
                                Quarta-feira
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/monday" className='btn-dia-semana'>
                                Quinta-feira
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/monday" className='btn-dia-semana'>
                                Sexta-feira
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Home