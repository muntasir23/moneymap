"use client";

import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import EachTransition from "./EachTransition";

export default function RecentTrasition() {
  const [recentTransition, setRecentTransition] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const recentTransitionRef = collection(db, "expense");
    const q = query(
      recentTransitionRef,
      orderBy("timestamp", "desc"),
      limit(7)
    );
    onSnapshot(q, (snapshot) => {
      const recentTransition = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecentTransition(recentTransition);
      setLoading(false);
    });
  }, []);

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
