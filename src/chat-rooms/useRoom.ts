import React, { useEffect } from 'react';
import { getMessages } from './ChatRoomConfig';

type Message = {
    id: string,
    message: string,
    author: string,
    time: Date,
}

type RoomUsecase = {
    messages: Message[],
    sendMessage: () => void,
}

export const useRoom = (): RoomUsecase => {
    const [messages, setMessages] = React.useState<Message[]>([]);

    useEffect(() => {
        const unsubscribe = getMessages(setMessages);
        return unsubscribe;
    }, []);

    const sendMessage = (): void => {
        console.log('sup!');
    }

    return { messages, sendMessage };
}