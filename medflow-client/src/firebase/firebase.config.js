// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL1ZeSxeoVN3XJjkbESiEkG8izefp8Ngk",
  authDomain: "medflow-d477b.firebaseapp.com",
  projectId: "medflow-d477b",
  storageBucket: "medflow-d477b.appspot.com",
  messagingSenderId: "519288260491",
  appId: "1:519288260491:web:3ba34e60031184a9cdd18e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;