import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { MOVIE_BG, USER_LOGO } from "../utils/constants";
import Loading from "./Loading";

const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [erroeMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIssignIn(!isSignIn);
    setErrorMessage("");
  };

  const handleButtonClick = () => {
    // validathe the form data
    if (!email.current.value || !password.current.value) {
      setErrorMessage("Please Fill all the details");
      return;
    }

    const message = checkValidData(
      isSignIn,
      fullName?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) {
      return;
    }

    // SignIn or SignUp

    if (!isSignIn) {
      // Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName?.current?.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", errorMessage);
          // ..
        });
    } else {
      // SignedIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          className="h-[800px] sm:h-[800px] lg:h-[100%] w-screen"
          src={MOVIE_BG}
          alt="bg_movies"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 md:w-4/12 p-12  my-24 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-xl"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "SingIn" : "SignUp"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "SingIn" : "SignUp"}
        </button>
        <p className="p-2 m-1 font-bold text-lg text-red-500">{erroeMessage}</p>
        <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix-GPT? Sign Up Now !!"
            : "Already registerd? SignIn Now!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
