import type { Metadata } from "next";
import ServicesContent from "./page-content";

export const metadata: Metadata = {
  title: "Services — Spatial Precision Therapy",
  description:
    "Explore CUVR's recovery channels: neuro-kinetic sync, post-trauma elasticity, and hyper-performance tuning, powered by LiDAR bio-mapping and sub-5ms haptic feedback.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "CUVR Services — Spatial Precision Therapy",
    description:
      "DHA-licensed VR physiotherapy services in Dubai: clinical recovery, biometrics, and immersive infrastructure.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
