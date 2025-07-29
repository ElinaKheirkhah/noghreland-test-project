import React, { useState } from "react";

export default function AssetCard() {
  const [isHidden, setIsHidden] = useState(false);
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="bg-[#fcfcfc] mx-auto">
      <div className="bg-[url('/assets/icons/BG.png')] bg-no-repeat bg-center bg-auto h-64 mx-auto pt-10">
        <div className="flex items-center justify-between ml-[70px] mr-[70px] ">
          <button className="cursor-pointer" onClick={toggleVisibility}>
            <img
              className=""
              src={
                isHidden
                  ? "/assets/icons/eye.svg"
                  : "/assets/icons/eye-slash.svg"
              }
              alt="toggle visibility"
            />
          </button>

          <span className="text-xs font-medium leading-4 tracking-wider">
            ارزش کل دارایی
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 pt-3">
          <span className="text-[10px] leading-10 font-semibold text-[#737373]">
            تومان
          </span>
          <span className="text-[26px] leading-10 font-bold text-center">
            {isHidden ? "******" : "۱،۲۸۶،۰۰۰"}
          </span>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-2">
            <span className="text-[10px] leading-10 font-semibold text-[#737373]">
              تومان
            </span>
            <span className="text-[16px] leading-6 font-medium text-[#404040]">
              {isHidden ? "***" : "۱۲،۰۰۰،۰۰۰"}
            </span>
          </div>
          <img src="/assets/icons/Rectangle.svg" className="w-[2px] h-[16px]" />
          <div className="flex justify-center items-center gap-2">
            <span className="text-[10px] leading-10 font-semibold text-[#737373]">
              گرم
            </span>
            <span className="text-[16px] leading-6 font-medium text-[#404040]">
              {isHidden ? "***" : "۱،۲۰۰"}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 pt-3">
          <button className="cursor-pointer">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src="/assets/icons/tahvil-fiziki-card.svg"
                className="bg-[#4D84D5] rounded-full p-2"
              />
              <span className="text-[12px] leading-5 font-medium text-[#404040]">
                تحویل فیزیکی
              </span>
            </div>
          </button>
          <button className="cursor-pointer">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src="/assets/icons/wallet.svg"
                className="bg-[#4D84D5] rounded-full p-2"
              />
              <span className="text-[12px] leading-5 font-medium text-[#404040]">
                واریز/برداشت
              </span>
            </div>
          </button>
          <button className="cursor-pointer">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src="/assets/icons/shopping-bag.svg"
                className="bg-[#4D84D5] rounded-full p-2"
              />

              <span className="text-[12px] leading-5 font-medium text-[#404040]">
                خرید/فروش
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
