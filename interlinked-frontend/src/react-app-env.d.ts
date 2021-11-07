/// <reference types="react-scripts" />

interface SuccessState {
  state: 'success';
}

interface AuthenticationError {
  state: 'auth error';
  error: string;
}

interface FirestoreError {
  state: 'store error';
  error: string;
}

interface VideoData {
  category: string;
  description: string;
  link: string;
  title: string;
}

interface VideoParams {
  videoID: string;
}

type Video = VideoData & VideoParams;
