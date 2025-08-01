import React, { useState } from "react";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="bg-[#FFFFFF] container flex gap-3 pt-3.5 pl-4 pb-3">
        <div className=" border border-[#D4D4D4] rounded-3xl">
          <button
            className="cursor-pointer flex flex-row justify-center items-center gap-2 pt-0.25 px-0.25"
            onClick={toggleMenu}
          >
            <img src="/assets/icons/more.svg" className="" />
            <img src="/assets/icons/profile-circle.svg" className="" />
          </button>
        </div>
        <button className="border border-[#D4D4D4] rounded-full cursor-pointer">
          <img src="/assets/icons/Support-main.svg" className="p-2" />
        </button>
      </div>
      {isMenuOpen && <ProfileMenu />}
    </header>
  );
}
