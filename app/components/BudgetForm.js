"use client";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
export default function BudgetForm() {
  const [weekly, setWeekly] = useState("");
  const [monthly, setMonthly] = useState("");
  const [yearly, setYearly] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, logout } = useAuth()

  const handleBudgetSubmitBtn = async () => {
    if (!weekly || !monthly || !yearly) {
      alert("Please fill out all feilds");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "budget"), {
        weekly: parseFloat(weekly),
        monthly: parseFloat(monthly),
        yearly: parseFloat(yearly),
        timestamp: serverTimestamp(),
        userId:currentUser.uid,
        mail:currentUser.email
      });
      alert("Done");
    } catch (error) {
      console.log(error);
    }
    setWeekly("");
    setMonthly("");
    setYearly("");
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 p-3 rounded">
      <div className="relative m-2 mb-8 mt-5">
        <input
          type="number"
          id="week"
          required
          onChange={(e) => setWeekly(e.target.value)}
          className="border-b-2 bg-gray-900 border-gray-700 w-[280px] text-zinc-200 focus:outline-none py-1 focus:border-lime-300 peer transition-all p-1"
        />
        <label
          for="week"
          className="absolute text-zinc-500 left-0 -top-3 text-xs  peer-focus:text-xs peer-focus:-top-3 transition-all peer-focus:text-lime-300"
        >
          Weekly Budget
        </label>
      </div>
      <div className="relative m-2 mb-8">
        <input
          type="number"
          id="month"
          required
          onChange={(e) => setMonthly(e.target.value)}
          className="border-b-2 bg-gray-900 border-gray-700 w-[280px] text-zinc-200 focus:outline-none py-1 focus:border-lime-300 peer transition-all p-1"
        />
        <label
          for="month"
          className="absolute text-zinc-500 left-0 -top-3 text-xs  peer-focus:text-xs peer-focus:-top-3 transition-all peer-focus:text-lime-300"
        >
          Monthly Budget
        </label>
      </div>
      <div className="relative m-2 mb-5">
        <input
          type="number"
          id="year"
          required
          onChange={(e) => setYearly(e.target.value)}
          className="border-b-2 bg-gray-900 border-gray-700 w-[280px] text-zinc-200 focus:outline-none py-1 focus:border-lime-300 peer transition-all p-1"
        />
        <label
          for="year"
          className="absolute text-zinc-500 left-0 -top-3 text-xs peer-focus:text-xs peer-focus:-top-3 transition-all peer-focus:text-lime-300"
        >
          Yearly Budget
        </label>
      </div>
      {/* button  */}
      <div className="relative m-2 mb-5">
        <button
          onClick={handleBudgetSubmitBtn}
          className="w-[280px] bg-lime-300 rounded font-bold text-gray-900 py-2.5 -z-40"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
