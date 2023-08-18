// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1OmOtbwqX68k0dC0KzYUOAq4hM3rO-to",
  authDomain: "fir-basics-d8e91.firebaseapp.com",
  databaseURL: "https://fir-basics-d8e91-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-basics-d8e91",
  storageBucket: "fir-basics-d8e91.appspot.com",
  messagingSenderId: "48036634542",
  appId: "1:48036634542:web:b5505ec68d833324a9723f",
  measurementId: "G-V0E16RW9YM"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH= getAuth(FIREBASE_APP)
