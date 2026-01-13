import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "firebase/auth";

export const createUserProfile = async (user: User) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    createdAt: Date.now()
  });
};
