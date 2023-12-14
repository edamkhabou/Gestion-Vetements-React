// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgykhINeMoHkGpkbJD1CPIn8iwzMpoto",
  authDomain: "reactproject-5fc9e.firebaseapp.com",
  projectId: "reactproject-5fc9e",
  storageBucket: "reactproject-5fc9e.appspot.com",
  messagingSenderId: "629560698294",
  appId: "1:629560698294:web:37183e932b006e6d6c4d17",
  measurementId: "G-M2L8S79Q9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage =getStorage(app);
export default storage;
//const analytics = getAnalytics(app);