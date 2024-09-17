// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9e2cb.firebaseapp.com",
  projectId: "mern-blog-9e2cb",
  storageBucket: "mern-blog-9e2cb.appspot.com",
  messagingSenderId: "485373952356",
  appId: "1:485373952356:web:73fa7301f7d3ef4addfa71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);