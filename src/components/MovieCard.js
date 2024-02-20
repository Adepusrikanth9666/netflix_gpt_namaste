import React from "react";
import { IMGAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img src={IMGAGE_CDN + posterPath} alt="movie_card" />
    </div>
  );
};

export default MovieCard;
