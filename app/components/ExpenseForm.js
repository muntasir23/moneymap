"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";

export default function ExpenseForm() {
  const [description, setDescripton] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, logout } = useAuth()

  console.log([{
    name:currentUser.displayName,
    id:currentUser.uid,
    mail:currentUser.email
  }]);

  const handleExpenseSubmitBtn = async () => {
    if (!category || !amount) {
      alert("Please fill out all feilds");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "expense"), {
        description,
        category,
        amount: parseFloat(amount),
        timestamp: serverTimestamp(),
        userId:currentUser.uid,
        mail:currentUser.email
      });
      alert("Done");
      setDescripton("");
      setCategory("");
      setAmount("");
    } catch (error) {
      console.log(error);
    }
    setDescripton("");
    setCategory("");
    setAmount("");
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 p-3 rounded">
      <div className="relative m-2 mb-8 mt-5">
        <input
          type="text"
          id="description"
          required
          onChange={(e) => setDescripton(e.target.value)}
          className="border-b-2 bg-gray-900 border-gray-700 w-[280px] text-zinc-200 focus:outline-none py-1 focus:border-lime-300 peer transition-all p-1"
        />
        <label
          for="description"
          className="absolute text-zinc-500 left-0 -top-3 text-xs  peer-focus:text-xs peer-focus:-top-3 transition-all peer-focus:text-lime-300"
        >
          Description
        </label>
      </div>
      <div className="relative m-2 mb-8">
        <select
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          className="border-b-2 bg-gray-900 border-gray-700 w-[280px] text-zinc-200 focus:outline-none py-1 focus:border-lime-300 peer transition-all p-1"
        >
          <option>Transpotation</option>
          <option>Food</option>
          <option>Bill payment</option>
          <option>Other</option>
        </select>
        <label
          for="category"
          className="absolute text-zinc-500 left-0 -top-3 text-xs  peer-focus:text-xs peer-focus:-top-3 transition-all peer-focus:text-lime-300"
        >
          Category
        </label>
      </div>
      <div className="relative m-2 mb-5">
        <input
          type="number"
          id="amount"
          required
          onChange={(e) => setAmount(e.target.value)}
          className="border-b-2 bg-gray-900 border-gray-700 w-[280px] text-zinc-200 focus:outline-none py-1 focus:border-lime-300 peer transition-all p-1"
        />
        <label
          for="amount"
          className="absolute text-zinc-500 left-0 -top-3 text-xs peer-focus:text-xs peer-focus:-top-3 transition-all peer-focus:text-lime-300"
        >
          Amount
        </label>
      </div>
      {/* button  */}
      <div className="relative m-2 mb-5">
        <button
          onClick={handleExpenseSubmitBtn}
          className="w-[280px] bg-lime-300 rounded font-bold text-gray-900 py-2.5 -z-30"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
