import * as functions from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import {getMessaging} from "firebase-admin/messaging";

const app = initializeApp();
const db = getFirestore(app);
const messaging = getMessaging(app);

// Sends a notifications to all users when a new message is posted.
exports.sendNotifications = functions
  .firestore.document("rooms/global/messages/{messageId}")
  .onCreate(
    async (snapshot) => {
      const {author, message} = snapshot.data();

      const notification = {
        title: `${author} sent a new message!`,
        body: message?.substr(0, 50) ?? "",
      };

      const webpush = {
        fcmOptions: {
          link: "https://chat-rooms-40341.web.app/",
        },
      };

      const tokensSnapshot =
        await db.collection("notification-tokens").get();

      tokensSnapshot.forEach((document) => {
        const {target} = document.data();

        messaging.send({token: target, notification, webpush});
      });
    }
  );
