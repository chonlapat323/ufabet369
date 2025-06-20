import "./globals.css";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sarabun.className}>{children}</body>
    </html>
  );
}
