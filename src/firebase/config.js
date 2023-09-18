// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjDCqFgOF-ySBGLXzZzvCenwXAwWkSZE",
  authDomain: "react-journal-4d7e4.firebaseapp.com",
  projectId: "react-journal-4d7e4",
  storageBucket: "react-journal-4d7e4.appspot.com",
  messagingSenderId: "111523519648",
  appId: "1:111523519648:web:8d7f66f1a898487fb1fdc5"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);