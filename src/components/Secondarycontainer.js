import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const moviesData = useSelector((store) => store?.movies);
  return (
    moviesData.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-80 relative z-20 pl-12">
          <MovieList
            title={"Now Playing"}
            moviesData={moviesData?.nowPlayingMovies}
          />
          <MovieList title={"Popular"} moviesData={moviesData?.popularMovies} />
          <MovieList
            title={"Top Rated"}
            moviesData={moviesData?.topRatedMovies}
          />
          <MovieList
            title={"Up Coming Movies"}
            moviesData={moviesData?.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default Secondarycontainer;
