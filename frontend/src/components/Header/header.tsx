import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                FocusDay
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="user">
                    <img src="https://img.icons8.com/cotton/64/user-male-circle.png" alt="user-male-circle"/>
                </div>
            </div>
        </div>
    )
}

export default Header