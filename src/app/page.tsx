import ContentSection from "@/components/ContentSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const sectionOneData = {
    title: "เว็บพนันออนไลน์ UFA369 ไม่มีขั้นต่ำ มั่นคง การันตีความปลอดภัย 100%",
    paragraphs: [
      "เว็บพนันออนไลน์ UFA369 เปิดรับพนันออนไลน์ แทงบอลออนไลน์ ในเครือ UFABET ซึ่งเป็นเว็บพนันออนไลน์เว็บตรงไม่ผ่านเอเย่นต์มาตรฐานสูงสุดในปัจจุบัน เล่นตรงกับบริษัทจริงไม่ผ่านเอเย่นต์ เว็บพนันออนไลน์ ฝากถอน ไม่มีขั้นต่ำ รวดเร็วทันใจ ผ่านระบบ ฝาก-ถอน อัตโนมัติหน้าเว็บ ไม่ต้องรอตัดรอบยอด ไม่ต้องทำ เทิร์น",
      "ที่ดีที่สุด คือเรามีกิจกรรม แจกเครดิตฟรี ทุกวัน สำหรับนักเดิมพันที่ใช้ทุนน้อย รับเงินเดิมพันไปต่อยอดได้แบบฟรี ปลอดภัย มั่นคงในการเดิมพัน เล่นผ่านเว็บได้เลย ไม่ต้องดาวน์โหลด ทีมงานมืออาชีพกว่า 100 อัตรา คอยให้บริการตลอด 24 ชั่วโมง",
    ],
    imageUrl: "/content-img-1.jpg",
    imageAlt: "ถ่ายทอดสดมวยไทย",
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ContentSection
          title={sectionOneData.title}
          paragraphs={sectionOneData.paragraphs}
          imageUrl={sectionOneData.imageUrl}
          imageAlt={sectionOneData.imageAlt}
        />
      </main>
    </>
  );
}
