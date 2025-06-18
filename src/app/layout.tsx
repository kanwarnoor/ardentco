import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

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
      <head>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GMWD07EPW2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GMWD07EPW2');
          `}
        </Script>
      </head>

      <body className={rethink.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
