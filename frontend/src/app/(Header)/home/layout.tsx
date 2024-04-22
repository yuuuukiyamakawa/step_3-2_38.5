import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Links",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className='container mx-auto bg-[#44AFFF] text-slate-50'>
        <div>
          <Header />
        </div>
        <div className="pb-10"> {/* フッターの高さ以上の値に調整 */}
          <Suspense>{children}</Suspense>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
