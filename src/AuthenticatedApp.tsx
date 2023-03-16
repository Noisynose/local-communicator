import { useState } from "react";
import { useRoom } from "./chat-rooms/useRoom";

export const AuthenticatedApp = () => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const { messages, send: sendMessage } = useRoom();

  return (
    <div>
      <h1>Local communicator</h1>
      <div>
        <ul>
          {messages.map((message, index) => {
            return (
              <li key={index}>{message.message}</li>
            )
          })}
        </ul>
      </div>
      <div>
        <input value={currentMessage} onChange={(event) => setCurrentMessage(event.target.value)} />
        <button onClick={() => sendMessage(currentMessage)} >Send!</button>
      </div>
    </div>
  )
}