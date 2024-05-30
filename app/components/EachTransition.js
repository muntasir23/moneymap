import { BsTruckFront } from "react-icons/bs";
import { PiHamburger } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function EachTransition({ costType, date, description }) {
  // if (costType === "transport") {
  //   console.log("transport");
  // } else if (costType === "food") {
  //   console.log("Food");
  // } else if (costType === "Bill Payment") {
  //   console.log("Bill Payment");
  // } else if (costType === "Other") {
  //   console.log("Other");
  // }

  return (
    <div className="mt-5 bg-zinc-200 p-2 rounded-sm shadow-md hover:shadow">
      <div className="flex justify-between items-center mb-4 border-b-2 border-zinc-50 pb-2">
        <h1  className="flex justify-center items-center gap-2">
          <p className="rounded-full bg-gray-900 flex items-center justify-center text-lime-300 p-2">
           {
            costType === "transportation" && <BsTruckFront />
           }
           {
            costType === "food" && <PiHamburger  />
           }
           {
            costType === "Bill Payment" && <FaMoneyBillTransfer  />
           }
           {
            costType === "Other" && <RiMoneyDollarBoxLine  />
           }
          </p>
          <p className="font-semibold text-lime-700">{costType}</p>
        </h1>
        <p className="text-gray-800 text-[12px]">
           {date} 
        </p>
      </div>

      <p className="text-gray-700 text-[14px]">{description}</p>
    </div>
  );
}
