
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBys2hZNXTPZ_p-3g9U-jcNbGw61cix5ps",
  authDomain: "valdtouradmin.firebaseapp.com",
  projectId: "valdtouradmin",
  storageBucket: "valdtouradmin.firebasestorage.app",
  messagingSenderId: "874181549819",
  appId: "1:874181549819:web:60587297f0e57ff4e19a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };