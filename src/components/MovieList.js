import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  return (
    moviesData && (
      <div className="px-6">
        <h1 className="text-lg md:text-3xl font-bold py-4 text-white">
          {title}
        </h1>
        <div className="flex overflow-x-scroll  ">
          <div className="flex gap-4 ">
            {moviesData?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
