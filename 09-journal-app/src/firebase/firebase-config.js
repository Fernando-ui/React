import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBOFxp4N4vuqlf0JU9HETu1IaL_inOsBfs",
    authDomain: "react-app-curso-ad470.firebaseapp.com",
    projectId: "react-app-curso-ad470",
    storageBucket: "react-app-curso-ad470.appspot.com",
    messagingSenderId: "211651481996",
    appId: "1:211651481996:web:6a9971d6d1c590a84146a9"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new GoogleAuthProvider();



export{
    db,
    googleAuthProvider,
    firebase,
}



