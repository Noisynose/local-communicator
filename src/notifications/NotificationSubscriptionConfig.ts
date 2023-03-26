import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

type NotificationSubscriptionUsecase = {
  deviceToken: string,
}

const root = 'notification-tokens';

const subscribe = async ({ deviceToken }: NotificationSubscriptionUsecase): Promise<void> => {
  const documentToAdd = {
    roomId: 'global',
    target: deviceToken,
    time: serverTimestamp(),
  };

  try {
    await setDoc(
      doc(db, root, deviceToken),
      documentToAdd,
    );
  } catch (error) {
    console.error(error);
  }
}

export default { subscribe };