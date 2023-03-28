import { db } from "../FirebaseConfig";
import { onSnapshot, query, collection, orderBy, addDoc, serverTimestamp, FieldValue } from "firebase/firestore";
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
          callback(messages.map(Message.fromDatastore));
      }
  );
}

type SendMessageUsecase = {
    username: Message['author'],
    message: Message['message'],
}

type MessageDocument = {
    message: string,
    author: string,
    time: FieldValue,
}

export const sendMessage = async ({ message, username }: SendMessageUsecase): Promise<void> => {
    const documentToAdd: MessageDocument = {
        message: message.trim(),
        author: username.trim(),
        time: serverTimestamp(),
    };

    try {
        isDocumentValid(documentToAdd);

        await addDoc(
            getCollection(),
            documentToAdd,
        );
    } catch (error) {
        console.error(error);
    }
}

const isDocumentValid = ({ message, author }: MessageDocument): boolean | never => {
    if (!message) {
        throw new Error('Message cannot be empty');
    }
    if (!author) {
        throw new Error('Author cannot be empty');
    }
    return true;
};
