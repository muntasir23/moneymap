'use client'
import { useEffect, useState } from "react";
import { fetchCurrentMonthExpense } from "./fetchCurrentMonthExpense";

const useTotalOfMonth = () =>{
    const [totalMonth, setTotalMonth] = useState(0);

    useEffect(()=>{
        const getTotal = async ()=>{
            const expenses = await fetchCurrentMonthExpense();
            const total = expenses.reduce((sum, expense) => sum + expense.amount , 0)
            setTotalMonth(total)
        }
        getTotal()
    }, [])

    return {totalMonth, setTotalMonth}
}


export default useTotalOfMonth;