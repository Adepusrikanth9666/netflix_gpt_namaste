import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Loading from "./Loading";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  console.log("movies", movies);

  const { id, original_title, overview } = mainMovie;
  return mainMovie ? (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  ) : (
    <Loading />
  );
};

export default MainContainer;
