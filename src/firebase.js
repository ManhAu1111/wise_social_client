import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDj6IoaqLFc7PeoNYGqATgrjisGB-cYeD0",
  authDomain: "wisesocial-1ee18.firebaseapp.com",
  projectId: "wisesocial-1ee18",
  storageBucket: "wisesocial-1ee18.firebasestorage.app",
  messagingSenderId: "115879476594",
  appId: "1:115879476594:web:47a98fd30d55210bb9f1eb",
  measurementId: "G-EDMKP4FMZB"
};
// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Cloud Messaging
const messaging = getMessaging(app);

// Request notification permission from user.
export const requestPermission = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: "BBjPpR4-lzbYEeyHX6Eag1xeCzCuvHWg30yNNzilYGcGdGRj2kfR77KKFUfN8c2TqrIV8-xVknadyc0MQKlAnXQ",
          });
        console.log("Thông báo đã được cấp quyền, toke  la: " + currentToken);
        return currentToken;
    } catch (error) {
        console.error("Cannot get token: :", error);
    }
};

// Listen for messages from FCM while the page is open
export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("Message received:", payload);
        resolve(payload);
      });
    });

// Export messing as use.
export { app, messaging };