import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import {
  addTopRatedMovies,
  moviesDataError,
  moviesLoading,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  // Fetch Data from TMDB API and update the store
  const getTopRatedMovies = async () => {
    try {
      dispatch(moviesLoading(true));
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        apiOptions
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
      dispatch(moviesLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(moviesDataError(true));
    }
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
