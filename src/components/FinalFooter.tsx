// src/components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- SVG Icons for Social Media ---
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.038A9.957 9.957 0 0022 12z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.88-8.83-4.47-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06 1.79 1.15 3.92 1.82 6.23 1.82 7.47 0 11.55-6.19 11.55-11.55 0-.18 0-.35-.01-.52A8.24 8.24 0 0 0 22.46 6z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.582 6.186A2.232 2.232 0 0 0 20.006 4.61a48.544 48.544 0 0 0-8.006-.41 48.544 48.544 0 0 0-8.006.41A2.232 2.232 0 0 0 2.418 6.186 23.866 23.866 0 0 0 2 12c0 3.033.418 5.814 1.582 7.244a2.232 2.232 0 0 0 1.576 1.576A48.544 48.544 0 0 0 12 20a48.544 48.544 0 0 0 8.006-.41 2.232 2.232 0 0 0 1.576-1.576C22.582 17.814 23 15.033 23 12a23.866 23.866 0 0 0-.418-5.814zM9.5 15.5V8.5l6 3.5-6 3.5z" />
  </svg>
);

// --- Data for Links ---
const footerNavLinks = [
  { href: "/ball", text: "แทงบอล" },
  { href: "/ufabet", text: "UFABET" },
  { href: "/ball-online", text: "แทงบอลออนไลน์" },
  { href: "/sitemap", text: "SiteMap" },
];

const certificationLogos = [
  {
    src: "/certifications/bmm.png",
    alt: "BMM Testlabs Logo",
    width: 150,
    height: 40,
  },
  {
    src: "/certifications/mga.png",
    alt: "Malta Gaming Authority Logo",
    width: 150,
    height: 40,
  },
  {
    src: "/certifications/ga.png",
    alt: "Gaming Associates Logo",
    width: 150,
    height: 40,
  },
  {
    src: "/certifications/godaddy.png",
    alt: "GoDaddy Verified & Secured Logo",
    width: 120,
    height: 40,
  },
];

const Footer = () => {
  return (
    <>
      <footer className=" pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* --- Left Column (2/3 width on desktop) --- */}
          <div className="md:col-span-2 space-y-7 text-center md:text-left">
            <div className="flex justify-center relative w-52 h-14 mx-auto">
              <Image
                src="/logo.png"
                alt="Ufabet369 Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <p className="text-sm text-center leading-relaxed">
              UFABET369.NET{" "}
              <span className="text-center text-[rgb(var(--color-primary-yellow))]">
                เว็บไซต์แทงบอลออนไลน์
              </span>{" "}
              ผ่านเน็ต ยอดนิยมอันดับ 1 ได้รับการแต่งตั้งโดยตรงจาก{" "}
              <span className="text-[rgb(var(--color-primary-yellow))]">
                ยูฟ่าเบท
              </span>{" "}
              พนันบอล เล่นตรง{" "}
              <span className="text-[rgb(var(--color-primary-yellow))]">
                แทงบอล
              </span>
              ไม่ผ่านเอเยนต์ ที่เป็นที่นิยมใช้บริการ มากที่สุดในประเทศไทย
              รับเดิมพันกีฬาออนไลน์และคาสิโนทุกประเภท สามารถเล่น การพนันออนไลน์
              ผ่านเว็บไซต์ หรือ บนมือถือ ( Iphone หรือ Android ) ได้ตลอด 24 ชม.
            </p>

            <a
              href="#"
              className="text-center block text-2xl text-[rgb(var(--color-primary-yellow))] font-bold hover:text-white transition-colors"
            >
              @support369v2
            </a>

            <nav className="text-center flex justify-center flex-wrap gap-x-3 items-center text-sm">
              {footerNavLinks.map((link, index) => (
                <React.Fragment key={link.text}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                  {index < footerNavLinks.length - 1 && (
                    <span className="text-gray-500 select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            <div className="space-y-2">
              <p className="text-center text-sm font-bold text-[rgb(var(--color-primary-yellow))]">
                ติดตามเราได้ที่
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  aria-label="Youtube"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <YoutubeIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Column (1/3 width on desktop) --- */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-[rgb(var(--color-primary-yellow))] mb-4">
              ได้รับการรับรองโดย
            </h3>
            <div className="space-y-5 flex flex-col items-center md:items-start">
              {certificationLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="relative"
                  style={{ width: logo.width, height: logo.height }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* --- Bottom Copyright Bar --- */}
      <div className="text-center text-white py-4 text-xs">
        Copyright © 2018 | Design by UFABET
      </div>
    </>
  );
};

export default Footer;
