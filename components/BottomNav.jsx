import React from "react";

export default function BottomNav() {
  return (
    <footer className="flex justify-around items-center px-5 pb-2 pt-3 bg-[#FFFFFF] border-0 rounded-t-2xl shadow-md/10">
      <button className="cursor-pointer">
        <div className="flex flex-col justify-center items-center gap-1">
          <img src="/assets/icons/profile-circle-down.svg" className="" />
          <span className="text-[14px] leading-6 font-medium text-[#A1A1A1] text-center">
            پروفایل
          </span>
        </div>
      </button>
      <button className="cursor-pointer">
        <div className="flex flex-col justify-center items-center gap-1">
          <img src="/assets/icons/Bar.svg" className="" />
          <span className="text-[14px] leading-6 font-medium text-[#A1A1A1] text-center">
            فیزیکی
          </span>
        </div>
      </button>
      <button className="cursor-pointer">
        <div className="flex flex-col justify-center items-center gap-1">
          <img src="/assets/icons/chart.svg" className="" />
          <span className="text-[14px] leading-6 font-medium text-[#A1A1A1] text-center">
            گزارشات
          </span>
        </div>
      </button>
      <button className="cursor-pointer">
        <div className="flex flex-col justify-center items-center gap-1">
          <img src="/assets/icons/arrange-circle-2.svg" className="" />
          <span className="text-[14px] leading-6 font-medium text-[#A1A1A1] text-center">
            معاملات
          </span>
        </div>
      </button>
      <button className="cursor-pointer">
        <div className="flex flex-col justify-center items-center gap-1">
          <img src="/assets/icons/home.svg" className="" />
          <span className="text-[14px] leading-6 font-medium text-[#0A0A0A] text-center">
            خانه
          </span>
        </div>
      </button>
    </footer>
  );
}

// container w-[330px] h-[245px] mx-auto
