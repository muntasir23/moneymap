import { BsTruckFront } from "react-icons/bs";
import { PiHamburger } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function EachTransition({ eachtransion }) {
  return (
    <div className="mt-5 bg-zinc-200 p-2 rounded-sm shadow-md hover:shadow">
      <div className="flex justify-between items-center mb-4 border-b-2 border-zinc-50 pb-2">
        <h1 className="flex justify-center items-center gap-2">
          <p className="rounded-full bg-gray-900 flex items-center justify-center text-lime-300 p-2">
            {eachtransion.category === "Transpotation" && <BsTruckFront />}
            {eachtransion.category === "Food" && <PiHamburger />}
            {eachtransion.category === "Bill payment" && (
              <FaMoneyBillTransfer />
            )}
            {eachtransion.category === "Other" && <RiMoneyDollarBoxLine />}
          </p>
          <p className="font-semibold text-lime-700">{eachtransion.category}</p>
        </h1>
        <p className="text-gray-800 text-[12px]">
          {eachtransion.timestamp.toDate().toDateString()}
        </p>
      </div>

      <p className="text-gray-700 text-[14px]">{eachtransion.description}</p>
      <p className=" text-gray-950">
        Cost: <strong className="text-red-500"> ৳{eachtransion.amount}</strong>
      </p>
    </div>
  );
}
