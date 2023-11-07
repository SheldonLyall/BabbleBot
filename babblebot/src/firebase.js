// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjnIUSd7gBUeAhH42ntvTGBe0FdfxWTCw",
  authDomain: "babblebot-be9a2.firebaseapp.com",
  projectId: "babblebot-be9a2",
  storageBucket: "babblebot-be9a2.appspot.com",
  messagingSenderId: "783140275043",
  appId: "1:783140275043:web:9a6cc4a26c36f2b5380956",
  measurementId: "G-VBDE0V0F1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);