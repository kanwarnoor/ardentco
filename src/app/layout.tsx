import type { Metadata } from "next";
import "./globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
