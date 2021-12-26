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


const firebaseConfig = {
    apiKey: "AIzaSyDdw2AuA1-oqmjl21m0MWny9vkULl7XGcE",
    authDomain: "router-boiler1.firebaseapp.com",
    projectId: "router-boiler1",
    storageBucket: "router-boiler1.appspot.com",
    messagingSenderId: "55366968001",
    appId: "1:55366968001:web:e8e940a0373df423632a40",
    measurementId: "G-DGWC0RNZMR"
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