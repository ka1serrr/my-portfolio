import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/shared/libs";

const inter = Inter({ weight: ["400", "700", "800"], subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Ярослав | Сайт Портфолио",
  description: "Ярослав Ясинский - разработчик с 2-х летним опытом работы.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, "bg-gray-50 text-gray-950")}>
        <div
          className={
            "bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31rem] w-[31rem] rounded-full blur-[184px] sm:w-[68rem]"
          }
        ></div>
        <div
          className={
            "bg-[#dbd7fb] absolute top-[-1rem] right-[35rem] h-[31rem] w-[31rem] rounded-full blur-[184px] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
          }
        ></div>
        {children}
      </body>
    </html>
  );
}
