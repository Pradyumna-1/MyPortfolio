// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAY5478Hr8mydxCScl7XP3Cd7HX6V6raz0",
  authDomain: "react-portfolio-b2e76.firebaseapp.com",
  projectId: "react-portfolio-b2e76",
  storageBucket: "react-portfolio-b2e76.appspot.com",
  messagingSenderId: "5633462733353",
  appId: "1:563346275653:web:skfkfkslkfjs3b22340e21122c"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();