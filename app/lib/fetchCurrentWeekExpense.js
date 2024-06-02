import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchCurrentWeekExpense = async () => {
  const now = new Date();
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));
  endOfWeek.setHours(23, 59, 59, 999);

  const expenseQuery = query(
    collection(db, "expense"),
    where("timestamp", ">=", startOfWeek),
    where("timestamp", "<=", endOfWeek)
  );

  const snapshot = await getDocs(expenseQuery);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
