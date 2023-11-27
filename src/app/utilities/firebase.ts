// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApBjQDCkK6niIXkMKTMv5PIG3BWieB5j0",
    authDomain: "oceans5-d491f.firebaseapp.com",
    projectId: "oceans5-d491f",
    storageBucket: "oceans5-d491f.appspot.com",
    messagingSenderId: "1017373148579",
    appId: "1:1017373148579:web:73ac1872633b07c21a0616",
    measurementId: "G-QBZYC6DDF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };