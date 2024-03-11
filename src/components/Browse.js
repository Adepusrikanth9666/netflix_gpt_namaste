import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowpalyingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const moviesData = useSelector((store) => store?.movies);

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
          {!moviesData ? (
            <Loading />
          ) : (
            <>
              <MainContainer />
              <Secondarycontainer />
            </>
          )}
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
