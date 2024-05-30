import Slider from "../app/components/Slider.js";
import RecentTrasition from "./components/RecentTrasition.js";
import TotalTransitonToday from "./components/TotalTransitonToday.js";
import getBudget from "./lib/getBudget.js";

export default function Home() {
  
  const budget = getBudget();

  console.log(budget);

  return (
    <main className="w-[400px] p-3  ">
      <Slider budget={budget} />
      <TotalTransitonToday />
      <RecentTrasition />
    </main>
  );
}
