"use client";
import { useEffect, useState } from "react";
import {
  FetchMonthlyExpense,
  fetchMonthlyExpense,
} from "../lib/fetchMonthlyExpenses";
import GetTotalYearExpense from "./GetTotalYearExpense";
import { useAuth } from "../context/AuthContext";

const MonthlySummary = ({ year }) => {
  const { currentUser } = useAuth();

  const [monthlyTotals, setMonthyTotals] = useState(Array(12).fill(0));
  useEffect(() => {
    const fetchAllMonthyExpense = async () => {
      const totals = await Promise.all(
        Array.from({ length: 12 }, (_, month) =>
          fetchMonthlyExpense(year, month, currentUser.email)
        )
      );

      const monthlyTotals = totals.map((expenses) =>
        expenses.reduce((sum, expenses) => sum + expenses.amount, 0)
      );
      setMonthyTotals(monthlyTotals);
    };
    fetchAllMonthyExpense();
  }, [year, currentUser]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h1 className="text-zinc-200 text-[20px] mb-8 mt-5 bg-gray-900 p-2 rounded">
          Monthly Expense Summary for{" "}
          <strong className="text-lime-300">{year}</strong>
        </h1>
        <GetTotalYearExpense />
      </div>
      <table className="w-full rounded shadow-md">
        <thead className="bg-gray-300 ">
          <tr>
            <th className="text-left p-2 text-gray-900">sl</th>
            <th className="text-left p-2 text-gray-900">Months</th>
            <th className="text-left p-2 text-gray-900">Expense</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 border-b-2 border-gray-300">
          {monthlyTotals.map((total, index) => (
            <>
              <tr
                key={index}
                className="[&>*:last-child]:text-gray-950 [&>*:last-child]:font-semibold   odd:bg-white even:bg-zinc-200"
              >
                <td className="text-sm p-1">{index + 1}</td>
                <td className="text-sm p-1">{monthNames[index]}</td>
                <td className="text-sm p-1">৳{total}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      {/* {monthlyTotals.map((total, index) => (
        <>
          <li>
            {monthNames[index]}: ${total}
          </li>
        </>
      ))} */}
    </div>
  );
};

export default MonthlySummary;
