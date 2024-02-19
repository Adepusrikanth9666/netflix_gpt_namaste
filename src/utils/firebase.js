// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsIjhla-mvC4R7WQ5lcmX-lwwy9a6FEjE",
  authDomain: "netflix-gpt-d5f8c.firebaseapp.com",
  projectId: "netflix-gpt-d5f8c",
  storageBucket: "netflix-gpt-d5f8c.appspot.com",
  messagingSenderId: "817024008664",
  appId: "1:817024008664:web:7948ba2a0e8faf2cf672ad",
  measurementId: "G-H916ZBX5JQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
