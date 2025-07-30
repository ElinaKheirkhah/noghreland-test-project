import React from "react";

export default function BottomNav() {
  const navItems = [
    {
      icon: "/assets/icons/profile-circle-down.svg",
      label: "پروفایل",
      active: false,
    },
    { icon: "/assets/icons/Bar.svg", label: "فیزیکی", active: false },
    { icon: "/assets/icons/chart.svg", label: "گزارشات", active: false },
    {
      icon: "/assets/icons/arrange-circle-2.svg",
      label: "معاملات",
      active: false,
    },
    { icon: "/assets/icons/home.svg", label: "خانه", active: true },
  ];

  return (
    <footer className="flex justify-around items-center px-5 pb-2 pt-3 bg-[#FFFFFF] border-0 rounded-t-2xl shadow-md/10">
      {navItems.map((item) => (
        <button className="cursor-pointer">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={item.icon} className="" />
            <span
              className={`text-[14px] leading-6 font-medium text-center ${
                item.active ? "text-[#0A0A0A]" : "text-[#A1A1A1]"
              }`}
            >
              {item.label}
            </span>
          </div>
        </button>
      ))}
    </footer>
  );
}
