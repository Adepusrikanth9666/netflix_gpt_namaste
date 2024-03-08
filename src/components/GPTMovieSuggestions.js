import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/langaugeConsants";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const GPTMovieSuggestions = () => {
  const { movieResults, movienames } = useSelector((store) => store.gpt);
  const selectedLangauge = useSelector((store) => store.config.lang);
  const isLoading = useSelector((store) => store.gpt.isLoadingGpt);
  const error = useSelector((store) => store.gpt.isGptMovieDataError);
  console.log(isLoading, error, "isLoading");
  if (isLoading) {
    return <Loading />;
  }

  if (!movieResults && error) {
    return (
      <h1 className="font-bold italic text-2xl py-10 text-white flex justify-center align-middle">
        {lang[selectedLangauge].noResultsFound}
      </h1>
    );
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    movienames && (
      <div className="p-4 m-4 bg-black text-white opacity-90">
        <div>
          {movienames.map(
            (movieName, index) =>
              movieResults[index] && (
                <MovieList
                  key={movieName}
                  title={movieName}
                  moviesData={movieResults[index]}
                />
              )
          )}
        </div>
      </div>
    )
  );
};

export default GPTMovieSuggestions;
