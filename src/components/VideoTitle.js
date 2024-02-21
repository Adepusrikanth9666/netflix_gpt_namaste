import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2 hidden md:inline-block">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 mx-2 text-lg  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-8 mx-2 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80 hidden md:inline-block">
          ℹ MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
