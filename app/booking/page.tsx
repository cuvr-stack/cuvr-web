import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Zap, Navigation, Clock, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import heroImage from "@/public/booking-hero.png";
import bgImage from "@/public/booking-bg.png";

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
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Consultation />
        <WhatToExpect />
        <VisitHub />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-space">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Patient beginning a CUVR VR recovery program"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060f]/40 via-[#05060f]/70 to-[#05060f]" /> 
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 text-center sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Your Recovery Awaits
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl color-white">
            Start Your
            <br />
            <span className="text-gradient-brand">Recovery Journey</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-slate-300">
            Experience physical therapy reimagined. Our clinical team will craft a personalized VR protocol tailored to your specific recovery goals.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-bounce-in" delay="0.3s" className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#consultation"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Book Your Assessment
            <span>→</span>
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
            <span>▶</span>
            Schedule Call
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ----------------------- Consultation Section ----------------------- */
function Consultation() {
  return (
    <section id="consultation" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <AnimateOnScroll animation="animate-fade-in" className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Consultation
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-left" delay="0.1s">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Request a Consultation
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-left" delay="0.2s" className="mt-4">
            <p className="text-slate-600">
              Our clinical team will evaluate your specific recovery needs and create a customized VR therapy protocol designed for you.
            </p>
          </AnimateOnScroll>

          <div className="mt-10 space-y-6">
            <AnimateOnScroll animation="animate-slide-in-left" delay="0.3s" className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-500">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Clinical Precision</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Expert physiotherapists design your unique recovery pathway.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-left" delay="0.4s" className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">30-Minute Assessment</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Quick evaluation to understand your recovery stage and goals.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll animation="animate-slide-in-right" className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 md:p-10">
          <h3 className="text-2xl font-bold text-slate-900">Book Your Free Assessment</h3>
          <div className="mt-8">
            <BookingForm />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ---------------------- What to Expect Section ----------------------- */
function WhatToExpect() {
  const features = [
    {
      icon: <Navigation className="h-6 w-6" />,
      title: "Spatial Mapping",
      description: "We map your body in 3D space with millimeter precision.",
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Motion Capture",
      description: "Real-time tracking of your movement patterns and progress.",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Custom Plan",
      description: "Personalized therapy protocol built just for your recovery.",
      color: "bg-pink-500/10 text-pink-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Synchronize",
      description: "All metrics integrated for complete progress tracking.",
      color: "bg-violet-500/10 text-violet-500",
    },
  ];

  return (
    <section className="bg-space py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="mb-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            What to Expect
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Assessment Experience
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mx-auto mt-3 max-w-2xl text-center">
          <p className="text-slate-300">
            Here's what happens during your personalized consultation and initial VR experience.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimateOnScroll
              key={feature.title}
              animation="animate-scale-fade-in"
              delay={`${0.3 + i * 0.1}s`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Visit Hub Section ----------------------- */
function VisitHub() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div>
          <AnimateOnScroll animation="animate-fade-in" className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Location
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-left" delay="0.1s">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Visit Our Hub
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-left" delay="0.2s" className="mt-6 space-y-6">
            <div>
              <p className="font-semibold text-slate-900">Location</p>
              <p className="mt-2 text-sm text-slate-600">
                Aliyah By Azizi
                <br />
                310
                <br />
                Healthcare City, Dubai
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Hours & Contact</p>
              <p className="mt-2 text-sm text-slate-600">
                Mon – Fri: 8:00 AM – 6:00 PM GST
                <br />
                Sat: 10:00 AM – 4:00 PM GST
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="tel:+971502592439" className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-purple">
                <Phone className="h-4 w-4" />
                Call Us
              </Link>
              <Link href="mailto:nikhil.louis@cuvr.ae" className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-purple">
                <Mail className="h-4 w-4" />
                Email Us
              </Link>
              <Link href="https://maps.google.com" className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-purple">
                <MapPin className="h-4 w-4" />
                Directions
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="animate-slide-in-right" className="relative overflow-hidden rounded-3xl">
          <Image
            src={bgImage}
            alt="CUVR clinic exterior in Dubai Healthcare City"
            className="rounded-3xl"
            priority
            width={600}
            height={450}
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 backdrop-blur">
            <div className="h-3 w-3 rounded-full bg-violet-500" />
            <span className="text-xs font-semibold text-slate-900">CUVR</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
