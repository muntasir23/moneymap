'use client'
import { useEffect, useState } from "react";
import { fetchCurrentMonthExpense } from "./fetchCurrentMonthExpense";
import { useAuth } from "../context/AuthContext";

const useTotalOfMonth = () =>{
    const [totalMonth, setTotalMonth] = useState(0);
    const {currentUser} = useAuth();
    useEffect(()=>{
        const getTotal = async ()=>{
            const expenses = await fetchCurrentMonthExpense(currentUser.email);
            const total = expenses.reduce((sum, expense) => sum + expense.amount , 0)
            setTotalMonth(total)
        }
        getTotal()
    }, [currentUser])

    return {totalMonth, setTotalMonth}
}


export default useTotalOfMonth;