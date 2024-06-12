'use client'
import { useEffect, useState } from "react";
import { fetchCurrentYearExpense } from "./fetchCurrentYearExpense";
import { useAuth } from "../context/AuthContext";

const useTotalOfYear = () =>{
    const [totalYear, setTotalYear] = useState(0);
    const {currentUser} = useAuth();

    useEffect(()=>{
        const getTotal = async ()=>{
            const expenses = await fetchCurrentYearExpense(currentUser.email);
            const total = expenses.reduce((sum, expense) => sum + expense.amount , 0)
            setTotalYear(total)
        }
        getTotal()
    }, [currentUser])

    return {totalYear, setTotalYear}
}


export default useTotalOfYear;