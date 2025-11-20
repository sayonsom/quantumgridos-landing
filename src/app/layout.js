import { Sen } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sen = Sen({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sen",
});

export const metadata = {
  title: "QuantumGrid OS - Quantum Computing for Power Grids",
  description: "Open-source integration layer connecting quantum algorithms to RTDS, SCADA, and grid infrastructure.",
  keywords: ["quantum power grid", "RTDS integration", "DER optimization", "utility computing"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DRJQ6XGFEP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DRJQ6XGFEP');
            `,
          }}
        />
      </head>
      <body className={`${sen.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
