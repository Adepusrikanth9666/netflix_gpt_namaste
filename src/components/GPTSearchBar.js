import React, { useRef } from "react";
import lang from "../utils/langaugeConsants";
import { useDispatch, useSelector } from "react-redux";
import openAI from "../utils/openAI";
import Loading from "./Loading";
import { apiOptions } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const selectedLangauge = useSelector((store) => store.config.lang);

  // search movie in TMDB
  const searchMovieTmdb = async (movieName) => {
    // api call
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      apiOptions
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // Make API call to openAI and get movie results
    const gptQuery =
      "Act as a only" +
      selectedLangauge +
      "Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      return <Loading />;
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    console.log("completion", gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movienames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="py-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black flex justify-between rounded-xl "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 w-full rounded-lg"
          placeholder={lang[selectedLangauge]?.gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg w-4/12 font-semibold text-xl hover:bg-opacity-80"
          onClick={handleGPTSearchClick}
        >
          {lang[selectedLangauge]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
