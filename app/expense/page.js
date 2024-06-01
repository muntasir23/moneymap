import React from "react";
import ExpenseForm from "../components/ExpenseForm";

export default function Expense() {
  return (
    <>
      <div className="w-full lg:w-[400px] md:w-[400px] h-[100vh] flex flex-col items-center justify-center border-2">
        <h1 className="mb-5 text">
          Fill out all the details to save your <strong className="text-lime-500">expense</strong>
        </h1>
        <ExpenseForm />
      </div>
    </>
  );
}
