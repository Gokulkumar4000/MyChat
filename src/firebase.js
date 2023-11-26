import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCks0vL0yBHgneirLWq_AQ2fIHHRrx_C1o",
  authDomain: "mychat-9c998.firebaseapp.com",
  projectId: "mychat-9c998",
  storageBucket: "mychat-9c998.appspot.com",
  messagingSenderId: "452698884660",
  appId: "1:452698884660:web:098292396317f7b18c9861"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
