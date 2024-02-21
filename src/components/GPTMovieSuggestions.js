import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movienames } = useSelector((store) => store.gpt);
  if (!movieResults) return <h1>no movie results found</h1>;
  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div>
        {movienames.map(
          (movieName, index) =>
            movieResults[index] && (
              <MovieList
                key={movieName}
                title={movieName}
                moviesData={movieResults[index]}
              />
            )
        )}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
