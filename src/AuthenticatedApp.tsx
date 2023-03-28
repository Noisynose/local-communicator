import { useEffect } from "react";
import { ChatRoom, UserValidation } from "./components";
import { useDisclosure, Button, Box } from '@chakra-ui/react'
import NotificationButton from "./notifications/NotificationButton";


export const AuthenticatedApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onOpen()
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
