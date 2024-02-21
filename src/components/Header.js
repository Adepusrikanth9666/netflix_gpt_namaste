import React, { useEffect } from "react";
import netflix_log from "../utils/netflix_logo.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LAGAUGES } from "../utils/constants";
import { toggoleGPTSearchView } from "../utils/gptSlice";
import { changeLangauge } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggoleGPTSearchView());
  };

  const handleLangaugeChange = (e) => {
    dispatch(changeLangauge(e.target.value));
    console.log("e.target.value", e.target.value);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      // unScribe Compount unmount
      return () => {
        unSubscribe();
      };
    });
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between">
      <img className="w-44 " src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex align-middle items-center gap-3">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg"
              onChange={handleLangaugeChange}
            >
              {SUPPORTED_LAGAUGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearch}
            className="py-2 px-4 m-2 text-white bg-red-600 rounded-lg hover:bg-opacity-80 font-bold"
          >
            {!showGPTSearch ? "GPT Search" : "Home"}
          </button>
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
