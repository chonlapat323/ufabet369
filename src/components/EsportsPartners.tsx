// src/components/EsportsPartners.tsx
import React from "react";
import Image from "next/image";

// **สำคัญ:** แก้ไขชื่อไฟล์และ alt text ให้ตรงกับไฟล์รูปภาพของคุณ
const partnersLogos = [
  { src: "/partners/one.png", alt: "ONE Esports" },
  { src: "/partners/dragon.png", alt: "Dragon Logo" },
  { src: "/partners/k3.png", alt: "K3" },
  { src: "/partners/champion.png", alt: "Champion of Champions" },
  { src: "/partners/mibr.png", alt: "mibr" },
  { src: "/partners/esl.png", alt: "ESL" },
  { src: "/partners/ihc.png", alt: "IHC Esports" },
  { src: "/partners/og.png", alt: "OG" },
];

const EsportsPartners = () => {
  return (
    <section className="mt-8 py-12 px-4 border-t border-[rgb(var(--color-primary-yellow))]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-center text-[rgb(var(--color-primary-yellow))] mb-10">
          พันธมิตร eSports
        </h2>
        {/*
          - ใช้ Flexbox ในการจัดเรียงโลโก้
          - justify-center: จัดให้อยู่ตรงกลางแนวนอน
          - items-center: จัดให้อยู่ตรงกลางแนวตั้ง
          - flex-wrap: อนุญาตให้โลโก้ตัดขึ้นบรรทัดใหม่เมื่อหน้าจอแคบ
          - gap-x-8: กำหนดระยะห่างแนวนอนระหว่างโลโก้
          - gap-y-6: กำหนดระยะห่างแนวตั้งเมื่อโลโก้ขึ้นบรรทัดใหม่
        */}
        <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-5 gap-y-4">
          {partnersLogos.map((logo, index) => (
            <div key={index} className="relative h-10 w-18 text-white">
              {/* คุณสามารถปรับขนาด (h-10 w-28) ได้ตามความเหมาะสม */}
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="fill"
                objectFit="contain"
                className="brightness-0 invert" // ทำให้โลโก้เป็นสีขาว
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EsportsPartners;
