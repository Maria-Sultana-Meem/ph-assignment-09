// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNYkPiOgUbYhz97EHsV8ZsjRp14mxxbQE",
  authDomain: "pet-care-in-winter-a1cf5.firebaseapp.com",
  projectId: "pet-care-in-winter-a1cf5",
  storageBucket: "pet-care-in-winter-a1cf5.firebasestorage.app",
  messagingSenderId: "598020210105",
  appId: "1:598020210105:web:deb5e7ebd332bb4d018a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);