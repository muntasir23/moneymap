import { Inter } from "next/font/google";
import "./globals.css";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from "../public/logoblack.png";
import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";

import { LuHome } from "react-icons/lu";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoneyMap",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <div>
          <header className=" flex items-center justify-center sticky top-0 w-full lg:w-[400px] z-100000000 backdrop-blur-[15px] p-2">
            <Link href='/'>
            <Image alt="" src={logo} className="w-[90px]" />
            </Link>
          </header>
          {/* <nav className="flex justify-between items-center px-3 py-3 fixed bottom-0 lg:w-[400px] z-100000000 bg-zinc-100 w-full md:w-[400px]">
            <Button>
              <p className="w-[30px] h-[30px] rounded-full bg-gray-900 text-lime-300 flex justify-center items-center">
                <FaPlus />
              </p>
            </Button>
            <Link href="/">
              <p className="w-[70px] h-[30px] rounded bg-gray-900 text-lime-300 flex justify-center items-center">
              <LuHome />
              </p>
            </Link>


            <Link href="/profile">
              <p className="w-[30px] h-[30px] rounded-full bg-gray-900 text-lime-300 flex justify-center items-center">
                <MdOutlineAccountCircle />
              </p>
            </Link>
          </nav>  */}
          <Navbar />
          {children}
        </div>
        </AuthProvider>
      </body>
    </html>
  );
}
