import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { MOVIE_BG } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={MOVIE_BG} alt="bg_movies" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
