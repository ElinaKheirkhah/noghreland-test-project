import React from "react";

export default function ProfileMenu() {
  return (
    <div className="container">
      <div className="w-[240px] h-[545px] bg-white fixed ml-3 shadow-xl rounded-xl z-50 pr-4 pl-4">
        <div className="flex justify-end items-center gap-2 pt-3.5 border-b border-[#A1A1A1] pb-3 ">
          <div className="flex flex-col justify-center items-end">
            <div className="text-[14px] leading-6 font-semibold text-[#0A0A0A]">
              نیما شفیع خانی
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="text-[10px] leading-4 font-medium text-[#262626] text-center">
                آخرین بازدید: ۲۱ ساعت پیش
              </div>
              <img src="/assets/icons/eye.svg" className="w-3 h-3" />
            </div>
          </div>
          <div>
            <img
              src="/assets/icons/profile-circle-new.svg"
              className="w-9 h-9"
            />
          </div>
        </div>
        <div className=" pt-4 flex flex-col gap-4.5 pr-1">
          <div className="flex justify-end items-center gap-2 bg-[#FAFAFA] border border-[#114EF61F] rounded pr-1">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#0A0A0A]">
                خانه
              </div>
            </button>
            <img src="/assets/icons/home-menu.svg" className="w-5 h-5" />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                معاملات
              </div>
            </button>
            <img
              src="/assets/icons/arrange-circle-2-menu.svg"
              className="w-5 h-5"
            />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                گزارشات
              </div>
            </button>
            <img src="/assets/icons/chart-menu.svg" className="w-5 h-5" />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                تحویل فیزیکی
              </div>
            </button>
            <img src="/assets/icons/Bar-menu.svg" className="w-5 h-5" />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                پروفایل
              </div>
            </button>
            <img
              src="/assets/icons/profile-circle-menu.svg"
              className="w-5 h-5"
            />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                کیف پول
              </div>
            </button>
            <img src="/assets/icons/wallet-menu.svg" className="w-5 h-5" />
          </div>
          <div className="flex justify-end items-center gap-2 border-b border-[#A1A1A1] pb-3">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                واریز و برداشت
              </div>
            </button>
            <img
              src="/assets/icons/bitcoin-convert-menu.svg"
              className="w-5 h-5"
            />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                اعتماد به ما
              </div>
            </button>
            <img src="/assets/icons/verify-menu.svg" className="w-5 h-5" />
          </div>
          <div className="flex justify-end items-center gap-2 border-b border-[#A1A1A1] pb-3">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#404040]">
                ارتباط با پشتیبانی
              </div>
            </button>
            <img src="/assets/icons/call-menu.svg" className="w-5 h-5" />
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="cursor-pointer">
              <div className="text-[14px] leading-6 font-semibold text-[#E7000B]">
                خروج از حساب کاربری
              </div>
            </button>
            <img src="/assets/icons/logout-menu.svg" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
