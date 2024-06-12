"use client";

import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import EachTransition from "./EachTransition";

import { useAuth } from "../context/AuthContext";
import { fetchRecentTransitons } from "../lib/fetchRecentTransitons";

export default function RecentTrasition() {
  const [recentTransition, setRecentTransition] = useState([]);
  const [loading, setLoading] = useState(false);

  const {currentUser} = useAuth()


  useEffect(() => {
    const fetchTransctions = async () =>{
      if (currentUser) {
        const fetchedTrasections = await fetchRecentTransitons(currentUser.email)
        setRecentTransition(fetchedTrasections)
      }
      setLoading(false)
    }
    fetchTransctions()
  }, [currentUser]);

  console.log(recentTransition);

  return (
    <div className="mt-10">
      <h1 className="font-semibold text-gray-700 text-[18px]">
        Recent Transition
      </h1>
      <div className="mb-20">
        {loading && (
          <h2 className="text-lg text-gray-900 text-center mt-10">
            Loading...
          </h2>
        )}
        { !loading &&
          recentTransition.length == 0 && <h1 className="text-lg font-bold text-gray-900 text-center mt-10">
            There is no transition!
          </h1>
        }
        {recentTransition.map((eachtransion) => (
          <>
            <EachTransition
              costType="transportation"
              date="12 jan 2024"
              description="Description of Transpotaion"
              eachtransion={eachtransion}
            />
          </>
        ))}
      </div>
    </div>
  );
}
