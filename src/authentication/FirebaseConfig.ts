import { initializeApp } from "firebase/app";
import { signInAnonymously, getAuth } from 'firebase/auth';
import { authenticatedUser, unauthorizedUser, User } from "./User";

const firebaseConfig = {
  apiKey: "AIzaSyC6ZNSwd75_PfHXRtdI8a_TD4B7GBwA_V0",
  authDomain: "chat-rooms-40341.firebaseapp.com",
  projectId: "chat-rooms-40341",
  storageBucket: "chat-rooms-40341.appspot.com",
  messagingSenderId: "890323753860",
  appId: "1:890323753860:web:30213a4f418e3e6c6a1bd1"
};

const app = initializeApp(firebaseConfig);

const anonymousLogin = async (): Promise<User> => {
  try {
    const auth = getAuth();
    const { user } = await signInAnonymously(auth);
    return authenticatedUser({ id: user.uid });
  } catch {
    return unauthorizedUser();
  }
}

export { app, anonymousLogin };
