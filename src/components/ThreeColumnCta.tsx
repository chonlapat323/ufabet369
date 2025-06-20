import React from "react";
import Image from "next/image";

const ThreeColumnCta = () => {
  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/*
          - ใช้ Grid สร้าง 3 คอลัมน์บนจอใหญ่ (lg:grid-cols-3)
          - บนมือถือจะแสดงเป็น 1 คอลัมน์ (grid-cols-1)
        */}
          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-8 text-white">
            {/* ===== คอลัมน์ซ้าย ===== */}
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h3 className="text-2xl text-center font-bold text-[rgb(var(--color-primary-yellow))] mb-2">
                  เว็บอลเว็บตรง UFABET ราคาบอลดีที่สุด อันดับ 1
                </h3>
                <br />
                <p className="text-md text-center">
                  UFABET มีราคาบอลและบอลสดให้ดูได้ฟรีๆ
                  สมัครเว็บเดียวมีครบที่คนเล่นเยอะที่สุด
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-center font-bold text-[rgb(var(--color-primary-yellow))] mb-2">
                  ข้อดี ผู้ให้บริการหลักในเครือ UFA
                </h3>
                <p className="text-md text-center">
                  UFABET มีราคาบอลและบอลสดให้ดูได้ฟรีๆ
                  สมัครเว็บเดียวมีครบที่คนเล่นเยอะที่สุด
                </p>
                <p className="text-md text-center">
                  เป็นเว็บหลักในเครือ UFA
                  โบนัสสูงให้โปรโมชั่นดีที่สุดทั้งสมาชิกเก่าและใหม่
                  ปลอดภัยน่าเชื่อถือ เป็นบริษัทแม่ผู้ถือหุ้นใหญ่ในเครือยูฟ่าเบท
                  เป็นศูนย์กลางความบันเทิงครบ ดูบอลสด
                  แถมด้วยกลุ่มลับพริตตี้สาวสวยในทุกๆ วัน
                </p>
              </div>
            </div>

            {/* ===== คอลัมน์กลาง (รูปภาพ) ===== */}
            <div className="lg:col-span-1 relative w-full aspect-square  border border-[rgb(var(--color-golden-border))] shadow-[0_0_15px_rgba(220,38,38,0.5)] text-white">
              <Image
                src="/img01.jpg" // อย่าลืมเปลี่ยนชื่อไฟล์รูปภาพ
                alt="Ufabet Center"
                layout="fill"
                objectFit="fill"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ===== คอลัมน์ขวา ===== */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-center font-bold text-[rgb(var(--color-primary-yellow))] mb-2">
                  โปรโมชั่นเว็บอล ค่าน้ำ ดีที่สุด
                </h3>
                <p className="text-md text-center">
                  แทงบอล ครบทุกคู่ ทุกลีก
                  รับรองว่าคุณจะได้รับความสนุกและชมการแข่งขันบอลโลกฟรี
                  คุณสามารถเดิมพันผ่านทางมือถือด้วยระบบออโต้และยังมีการแจกโบนัสดีๆ
                  สุดคุ้มค่า
                </p>
              </div>
              <div>
                <p className="text-md text-center">
                  ให้กับสมาชิก UFABET
                  ทุกท่านเรียกได้ว่าเป็นเว็บอลที่ดีที่สุดในปี 2023
                  ซึ่งหากใครกำลังสงสัยว่าจะเล่นเว็บอลออนไลน์
                  เว็บไหนดีล่าสุดอย่าลังเลรีบมาสมัครสมาชิก
                  แล้วไปลุยกับทุกความสนุกในการเดิมพัน
                  พร้อมรับเงินรางวัลมากมายกันได้เลย
                </p>
                <div className="flex-grow flex items-start justify-center lg:justify-start mt-4">
                  <div className="relative w-148 h-12">
                    {" "}
                    {/* กำหนดขนาดของรูปภาพที่นี่ */}
                    <Image
                      src="/ufa.png"
                      alt="Ufabet369 Logo"
                      layout="fill"
                      objectFit="contain" // ใช้ contain เพื่อให้เห็นรูปทั้งหมดในกรอบ
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 px-4 text-center text-gray-300">
        <div className="max-w-6xl mx-auto space-y-6">
          <p>
            เว็บบอล ufabet มีราคาบอลและบอลสดให้ดูได้ฟรีๆ
            สมัครเว็บเดียวมีครบถูกกฎหมาย
            ในต่างประเทศที่มีความมั่นคงปลอดภัยไม่ผ่านเอเย่นต์ให้ราคาน้ำ 4 ตังค์
            ไม่มีการตัดราคาค่าน้ำที่ลูกค้าควรได้รับ เว็บเรามีราคาบอล{" "}
            <span className="text-[rgb(var(--color-primary-yellow))]">
              ดูบอลสด
            </span>{" "}
            ให้เข้ามาวางเดิมพันได้ตลอด 24 ชั่วโมง
          </p>
          <p>
            <span className="text-[rgb(var(--color-primary-yellow))]">
              UFABET369.NET
            </span>{" "}
            ยินดีให้บริการตลอด 24 ชั่วโมง
            ด้วยทีมงานมืออาชีพคอยแก้ปัญหาให้กับคุณลูกค้า ลูกค้าที่เป็น สามาชิก
            กับเว็บไซต์เราจึงมั่นใจได้ว่าเว็บเรา ปลอดภัย
            แน่นอนไม่มีปิดเว็บไซต์หนีแน่นอน ด้านบริการ ฝาก-ถอน
            เว็บไซต์เราให้บริการตลอด 24 ชั่วโมง โดยไม่มีขั้นต่ำ บริการรวดเร็ว
            5-7 วินาที
          </p>
          <p>
            ไม่ต้องรอตัดรอบบิลเที่ยงวัน ไม่ต้องจุกจิก ให้ลูกค้าที่ใช้บริการ
            ต้องเสียอารมกับเรื่อง ฝาก-ถอน ในบางครั้งคุณลูกค้าอาจจะมีปัญหาขัดข้อง
            ไม่ว่าจะ เติมเงิน ถอนเงิน โยกเงิน สมัครสมาชิก ส่งเอกสารการโอนเงิน
            ทีมงาน UFABET369.NET ยินดีให้บริการอย่างเป็นกันเอง ตลอด 24 ชั่วโมง
            สำหรับคุณลูกค้า ที่มีข้อสงสัยเกี่ยวกับทางเว็บไซต์
            หรือต้องการสอบถามปัญหา สามารถติดต่อ ได้ที่{" "}
            <span className="text-[rgb(var(--color-primary-yellow))]">
              @support369v2
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default ThreeColumnCta;
