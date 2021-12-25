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
    apiKey: "AIzaSyCvUaMprh_jJCGjUHRCobe7xtWi-vOUMNo",
    authDomain: "roter-boiler.firebaseapp.com",
    projectId: "roter-boiler",
    storageBucket: "roter-boiler.appspot.com",
    messagingSenderId: "345950514693",
    appId: "1:345950514693:web:bbeb304ae253ad8ba8b66c",
    measurementId: "G-TR4YH7HB19"
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