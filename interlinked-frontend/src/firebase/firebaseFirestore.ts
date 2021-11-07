
import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";
import { videos } from "../utils/interfaces";

export const createDoc = async (video: videos): Promise<SuccessState | AuthenticationError> => {
  try {
    const docRef = await addDoc(collection(db, "videos"), {
      Category: video.Category,
      Description: video.Description,
      Link: video.Link,
      Title: video.Title,
    });
    console.log("Document written with ID: ", docRef.id);
    return { state: "success" };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { state: "auth error", error: "Unknown Error" };
  }
};

export const getVidsByCategory = async (Category: string): Promise<QuerySnapshot<DocumentData>> => {
  const q = query(collection(db, "videos"), where("Category", "==", Category));

  return await getDocs(q);
};
