// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF0srJ9eRqC9-1Zyf7ZiRrDi9Fw6WMUzQ",
  authDomain: "todo-list-2c4e2.firebaseapp.com",
  projectId: "todo-list-2c4e2",
  storageBucket: "todo-list-2c4e2.firebasestorage.app",
  messagingSenderId: "111341714282",
  appId: "1:111341714282:web:2befc286768ae41c0a4313",
  measurementId: "G-CEDFRW89B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);