// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO8wW40UIVXC97kT_qetW8d2BfX_NjsL0",
  authDomain: "netflixgpt-11e7d.firebaseapp.com",
  projectId: "netflixgpt-11e7d",
  storageBucket: "netflixgpt-11e7d.appspot.com",
  messagingSenderId: "324783579349",
  appId: "1:324783579349:web:de02d8e040b058c491c25c",
  measurementId: "G-R75ZW3PSRG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
