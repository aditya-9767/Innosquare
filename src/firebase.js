import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, child, onValue } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtR2xels1YTJ_iaXg6295wyk02eOGC3uc",
 
  authDomain: "mysite-51dd0.firebaseapp.com",
 
  projectId: "mysite-51dd0",
 
  storageBucket: "mysite-51dd0.firebasestorage.app",
 
  messagingSenderId: "563038345885",
 
  appId: "1:563038345885:web:cc2a2b62364597ed965274",
 
  measurementId: "G-6RL1RZ0PMT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Export required functions
export { database, ref, push, get, child, onValue };
export { collection, getDocs };