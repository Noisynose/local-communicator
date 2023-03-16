import React, { useEffect } from 'react';
import { useAuthentication } from '../authentication/AuthenticationProvider';
import { getMessages, sendMessage } from './ChatRoomConfig';
import { Message } from './Message';

type RoomUsecase = {
    messages: Message[],
    send: (message: Message['message']) => void,
}

export const useRoom = (): RoomUsecase => {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const { username } = useAuthentication();

    useEffect(() => {
        const unsubscribe = getMessages({callback: setMessages});
        return unsubscribe;
    }, []);

    const send = (message: string): void => {
        sendMessage({ username, message });
    }

    return { messages, send };
}