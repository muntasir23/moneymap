"use client";

import React from "react";
import useTotalOfYear from "../lib/useTotalOfYear";
export default function GetTotalYearExpense() {
  const { totalYear, setTotalYear } = useTotalOfYear();
  return (
    <div>
      <p className="text-gray-900 bg-zinc-100 p-2 border-2 border-zinc-200 rounded">
        Total Expense: <strong className="text-red-500">৳ {totalYear}</strong>
      </p>
    </div>
  );
}
