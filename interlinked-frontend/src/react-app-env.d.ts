/// <reference types="react-scripts" />

interface SuccessState {
  state: 'success';
}

interface AuthenticationError {
  state: 'auth error';
  error: string;
}
