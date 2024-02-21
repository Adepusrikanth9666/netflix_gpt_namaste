import React from "react";
import lang from "../utils/langaugeConsants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLangauge = useSelector((store) => store.config.lang);
  return (
    <div className="py-[10%] flex justify-center">
      <form className=" w-1/2 bg-black flex justify-between rounded-xl ">
        <input
          type="text"
          className="p-4 m-4 w-full rounded-lg"
          placeholder={lang[selectedLangauge].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg w-4/12 font-semibold text-xl hover:bg-opacity-80">
          {lang[selectedLangauge].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
