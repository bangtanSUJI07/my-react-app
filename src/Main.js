import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { Pagination } from 'antd';

const API_URL ='http://www.omdbapi.com?apikey=f198b899';


const Main = () =>{
    const [ movies , setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');


    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // axios
        //   .get(API_URL + `&s=${title}`)
        //   .then((res) => {
        //     if(res){
        //         setMovies(data.Search);
        //     }
        //   });
        setMovies(data.Search);
        console.log(data.Search);
        
    }
    useEffect(()=>{
        searchMovies('Alien');
    },[])
 
    return(

        <div className='app'>
            <h1>BoraLand</h1>
            <div className='search'>
                <input
                    placeholder="Search For Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="SearchIcon"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0  ?
                    (
                    <div className='container'>
                        {/* movies.slice(0,4).map((movie) => */}
                        {movies.map((movie) => (
                            <>
                            <MovieCard movie={movie} />
                            </>
                        ))}
                        {/* <Pagination defaultCurrent={1} total={5} />; */}
                    </div>
                    ) : (
                    <div className='empty'>
                         <h2>No Movies Found</h2>
                    </div>
                    )
            }
        </div>
    )
}

export default Main;
