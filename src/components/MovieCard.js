import React from "react";
import { IMGAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return <h1>No poster present</h1>;
  return (
    <div className="w-48 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:duration-300 ">
      <img src={IMGAGE_CDN + posterPath} alt="movie_card" />
    </div>
  );
};

export default MovieCard;
