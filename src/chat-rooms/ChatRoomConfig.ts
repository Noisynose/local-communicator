import { db } from "../FirebaseConfig";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";

export const getMessages = (callback: any) => {
  const room = 'global';

  return onSnapshot(
      query(
          collection(db, 'rooms', room, 'messages'),
          orderBy('time', 'asc')
      ),
      (querySnapshot) => {
          const messages = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          }));
          callback(messages);
      }
  );
}