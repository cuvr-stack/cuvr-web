import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CUVR — VR Physiotherapy, Recovery Reimagined",
  description:
    "CUVR combines clinical expertise with immersive virtual reality to accelerate your healing journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-slate-900 bg-white">{children}</body>
    </html>
  );
}
