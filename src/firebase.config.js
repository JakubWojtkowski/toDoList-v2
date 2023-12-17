// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFqaan5Qy1BcjjfDCr12zUes6jsrW_nbI",
  authDomain: "todolist-kck.firebaseapp.com",
  projectId: "todolist-kck",
  storageBucket: "todolist-kck.appspot.com",
  messagingSenderId: "217647253020",
  appId: "1:217647253020:web:9fd38dc856240740f0c1d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
