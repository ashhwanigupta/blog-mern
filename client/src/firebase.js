import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3ce64.firebaseapp.com",
  projectId: "mern-blog-3ce64",
  storageBucket: "mern-blog-3ce64.firebasestorage.app",
  messagingSenderId: "1091402796691",
  appId: "1:1091402796691:web:5bc984427bc90dd9b9c766"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);