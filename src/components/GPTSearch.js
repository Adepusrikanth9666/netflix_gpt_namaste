import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchMovies from "./GPTSearchMovies";
import { MOVIE_BG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={MOVIE_BG} alt="bg_movies" />
      </div>
      <GPTSearchBar />
      <GPTSearchMovies />
    </div>
  );
};

export default GPTSearch;
