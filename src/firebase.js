// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB2u9lT_68yvcWFQxhyYgB33TqFDJH2kM",
  authDomain: "bugfinder-2b66b.firebaseapp.com",
  projectId: "bugfinder-2b66b",
  storageBucket: "bugfinder-2b66b.appspot.com",
  messagingSenderId: "362494337157",
  appId: "1:362494337157:web:996d05d854e015617f09ec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore database
