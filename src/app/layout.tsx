import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import { Rethink_Sans  } from 'next/font/google'
import BottomNav from "./ui/BottomNav";

const rethink = Rethink_Sans({ subsets: ['latin'] })

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
      <body className={rethink.className}>
        <Navbar/>
        {children}
        <BottomNav/>
      </body>
    </html>
  );
}
