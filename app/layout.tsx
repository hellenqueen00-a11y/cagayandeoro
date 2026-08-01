import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDO Fam Tour 2026 | Golden Hour in Cagayan de Oro",
  description: "모험과 미식, 사람과 이야기가 만나는 카가얀데오로 브랜드 팸투어.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
