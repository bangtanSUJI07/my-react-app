import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import MovieDetails from './MovieDetails';
import Main from './Main';



const App2 = () =>{
    return(
        <div className='app'>
            <Router>      
                <Routes>
                  <Route path='/' element={<Main />}/>
                   <Route path="/Details" element={<MovieDetails />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App2;
