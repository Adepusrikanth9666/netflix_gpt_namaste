import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowpalyingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {/* 
        Main Video container
          -videoBackground
          -videotitle
        Secondarycontainer
          -movieList *n
            -cards*n
      
      */}
      <MainContainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
