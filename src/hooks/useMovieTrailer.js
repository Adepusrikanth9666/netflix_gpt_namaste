import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import {
  addTrailerVideo,
  moviesDataError,
  moviesLoading,
} from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideo = async () => {
    try {
      dispatch(moviesLoading(true));
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        apiOptions
      );

      const json = await data?.json();
      const filterData = json?.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
      dispatch(moviesLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(moviesDataError(true));
    }
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
