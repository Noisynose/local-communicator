import { useEffect } from "react";
import { ChatRoom, UserValidation } from "./components";
import { useDisclosure, Button, Box } from '@chakra-ui/react'
import { useNotification } from "./notifications/NotificationProvider";


export const AuthenticatedApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { allowNotifications } = useNotification()

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div>
      <UserValidation isOpen={isOpen} onClose={onClose} />
      <ChatRoom />
      <Box textAlign="center">
        <Button onClick={onOpen}>Change name</Button>
        {allowNotifications ? 'While in background, notifications will be sent to this device.' : 'Notifications disabled'}
      </Box>
    </div>
  )
}
