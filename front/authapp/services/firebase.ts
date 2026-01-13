import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDd7NN8NoPNn3tnKTAxGJnHHqJnAckfSQY",
  authDomain: "auth-app-c355c.firebaseapp.com",
  projectId: "auth-app-c355c",
  storageBucket: "auth-app-c355c.firebasestorage.app",
  messagingSenderId: "750244685260",
  appId: "1:750244685260:web:9d83dd124006a121312969",
  measurementId: "G-8R6KQCJ1ZQ"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);