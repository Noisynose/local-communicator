import { useState } from "react";

type Message = string;

const App = () => {
  const [currentMessage, setCurrentMessage] = useState<Message>('');
  const [chat, addMessage] = useState<Message[]>([]);

  const sendMessage = (message: Message) => {
    addMessage([...chat, message]);
    setCurrentMessage('');
  }

  return (
    <div>
      <h1>Local communicator</h1>
      <div>
        <ul>
          {chat.map((message, index) => {
            return (
              <li key={index}>{message}</li>
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

export default App
