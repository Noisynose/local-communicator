import { initializeMessaging } from "@/FirebaseConfig";
import { useEffect, useState } from "react";
import NotificationSubscriptionConfig from "./NotificationSubscriptionConfig";

type NotificationState = 'default' | 'granted' | 'denied';

type NotificationUsecase = {
    allowNotifications: NotificationState;
    requestNotification: () => void;
};

export const useNotification = (): NotificationUsecase => {
    const [allowNotifications, setAllowNotifications] = useState<NotificationState>(Notification.permission);
    const [triggerable, setTriggerable] = useState<boolean>(true);

    useEffect(() => {
        initializeMessaging()
            .then((token) => {
                setAllowNotifications(Notification.permission);
                NotificationSubscriptionConfig.subscribe({ deviceToken: token });
            })
            .catch(() => {
                setAllowNotifications(Notification.permission);
            })
    }, [triggerable]);

    return { 
        allowNotifications,
        requestNotification: () => setTriggerable(!triggerable),
    };
}