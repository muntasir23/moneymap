import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchTodaysTrasnsectionList = async (mail) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();

  const transactionRef = collection(db, "expense");
  const q = query(
    transactionRef,
    where("timestamp", ">=", startOfDay),
    where("timestamp", "<=", endOfDay),
    where("mail", "==", mail)
  );

  const querySnapShot = await getDocs(q);
  const transactions = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return transactions
};
