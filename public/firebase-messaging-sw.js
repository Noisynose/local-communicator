importScripts('https://www.gstatic.com/firebasejs/9.17.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.0/firebase-messaging-compat.js');

const firebaseConfig = {
  messagingSenderId: "890323753860",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

// messaging.onBackgroundMessage((payload) => {
//   const notificationTitle = payload.title;
//   const notificationOptions = {
//     body: payload.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });