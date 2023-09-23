import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/home'
import Monday from './components/Days/monday'

const RouterApp = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/monday' element={ <Monday/> }/>
            </Routes>
        </Router>
    )
}

export default RouterApp