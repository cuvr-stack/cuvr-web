"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Play,
  ScanLine,
  Shield,
  Waves,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/language-context";
import vrHeadset from "@/public/meta-1.png";
import metaVR from "@/public/meta-2.png";
import patient1 from "@/public/patient-1.png";
import patient2 from "@/public/patient-2.png";
import patient3 from "@/public/patient-3.png";
import cognitiveImg from "@/public/cognitive.png";
import mentalHealthImg from "@/public/mental-health.png";
import adhdImg from "@/public/adhd.png";

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "CUVR Spatial Systems",
  url: "https://cuvr.ae/services",
  description:
    "DHA-licensed VR physical therapy clinic in Dubai offering spatial precision therapy across neuro-kinetic, post-trauma, and high-performance recovery channels.",
  medicalSpecialty: ["Physiotherapy", "PhysicalTherapy", "Rehabilitation"],
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
};

export default function ServicesContent() {
  return (
    <>
      <Header />
      <main className="bg-[#05060f] text-white">
        <Hero />
        <Channels />
        <KineticModalities />
        <Infrastructure />
        <Excellence />
        <FinalCTA />
      </main>
      <Footer />
      <Script
        id="ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_JSON_LD) }}
      />
    </>
  );
}

function Hero() {
  const { tr } = useLanguage();
  const s = tr.services;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05060f]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 15% 20%, rgba(124,58,237,0.28), transparent 60%), radial-gradient(800px 500px at 85% 80%, rgba(37,99,235,0.22), transparent 60%), radial-gradient(600px 400px at 50% 100%, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6 lg:col-span-6">
            <AnimateOnScroll animation="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300 animate-pulse-dot" />
                {s.servicesBadge}
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
              <h1 className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {s.heroTitle1}
                <br />
                <span className="text-gradient-brand">{s.heroHighlight}</span>
                <br />
                {s.heroTitle2}
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
              <p className="mt-7 max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
                {s.heroBody}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="animate-bounce-in"
              delay="0.45s"
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/booking"
                className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {s.bookAssessment}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-3 w-3 fill-white" />
                </span>
                {s.watchDemo}
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="animate-fade-in"
              delay="0.6s"
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"
            >
              <span>{s.fdaProtocols}</span>
              <span>{s.hipaaSecure}</span>
              <span className="text-violet-300">{s.subLatency}</span>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll
            animation="animate-slide-in-right"
            delay="0.2s"
            className="relative md:col-span-6 lg:col-span-6"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(139,92,246,0.45), rgba(139,92,246,0) 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-10"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(109,213,255,0.25), rgba(109,213,255,0) 70%)",
                  filter: "blur(28px)",
                }}
              />
              <div className="absolute inset-0 animate-float-slow">
                <Image
                  src={vrHeadset}
                  alt="CUVR VR headset"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 90vw"
                  className="object-contain drop-shadow-[0_30px_60px_rgba(124,58,237,0.45)]"
                />
              </div>
              <div className="pointer-events-none absolute -top-2 left-2 hidden md:block">
                <SpecChip label="4K per Eye" tone="violet" />
              </div>
              <div className="pointer-events-none absolute right-0 top-1/3 hidden md:block">
                <SpecChip label="120Hz Refresh" tone="cyan" />
              </div>
              <div className="pointer-events-none absolute -bottom-2 left-6 hidden md:block">
                <SpecChip label="LiDAR Bio-Map" tone="magenta" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 md:flex">
          <span>{s.scroll}</span>
          <span className="block h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SpecChip({ label, tone }: { label: string; tone: "violet" | "cyan" | "magenta" }) {
  const dot = { violet: "bg-violet-300", cyan: "bg-cyan-300", magenta: "bg-pink-300" }[tone];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-md">
      <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse-dot`} />
      {label}
    </span>
  );
}

function Channels() {
  const { tr } = useLanguage();
  const s = tr.services;

  const channels = [
    { no: s.channel01, title: s.neuroTitle, desc: s.neuroBody, img: patient1 },
    { no: s.channel02, title: s.postTraumaTitle, desc: s.postTraumaBody, img: patient2 },
    { no: s.channel03, title: s.hyperTitle, desc: s.hyperBody, img: patient3 },
  ];

  return (
    <section id="channels" className="bg-white py-24 text-slate-900 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Badge */}
        <AnimateOnScroll animation="animate-fade-in" className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            {s.recoveryStack}
          </span>
        </AnimateOnScroll>
        {/* Title */}
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="mx-auto mt-3 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{s.channelsTitle}</h2>
        </AnimateOnScroll>
        {/* Subtitle */}
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mx-auto mt-4 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-slate-500">{s.channelsBody}</p>
        </AnimateOnScroll>

        <div className="mt-12 mx-auto grid max-w-[900px] gap-5 md:grid-cols-3 items-stretch">
          {channels.map((c, i) => (
            <AnimateOnScroll
              key={c.title}
              animation="animate-scale-fade-in"
              delay={`${0.25 + i * 0.12}s`}
              className="h-full"
            >
              {/* Gradient border wrapper */}
              <div className="group h-full rounded-2xl bg-gradient-to-br from-violet-300/40 to-blue-400/40 p-px transition-all duration-300 hover:from-violet-500/70 hover:to-blue-600/70 hover:shadow-xl hover:-translate-y-1">
                <article className="flex h-full flex-col rounded-[15px] bg-white overflow-hidden">
                  {/* Image with padding */}
                  <div className="p-3 pb-0">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={c.img}
                        alt={c.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 30vw, 100vw"
                      />
                      <span className="absolute bottom-2.5 left-2.5 rounded-full border border-white/30 bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        {c.no}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col px-4 py-4">
                    <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
                    <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-slate-500">{c.desc}</p>
                    <Link
                      href="/booking"
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 transition group-hover:text-violet-600"
                    >
                      {s.exploreModality}
                    </Link>
                  </div>
                </article>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Kinetic Performance Modalities ------------------- */
function KineticModalities() {
  const { tr } = useLanguage();
  const s = tr.services;

  const modalities = [
    { title: s.cognitiveTitle, desc: s.cognitiveBody, img: cognitiveImg },
    { title: s.mentalHealthTitle, desc: s.mentalHealthBody, img: mentalHealthImg },
    { title: s.adhdTitle, desc: s.adhdBody, img: adhdImg },
  ];

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Badge */}
        <AnimateOnScroll animation="animate-fade-in" className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            {s.kineticBadge}
          </span>
        </AnimateOnScroll>
        {/* Title */}
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="mx-auto mt-3 max-w-2xl text-center">
          <h2 className="whitespace-nowrap text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {s.kineticTitle}
          </h2>
        </AnimateOnScroll>
        {/* Subtitle */}
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mx-auto mt-4 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-slate-500">{s.kineticBody}</p>
        </AnimateOnScroll>

        <div className="mt-12 mx-auto grid max-w-[900px] grid-cols-3 gap-5">
          {modalities.map((m, i) => (
            <AnimateOnScroll
              key={m.title}
              animation="animate-scale-fade-in"
              delay={`${0.25 + i * 0.12}s`}
            >
              {/* Gradient border wrapper */}
              <div className="group rounded-2xl bg-gradient-to-br from-violet-300/40 to-blue-400/40 p-px transition-all duration-300 hover:from-violet-500/70 hover:to-blue-600/70 hover:shadow-xl hover:-translate-y-1">
                <article className="flex h-full flex-col rounded-[15px] bg-white overflow-hidden">
                  {/* Image with padding */}
                  <div className="p-3 pb-0">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={m.img}
                        alt={m.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 30vw, 100vw"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col px-4 py-4">
                    <h3 className="text-sm font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-slate-500">{m.desc}</p>
                    <Link
                      href="/booking"
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 transition group-hover:text-violet-600"
                    >
                      {s.exploreModality}
                    </Link>
                  </div>
                </article>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  const { tr } = useLanguage();
  const s = tr.services;

  const features = [
    { icon: <ScanLine className="h-4 w-4" />, title: s.lidarTitle, desc: s.lidarBody },
    { icon: <Waves className="h-4 w-4" />, title: s.neuralCloudTitle, desc: s.neuralCloudBody },
    { icon: <Database className="h-4 w-4" />, title: s.biometricLedgerTitle, desc: s.biometricLedgerBody },
  ];

  const omniLines = s.omniTitle.split("\n");

  return (
    <section className="relative overflow-hidden bg-[#0a0820] py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,0.20), transparent 60%), radial-gradient(700px 400px at 80% 100%, rgba(37,99,235,0.14), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">{s.backbone}</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s" className="text-center">
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{s.infraTitle}</h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} animation="animate-slide-in-left" delay={`${0.2 + i * 0.12}s`}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-violet-400/30 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                      {f.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="animate-slide-in-right" delay="0.25s">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1538] via-[#0f0d24] to-[#0a0820] p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(600px 300px at 100% 0%, rgba(139,92,246,0.25), transparent 60%)",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-violet-300" />
                  {s.systemCore}
                </span>
                <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
                  {omniLines[0]}
                  <br />
                  {omniLines[1]}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">{s.omniBody}</p>
                <div className="relative mt-8 aspect-[5/3] w-full overflow-hidden rounded-xl">
                  <Image src={metaVR} alt="CUVR-1S headset" fill className="object-contain" />
                </div>
                <div className="mt-5 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{s.k4Eye}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{s.hz120}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function Excellence() {
  const { tr } = useLanguage();
  const s = tr.services;

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <AnimateOnScroll animation="animate-fade-in">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-500">
                {s.clinicalValidation}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-left" delay="0.15s">
              <h2 className="mt-5 text-6xl font-extrabold tracking-tight sm:text-7xl">
                <span className="text-gradient-brand">{s.excellenceTitle}</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">{s.excellenceBody}</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-fade-in" delay="0.45s">
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-violet-600"
              >
                {s.readClinical}
                <ArrowRight className="h-4 w-4" />
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </Link>
            </AnimateOnScroll>
          </div>

          <div className="space-y-12">
            <AnimateOnScroll animation="animate-slide-in-right" delay="0.2s">
              <StatBlock
                value="98"
                suffix="%"
                valueClass="text-violet-500"
                label={s.stat98Label}
                chart={<MiniLineChart />}
              />
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right" delay="0.35s">
              <StatBlock
                value="40"
                suffix="%"
                valueClass="text-cyan-500"
                label={s.stat40Label}
                chart={<MiniProgress />}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  value, suffix, valueClass, label, chart,
}: {
  value: string; suffix?: string; valueClass: string; label: string; chart: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span className={`text-7xl font-extrabold leading-none ${valueClass}`}>{value}</span>
        {suffix && <span className={`text-3xl font-bold ${valueClass}`}>{suffix}</span>}
      </div>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">{label}</p>
      <div className="mt-4">{chart}</div>
    </div>
  );
}

function MiniLineChart() {
  return (
    <svg viewBox="0 0 240 60" className="h-12 w-full max-w-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M0 45 C 40 45, 60 38, 90 22 S 150 8, 180 18 S 220 35, 240 30"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MiniProgress() {
  return (
    <div className="flex items-center gap-3">
      <span className="block h-7 w-7 rounded-full border-2 border-cyan-400" />
      <span className="block h-[2px] w-16 rounded-full bg-cyan-300" />
    </div>
  );
}

function FinalCTA() {
  const { tr } = useLanguage();
  const s = tr.services;

  return (
    <section className="bg-[#05060f] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll animation="animate-scale-fade-in">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-cta-gradient px-8 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 300px at 100% 50%, rgba(139,92,246,0.25), transparent 60%)",
              }}
            />
            <div className="relative">
              <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {s.readyTitle}{" "}
                  <span className="text-gradient-brand">{s.readyHighlight}</span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">{s.readyBody}</p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="animate-bounce-in" delay="0.45s" className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link href="/booking" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold">
                  {s.startOnboarding}
                </Link>
                <Link href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10">
                  <Shield className="h-4 w-4" />
                  {s.requestCallback}
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
