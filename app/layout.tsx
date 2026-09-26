import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cagayandeoro.vercel.app"),
  title: "Cagayan De Oro Fam Tour 2026",
  description: "산과 강, 바다 모든 곳이 어우러진 힐링과 모험의 숨은 여행지, 카가얀데오로.",
  openGraph: {
    title: "Welcome to Cagayan De Oro",
    description: "산과 강, 바다 모든 곳이 어우러진 힐링과 모험의 숨은 여행지",
    url: "https://cagayandeoro.vercel.app/",
    siteName: "Cagayan De Oro Fam Tour 2026",
    locale: "ko_KR",
    type: "website",
    images: [{
      url: "/share-ocean-welcome-v1.jpg",
      width: 1200,
      height: 630,
      alt: "Welcome to Cagayan De Oro — 바다와 모험의 여행지",
      type: "image/jpeg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Cagayan De Oro",
    description: "힐링과 모험의 숨은 여행지, 카가얀데오로",
    images: ["/share-ocean-welcome-v1.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="image_src" href="https://cagayandeoro.vercel.app/share-ocean-welcome-v1.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
