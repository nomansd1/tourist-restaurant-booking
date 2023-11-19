// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYo83MKU9_RjcrGYg989U4pLR6fsduBX0",
  authDomain: "resturent-management-a301f.firebaseapp.com",
  projectId: "resturent-management-a301f",
  storageBucket: "resturent-management-a301f.appspot.com",
  messagingSenderId: "993850629946",
  appId: "1:993850629946:web:0cdbbaf047f8ca2dec7a03",
  measurementId: "G-8V6BGEEXX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);