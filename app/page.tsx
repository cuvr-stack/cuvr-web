import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "Spatial VR Physical Therapy in Dubai",
  description:
    "CUVR is a DHA-licensed Dubai clinic merging clinical physical therapy with immersive VR. 40% faster recovery, real-time biometrics, and gamified rehabilitation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CUVR — Spatial VR Physical Therapy in Dubai",
    description:
      "DHA-licensed VR physiotherapy in Dubai. Recover faster with immersive, data-driven movement therapy.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
