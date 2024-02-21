import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { MOVIE_BG } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-auto object-cover"
          src={MOVIE_BG}
          alt="bg_movies"
        />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
