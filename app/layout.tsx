import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuotaBar — API Quota in Your macOS Menu Bar",
  description:
    "Monitor your OpenAI Codex API quota in real time, right from the macOS menu bar. Know your usage at a glance — green, orange, or red.",
  openGraph: {
    title: "QuotaBar",
    description:
      "Monitor your OpenAI Codex API quota in real time from the macOS menu bar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuotaBar",
    description:
      "Monitor your OpenAI Codex API quota in real time from the macOS menu bar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
