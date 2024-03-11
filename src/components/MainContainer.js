import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const error = useSelector((store) => store?.movies?.isMovieDataError);

  if (!movies) {
    return;
  }
  const mainMovie = movies[1];

  const { id, original_title, overview } = mainMovie;

  return mainMovie ? (
    <div className=" pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  ) : (
    <Loading />
  );
};

export default MainContainer;
