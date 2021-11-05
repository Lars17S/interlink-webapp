
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" // New import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGemJT-KBIieYsbVtzkvhXMIY9w7W4CYc",
  authDomain: "gamingvideos-95283.firebaseapp.com",
  projectId: "gamingvideos-95283",
  storageBucket: "gamingvideos-95283.appspot.com",
  messagingSenderId: "1069238665265",
  appId: "1:1069238665265:web:9e2f8b6d6fddd0aa931510"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);


export const auth = getAuth(Firebase);
export default Firebase;