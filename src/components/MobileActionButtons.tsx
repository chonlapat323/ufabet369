import React from "react";

const MobileActionButtons = () => {
  return (
    // ครอบด้วย div ที่จะแสดงผลเฉพาะบนจอมือถือ (เล็กกว่า lg)
    <div className="lg:hidden w-full px-4 pt-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          className="
            w-full sm:w-auto flex-grow
            bg-[var(--color-input-bg2)] text-text-dark font-bold 
            py-3 px-6 rounded-lg whitespace-nowrap
            shadow-[0_0_15px_rgba(250,204,21,0.5)] 
            hover:opacity-80 transition-opacity
            text-black
          "
        >
          ฝาก - ถอน
        </button>
        <button
          className="
            w-full sm:w-auto flex-grow
            bg-[var(--color-input-bg2)] text-text-dark font-bold 
            py-3 px-6 rounded-lg whitespace-nowrap
            shadow-[0_0_15px_rgba(250,204,21,0.5)] 
            hover:opacity-80 transition-opacity
            text-black
          "
        >
          สมัครสมาชิก
        </button>
      </div>
    </div>
  );
};

export default MobileActionButtons;
