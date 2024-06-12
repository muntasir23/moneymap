
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const fetchMonthlyExpense = async (year, month, mail) => {
  
  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 999);

  const expenseQuery = query(
    collection(db, "expense"),
    where("timestamp", ">=", startOfMonth),
    where("timestamp", "<", endOfMonth),
    where("mail", "==", mail)
  );

  const snapshot = await getDocs(expenseQuery);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
