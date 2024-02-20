import React, { useEffect } from "react";
import netflix_log from "../utils/netflix_logo.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
