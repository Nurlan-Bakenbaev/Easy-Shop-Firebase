// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuGxo4w8VQvcn5hDusBtJxXg6KuFCGEOw",
  authDomain: "kleinerladen-6644f.firebaseapp.com",
  projectId: "kleinerladen-6644f",
  storageBucket: "kleinerladen-6644f.appspot.com",
  messagingSenderId: "228546233716",
  appId: "1:228546233716:web:838456217820991a64d821"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)
