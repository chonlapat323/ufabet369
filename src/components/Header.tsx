// src/components/Header.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import MainMenu from "./MainMenu";
import { useAuth } from "@/context/AuthContext";
import HeaderAuthSkeleton from "./HeaderAuthSkeleton";
import toast from "react-hot-toast";
import DepositWithdrawModal from "./DepositWithdrawModal";

const Header = () => {
  const { user, login, logout, isLoading } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.promise(login(username, password), {
      loading: "กำลังเข้าสู่ระบบ...",
      success: (user) => {
        setUsername("");
        setPassword("");
        return (
          <b>สวัสดี, {(user as unknown as { username: string }).username}!</b>
        );
      },
      error: (err) => (
        <b>{err.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"}</b>
      ),
    });
  };

  const handleLogout = () => {
    logout();
    toast.success("ออกจากระบบสำเร็จ");
  };

  return (
    <>
      <header>
        <div
          className="max-w-6xl mx-auto px-4 py-[10px]
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
            {/* ======================================================== */}
            {/* === ย้ายปุ่มออกมาแสดงผลตลอดเวลา (ยกเว้นตอนโหลด) === */}
            {/* ======================================================== */}
            {!isLoading && (
              <div className="hidden lg:flex items-center gap-x-3">
                <button
                  // 3. ปุ่มนี้จะเปิด Modal
                  onClick={() => {
                    if (!user) {
                      toast.error("กรุณาเข้าสู่ระบบก่อน");
                      return;
                    }
                    setIsModalOpen(true);
                  }}
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
            )}

            {/* ======================================================== */}
            {/* === ส่วนที่จะสลับระหว่าง ฟอร์ม Login กับ ข้อมูล User === */}
            {/* ======================================================== */}
            {isLoading ? (
              <HeaderAuthSkeleton />
            ) : user ? (
              // --- แสดงข้อมูลผู้ใช้และปุ่ม Logout ---
              <div className="flex items-center gap-x-2 text-white text-sm h-10">
                <div className="text-center border-r border-gray-500 pr-2">
                  <p>
                    สวัสดี, <span className="font-bold">{user.username}</span>
                  </p>
                  <p>
                    เครดิต:{" "}
                    <span className="font-bold">
                      {user.balance?.toFixed(2) || "0.00"}
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white font-bold h-full px-4 rounded"
                >
                  ออกจากระบบ
                </button>
              </div>
            ) : (
              // --- แสดงฟอร์ม Login ---
              <form
                onSubmit={handleLoginSubmit}
                autoComplete="off"
                className="flex items-center flex-wrap justify-center gap-2"
              >
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            )}
          </div>
        </div>
      </header>
      <MainMenu />

      <DepositWithdrawModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
