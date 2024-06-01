import Image from "next/image";
import React from "react";
import profileImage from "../../public/profile.jpg";


export default function Profile() {
  return (
    <div className="flex w-full lg:w-[400px] md:w-[400px] items-center justify-center">
      <div className="mt-6 p-3 border rounded shadow bg-gray-900">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden border-[3px] border-gray-600 shadow">
          <Image alt="" src={profileImage} placeholder="blur" />
        </div>

        <div className="mt-10">
          <div>
            <p className="text-[14px] text-gray-300 mb-1">Your Full name</p>
            <h1 className="w-[350px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
              Mahafuz Ahamed
            </h1>

            <p className="text-[14px] text-gray-300 mb-1">Your Email Address</p>
            <h1 className="w-[350px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
              muntasiraahmed3@gmail.com
            </h1>

            <div className="flex items-center justify-between w-[350px]">
              <div>
                <p className="text-[14px] text-gray-300 mb-1">Your Number</p>
                <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                  +8801882372807
                </h1>
              </div>
              <div>
                <p className="text-[14px] text-gray-300 mb-1">Your ID</p>
                <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                  544327
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
