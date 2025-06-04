importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDj6IoaqLFc7PeoNYGqATgrjisGB-cYeD0",
  authDomain: "wisesocial-1ee18.firebaseapp.com",
  projectId: "wisesocial-1ee18",
  storageBucket: "wisesocial-1ee18.firebasestorage.app",
  messagingSenderId: "115879476594",
  appId: "1:115879476594:web:47a98fd30d55210bb9f1eb",
  measurementId: "G-EDMKP4FMZB"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Xử lý thông báo khi app ở chế độ background
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
