import React from "react";
import Image from "next/image";
import styles from "./Header.module.css"; // Import the CSS module
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <>
      <header>
        <div
          className="
        max-w-[1100px] mx-auto px-4 py-[10px]
        border-2  border-[rgb(var(--color-golden-border))] rounded-[5px]
        flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-6 lg:gap-y-0
      "
        >
          {/* Logo */}
          <div>
            <a href="#">
              <Image
                src="/logo.png"
                alt="ufabet369 logo"
                width={280}
                height={53}
                priority
              />
            </a>
          </div>

          {/* Right Side container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-3">
            {/* Action Buttons: Hidden on screens smaller than lg (1024px) */}
            <div className="hidden lg:flex items-center gap-x-3">
              <button
                className="
              bg-yellow-400 text-black font-bold py-[0.6rem] px-6 rounded-full 
              whitespace-nowrap cursor-pointer transition-all duration-300 
              shadow-[0_0_15px_rgba(250,204,21,0.5)] 
              hover:text-white
            "
              >
                ฝาก - ถอน
              </button>
              <button
                className="
              bg-yellow-400 text-black font-bold py-[0.6rem] px-6 rounded-full 
              whitespace-nowrap cursor-pointer transition-all duration-300 
              shadow-[0_0_15px_rgba(250,204,21,0.5)] 
              hover:text-white
            "
              >
                สมัครสมาชิก
              </button>
            </div>

            {/* Login Form */}
            <form
              autoComplete="off"
              className="flex items-center flex-wrap justify-center gap-2"
            >
              <input
                type="text"
                placeholder="ชื่อผู้ใช้"
                autoComplete="off"
                className="
              bg-black border-2 border-white text-white text-left 
              h-10 w-32 px-4 rounded-full transition-all duration-300 
              placeholder-gray-500 
              focus:outline-none focus:border-yellow-400
            "
              />
              <input
                type="password"
                placeholder="รหัสผ่าน"
                autoComplete="new-password"
                className="
              bg-black border-2 border-white text-white text-left 
              h-10 w-32 px-4 rounded-full transition-all duration-300 
              placeholder-gray-500 
              focus:outline-none focus:border-yellow-400
            "
              />
              <button
                type="submit"
                className="
              bg-yellow-400 text-black font-bold py-[0.6rem] px-8 rounded-full 
              cursor-pointer transition-all duration-300 
              shadow-[0_0_15px_rgba(250,204,21,0.5)] 
              hover:text-white
            "
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </header>
      <MainMenu />
    </>
  );
};

export default Header;
