// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD30I6yx3R8Orxtom3MAQTkiPvAAhjDPPo",
  authDomain: "chat-gpt-messenger-clone.firebaseapp.com",
  projectId: "chat-gpt-messenger-clone",
  storageBucket: "chat-gpt-messenger-clone.appspot.com",
  messagingSenderId: "904979881214",
  appId: "1:904979881214:web:84c376d4caf857e8f319af",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
