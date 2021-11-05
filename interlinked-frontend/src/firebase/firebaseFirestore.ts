import Firebase from "./firebase";
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";


export const createDoc = async (Category: string, Description: string, Link: string, Title: string): Promise<SuccessState | AuthenticationError> => {
    try { 
    
    const docRef = await addDoc(collection(db, "videos"), {
        Category: Category,
        Description: Description,
        Link: Link,
        Title: Title
      });
      console.log("Document written with ID: ", docRef.id);
      return { state: 'success' };
    } catch (e) {
      console.error("Error adding document: ", e);
      return { state: 'auth error', error: 'Unknown Error' };
    }
};