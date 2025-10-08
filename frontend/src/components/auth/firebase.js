import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoEBKtDXjZ7fEzELv-HSJm0kDagD_FtEs",
  authDomain: "samonfirebase.firebaseapp.com",
  projectId: "samonfirebase",
  storageBucket: "samonfirebase.firebasestorage.app",
  messagingSenderId: "1037695303055",
  appId: "1:1037695303055:web:73c472a4e171332b1a9ffa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// import initializeApp from 'firebase/app' initialize(cinfi)

// import getAuth from 'firebase/auth'
