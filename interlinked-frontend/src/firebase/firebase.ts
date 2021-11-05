import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import { getFirestore } from "firebase/firestore";

const Firebase = initializeApp(firebaseConfig);

export const auth = getAuth(Firebase);
export const db = getFirestore();
export default Firebase;
