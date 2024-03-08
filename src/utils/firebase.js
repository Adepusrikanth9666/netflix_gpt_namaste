// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXcAuvClzbdR7tPIIGwavBrhtgxbjp0wg",
  authDomain: "netflix-gpt-dafe0.firebaseapp.com",
  projectId: "netflix-gpt-dafe0",
  storageBucket: "netflix-gpt-dafe0.appspot.com",
  messagingSenderId: "174462533938",
  appId: "1:174462533938:web:63a74d474e931111e0172b",
  measurementId: "G-GKXPMFY6EF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
