import Link from "next/link";
import Profile from "../components/Profile";
import { FiArrowRightCircle } from "react-icons/fi";

export default function ProfilePage() {
  const currentYear = new Date().getFullYear();
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
    <div className="mb-20 lg:w-[400px] w-full md:w-[400px]">
      <Profile />

      <div className="p-3">
        <div className="bg-gray-900 rounded mb-3">
          <Link
            href="/monthlyData"
            className="flex items-center justify-between gap-10 text-zinc-200 p-3"
          >
            <p>
              All Transition amount of{" "}
              <strong className="text-lime-300">{currentYear}</strong>
            </p>
            <button className="text-[20px] text-lime-300">
              <FiArrowRightCircle />
            </button>
          </Link>
        </div>
        <div className="bg-gray-900 rounded">
          <Link
            href="/currentMonth"
            className="flex items-center justify-between gap-10 text-zinc-200 p-3"
          >
            <p>
              All Transition amount of <strong className="text-lime-300">{name}</strong>
            </p>
            <button className="text-[20px] text-lime-300">
              <FiArrowRightCircle />
            </button>
          </Link>
        </div>
        {/* <Link href="/currentMonth">
          <div>Get This Monthly</div>
        </Link> */}
      </div>
    </div>
  );
}
