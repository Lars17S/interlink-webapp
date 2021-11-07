import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const createVideoDoc = async (
  videoInfo: VideoData
): Promise<SuccessState | FirestoreError> => {
  try {
    await addDoc(collection(db, 'videos'), {
      category: videoInfo.category,
      description: videoInfo.description,
      link: videoInfo.link,
      title: videoInfo.title,
    });
    return { state: 'success' };
  } catch (error) {
    return { state: 'store error', error: 'Unknown Error' };
  }
};

export const getVideosByCategory = async (
  category: string
): Promise<Video[]> => {
  const q = query(collection(db, 'videos'), where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const videoInfo: Video = {
      videoID: doc.id,
      category: data.category,
      description: data.description,
      link: data.link,
      title: data.title,
    };
    return videoInfo;
  });
};

export const getAllVideos = async (): Promise<Video[]> => {
  const q = query(collection(db, 'videos'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const videoInfo: Video = {
      videoID: doc.id,
      category: data.category,
      description: data.description,
      link: data.link,
      title: data.title,
    };
    return videoInfo;
  });
};
