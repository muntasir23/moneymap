'use client'
import React, { useEffect, useState } from 'react'
import { fetchBudget } from './fetchBudget';

export default function useOneBudget() {
    const [budget, setBuget] = useState([]);
    const [weekly, setWeely] = useState(0);
    const [monthly, setMonthly] = useState(0);
    const [yearly, setYearly] = useState(0);
     useEffect(()=>{
        const fetchWeekLy = async () => {
            const budget = await fetchBudget()
            setBuget(budget);
            const total = budget.reduce((sum, expense) => sum + expense.weekly , 0)
            setWeely(total)

            const monthTotal = budget.reduce((sum, expense) => sum+ expense.monthly , 0)
            setMonthly(monthTotal)
            const yearTotal = budget.reduce((sum, expense) => sum+ expense.yearly , 0)
            setYearly(yearTotal)

        }
        fetchWeekLy()
     }, [])
  return {weekly, setWeely, monthly, yearly}
}
