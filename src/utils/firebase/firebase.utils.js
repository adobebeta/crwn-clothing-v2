// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDQKZ10sgJUcNW4YUJyaMD6LeaIutfAYwc',
  authDomain: 'crwn-clothing-db-dbd7c.firebaseapp.com',
  databaseURL:
    'https://crwn-clothing-db-dbd7c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crwn-clothing-db-dbd7c',
  storageBucket: 'crwn-clothing-db-dbd7c.appspot.com',
  messagingSenderId: '820097524094',
  appId: '1:820097524094:web:87502b28eb4fccfd0d132f',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const GoogleProvider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthenUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
