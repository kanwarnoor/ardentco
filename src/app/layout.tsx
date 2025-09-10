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
        {/* <Script
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
        </Script> */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17389056295"
        ></Script> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17389056295"
        ></Script>{" "}
        <Script id="google-analytics">{` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-17389056295'); `}</Script>
        {/* <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17389056295');

            
          `}
        </Script> */}
        <Script id="message">
          {`
            console.log("Developed by @wellitsnoor");
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1726564672066425');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1726564672066425&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>

      <body className={rethink.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
