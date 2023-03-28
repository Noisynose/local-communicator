import { Button } from "@chakra-ui/button";
import { useNotification } from "./NotificationProvider"

const NotificationButton = () => {
  const { allowNotifications, requestNotification } = useNotification();

  const notificationButtonState = () => {
    switch(allowNotifications) {
      case 'default':
        return <Button onClick={requestNotification}>🔕</Button>;
      case 'granted':
        return '🔔';
      case 'denied':
        return '🔕';
    }
  }

  return (
    <>{notificationButtonState()}</>
  )
};

export default NotificationButton;