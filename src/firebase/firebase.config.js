// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhHOW8oFpOanvcvd2Ux1EMhxMDGZOICzY",
    authDomain: "login-auth-firebase-55b97.firebaseapp.com",
    projectId: "login-auth-firebase-55b97",
    storageBucket: "login-auth-firebase-55b97.appspot.com",
    messagingSenderId: "617005503842",
    appId: "1:617005503842:web:c230b8fd2d0af2eab0c83b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;