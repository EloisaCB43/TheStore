import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr_azzdLMBMgPrqzzPWcKyYgxI9xKXX1E",
  authDomain: "thestore-137b7.firebaseapp.com",
  projectId: "thestore-137b7",
  storageBucket: "thestore-137b7.appspot.com",
  messagingSenderId: "1025336745858",
  appId: "1:1025336745858:web:e3fdd5f0c85a9295e3799b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
