// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOFxp4N4vuqlf0JU9HETu1IaL_inOsBfs",
  authDomain: "react-app-curso-ad470.firebaseapp.com",
  projectId: "react-app-curso-ad470",
  storageBucket: "react-app-curso-ad470.appspot.com",
  messagingSenderId: "211651481996",
  appId: "1:211651481996:web:6a9971d6d1c590a84146a9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

export{
  firebaseApp,
  googleProvider,
} ;

