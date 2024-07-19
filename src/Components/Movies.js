import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./movies.css";
import { DataContext } from "../DataProvider";

const Movies = () => {
  const { newMovies, setNewMovies } = useContext(DataContext);

  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const apikey = "1e0c32a8";

  const fetchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?&apikey=${apikey}&s=&s=${searchMovie}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log({ data });
    if (data.Response === "True") {
      setMovies(data.Search);
      setNewMovies(data.Search);
    }
    if (data.Response === "False") {
      setMovies([]);
      setNewMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchMovie]);

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        {/* <button onClick={fetchMovies}>Fetch movies</button> */}
      </div>
      {newMovies.length || !searchMovie ? (
        <div className="movieContainer">
          {newMovies.map((movie) => {
            return (
              <MovieCard
                movieTitle={movie.Title}
                moviePoster={movie.Poster}
                key={movie.imdbID}
              />
            );
          })}
        </div>
      ) : (
        <h1>No results</h1>
      )}
    </>
  );
};

export default Movies;
