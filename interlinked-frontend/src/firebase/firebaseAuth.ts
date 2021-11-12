import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';

export const signInwithEmail = async (
  email: string,
  password: string,
  setUserAcc: React.Dispatch<React.SetStateAction<UserAcc | undefined>>
): Promise<SuccessState | AuthenticationError> => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    if (userCred.user !== null) {
      setUserAcc({
        uid: userCred.user.uid,
      });
      return { state: 'success' };
    }
    return { state: 'auth error', error: 'Server error' };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/invalid-email':
          return { state: 'auth error', error: 'Invalid user' };
        case 'auth/user-not-found':
          return {
            state: 'auth error',
            error: `There is not a user using this email`,
          };
        case 'auth/wrong-password':
          return { state: 'auth error', error: 'Incorrect password' };
        default:
          console.error(error);
          return { state: 'auth error', error: 'Server error' };
      }
    }
    return { state: 'auth error', error: 'Unknown Error' };
  }
};

export const isLoggedIn = (userAcc: UserAcc | undefined): boolean =>
  typeof userAcc !== 'undefined';
