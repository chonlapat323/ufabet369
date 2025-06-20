// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

// รายการลิงก์สำหรับ Footer จัดการง่ายใน array นี้
const footerLinks = [
  { href: "/contact", text: "ติดต่อเรา" },
  { href: "/about-author", text: "เกี่ยวกับผู้เขียน" },
  { href: "/about-company", text: "เกี่ยวกับบริษัท" },
  { href: "/privacy-policy", text: "นโยบายความเป็นส่วนตัว" },
  { href: "/responsible-gaming", text: "การเล่นเกมที่มีส่วนรับผิดชอบ" },
  { href: "/terms-conditions", text: "ข้อตกลงและเงื่อนไข" },
  { href: "/faq", text: "ช่วยเหลือ / คำถามที่พบบ่อย" },
];

const Footer = () => {
  return (
    <footer className="py-0 px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[rgb(var(--color-primary-yellow))] mb-8">
          เกี่ยวกับเรา
        </h2>
        <nav className="flex justify-center items-center flex-wrap gap-x-4 md:gap-x-6 gap-y-3">
          {footerLinks.map((link, index) => (
            // React.Fragment ใช้สำหรับ group element โดยไม่สร้าง extra DOM node
            <React.Fragment key={link.text}>
              <Link
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.text}
              </Link>
              {/* ตรวจสอบว่าไม่ใช่ลิงก์สุดท้าย เพื่อเพิ่มตัวคั่น '|' */}
              {index < footerLinks.length - 1 && (
                <span className="text-gray-600 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
