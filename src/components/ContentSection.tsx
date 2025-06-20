import React from "react";
import Image from "next/image";

// กำหนด Type ของ Props ที่ Component นี้จะรับเข้ามา
interface ContentSectionProps {
  title: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean; // prop เสริมสำหรับสลับตำแหน่งรูป
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  paragraphs,
  imageUrl,
  imageAlt,
  reverse = false,
}) => {
  return (
    <section className="py-8 md:py-12 bg-[#1f1f1f] text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-400">
          {title}
        </h2>

        {/* Main content grid */}
        <div
          className={`
          flex flex-col gap-8 
          ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        `}
        >
          {/* Text content */}
          <div className="md:w-1/2 space-y-4">
            {paragraphs.map((p, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Image content */}
          <div className="md:w-1/2">
            <div className="border-2 border-yellow-500/50 rounded-2xl p-2">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1024}
                height={536}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
