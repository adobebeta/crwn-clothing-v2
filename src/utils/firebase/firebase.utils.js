// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQKZ10sgJUcNW4YUJyaMD6LeaIutfAYwc",
  authDomain: "crwn-clothing-db-dbd7c.firebaseapp.com", 
  projectId: "crwn-clothing-db-dbd7c",
  storageBucket: "crwn-clothing-db-dbd7c.appspot.com",
  messagingSenderId: "820097524094",
  appId: "1:820097524094:web:87502b28eb4fccfd0d132f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)
