// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBzLAZO7R_5IUcCsy5yuvJcZER3MxrNs0",
    authDomain: "my-res-project.firebaseapp.com",
    projectId: "my-res-project",
    storageBucket: "my-res-project.appspot.com",
    messagingSenderId: "139003600507",
    appId: "1:139003600507:web:e3a356d5efd2148f404cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)