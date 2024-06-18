// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHEPJEJmHjxgZnVoWkP5QP5QmQrcCh3-o",
  authDomain: "mydatabase-brich.firebaseapp.com",
  projectId: "mydatabase-brich",
  storageBucket: "mydatabase-brich.appspot.com",
  messagingSenderId: "937113431732",
  appId: "1:937113431732:web:8039ce977ec076ba3fb1e1",
  measurementId: "G-S26VQMDNQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)