import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowpalyingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />

      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <Secondarycontainer />
        </>
      )}

      {/* 
        Main Video container
          -videoBackground
          -videotitle
        Secondarycontainer
          -movieList *n
            -cards*n
      
      */}
    </div>
  );
};

export default Browse;
