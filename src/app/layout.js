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
  title: "QuantumGridOS - Quantum Computing Python Library for Power Grids | Saral Systems",
  description: "Open-source Python library connecting quantum algorithms (QAOA, VQE, HHL) to power grid infrastructure. Solve optimal power flow, unit commitment, and network partitioning problems with quantum computing. Install with pip install quantumgridos.",
  keywords: [
    "quantumgridos",
    "quantum computing power systems",
    "quantum power grid optimization",
    "QAOA power systems",
    "VQE energy optimization",
    "HHL power flow",
    "quantum optimal power flow",
    "unit commitment quantum",
    "power grid quantum algorithms",
    "Qiskit power systems",
    "IBM Quantum energy",
    "smart grid quantum computing",
    "SCADA quantum integration",
    "RTDS quantum simulation",
    "Python quantum energy library",
    "Sayonsom Chanda",
    "Saral Systems",
    "open source quantum grid",
    "IEEE test cases quantum",
    "Y-bus matrix quantum"
  ],
  authors: [{ name: "Sayonsom Chanda", url: "https://saralsystems.com" }],
  creator: "Saral Systems",
  publisher: "Saral Systems",
  applicationName: "QuantumGridOS",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://quantumgridos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QuantumGridOS - Quantum Computing Python Library for Power Grids",
    description: "Open-source Python library connecting quantum algorithms to power grid infrastructure. Solve OPF, unit commitment, and network partitioning with QAOA, VQE, and HHL.",
    url: "https://quantumgridos.com",
    siteName: "QuantumGridOS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuantumGridOS - Quantum Computing for Power Grids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumGridOS - Quantum Computing for Power Grids",
    description: "Open-source Python library connecting quantum algorithms to power grid infrastructure. pip install quantumgridos",
    images: ["/og-image.png"],
    creator: "@saralsystems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "QuantumGridOS",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  description: "Open-source Python library connecting quantum algorithms (QAOA, VQE, HHL) to power grid infrastructure for solving optimal power flow, unit commitment, and network partitioning problems.",
  url: "https://quantumgridos.com",
  downloadUrl: "https://pypi.org/project/quantumgridos/",
  softwareVersion: "1.0",
  author: {
    "@type": "Organization",
    name: "Saral Systems",
    url: "https://saralsystems.com",
    founder: {
      "@type": "Person",
      name: "Sayonsom Chanda"
    }
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  license: "https://opensource.org/licenses/Apache-2.0",
  programmingLanguage: "Python",
  codeRepository: "https://github.com/saralsystems/quantumgridos",
  keywords: "quantum computing, power systems, QAOA, VQE, HHL, optimal power flow, Python"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
