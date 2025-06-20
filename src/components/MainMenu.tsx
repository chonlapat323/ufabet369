"use client";

import React, { useState } from "react";
import MobileActionButtons from "./MobileActionButtons";

// รายการเมนู
const menuItems = [
  "เว็บแทงบอล",
  "เว็บพนันออนไลน์",
  "แทงบอลเงินสด",
  "แทงบอลสเต็ป",
  "UFABET",
  "UFA369",
];

const MainMenu = () => {
  // State สำหรับควบคุมการเปิด/ปิดเมนู
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ฟังก์ชันสำหรับสลับสถานะเมนู
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-6 border-b  border-[var(--color-input-bg2)]">
      <div className="container mx-auto px-4">
        {/* --- เมนูสำหรับ Desktop --- */}
        {/* แสดงบนจอ lg ขึ้นไป */}
        <ul className="hidden lg:flex items-center justify-center flex-wrap gap-x-16 py-3">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // ป้องกันพฤติกรรมปกติของลิงก์ (ไม่ให้หน้าเลื่อน)
                  alert(`คุณได้คลิกที่เมนู: ${item}`); // แสดง alert พร้อมชื่อเมนู
                }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <MobileActionButtons />

        {/* --- ปุ่ม Hamburger สำหรับ Mobile --- */}
        {/* แสดงบนจอที่เล็กกว่า lg */}
        <div className="lg:hidden flex items-center justify-center py-2">
          <button
            onClick={toggleMobileMenu} // เรียกใช้ฟังก์ชัน toggle
            className="p-2 bg-[var(--color-input-bg2)] rounded-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // --- ไอคอน 'X' (เมื่อเมนูเปิด) ---
              <svg
                className="w-6 h-6 text-gray-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            ) : (
              // --- ไอคอน Hamburger (เมื่อเมนูปิด) ---
              <svg
                className="w-6 h-6 text-gray-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- ส่วนของเมนูที่สไลด์ลงมา --- */}
      {/* ใช้ CSS Transition เพื่อสร้าง Animation */}
      {/* --- ส่วนของเมนูที่สไลด์ลงมา --- */}
      <div
        className={`
  lg:hidden
  overflow-hidden
  transition-all duration-500 ease-in-out
  ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"}
`}
      >
        {/* เพิ่ม padding รอบนอก และสร้างกรอบสีทอง */}
        <div className="p-4">
          <div className="border border-[var(--color-input-bg2)] rounded-lg">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={item}
                  // เพิ่มเส้นขอบล่างให้กับทุก li ยกเว้นอันสุดท้าย
                  className={
                    index < menuItems.length - 1
                      ? "border-b border-[var(--color-input-bg2)]"
                      : ""
                  }
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // ป้องกันพฤติกรรมปกติของลิงก์ (ไม่ให้หน้าเลื่อน)
                      alert(`คุณได้คลิกที่เมนู: ${item}`); // แสดง alert พร้อมชื่อเมนู
                    }}
                    // เพิ่ม
                    // เพิ่ม padding ด้านข้างให้ข้อความ
                    className={`block p-4 text-center text-lg ${
                      index === 1
                        ? "bg-[var(--color-input-bg2)] text-black"
                        : "text-white hover:bg-gray-800"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
