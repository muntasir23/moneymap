'use client'

import { useEffect, useState } from "react"
import { fetchCurrentWeekExpense } from "./fetchCurrentWeekExpense";
import { useAuth } from "../context/AuthContext";

const useTotalOfWeek =() =>{
    const {currentUser} = useAuth()
    const [totalWeek, setTotalWeek] = useState(0);

    useEffect(()=>{
        const getTotal = async ()=>{
            const expenes = await fetchCurrentWeekExpense(currentUser.email);
            const total = expenes.reduce((sum, expense) => sum + expense.amount, 0);
            setTotalWeek(total)
        }
        getTotal()
    },[currentUser]);
    return {totalWeek, setTotalWeek}
}

export default useTotalOfWeek