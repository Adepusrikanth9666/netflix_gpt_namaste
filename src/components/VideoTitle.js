import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-8 mx-2   text-lg  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-8 mx-2  text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">
          ℹ MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
