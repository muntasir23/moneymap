'use client'

import { useEffect, useState } from "react"
import { fetchCurrentWeekExpense } from "./fetchCurrentWeekExpense";

const useTotalOfWeek =() =>{
    const [totalWeek, setTotalWeek] = useState(0);

    useEffect(()=>{
        const getTotal = async ()=>{
            const expenes = await fetchCurrentWeekExpense();
            const total = expenes.reduce((sum, expense) => sum + expense.amount, 0);
            setTotalWeek(total)
        }
        getTotal()
    },[]);
    return {totalWeek, setTotalWeek}
}

export default useTotalOfWeek