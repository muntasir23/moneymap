'use client'
import { useEffect, useState } from "react";
import { fetchCurrentYearExpense } from "./fetchCurrentYearExpense";

const useTotalOfYear = () =>{
    const [totalYear, setTotalYear] = useState(0);

    useEffect(()=>{
        const getTotal = async ()=>{
            const expenses = await fetchCurrentYearExpense();
            const total = expenses.reduce((sum, expense) => sum + expense.amount , 0)
            setTotalYear(total)
        }
        getTotal()
    }, [])

    return {totalYear, setTotalYear}
}


export default useTotalOfYear;