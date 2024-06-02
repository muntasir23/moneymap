import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchCurrentYearExpense = async () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

  const expenseQuery = query(
    collection(db, "expense"),
    where("timestamp", ">=", startOfYear),
    where("timestamp", "<=", endOfYear)
  );
  const snapshot = await getDocs(expenseQuery);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
