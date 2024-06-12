import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchRecentTransitons = async (mail) => {
  const transitionRef = collection(db, "expense");
  const q = query(
    transitionRef,
    where("mail", "==", mail),
    orderBy("timestamp", "desc"),
    limit(3)
  );

  const querySnapShot = await getDocs(q);
  const transactions = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return transactions
};
