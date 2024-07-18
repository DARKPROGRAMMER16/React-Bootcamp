import React from "react";
import "./movie.css";

const MovieCard = (props) => {
  const { movieTitle, moviePoster } = props;

  return (
    <div className="card">
      <div className="card__image-container">
        <img src={moviePoster} alt="img" />
      </div>
      <div className="card__content">
        <h3>{movieTitle}</h3>
        <p className="techs">Rating : 5&#9734;</p>
      </div>
    </div>
  );
};

export default MovieCard;
