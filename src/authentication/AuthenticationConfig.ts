import { signInAnonymously, getAuth } from 'firebase/auth';
import { authenticatedUser, unauthorizedUser, User } from "./User";

export const anonymousLogin = async (): Promise<User> => {
  try {
    const auth = getAuth();
    const { user } = await signInAnonymously(auth);
    return authenticatedUser({ id: user.uid });
  } catch {
    return unauthorizedUser();
  }
}