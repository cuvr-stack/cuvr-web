import type { Metadata } from "next";
import BookingContent from "./page-content";

export const metadata: Metadata = {
  title: "Book a Consultation — VR Therapy Assessment",
  description:
    "Reserve a 30-minute clinical assessment with CUVR's DHA-licensed physiotherapists in Dubai Healthcare City. Build a personalized spatial recovery protocol.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book a CUVR Consultation",
    description:
      "Schedule a free spatial assessment with CUVR's DHA-licensed clinical team in Dubai Healthcare City.",
    url: "/booking",
    type: "website",
  },
};

export default function BookingPage() {
  return <BookingContent />;
}
