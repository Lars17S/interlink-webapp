import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const Firebase = initializeApp(firebaseConfig);

export const auth = getAuth(Firebase);
export default Firebase;
