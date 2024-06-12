"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import icon from "../../public//iconmoneymap.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  
  const router = useRouter()

  const { login } = useAuth();

  async function handlesubmit(e) {
    e.preventDefault();
    //

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      router.push('/')
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <div className="mt-10 w-full md:w-[400px] lg:w-[400px] flex items-center justify-center h-[80vh]">
      <div className="p-3 border-2 rounded shadow-md bg-zinc-50">
      <div>
          <Image
            src={icon}
            alt=""
            className="h-[60px] w-[60px] mb-3"
            quality={50}
          ></Image>
          <h1 className="mt-3 font-bold text-[22px] text-gray-900">
            Welcome Back
          </h1>
          <p className="my-3 text-gray-700">
            Dont have any account?{" "}
            <Link
              href="/signin"
              className="text-indigo-500 font-semibold underline"
            >
              Sign In
            </Link>
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-500 peer transition-all p-1 mb-5"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded bg-zinc-200 border-zinc-300 w-[280px] text-gray-700 focus:outline-none py-1 focus:border-zinc-500 peer transition-all p-1"
          />
        </div>
        <div>
          <button
            onClick={handlesubmit}
            className="border-2 rounded bg-gray-900 border-zinc-300 w-[280px] text-lime-300  py-1  peer transition-all p-1 font-semibold mt-10"
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </div>

        {error && (
          <h1 className="mt-5 bg-red-300 p-2 rounded font-semibold text-red-950">
            {error}
          </h1>
        )}
      </div>
    </div>
  );
}
