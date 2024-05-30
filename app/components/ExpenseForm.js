import React from "react";
import { BsTruckFront } from "react-icons/bs";

export default function ExpenseForm() {
  return (
    <div>
      <input type="text" placeholder="Enter Description" />
      <div>
        <select className="w-[130px] bg-gray-700">
          <option>
            Select Category
          </option>
          <option>transportation</option>
          <option>food</option>
          <option>Bill Payment</option>
          <option>other</option>
        </select>
        <input type="text" className="w-[100px] bg-gray-700" placeholder="amount" />
      </div>
    </div>
  );
}
