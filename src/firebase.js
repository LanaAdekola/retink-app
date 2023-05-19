// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdhPD3_X-7oc2iqOrXdCEdwrZCO-e-Yf4",
  authDomain: "react-rethink.firebaseapp.com",
  projectId: "react-rethink",
  storageBucket: "react-rethink.appspot.com",
  messagingSenderId: "88170638408",
  appId: "1:88170638408:web:68fca753a9af56f8a5fc7d",
  measurementId: "G-K04H5921GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
