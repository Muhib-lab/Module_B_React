import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getDatabase,
  set,
  get,
  push,
  remove,
  ref,
  onValue,
  onChildAdded,
  child,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOS2gLwCEII6EwLG162X8eKbuUcdABEFw",
    authDomain: "react-test-20306.firebaseapp.com",
    projectId: "react-test-20306",
    storageBucket: "react-test-20306.appspot.com",
    messagingSenderId: "672996955408",
    appId: "1:672996955408:web:7d87e6357787a7153a8195",
    measurementId: "G-4FPLFFNK7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,


  db,
  set,
  push,
  remove,
  ref,
  onValue,
  onChildAdded,
  child,
  get
};