import Script from "next/script";

export const metadata = {
  title: "Success",
  description: "Successfully submitted the form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Google Analytics Script */}

      <Script>
        {`
  gtag('event', 'conversion', {
      'send_to': 'AW-17389056295/4JMxCJzAy_caEKfi3-NA',
      'value': 1.0,
      'currency': 'INR'
  });
  `}
      </Script>

      <body>{children}</body>
    </html>
  );
}
