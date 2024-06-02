import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { db } from "../firebaseConfig"


export const fetchBudget = async ()=>{
    const budgetCollection = collection(db, 'budget')
    const budgetQuery = query(budgetCollection, orderBy('timestamp', 'desc'), limit(1));
    const snapshot = await getDocs(budgetQuery)
    return snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    }))
}