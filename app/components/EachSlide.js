
export default function EachSlide({ cata, budget, totalCost, persentage }) {
  const widthPersentage = Math.floor((totalCost / budget) * 100);

  return (
    <div className="bg-gray-900 h-[120px] rounded p-3">
      <h3 className="mb-5 border-b-2 border-gray-700 text-lime-300">
        {cata} Analysis
      </h3>
      <div className="flex justify-between items-center mb-2">
        <p className="text-[12px] text-slate-100">
          Budget - <strong className="text-lime-300"> {budget}</strong>
        </p>
        <p className="text-[12px] text-slate-100">
          Total Cost - <strong className="text-lime-300"> {totalCost}</strong>
        </p>
        {/* <p>{(totalCost / budget) * 100} </p> */}
      </div>
      <p className="text-[10px] text-slate-100 mb-1">{widthPersentage} %</p>
      <div className="w-[100%] h-[10px] bg-gray-700 rounded-[2px]">
        <div
          className={`h-[100%] bg-lime-300  rounded-[5px]`}
          style={{ width: widthPersentage + "%" }}
        ></div>
      </div>
    </div>
  );
}
