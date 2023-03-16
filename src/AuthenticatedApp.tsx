import { useState } from "react";
import { useRoom } from "./chat-rooms/useRoom";

export const AuthenticatedApp = () => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const { messages, send } = useRoom();

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
        <button onClick={() => send(currentMessage)} >Send!</button>
      </div>
    </div>
  )
}