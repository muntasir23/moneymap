import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function ProfileLinkCard({ catagory }) {
  return (
    <div className="flex items-center justify-between w-[300px] gap-10 bg-gray-900 p-3 rounded shadow mb-3 ">
      <h1 className="text-zinc-200"> Your <strong className="text-lime-300"> {catagory}</strong> analysis</h1>
      <p className="p-1 rounded-full bg-gray-600 text-lime-300">
        <FaAngleRight />
      </p>
    </div>
  );
}