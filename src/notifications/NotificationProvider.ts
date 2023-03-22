import { initializeMessaging } from "@/FirebaseConfig";
import { useEffect, useState } from "react";
import NotificationSubscriptionConfig from "./NotificationSubscriptionConfig";

type NotificationUsecase = {
    allowNotifications: string | undefined;
};

export const useNotification = (): NotificationUsecase => {
    const [allowNotifications, setAllowNotifications] = useState<string | undefined>();

    useEffect(() => {
        initializeMessaging()
            .then((token) => {
                setAllowNotifications(token);
                NotificationSubscriptionConfig.subscribe({ deviceToken: token });
                console.log('token', token);
            })
            .catch((reason) => {
                setAllowNotifications(undefined);
                console.log('Disabled notifications', reason);
            })
    }, []);

    return { allowNotifications };
}