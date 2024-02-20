import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // Fetch Data from TMDB API and update the store
  const getNowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      apiOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowplayingMovies();
  }, []);
};

export default useNowPlayingMovies;
