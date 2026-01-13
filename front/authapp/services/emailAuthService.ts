import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import { auth } from "./firebase";

export const emailSignup = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const emailLogin = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = (email: string) =>
  sendPasswordResetEmail(auth, email);

export const logout = () => signOut(auth);
