import React from "react";
import Header from "./Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="h-[100vh] w-full items-center flex justify-center align-middle"
          src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
        />
      </div>
      <p className="relative font-extralight">
        "Uh-oh! Our movie elves are taking a coffee break ☕️. It seems like our
        magic potion for fetching movies got a little too bubbly. Don't worry,
        we're on it!
      </p>
    </div>
  );
};

export default ErrorPage;
