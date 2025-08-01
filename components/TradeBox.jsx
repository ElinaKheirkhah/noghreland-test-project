import React, { useState } from "react";

export default function TradeBox() {
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    setWeight(value ? Number(value) / 10000 : "");
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setWeight(value);
    setPrice(value ? Number(value) * 10000 : "");
  };
  return (
    <div className="bg-[#fcfcfc]">
      <div className="container w-[330px] h-[245px] mx-auto bg-[#FFFFFF] border border-[#F7F7F7] rounded-lg">
        <div className="flex justify-center items-center mx-auto mt-4 border border-[#F7F7F7] rounded-md bg-[#F7F7F7] w-[295px] h-[35px]">
          <button className="cursor-pointer">
            <div className="text-[14px] w-[145px] h-[30px] leading-5 font-medium text-[#525252] text-center pt-1.5">
              فروش
            </div>
          </button>
          <button className="cursor-pointer">
            <div className="text-[14px] w-[145px] h-[30px] leading-5 font-medium text-[#FFFFFF] text-center pt-1.5 bg-[#4D84D5] border border-[#77B4E7] rounded-lg">
              خرید
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-3 pt-3 mx-auto mt-4.5 border border-[#4D84D5] rounded-md bg-[#FAFAFA] w-[295px] h-[95px]">
          <div className="mx-3 border-b border-[#EBEBEB] pb-2.5">
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              placeholder="مبلغ به تومان                                                                         |    تومان"
              className="w-full placeholder-[#525252] placeholder:font-light placeholder:text-[13px] placeholder:text-center"
            ></input>
          </div>
          <div className="flex justify-between mx-3 items-center gap-2">
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              placeholder="وزن به گرم                                                                                |         گرم"
              className="w-full placeholder-[#525252] placeholder:font-light placeholder:text-[13px] placeholder:text-center"
            ></input>
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto mt-4.5 rounded-md bg-[#4D84D5] w-[295px] h-[35px] shadow-2xl">
          <button className="cursor-pointer">
            <div className="text-[16px] leading-3 font-medium text-[#FFFFFF]">
              خرید
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
