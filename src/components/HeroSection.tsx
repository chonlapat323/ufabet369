import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-text-title)]">
        เว็บแทงบอล ช่องทางการเดิมพันที่ง่าย ทำเงินได้ทุกวัน
      </h1>
      <p className="max-w-6xl mx-auto text-white mb-8">
        สำหรับคนที่ชอบ{" "}
        <span className="text-[var(--color-text-strong)]">เว็บแทงบอล</span>{" "}
        ห้ามพลาด UFABET เป็นอีกหนึ่งช่องทางทำเงินที่สร้างรายได้มากที่สุด
        โดยคุณสามารถ
        <span className="text-[var(--color-text-strong)]">สมัครแทงบอล</span>
        เว็บตรงไม่ผ่านเอเย่นต์เปิดรับแทงบอลครบทุกลีก
        ได้รับความสนุกสุดเร้าใจกับการเดิมพันพร้อมรับชมการแข่งขันบอลโลกฟรี
        แถมทางเว็บยังมีแจกโบนัสดี ๆ สุดคุ้ม มาพร้อมกับโบนัสแทงบอลคืนค่าคอม 0.5%
        เรียกได้ว่า เป็น{" "}
        <span className="text-[var(--color-text-strong)]">
          เว็บพนันบอล
        </span>{" "}
        ที่ดีที่สุดในปี 2023 การันตีความมั่นคง ปลอดภัย เว็บตรงจาก UFABET
        รับรองว่าต้องติดใจอย่างแน่นอน
      </p>

      <div className="max-w-5xl mx-auto py-[5px] px-0 border border-white rounded-[55px] shadow-[0px_0px_15px_0px_#FFD144] overflow-hidden">
        <Image
          src="/content-img-1.jpg" // The user changed this from hero-image.png, I will keep it
          alt="Ufabet hero image"
          width={1200}
          height={600}
          className="rounded-lg w-full h-auto"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-text-title)]">
          สมัครเว็บแทงบอล อันดับ 1 ดีที่สุดและมั่นคงที่สุด
        </h2>
        <div className="max-w-5xl mx-auto text-white space-y-4">
          <p>
            <span className="text-[var(--color-text-strong)]">
              {" "}
              เว็บแทงบอล{" "}
            </span>{" "}
            UFABET369 เราคือตัวแทน เว็บพนันออนไลน์ โดยตรงจาก ufabet เว็บเล่น
            <span className="text-[var(--color-text-strong)]">
              {" "}
              แทงบอลออนไลน์ อันดับ 1
            </span>{" "}
            ที่เป็นที่นิยมใช้บริการ มากที่สุดในประเทศไทย รับเดิมพันกีฬาออนไลน์
            และคาสิโนทุกประเภท สามารถเข้า{" "}
            <span className="text-[var(--color-text-strong)]">
              เว็บแทงบอลออนไลน์
            </span>{" "}
            ผ่านเว็บไซต์ หรือ บนมือถือ (iPhone หรือ Android)
            ซึ่งมีระบบรักษาความปลอดภัยที่เชื่อถือได้ และมีมาตรฐานสากลระดับโลก
            ในการรองรับการแทงบอลออนไลน์ผ่านเน็ต และ พนันกีฬาออนไลน์ หรือ
            <span className="text-[var(--color-text-strong)]">
              {" "}
              เว็บคาสิโน{" "}
            </span>
            ที่หลากหลาย พร้อมให้บริการตลอด 24 ชั่วโมง
          </p>
          <p>
            โดยสามารถติดต่อได้ผ่านทางโทรศัพท์ แชทผ่านหน้าเว็บไซต์ หรือทางไลน์
            โดยมีพนักงานมืออาชีพที่คอยให้บริการตลอดเวลาโดยที่ไม่มีวันหยุด
            ใช้เวลาในการฝาก ไม่เกิน 5 วินาที และถอนไม่เกิน 15 วินาที
            พร้อมมีโปรโมชั่นพิเศษมากมาย
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
