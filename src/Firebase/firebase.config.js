import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKM7YlLnAON1pR4Mq4ydJZj_XZJvkIcHY",
  authDomain: "stydy-flow.firebaseapp.com",
  projectId: "stydy-flow",
  storageBucket: "stydy-flow.appspot.com",
  messagingSenderId: "982639800981",
  appId: "1:982639800981:web:ef053c64a642f43ca1a19c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
