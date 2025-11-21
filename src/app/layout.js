import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import SaralBadge from "@/components/ui/SaralBadge";

const visualSans = localFont({
  src: "../../public/WFVisualSansVF.woff2",
  variable: "--font-visual-sans",
  weight: "100 900",
});

export const metadata = {
  title: "QuantumGrid OS - Quantum Computing for Power Grids",
  description: "Open-source integration layer connecting quantum algorithms to RTDS, SCADA, and grid infrastructure.",
  keywords: ["quantum power grid", "RTDS integration", "DER optimization", "utility computing"],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
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
      <body className={`${visualSans.variable} antialiased`}>
        {children}
        <SaralBadge />
      </body>
    </html>
  );
}
