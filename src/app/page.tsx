import ContactGrid from "@/components/ContactGrid";
import EsportsPartners from "@/components/EsportsPartners";
import FinalFooter from "@/components/FinalFooter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoBar from "@/components/InfoBar";
import InfoGrid from "@/components/InfoGrid";
import ThreeColumnCta from "@/components/ThreeColumnCta";

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

  const sectionTwoData = {
    title: "สมัครเว็บแทงบอล อันดับ 1 ดีที่สุดและมั่นคงที่สุด",
    paragraphs: [
      "เว็บแทงบอล UFABET369 เราคือตัวแทน เว็บพนันออนไลน์ โดยตรงจาก ufabet เว็บเล่น แทงบอลออนไลน์ อันดับ 1 ที่เป็นที่นิยมใช้บริการ มากที่สุดในประเทศไทย รับเดิมพันกีฬาออนไลน์ และคาสิโนทุกประเภท สามารถเข้า เว็บแทงบอลออนไลน์ ผ่านเว็บไซต์ หรือ บนมือถือ (iPhone หรือ Android) ซึ่งมีระบบรักษาความปลอดภัยที่เชื่อถือได้ และมีมาตรฐานสากลระดับโลก ในการรองรับการแทงบอลออนไลน์ผ่านเน็ต และ พนันกีฬาออนไลน์ หรือ เว็บคาสิโน ที่หลากหลาย พร้อมให้บริการตลอด 24 ชั่วโมง",
      "โดยสามารถติดต่อได้ผ่านทางโทรศัพท์ แชทผ่านหน้าเว็บไซต์ หรือทางไลน์ โดยมีพนักงานมืออาชีพที่คอยให้บริการตลอดเวลาโดยที่ไม่มีวันหยุด ใช้เวลาในการฝาก ไม่เกิน 5 วินาที และถอนไม่เกิน 15 วินาที พร้อมมีโปรโมชั่นพิเศษมากมาย",
    ],
    imageUrl: "",
    imageAlt: "",
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoBar />
        <InfoGrid />
        <ContactGrid />
        <ThreeColumnCta />
        <EsportsPartners />
        <Footer />
        <FinalFooter />
      </main>
    </>
  );
}
