import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cagayandeoro.vercel.app"),
  title: "Cagayan De Oro Fam Tour 2026",
  description: "산과 강, 바다 모든 곳이 어우러진 힐링과 모험의 숨은 여행지, 카가얀데오로.",
  openGraph: {
    title: "낯선 도시의 가장 빛나는 순간",
    description: "산과 강, 바다 모든 곳이 어우러진 힐링과 모험의 숨은 여행지",
    url: "https://cagayandeoro.vercel.app/",
    siteName: "Cagayan De Oro Fam Tour 2026",
    locale: "ko_KR",
    type: "website",
    images: [{
      url: "/share-cover-v3.png",
      width: 1200,
      height: 630,
      alt: "낯선 도시의 가장 빛나는 순간, Cagayan De Oro",
      type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "낯선 도시의 가장 빛나는 순간",
    description: "힐링과 모험의 숨은 여행지, 카가얀데오로",
    images: ["/share-cover-v3.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="image_src" href="https://cagayandeoro.vercel.app/share-cover-v3.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
