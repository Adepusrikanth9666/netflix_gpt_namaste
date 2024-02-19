import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [erroeMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIssignIn(!isSignIn);
    console.log("Singin/login Status");
  };

  const handleButtonClick = () => {
    // validathe the form data
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
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocIKJQZozYUiLfsU6ZQRDK0zkH54JWQqOJFSriGXAycbM1U=s96-c",
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

              navigate("/browser");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", erroeMessage);
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

          navigate("/browser");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg_movies"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-24 mx-auto right-0 left-0 bg-black text-white bg-opacity-80"
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
