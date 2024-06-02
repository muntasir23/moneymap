import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchCurrentMonthExpense = async () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  const expenseQuery = query(
    collection(db, "expense"),
    where("timestamp", ">=", startOfMonth),
    where("timestamp", "<=", endOfMonth)
  );
  const snapshot = await getDocs(expenseQuery);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
