import type { Metadata } from "next";
import HowItWorksContent from "./page-content";

export const metadata: Metadata = {
  title: "How It Works — Spatial Recovery Protocol",
  description:
    "From spatial assessment to immersive sessions and biometric analytics — see how CUVR's four-phase VR therapy protocol accelerates clinical recovery.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How CUVR Works — Spatial Recovery Protocol",
    description:
      "Four phases of VR-driven physical therapy: assessment, personalization, immersion, and biometric analytics.",
    url: "/how-it-works",
    type: "article",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
