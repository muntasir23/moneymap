"use client";
import Image from "next/image";
import profileImage from "../../public/man.png";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <>
        <div className="flex w-full lg:w-[400px] md:w-[400px] items-center justify-center">
          <div className="mt-6 p-3 border rounded shadow bg-gray-900">
            <div className="h-[150px] w-[150px] rounded-full overflow-hidden shadow">
              <Image alt="" src={profileImage} />
            </div>

            <div className="mt-10">
              <div>
                <p className="text-[14px] text-gray-300 mb-1">Your Full name</p>
                <h1 className="w-[350px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                  {currentUser.displayName}
                </h1>

                <p className="text-[14px] text-gray-300 mb-1">
                  Your Email Address
                </p>
                <h1 className="w-[350px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                  {currentUser.email}
                </h1>

                <div className="flex items-center justify-between w-[350px]">
                  <div>
                    <p className="text-[14px] text-gray-300 mb-1">Your ID</p>
                    <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                      {currentUser.uid.slice(0, 10)}
                    </h1>
                  </div>
                </div>

                <div>
                  <button
                    onClick={logout}
                    className="w-[350px] bg-orange-500 p-2 rounded text-lg font-bold text-zinc-200"
                  >
                    log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
