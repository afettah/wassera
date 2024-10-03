import type { Metadata } from "next";
import Locale from "intl-locale-textinfo-polyfill";
import localFont from "next/font/local";
import "../globals.css";
import TopBar from "./topBar";
import TopMenu from "./topMenu";
import { I18nProviderClient } from "@/locales/client";
import ChatbotScript from "./ChatbotScript";
import Footer from "./Footer";

// Define Gotham with different weights
const gotham = localFont({
  src: [
    { path: "../fonts/Gotham-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Gotham-Book.otf", weight: "400", style: "normal" },
    { path: "../fonts/Gotham-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Gotham-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/Gotham-Ultra.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-gotham",
});

// Define GE SS with different weights
const geSS = localFont({
  src: [
    { path: "../fonts/GE SS Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/GE SS Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/GE SS Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-ge-ss",
});

export const metadata: Metadata = {
  title: "Wassera Mortgage and Finance",
  description:
    "A FinTech company specialised in Mortgage, Investment and Savings Services",
};

export default function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const { direction: dir } = new Locale(locale).textInfo;

  const isArabic = locale?.startsWith("ar");

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${
          isArabic ? geSS.variable : gotham.variable
        } antialiased flex flex-col bg-transparent overflow-x-hidden`}
      >
        <I18nProviderClient locale={locale}>
          <TopBar />
          <TopMenu />
          {children}
          <Footer />
        </I18nProviderClient>
        <ChatbotScript />
      </body>
    </html>
  );
}
