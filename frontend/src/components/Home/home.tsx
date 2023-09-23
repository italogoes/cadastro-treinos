import { Link, NavLink } from 'react-router-dom';
import Monday from "../Days/monday"

const Home = () => {
    return(
        <>
            <h1>Página Home</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/monday">
                            Segunda feira
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Home