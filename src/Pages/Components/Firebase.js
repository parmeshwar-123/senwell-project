// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs forimport { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwSqfP0ampWm3acF44AO9VxqTG5ZUmBRg",
  authDomain: "senwell-demo-67e66.firebaseapp.com",
  projectId: "senwell-demo-67e66",
  storageBucket: "senwell-demo-67e66.appspot.com",
  messagingSenderId: "1040893369831",
  appId: "1:1040893369831:web:a0aa738d1310d4770ef142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}