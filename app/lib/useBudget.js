'use client'

import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebaseConfig";

const useBudget = () =>{
    const [budget, setBudget] = useState([]);
    useEffect(()=>{
        const budgetRef = collection(db, 'budget');
        const expenseQuery = query(
          collection(db, "expense"),
          where("timestamp", ">=", startOfYear),
          where("timestamp", "<=", endOfYear)
        );
        const snapshot = getDocs(expenseQuery);
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

    },[]);

    return {budget, setBudget}
}

export default useBudget