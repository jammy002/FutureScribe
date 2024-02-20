import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "future-s-3dbf0.firebaseapp.com",
  projectId: "future-s-3dbf0",
  storageBucket: "future-s-3dbf0.appspot.com",
  messagingSenderId: "856787793998",
  appId: "1:856787793998:web:878b46d35c3b7ac1442b1f",
  measurementId: "G-0ZDMHKY7KN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);