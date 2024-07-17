import React from "react";
import "./movie.css";

const MovieCard = () => {
  return (
    <div class="card">
      <div class="card__image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy48LdLyh7RDkJSL5WzU0gCzEypy8BEmGadA&s"
          alt="img"
        />
      </div>
      <div class="card__content">
        <h3>Kalki</h3>
        <p class="techs">Rating : 5&#9734;</p>
      </div>
    </div>
  );
};

export default MovieCard;
