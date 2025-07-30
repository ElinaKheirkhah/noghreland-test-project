import React from "react";

export default function ProfileMenu() {
  const menuItems = [
    {
      title: "خانه",
      icon: "/assets/icons/home-menu.svg",
      active: true,
    },
    {
      title: "معاملات",
      icon: "/assets/icons/arrange-circle-2-menu.svg",
    },
    {
      title: "گزارات",
      icon: "/assets/icons/chart-menu.svg",
    },
    {
      title: "تحویل فیزیکی",
      icon: "/assets/icons/Bar-menu.svg",
    },
    {
      title: "پروفایل",
      icon: "/assets/icons/profile-circle-menu.svg",
    },
    {
      title: "کیف پول",
      icon: "/assets/icons/wallet-menu.svg",
    },
    {
      title: "واریز و برداشت",
      icon: "/assets/icons/bitcoin-convert-menu.svg",
      border: true,
    },
    {
      title: "اعتماد به ما",
      icon: "/assets/icons/verify-menu.svg",
    },
    {
      title: "ارتباط با پشتیبانی",
      icon: "/assets/icons/call-menu.svg",
      border: true,
    },
    {
      title: "خروج از حساب کاربری",
      icon: "/assets/icons/logout-menu.svg",
      danger: true,
    },
  ];

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

        <div className="pt-4 flex flex-col gap-4.5 pr-1">
          {menuItems.map((item) => (
            <div
              className={`flex justify-end items-center gap-2 ${
                item.active
                  ? "bg-[#FAFAFA] border border-[#114EF61F] rounded pr-1"
                  : ""
              } ${item.border ? "border-b border-[#A1A1A1] pb-3" : ""}`}
            >
              <button className="cursor-pointer">
                <div
                  className={`text-[14px] leading-6 font-semibold ${
                    item.danger
                      ? "text-[#E7000B]"
                      : item.active
                      ? "text-[#0A0A0A]"
                      : "text-[#404040]"
                  }`}
                >
                  {item.title}
                </div>
              </button>
              <img src={item.icon} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
