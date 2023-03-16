import { db } from "../FirebaseConfig";
import { onSnapshot, query, collection, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { Message } from "./Message";

const root = 'rooms';
const room = 'global';
const historic = 'messages';

const getCollection = () => collection(db, root, room, historic);

type GetMessagesUsecase = {
    callback: (messages: Message[]) => void,
}

export const getMessages = ({ callback }: GetMessagesUsecase) => {
  return onSnapshot(
      query(
          getCollection(),
          orderBy('time', 'asc')
      ),
      (querySnapshot) => {
          const messages = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
          }));
          callback(messages as Message[]);
      }
  );
}

type SendMessageUsecase = {
    username: Message['author'],
    message: Message['message'],
}

export const sendMessage = async ({ message, username }: SendMessageUsecase): Promise<void> => {
    const documentToAdd = {
        message: message.trim(),
        author: username,
        time: serverTimestamp(),
    };

    try {
        await addDoc(
            getCollection(),
            documentToAdd,
        );
    } catch (error) {
        console.error(error);
    }
}