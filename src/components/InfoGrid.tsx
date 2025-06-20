import React from "react";

const InfoGrid = () => {
  return (
    <>
      <section className="py-0 px-4">
        <div className="max-w-6xl mx-auto mx-auto">
          {/*
          1. เปลี่ยนเป็น Flex container ที่มี gap เพื่อสร้าง "ช่องว่าง" ระหว่าง div
          - flex-col: บนมือถือให้เรียงจากบนลงล่าง
          - lg:flex-row: บนจอใหญ่ให้เรียงจากซ้ายไปขวา
          - gap-8: คือช่องว่างระหว่างกรอบ div ทั้งสอง
        */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* 
            ===== คอลัมน์ซ้าย (ข้อดี) =====
            - ย้าย border, rounded, shadow ทั้งหมดมาไว้ที่นี่
          */}
            <div className="lg:w-1/2 p-8 border border-[rgb(var(--color-golden-border))] shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <h2 className="text-2xl font-bold text-[var(--color-text-title)] mb-1">
                ข้อดีของเว็บไซต์พนัน
              </h2>
              <h3 className="text-2xl font-bold text-[var(--color-text-title)] mb-4">
                UFABET369.NET
              </h3>
              <ul className="space-y-2 text-white text-sm">
                <li>
                  – เป็น
                  <span className="text-[var(--color-text-strong)]">
                    เว็บพนันบอล
                  </span>
                  ระบบมาตราฐานระดับโลก
                </li>
                <li>– แทงขั้นต่ำ 10 บาท</li>
                <li>– สเตปขั้นต่ำ 2 คู่</li>
                <li>– บอลเปิดเยอะกว่า Sbobet</li>
                <li>– มีมวยไทยเปิดให้เดิมพัน</li>
                <li>– เมมเบอร์ สามารถเปลี่ยน username ได้</li>
                <li>– ดูบอลถ่ายทอดสดในเว็บได้ ( สัญญาณเร็วกว่าทรูวิชั่น )</li>
                <li>
                  – มีหน้า mobile site รองรับทุกสมาร์ทโฟน ทั้ง แอนดรอย และ IOS
                </li>
                <li>
                  – ทางเว็บ UFABET369 มีบริการ{" "}
                  <span className="text-[var(--color-text-strong)]">
                    ทางเข้า เว็บแทงบอล
                  </span>{" "}
                  ที่ปลอดภัย และแน่นอนสำหรับลูกค้า และไม่ยุ่งยากต่อการใช้งาน
                </li>
              </ul>
            </div>

            {/* 
            ===== คอลัมน์ขวา (ขั้นตอน) =====
            - ย้าย border, rounded, shadow ทั้งหมดมาไว้ที่นี่เช่นกัน
          */}
            <div className="lg:w-2/3 p-8  border border-[rgb(var(--color-golden-border))] shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <h2 className="text-2xl font-bold text-center text-[rgb(var(--color-primary-yellow))] mb-4">
                ขั้นตอน สมัครเว็บแทงบอล UFABET369.NET ทาง Line@
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-white mb-8">
                <li>แจ้งว่าต้องการใช้บริการเว็บไซต์ UFABET</li>
                <li>
                  แจ้งข้อมูล ชื่อ เบอร์โทรติดต่อ บัญชีธนาคาร
                  (บัญชีธนาคารต้องเป็นชื่อเดียวกับลูกค้าที่ลงทะเบียน)
                </li>
                <li>
                  ทำการโอนเงินเข้าระบบ พร้อมแจ้งหลักฐานการโอนเงิน ทาง call
                  center หรือ line
                </li>
                <li>
                  ทีมงานจะใช้เวลาตรวจสอบ 5-10 นาที ถ้ามีจำนวนเงินเข้าระบบแล้ว
                  ทีมงานจะจัดส่ง username password ให้กับลูกค้า
                  เป็นอันเสร็จสิ้นกระบวนการ
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-center text-[var(--color-text-title)] mb-4">
                ทางเข้า เว็บแทงบอล
              </h2>
              <p className="text-white text-center mb-6">
                สำหรับลูกค้าที่สนใจสมัครเว็บ{" "}
                <span className="text-[rgb(var(--color-primary-yellow))]">
                  แทงบอลออนไลน์
                </span>{" "}
                กับเว็บไซต์ UFABET369.NET สามารถติดต่อพนักงาน CallCenter
                บริการตลอด 24 ชั่วโมง
                พนักงานมืออาชีพที่คอยให้บริการและให้คำปรึกษาในทุกคำถามตลอด 24
                ชั่วโมง ที่ดีที่สุดของระบบ Call Center ที่ดีที่สุด
                ทันสมัยที่สุดในคาสิโนออนไลน์ และฝาก-ถอน ทันใจใน 15 วินาที
                ผ่านทุกธนาคารชั้นนำ
              </p>

              <div className="flex justify-center items-center gap-4">
                {/* Icons */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.928 4.832c.115.426.136.86.065 1.288l-1.558 9.348c-.144.864-.832 1.517-1.706 1.517-.33 0-.655-.102-.94-.298L12.9 13.9l-2.61 2.52c-.39.39-.902.585-1.414.585-.613 0-1.226-.298-1.767-.864l-1.63-1.737-3.326 1.18c-.22.078-.45.117-.676.117-.506 0-.986-.27-1.25-1.01-.19-.55-.102-1.14.23-1.63L9.62 4.215c.55-.79 1.488-1.268 2.47-1.268.414 0 .822.09 1.202.274l8.636 4.18c.39.19.648.514.73.91.026.13.04.26.04.39v.117z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[rgb(var(--color-primary-yellow))]">
            เว็บบอล UFABET เว็บตรง ครบวงจร ฝาก-ถอน ไม่มีขั้นต่ำ
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              หากคุณกำลังหา{" "}
              <span className="text-[rgb(var(--color-primary-yellow))]">
                เว็บอล
              </span>{" "}
              เว็บตรงเว็บไหนดี ที่สามารถแทงบอลเงินสดกับ UFABET ได้ครบทุกคู่
              ทุกลีก
              ยิ่งเป็นช่วงนี้ที่มีการแข่งขันบอลโลกรรับรองว่าคุณจะได้รับบริการอย่างครบวงจรมากที่สุดอย่างแน่นอน
              ซึ่งสามารถรองรับการเดิมพันแบบไร้ขีดจำกัด{" "}
              <span className="text-[rgb(var(--color-primary-yellow))]">
                เว็บบอลออนไลน์
              </span>{" "}
              ของเราสามารถใช้งานด้วยความปลอดภัยเชื่อถือได้
              ทุกการเดิมพันคุณจะสามารถรับเงินเดิมพัน 100% เพราะเว็บอล UFABET
              ของเรามีการบริการที่ดีที่สุดในปี 2023
              การันตีเลยว่าทุกคนที่เข้ามาใช้บริการเว็บอลไม่ผิดหวังอย่างแน่นอน
            </p>
            <p>
              <span className="text-[rgb(var(--color-primary-yellow))]">
                เว็บบอล
              </span>{" "}
              UFABET เว็บแทงบอลออนไลน์ ที่ครบเครื่องคุ้มค่าที่สุด
              สมัครเว็บอลต้องที่ UFABET ที่เดียวเท่านั้น เราคือเว็บอล{" "}
              <span className="text-[rgb(var(--color-primary-yellow))]">
                ราคาดีที่สุด
              </span>{" "}
              สร้างและพัฒนามาเพื่อคนไทยโดยเฉพาะ เหมาะสมกับคนไทยมากที่สุด
              และเรียกได้ว่าเป็นเว็บบอล ราคาดีที่สุดดีที่สุด ในตอนนี้
            </p>
            <p>
              เราเป็นอันดับ 1
              ในเรื่องการบริการเว็บอลออนไลน์ที่คนไทยไว้ใจในการใช้งานและการให้บริการเว็บอลออโต้ที่ลูกค้าเลือกใช้มากที่สุด
              อยู่กับเรามาอย่างยาวนาน เว็บอลufabet ของเราพร้อมให้บริการ 24
              ชั่วโมง เพราะเราอยากให้ลูกค้าได้รับการดูแลอย่างเต็มที่ สมัครเว็บอล
              ufabet กับเว็บไซต์ UFABET369 จะได้รับสิทธิพิเศษต่างๆ
              ได้ทันทีโดยไม่มีเงื่อนไขอย่างแน่นอน{" "}
              <span className="text-[rgb(var(--color-primary-yellow))]">
                สมัครเว็บอล
              </span>{" "}
              เว็บอลออนไลน์ ยูฟ่าเบท369 มั่งคง ได้เงินชัวร์ ทางเว็บเป็นเว็บแท้
              เล่นตรง ไม่ผ่านเอเย่นต์
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoGrid;
