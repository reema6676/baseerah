import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9vde-w2vc34bLnspe4nmyp5Stc5bptjQ",
  authDomain: "baseerah-2a80c.firebaseapp.com",
  projectId: "baseerah-2a80c",
  storageBucket: "baseerah-2a80c.firebasestorage.app",
  messagingSenderId: "815161284287",
  appId: "1:815161284287:web:1ad4ecbd8aa67eb1e2580a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);