import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constants";
import {
  addUpComingMovies,
  moviesDataError,
  moviesLoading,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  // Fetch Data from TMDB API and update the store
  const getUpComingMovies = async () => {
    try {
      dispatch(moviesLoading(true));
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        apiOptions
      );
      const json = await data.json();
      dispatch(addUpComingMovies(json.results));
      dispatch(moviesLoading(false));
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(moviesDataError(true));
    }
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
