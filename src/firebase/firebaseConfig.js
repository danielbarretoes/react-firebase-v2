import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANonNiLfnzn3M0F0GMoC88QuxIWsPMVJs",
  authDomain: "uniqapp-dev.firebaseapp.com",
  projectId: "uniqapp-dev",
  storageBucket: "uniqapp-dev.appspot.com",
  messagingSenderId: "361655437400",
  appId: "1:361655437400:web:068426f09620b136fda22d",
  measurementId: "G-8FK12H3HNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);