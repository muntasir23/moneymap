"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import favIcon from '../../public/iconmoneymap.png'
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser, logout } = useAuth();

  const handleOpen = () => {
    setIsOpen(!open);
  };

  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="backdrop-blur-[15px] h-[100vh] w-[400px] fixed flex items-center justify-center">
          <div className="relative w-[250px] p-3 rounded shadow bg-zinc-200 border-2 border-zinc-300">
            <div
              onClick={modalClose}
              className="absolute top-[-18px] left-[-18px] h-[35px] w-[35px] bg-zinc-300 rounded-full border-zinc-100 border shadow flex items-center justify-center cursor-pointer hover:bg-gray-900 hover:text-lime-300 hover:border-gray-700"
            >
              <ImCross />
            </div>
            <ul>
              <li className="mb-5">
                <Link href="/expense" onClick={modalClose}>
                  <div className="w-[100%] bg-zinc-300 p-1 border-2 border-zinc-100 rounded shadow hover:bg-gray-900 hover:text-lime-300 hover:border-gray-700 ">
                    Expense
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/budget" onClick={modalClose}>
                  <div className="w-[100%] bg-zinc-300 p-1 border-2 border-zinc-100 rounded shadow hover:bg-gray-900 hover:text-lime-300 hover:border-gray-700">
                    Budget
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}

      <nav className="flex justify-between items-center px-3 py-3 fixed bottom-0 lg:w-[400px] z-100000000 bg-zinc-100 w-full md:w-[400px]">
        {currentUser && (
          <>
            <button onClick={modalOpen}>
              <p className="w-[30px] h-[30px] rounded-full bg-gray-900 text-lime-300 flex justify-center items-center">
                <FaPlus />
              </p>
            </button>
            <Link href="/">
              <p className="w-[70px] h-[30px] rounded bg-gray-900 text-lime-300 flex justify-center items-center">
                <LuHome />
              </p>
            </Link>
          </>
        )}

        {currentUser ? (
          <>
            {" "}
            <Link href="/profile">
              <p className="w-[30px] h-[30px] rounded-full bg-gray-900 text-lime-300 flex justify-center items-center">
                <MdOutlineAccountCircle />
              </p>
            </Link>
          </>
        ) : (
          <>
            <Link href="/signin">
              <p className="h-[30px] px-2 bg-zinc-200 rounded border-2 border-zinc-500 text-gray-900 flex justify-center items-center font-semibold">
                Sign In
              </p>
            </Link>
            <Image src={favIcon} alt="" className="w-[50px]" />
            <Link href="/login">
              <p className="h-[30px] px-2 bg-zinc-200 rounded border-2 border-zinc-500 text-gray-900 flex justify-center items-center font-semibold">
                Log In
              </p>
            </Link>
          </>
        )}

        {/* <Link href="/profile">
          <p className="w-[30px] h-[30px] rounded-full bg-gray-900 text-lime-300 flex justify-center items-center">
            <MdOutlineAccountCircle />
          </p>
        </Link> */}
      </nav>
    </>
  );
}
