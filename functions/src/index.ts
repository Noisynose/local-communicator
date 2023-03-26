import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getMessaging } from "firebase-admin/messaging";

const app = initializeApp();
const db = getFirestore(app);
const messaging = getMessaging(app);

// Sends a notifications to all users when a new message is posted.
exports.sendNotifications = functions.firestore.document('rooms/global/messages/{messageId}').onCreate(
  async (snapshot) => {
    const { author, message } = snapshot.data();

    const payload = {
      notification: {
        title: `${author} sent a new message!`,
        body: message ? (message.length <= 100 ? message : message.substring(0, 97) + '...') : ''
      }
    };

    const targets: string[] = [];
    const notificationTokens = await db.collection('notification-tokens').get();
    notificationTokens.forEach((notification: any) => { targets.push(notification.target) });

    functions.logger.info({ payload, targets });

    if (targets.length > 0) {
      messaging.sendToDevice(targets, payload);
    }
  });
