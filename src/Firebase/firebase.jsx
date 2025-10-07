import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4JXtWdk09zgarbWU_29QQqRjLf6j2Cz4",
  authDomain: "auth-project-6e553.firebaseapp.com",
  projectId: "auth-project-6e553",
  storageBucket: "auth-project-6e553.firebasestorage.app",
  messagingSenderId: "742227563591",
  appId: "1:742227563591:web:56f827ef059d9d704f0d62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);