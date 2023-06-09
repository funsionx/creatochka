import Header from "@/components/major/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Креаточка",
  description: "Придумать описание",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className && "m-auto max-w-[1300px] bg-gray-4"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
