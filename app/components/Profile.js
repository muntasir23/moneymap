"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profileImage from "../../public/profile.jpg";
import { useAuth } from "../context/AuthContext";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Profile() {
  const { currentUser,logout } = useAuth();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const userdetailsRef = collection(db, "account");
    const q = query(userdetailsRef, where("email", "==", currentUser.email));

    onSnapshot(q, (snapshot) => {
      const details = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserDetails(details);
    });
  }, []);


  console.log(userDetails);



  return (
    // <div className="flex w-full lg:w-[400px] md:w-[400px] items-center justify-center">
    //   <div className="mt-6 p-3 border rounded shadow bg-gray-900">
    //     <div className="h-[150px] w-[150px] rounded-full overflow-hidden border-[3px] border-gray-600 shadow">
    //       <Image alt="" src={profileImage} placeholder="blur" />
    //     </div>

    //     <div className="mt-10">
    //       <div>
    //         <p className="text-[14px] text-gray-300 mb-1">Your Full name</p>
    //         <h1 className="w-[350px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
    //           {currentUser.displayName}
    //         </h1>

    //         <p className="text-[14px] text-gray-300 mb-1">Your Email Address</p>
    //         <h1 className="w-[350px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
    //           {currentUser.email}
    //         </h1>

    //         <div className="flex items-center justify-between w-[350px]">
    //           <div>
    //             <p className="text-[14px] text-gray-300 mb-1">Your Number</p>
    //             <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
    //               {/* {number} */}
    //             </h1>
    //           </div>
    //           <div>
    //             <p className="text-[14px] text-gray-300 mb-1">Your ID</p>
    //             <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
    //               {currentUser.uid.slice(0, 10)}
    //             </h1>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {userDetails.map((value) => (
        <>
          <div className="flex w-full lg:w-[400px] md:w-[400px] items-center justify-center">
            <div className="mt-6 p-3 border rounded shadow bg-gray-900">
              <div className="h-[150px] w-[150px] rounded-full overflow-hidden border-[3px] border-gray-600 shadow">
                <img alt="" src={value.downloadUrl} />
              </div>

              <div className="mt-10">
                <div>
                  <p className="text-[14px] text-gray-300 mb-1">
                    Your Full name
                  </p>
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
                      <p className="text-[14px] text-gray-300 mb-1">
                        Your Number
                      </p>
                      <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                        {value.number}
                      </h1>
                    </div>
                    <div>
                      <p className="text-[14px] text-gray-300 mb-1">Your ID</p>
                      <h1 className="w-[160px] p-1 border-2 border-gray-600 bg-gray-700 text-gray-300 mb-5 rounded">
                        {currentUser.uid.slice(0, 10)}
                      </h1>
                    </div>
                  </div>

                  <div>
                    <button onClick={logout} className="w-[350px] bg-orange-500 p-2 rounded text-lg font-bold text-zinc-200">log out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
