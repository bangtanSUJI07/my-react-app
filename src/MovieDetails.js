import React from 'react';
import { useLocation } from 'react-router-dom';
import './details.css';

const MovieDeatils = ({ movie }) => {
    const location = useLocation();
    console.log(location.state.movie.Actor)
    return (
        <div>
            <h1 className='name'><i>{location.state.movie.Title}</i></h1>
              <img src={location.state.movie.Poster} alt='Poster' className='imgm'/>
                <table className='info'>
                    <tr>
                        <td className='head'>Year : </td>
                        <td>{location.state.movie.Year}</td>
                    </tr>
                    <tr>
                        <td className='head'>imdbID : </td>
                        <td>{location.state.movie.imdbID}</td>
                    </tr>
                    <tr>
                        <td className='head'>Type : </td>
                        <td>{location.state.movie.Type}</td>
                    </tr>
                </table>

      </div>
    )
}
export default MovieDeatils;