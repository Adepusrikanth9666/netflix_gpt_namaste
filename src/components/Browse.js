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
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const error = useSelector((store) => store?.movies?.isMovieDataError);

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
          {error ? (
            <ErrorPage />
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
