import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLine } from "react-icons/fa";
const ContactGrid = () => {
  return (
    <>
      <section className="py-12 px-4">
        <div className="text-center pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-title)]">
            เว็บอล UFABET หมดปัญหากังวลใจเว็บไซต์ให้บริการ 24 ชั่วโมง
          </h2>
        </div>
        <div className="max-w-6xl mx-auto mx-auto">
          {/*
          - โครงสร้างเหมือน InfoGrid แต่สลับสัดส่วนความกว้าง
        */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 
            ===== คอลัมน์ซ้าย (เนื้อหาหลัก) =====
            - กำหนดความกว้างเป็น lg:w-2/3 (พื้นที่ 2 ใน 3 ส่วน)
          */}
            <div className="lg:w-2/3 p-8 rounded-2xl border border-[rgb(var(--color-golden-border))] shadow-[0_0_15px_rgba(220,38,38,0.5)] text-white">
              <h2 className="text-2xl font-bold text-[rgb(var(--color-primary-yellow))] mb-6">
                ช่องทางการติดต่อ UFABET369.NET
              </h2>
              <div className="space-y-6 text-sm md:text-base">
                <p>
                  ช่องทางการติดต่อสำนักงาน ท่านสามารถ
                  ติดต่อสอบถามทางทีมงานได้ทุกเรื่อง ที่เกี่ยวกับ คาสิโนออนไลน์
                  และ กีฬาออนไลน์ ไม่ว่าจะเติมเงิน ถอนเงิน โยกเงิน เช็คยอดเงิน
                </p>
                <p>
                  หากพบปัญหาในการใช้งาน ทาง Call Center จะดูแลท่านได้ตลอด
                  เราได้เตรียมช่องทางหลากหลายช่องทางในการเข้าใช้งาน
                  เพื่อที่จะให้สมาชิกทุกท่าน ได้ติดต่อกับทาง ทีมงาน Call Center
                  ได้สะดวก รวดเร็ว ตลอด 24 ชั่วโมง
                </p>
                <p>
                  บุคลากรทุกคน ได้ผ่านการฝึกฝน ให้มีความเชี่ยวชาญ
                  ในการเรื่องที่สมาชิกอาจติดปัญหา และสามารถแก้ไข
                  หรือตอบคำถามสมาชิกได้อย่างทันท่วงที
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href="https://line.me/R/ti/p/@Support369V2"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
                >
                  <FaLine size={24} />
                  <span>@Support369V2</span>
                </Link>
              </div>
            </div>

            {/* 
            ===== คอลัมน์ขวา (รูปภาพ) =====
            - กำหนดความกว้างเป็น lg:w-1/3 (พื้นที่ 1 ใน 3 ส่วน)
          */}
            <div className="lg:w-2/3 p-8 rounded-2xl border border-[rgb(var(--color-golden-border))] shadow-[0_0_15px_rgba(220,38,38,0.5)] text-white text-center flex flex-col justify-center">
              <p className="mb-4">
                สมาชิกทุกท่านไม่ต้องเป็นกังวล
                ถ้าหากท่านมีปัญหาในระหว่างการใช้งาน{" "}
                <span className="text-[rgb(var(--color-primary-yellow))]">
                  UFABET369
                </span>{" "}
                ได้จัดเตรียมผู้ดูแลแล้วให้กับทุกท่านแล้วตลอด 24 ชั่วโมง
              </p>
              <Image
                src="/contact1.jpg" // อย่าลืมเปลี่ยนชื่อไฟล์รูปภาพให้ถูกต้องนะครับ
                alt="การเงินมั่นคง"
                width={400}
                height={400}
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 px-4 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--color-text-title)]">
            สมัคร เว็บบอล UFABET ตรงบริษัทแม่ ทางเลือกที่ดีที่สุด
          </h2>

          <div className="container mx-auto max-w-5xl text-center">
            <div className="space-y-6 text-sm md:text-base leading-relaxed">
              <p>
                สมัครเว็บอล ดีที่สุด
                เดิมพันเว็บตรงเว็บหลักเป็นทางเลือกที่พลัสสำหรับนักพนันมือใหม่ไม่ผ่านเอเย่นต์
                สามารถทำกำไรให้เพิ่มพูนได้ผลกำไรจากการพนันบอล เพราะเราเป็น
                <span className="text-[var(--color-text-strong)]">
                  เว็บอลที่ดีที่สุด
                </span>
                อันดับ 1 เป็นตัวแทนนักพนันนิยมใช้บริการมากที่สุด ฝากถอนเว็บอล
                ไม่มีขั้นต่ำ สามารถใช้งานผ่านโทรศัพท์มือถือ
              </p>
              <p>
                เราเป็นเว็บอลจ่ายจริงทันสมัยรวดเร็วทันใจ
                สามารถรวบรวมความสนุกได้ทุกที่โทรศัพท์มือถือได้ตลอดเวลาส่งตรงถึงบ้านคุณ{" "}
                <span className="text-[var(--color-text-strong)]">
                  สมัครเว็บอลออนไลน์
                </span>
                ได้ง่ายๆ
                และแถมมีลีกให้เลือกเล่นอย่างครบจบในเว็บเดียวดีกว่าเรื่องการตอบแทนที่ทำกำไรสูง
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactGrid;
