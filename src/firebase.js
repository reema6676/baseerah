import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbVXC13re0Qe9IiFZX_QTnot0_cmb7-GY",
  authDomain: "baseerah-4f95d.firebaseapp.com",
  projectId: "baseerah-4f95d",
  storageBucket: "baseerah-4f95d.firebasestorage.app",
  messagingSenderId: "595889604961",
  appId: "1:595889604961:web:118e02913c80721fa5dd20",
  measurementId: "G-8CND3RYLF7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);