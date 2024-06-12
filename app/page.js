'use client'

import Slider from "../app/components/Slider.js";
import LandingPage from "./components/LandingPage.js";
import RecentTrasition from "./components/RecentTrasition.js";
import TotalTransitonToday from "./components/TotalTransitonToday.js";
import { useAuth } from "./context/AuthContext.js";
import getBudget from "./lib/getBudget.js";

export default function Home() {
  
  const budget = getBudget();

  console.log(budget);

  const {currentUser} = useAuth()

  return (
    <main className="w-full p-3 sm:w-full lg:w-[400px]">
     
     {
      currentUser?
      <>
      <Slider budget={budget} />
      <TotalTransitonToday />
      <RecentTrasition />  
      </> : <>
      <LandingPage />
      </>
     }

      {/* <Slider budget={budget} />
      <TotalTransitonToday />
      <RecentTrasition /> */}
    </main>
  );
}
