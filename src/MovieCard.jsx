import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


const MovieCard = ({ movie }) => {
    let navigate = useNavigate();
    return (
        <div className="movie">
            <div>
                <p><b>{movie.Year}</b></p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h4>{movie.Title}</h4>
                <button 
                onClick={()=> 
                navigate("/Details",{
                    state: {
                        movie : movie
                    }
                })
            }
                >See Details</button>
            </div>
        </div>
    )
}
export default MovieCard;