import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfTxv9XtDFGAYAFHZR4qP6lgqWhiFVHug",
  authDomain: "blog-firebase-19889.firebaseapp.com",
  projectId: "blog-firebase-19889",
  storageBucket: "blog-firebase-19889.appspot.com",
  messagingSenderId: "365209465199",
  appId: "1:365209465199:web:dc81a63d1cba0133a5f89a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
