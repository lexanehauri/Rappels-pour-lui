importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCWpfLlwMpTbN6UkH_l7r_lfKZoEjpLXHE",,
  authDomain: "rappels-pour-lui.firebaseapp.com",
  projectId: "rappels-pour-lui",
  storageBucket: "rappels-pour-lui.firebasestorage.app",
  messagingSenderId: "232679000779",
  appId: "1:232679000779:web:d97745ece1e16e4f9c294e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notification reçue en arrière-plan", payload);

  const notificationTitle =
    payload.notification?.title || "Nouveau rappel ❤️";

  const notificationOptions = {
    body:
      payload.notification?.body ||
      "Tu as un nouveau rappel.",
    icon: "/Rappels-pour-lui/icon-192.png"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
