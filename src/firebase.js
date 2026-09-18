import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-By-oaD3aqTqxJhs3ZqYU9b8IdL_x9Cs",
  authDomain: "taxoflora.firebaseapp.com",
  projectId: "taxoflora",
  storageBucket: "taxoflora.firebasestorage.app",
  messagingSenderId: "836979724699",
  appId: "1:836979724699:web:f0e2bcaa5a3c987a10513e",
  measurementId: "G-8B4HWTWEGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Firestore
export const db = getFirestore(app, "default");

// Firebase Storage
export const storage = getStorage(app);

export default app;