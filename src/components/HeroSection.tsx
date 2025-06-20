import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-8 px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[rgb(var(--color-primary-yellow))]">
        เว็บแทงบอล ช่องทางการเดิมพันที่ง่าย ทำเงินได้ทุกวัน
      </h1>
      <p className="max-w-4xl mx-auto text-white mb-8">
        สำหรับคนที่ชอบ{" "}
        <span className="text-[rgb(var(--color-primary-yellow))]">
          เว็บแทงบอล
        </span>{" "}
        ห้ามพลาด UFABET เป็นอีกหนึ่งช่องทางทำเงินที่สร้างรายได้มากที่สุด
        โดยคุณสามารถ
        <span className="text-[rgb(var(--color-primary-yellow))]">
          สมัครแทงบอล
        </span>
        เว็บตรงไม่ผ่านเอเย่นต์เปิดรับแทงบอลครบทุกลีก
        ได้รับความสนุกสุดเร้าใจกับการเดิมพันพร้อมรับชมการแข่งขันบอลโลกฟรี
        แถมทางเว็บยังมีแจกโบนัสดี ๆ สุดคุ้ม มาพร้อมกับโบนัสแทงบอลคืนค่าคอม 0.5%
        เรียกได้ว่า เป็น{" "}
        <span className="text-[rgb(var(--color-primary-yellow))]">
          เว็บพนันบอล
        </span>{" "}
        ที่ดีที่สุดในปี 2023 การันตีความมั่นคง ปลอดภัย เว็บตรงจาก UFABET
        รับรองว่าต้องติดใจอย่างแน่นอน
      </p>
      <div className="max-w-5xl mx-auto border-4 border-[rgb(var(--color-golden-border))] rounded-2xl p-1">
        <Image
          src="/content-img-1.jpg" // The user changed this from hero-image.png, I will keep it
          alt="Ufabet hero image"
          width={1200}
          height={600}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
