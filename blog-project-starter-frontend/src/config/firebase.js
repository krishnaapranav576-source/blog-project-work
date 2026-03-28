// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBH7Z4EF89pqxc3nHmUYCy7MhCXmmkFIPs",
  authDomain: "blog-app-pk.firebaseapp.com",
  projectId: "blog-app-pk",
  storageBucket: "blog-app-pk.firebasestorage.app",
  messagingSenderId: "303353554303",
  appId: "1:303353554303:web:575f89168508d95c92664a",
  measurementId: "G-XMHW7HHYTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
