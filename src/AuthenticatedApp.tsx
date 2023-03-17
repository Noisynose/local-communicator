import { useState } from "react";
import { useAuthentication } from "./authentication/AuthenticationProvider";
import { useRoom } from "./chat-rooms/useRoom";
import { ChatRoom } from "./components";

type Message = string;

export const AuthenticatedApp = () => {
  const { username, rename } = useAuthentication();

  return (
    <div>
      <h1>Local communicator</h1>
      <div>
        <label>Connected as :</label>
        <input onChange={(event) => rename(event.target.value)} value={username} />
      </div>
      <ChatRoom />
    </div>
  )
}
