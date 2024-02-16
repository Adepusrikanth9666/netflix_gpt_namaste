import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  const toggleSignInForm = () => {
    setIssignIn(!isSignIn);
    console.log("Singin/login Status");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg_movies"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-24 mx-auto right-0 left-0 bg-black text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "SingIn" : "SignUp"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? "SingIn" : "SignUp"}
        </button>
        <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix-GPT?Sign Up Now !!"
            : "Already registerd?SignIn Now!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
