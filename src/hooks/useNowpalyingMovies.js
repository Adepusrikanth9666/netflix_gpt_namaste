import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import {
  addNowPlayingMovies,
  moviesDataError,
  moviesLoading,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  // Fetch Data from TMDB API and update the store
  const getNowplayingMovies = async () => {
    try {
      dispatch(moviesLoading(true));
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        apiOptions
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
      dispatch(moviesLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(moviesDataError(true));
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowplayingMovies();
  }, []);
};

export default useNowPlayingMovies;
