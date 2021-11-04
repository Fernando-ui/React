// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigTest = {
  apiKey: "AIzaSyBwFADjsRSFnOwYhA9ZxUZlE3gbQS9meVw",
  authDomain: "sql-demos-45685.firebaseapp.com",
  projectId: "sql-demos-45685",
  storageBucket: "sql-demos-45685.appspot.com",
  messagingSenderId: "815996064025",
  appId: "1:815996064025:web:76ba03375391913339b588",
  measurementId: "G-CRC4CCDXD0"
};  
const firebaseConfig = {
  apiKey: "AIzaSyBOFxp4N4vuqlf0JU9HETu1IaL_inOsBfs",
  authDomain: "react-app-curso-ad470.firebaseapp.com",
  projectId: "react-app-curso-ad470",
  storageBucket: "react-app-curso-ad470.appspot.com",
  messagingSenderId: "211651481996",
  appId: "1:211651481996:web:6a9971d6d1c590a84146a9"
};
const firebaseApp = (process.env.NODE_ENV === 'test') ? initializeApp(firebaseConfigTest) : initializeApp(firebaseConfig);

// Initialize Firebase
const googleProvider = new GoogleAuthProvider();

export{
  firebaseApp,
  googleProvider,
} ;

