"use client";

import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
export default function TotalTransitonToday() {
  const [todayTotal, setTodayTotal] = useState(0);

  useEffect(() => {
    const fetchTodayTotalExpense = async () => {
      const now = new Date();
      const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      );

      const expenseQuery = query(
        collection(db, "expense"),
        where("timestamp", ">=", startOfDay),
        where("timestamp", "<", endOfDay)
      );

      const snapshot = await getDocs(expenseQuery);
      const total = snapshot.docs.reduce(
        (sum, doc) => sum + doc.data().amount,
        0
      );
      setTodayTotal(total);
    };
    fetchTodayTotalExpense();
  }, []);

  return (
    <div className="mt-10 bg-red-600 p-2 rounded-sm shadow-md hover:shadow">
      <div className="flex items-center justify-between border-b-2 border-gray-200 mb-3 pb-2">
        <h1 className="font-semibold text-zinc-200">Total</h1>
        <h1 className="font-semibold text-zinc-200">৳{todayTotal}</h1>
      </div>
      <h1 className="text-zinc-200">Your Daily Transition Amount </h1>
    </div>
  );
}
