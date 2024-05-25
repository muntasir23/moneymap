import React from "react";
import EachTransition from "./EachTransition";

export default function RecentTrasition() {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-gray-700 text-[18px]">
        Recent Transition
      </h1>
      <div className="mb-20">
        <EachTransition
          costType="transport"
          date="12 jan 2024"
          description="Description of Transpotaion"
        />
        <EachTransition
          costType="food"
          date="12 jan 2024"
          description="Description of Food "
        />
        <EachTransition
          costType="Bill Payment"
          date="20 jan 2024"
          description="Description of Current Bill"
        />
      </div>

      <div>
        <button>
          See All 
        </button>
      </div>
    </div>
  );
}
