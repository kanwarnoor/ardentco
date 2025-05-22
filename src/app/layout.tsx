import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Ardent Co",
  description: "Communications, Research and Public Policy Advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      <body className={rethink.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
