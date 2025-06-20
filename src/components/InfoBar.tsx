import Image from "next/image";
import Link from "next/link";

const InfoBar = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto mx-auto px-4">
        {/* --- ส่วนของ 5 คอลัมน์ (เหมือนเดิม) --- */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-center">
          {/* ส่วนที่ 1: ไอคอน บริการลูกค้า */}
          <div className="flex justify-center">
            <Link
              href="https://line.me/R/ti/p/@support369v2"
              target="_blank"
              className="block p-2 rounded-2xl border border-white shadow-[0px_0px_15px_0px_#FFD144]"
            >
              <Image
                src="/info1.jpg"
                alt="บริการลูกค้า"
                width={108}
                height={108}
                className="w-24 h-24 object-contain"
              />
            </Link>
          </div>

          {/* ส่วนที่ 2: ข้อความ บริการลูกค้า */}
          <div className="text-white md:text-left">
            <h3 className="text-xl font-semibold text-[rgb(var(--color-primary-yellow))] mb-2">
              บริการลูกค้า
            </h3>
            <p className="text-sm">
              ทีมงานมืออาชีพบริการลูกค้าตลอด 24 ชม.
              <br />
              <span className="text-[var(--color-text-strong)]">
                LINE ID : @Support369V2
              </span>
            </p>
          </div>

          {/* ส่วนที่ 3: ไอคอน ฝาก-ถอน ออโต้ */}
          <div className="flex justify-center">
            <Link
              href="https://www.ufabet369.net/"
              target="_blank"
              className="block p-2 rounded-2xl border border-white shadow-[0px_0px_15px_0px_#FFD144]"
            >
              <Image
                src="/info2.jpg"
                alt="ฝาก-ถอน ออโต้"
                width={108}
                height={108}
                className="w-24 h-24 object-contain"
              />
            </Link>
          </div>

          {/* ส่วนที่ 4: ข้อความ การันตีความมั่นคง */}
          <div className="text-white md:text-left">
            <h3 className="text-xl font-semibold text-[rgb(var(--color-primary-yellow))] mb-2">
              การันตีความมันคง
            </h3>
            <p className="text-sm">
              การเงินมั่นคง น่าเชื่อถือ แทงถูกเป็นล้านก็จ่าย การันตีความ <br />
              <span>ปลอดภัย100%</span>
            </p>
          </div>

          {/* ส่วนที่ 5: ไอคอน การเงินมั่นคง */}
          <div className="flex justify-center">
            <Link
              href="https://www.ufabet369.net/"
              target="_blank"
              className="block p-2 rounded-2xl border border-white shadow-[0px_0px_15px_0px_#FFD144]"
            >
              <Image
                src="/info3.jpg"
                alt="การเงินมั่นคง"
                width={108}
                height={108}
                className="w-24 h-24 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* --- เพิ่มส่วนข้อความใหม่ที่นี่ --- */}
        <div className="mt-12 text-center text-white">
          <h3 className="text-xl font-semibold text-[rgb(var(--color-primary-yellow))] mb-2">
            ฝาก-ถอน Auto
          </h3>
          <p className="text-sm">
            ระบบฝาก-ถอน AI ออโต้อัจฉริยะ รวดเร็ว ทันใจภายใน 30 วินาที
            ฝากถอนขั้นต่ำ 1 บาท
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
