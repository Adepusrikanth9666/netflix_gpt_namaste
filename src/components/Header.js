import React from "react";
import netflix_log from "../utils/netflix_logo.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex align-middle items-center gap-3">
          <img className="h-10 w-10" src={user.photoURL} alt="user_icon" />
          <button onClick={handleSignOut} className=" font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
