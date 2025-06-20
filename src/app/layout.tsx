import "./globals.css";
import { Sarabun } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
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
      <body className={sarabun.className}>
        <AuthProvider>
          <Toaster
            position="top-center" // กำหนดตำแหน่ง
            reverseOrder={false}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
