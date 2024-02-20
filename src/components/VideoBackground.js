import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  // fetch viddeobackground
  const trialerVideo = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trialerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        // allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
