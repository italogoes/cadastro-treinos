import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/home'
import CreateTraining from './components/CreateTraining/createTraining'
import Header from './components/Header/header'
import Monday from './components/Days/monday'
import Tuesday from './components/Days/tuesday'
import Wednesday from './components/Days/wednesday'
import Thursday from './components/Days/thursday'
import Friday from './components/Days/friday'

const RouterApp = () => {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/createTraining' element={ <CreateTraining/> }/>
                <Route path='/monday' element={ <Monday/> }/>
                <Route path='/tuesday' element={ <Tuesday/> }/>
                <Route path='/wednesday' element={ <Wednesday/> }/>
                <Route path='/thursday' element={ <Thursday/> }/>
                <Route path='/friday' element={ <Friday/> }/>
            </Routes>
        </Router>
    )
}

export default RouterApp