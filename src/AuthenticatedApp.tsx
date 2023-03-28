import { useEffect } from "react";
import { ChatRoom, UserValidation } from "./components";
import { useDisclosure, Button, Box } from '@chakra-ui/react'
import NotificationButton from "./notifications/NotificationButton";
import { defaultUsername, useAuthentication } from "./authentication/AuthenticationProvider";


export const AuthenticatedApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username } = useAuthentication();

  useEffect(() => {
    if (username === defaultUsername) {
      onOpen()
    }
  }, [])

  return (
    <div>
      <UserValidation isOpen={isOpen} onClose={onClose} />
      <ChatRoom />
      <Box textAlign="center">
        <Button onClick={onOpen}>Change name</Button>
        <NotificationButton />
      </Box>
    </div>
  )
}
