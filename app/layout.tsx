import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://cuvr.ae";
const SITE_NAME = "CUVR";
const SITE_DESCRIPTION =
  "CUVR is a Dubai Health Authority licensed clinic combining clinical-grade physical therapy with immersive virtual reality. Heal faster with spatial precision recovery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CUVR — Spatial VR Physical Therapy in Dubai",
    template: "%s | CUVR",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "VR physiotherapy",
    "VR physical therapy Dubai",
    "spatial recovery",
    "immersive rehabilitation",
    "DHA licensed physiotherapy",
    "virtual reality therapy UAE",
    "post-surgery rehab",
    "neuro rehabilitation Dubai",
    "Dubai Healthcare City",
    "CUVR",
  ],
  authors: [{ name: "CUVR Spatial Systems", url: SITE_URL }],
  creator: "CUVR Spatial Systems",
  publisher: "CUVR Spatial Systems",
  category: "Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "CUVR — Spatial VR Physical Therapy in Dubai",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_AE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CUVR — Spatial VR Physical Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUVR — Spatial VR Physical Therapy in Dubai",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@cuvrhealth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/cuvr-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/cuvr-logo.png" }],
  },
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#05060f",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "CUVR Spatial Systems",
  alternateName: "CUVR",
  url: SITE_URL,
  logo: `${SITE_URL}/cuvr-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESCRIPTION,
  medicalSpecialty: ["Physiotherapy", "PhysicalTherapy", "Rehabilitation"],
  priceRange: "$$",
  telephone: "+971-4-555-0171",
  email: "support@cuvr.ae",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building 64, Block E, Dubai Healthcare City",
    addressLocality: "Dubai",
    postalCode: "505276",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.linkedin.com/company/cuvr",
    "https://www.instagram.com/cuvr.health",
    "https://twitter.com/cuvrhealth",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-slate-900 bg-white">
        {children}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
