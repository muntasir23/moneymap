"use client";

import Link from "next/link";
import { useState } from "react";

export default function Button({ children }) {
  const [openModal, setOpenModal] = useState(true);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button className="relative" onClick={handleOpenModal}>
        {openModal ? (
          <></>
        ) : (
          <>
            <div
              className="h-[100px] w-[100px] border bg-gray-900 rounded absolute bottom-0 left-0 
        top-[-120px] flex  justify-items-start items-center
        "
            >
              <ul className="w-[100px] p-2">
                <li className="bg-gray-700 w-[100%] rounded-sm mb-5">
                  <Link
                    href="/budget"
                    className="text-zinc-100 text-[12px] hover:text-lime-300"
                  >
                    Budget
                  </Link>
                </li>
                <li className="bg-gray-700 w-[100%] rounded-sm">
                  <Link
                    href="/expense"
                    className="text-zinc-100 text-[12px] hover:text-lime-300"
                  >
                    Expense
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {children}
      </button>
    </>
  );
}
