'use client'
import LastMonthTransiton from "../components/LastMonthTransiton";
import useTotalOfMonth from "../lib/useTotalOfMonth";

export default function CurrentMonth() {
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
  const now = new Date();
  let name = monthNames[now.getMonth()];
  
  const {totalMonth, setTotalMonth} = useTotalOfMonth();
  console.log(totalMonth);
 
  return (
    <div className="w-full p-3 sm:w-full lg:w-[400px]">
      <div>
      <h1 className="text-zinc-200 text-[20px] mb-8 mt-5 bg-gray-900 p-2 rounded">
        All expense of the month <strong className="text-lime-300">{name}</strong>
      </h1>
      <p className="text-gray-900 bg-zinc-100 p-2 border-2 border-zinc-200 rounded">Total Expense: <strong className="text-red-500">৳ {totalMonth}</strong></p>
      </div>
      <LastMonthTransiton />
    </div>
  );
}
