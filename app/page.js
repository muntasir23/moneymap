import Slider from "../app/components/Slider.js";
import RecentTrasition from "./components/RecentTrasition.js";
import TotalTransitonToday from "./components/TotalTransitonToday.js";

export default function Home() {
  return (
    <main className="w-[400px] p-3  ">
      <Slider />
      <TotalTransitonToday />
      <RecentTrasition />
    </main>
  );
}
