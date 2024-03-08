import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import {
  addPopularMovies,
  moviesDataError,
  moviesLoading,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // Fetch Data from TMDB API and update the store
  const getPopularMovies = async () => {
    try {
      dispatch(moviesLoading(true));
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        apiOptions
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
      dispatch(moviesLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(moviesDataError(true));
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
