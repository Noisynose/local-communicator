import { useState } from "react";
import { useAuthentication } from "./authentication/AuthenticationProvider";
import { useRoom } from "./chat-rooms/useRoom";

export const AuthenticatedApp = () => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const { messages, send } = useRoom();
  const { username, rename } = useAuthentication();

  return (
    <div>
      <h1>Local communicator</h1>
      <div>
        <label>Connected as :</label>
        <input onChange={(event) => rename(event.target.value)} value={username} />
      </div>
      <div>
        <ul>
          {messages.map((message, index) => {
            return (
              <li key={index}>{JSON.stringify(message)}</li>
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