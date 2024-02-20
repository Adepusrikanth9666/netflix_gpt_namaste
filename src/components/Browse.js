import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowpalyingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  useNowPlayingMovies();
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
