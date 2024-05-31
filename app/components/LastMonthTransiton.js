"use client";

import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import EachTransition from "./EachTransition";

export default function LastMonthTransiton() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExpense = async () => {
      setLoading(true);
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

      const expepenseQuery = query(
        collection(db, "expense"),
        where("timestamp", ">=", startOfMonth),
        where("timestamp", "<=", endOfMonth),
        orderBy("timestamp", "desc")
      );

      const snapshot = await getDocs(expepenseQuery);
      const expenseData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExpenses(expenseData);
      setLoading(false);
    };
    fetchExpense();
  }, []);

  return (
    <div className="mb-20">
      {loading && <h1 className="text-center mt-5">Loading...</h1>}
      {expenses.map((eachtransion) => (
        <>
          <div>
            <EachTransition eachtransion={eachtransion} />
          </div>
        </>
      ))}
    </div>
  );
}
