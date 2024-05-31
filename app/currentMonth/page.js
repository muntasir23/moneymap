import React from "react";
import LastMonthTransiton from "../components/LastMonthTransiton";

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

  return (
    <div className="w-[400px] p-3 ">
      <h1 className="text-zinc-200 text-[20px] mb-8 mt-5 bg-red-500 p-2 rounded">
        All expense of the month <strong>{name}</strong>
      </h1>
      <LastMonthTransiton />
    </div>
  );
}
