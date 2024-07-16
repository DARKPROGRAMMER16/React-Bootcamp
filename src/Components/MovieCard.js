import React from 'react'
import './movie.css'

const MovieCard = () => {
  return (
    <div className='card'>
        <div className='movie-img'>
            <img src='https://www.hindustantimes.com/ht-img/img/2024/04/27/550x309/kalki_1714219826036_1714219826326.jpg'/>
        </div>
        <h4>Movie name</h4>
        <p>Ratings : 5&#9734;</p>
    </div>
  )
}

export default MovieCard