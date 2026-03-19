import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";

import "@/app/globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "oLauncher",
  description: "A lightweight launchpad-style launcher for macOS 26 and later."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${instrumentSans.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
