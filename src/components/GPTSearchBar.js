import React, { useRef } from "react";
import lang from "../utils/langaugeConsants";
import { useDispatch, useSelector } from "react-redux";
import openAI from "../utils/openAI";
import Loading from "./Loading";
import { apiOptions } from "../utils/constants";
import {
  addGPTMovieResult,
  gptLoading,
  gptMovieDataError,
} from "../utils/gptSlice";
import { userEnterApiKey } from "../utils/configSlice";
import appStore from "../utils/appStore";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const userOpenAIKey = useRef(null);
  const selectedLangauge = useSelector((store) => store.config.lang);
  const isUserApiKey = useSelector((store) =>
    store.config.userApiKey != "" ? true : false
  );

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
    const state = appStore.getState()?.config?.userApiKey;
    console.log("state", state);

    try {
      if (!searchText.current.value) {
        return alert(
          "Please Enter the text to seach the movies and Upload the OpenAI API"
        );
      } else if (!isUserApiKey) {
        return alert(
          "Please Upload the OpenAI API by registering in https://platform.openai.com/"
        );
      }
      dispatch(gptLoading(true));

      const gptQuery =
        "Act as a only" +
        " " +
        selectedLangauge +
        " " +
        "Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const gptResults = await openAI.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGPTMovieResult({ movienames: gptMovies, movieResults: tmdbResults })
      );
      dispatch(gptLoading(false));
    } catch (error) {
      dispatch(gptLoading(false));
      dispatch(gptMovieDataError(true));
    }
  };

  const handleUserAPIKey = () => {
    if (!userOpenAIKey.current.value) {
      return <>Please Enter trh valid API Key</>;
    }
    dispatch(userEnterApiKey(userOpenAIKey.current.value));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center items-center flex-col gap-2">
      <form
        className="w-full md:w-1/2 bg-black flex justify-between rounded-xl "
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
      <form
        className="w-10/12    md:w-5/12 bg-black flex justify-center  rounded-xl "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={userOpenAIKey}
          onChange={(e) => (userOpenAIKey.current.value = e.target.value)}
          disabled={isUserApiKey}
          className={`p-2 m-2 w-full rounded-lg ${
            isUserApiKey ? "text-white" : "text-black"
          }`}
          placeholder="Enter your OpenAI Api Key to search Movies"
        />
        <button
          className={`py-2 px-2 m-2 ${
            isUserApiKey ? "bg-green-400" : "bg-red-700"
          } text-white rounded-lg w-3/12 font-semibold text-xl ${
            !isUserApiKey ? "hover:bg-opacity-80" : ""
          }`}
          onClick={handleUserAPIKey}
          disabled={isUserApiKey}
        >
          {isUserApiKey ? "👍 Sucess" : "Upload"}
        </button>
        {isUserApiKey && (
          <button
            className={`py-2 px-2 m-2
           "bg-red-700"
          text-white rounded-lg w-3/12 font-semibold text-xl hover:bg-opacity-70`}
            onClick={() => dispatch(userEnterApiKey(""))}
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default GPTSearchBar;
