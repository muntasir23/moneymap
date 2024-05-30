import React from "react";

export default function TotalTransitonToday() {
  return (
    <div className="mt-10 bg-red-600 p-2 rounded-sm shadow-md hover:shadow">
      <div className="flex items-center justify-between border-b-2 border-gray-200 mb-3 pb-2">
        <h1 className="font-semibold text-zinc-200">Total</h1>
        <h1 className="font-semibold text-zinc-200">$ 220</h1>
      </div>
      <h1 className="text-red-200">Your Daily Transition Amount </h1>
    </div>
  );
}
