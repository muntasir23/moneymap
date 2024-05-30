import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function getBudget(){
    const budgetRef = collection(db,"budget");
    const q = query(budgetRef);
    onSnapshot(q , (snapshot) =>{
        const budget = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })); 
          return budget
    });
}