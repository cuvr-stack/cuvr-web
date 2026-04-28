import Image from "next/image";
import Link from "next/link";
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
import vrHeadset from "@/public/meta-1.png";
import metaVR from "@/public/meta-2.png";
import patient1 from "@/public/patient-1.png";
import patient2 from "@/public/patient-2.png";
import patient3 from "@/public/patient-3.png";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#05060f] text-white">
        <Hero />
        <Channels />
        <Infrastructure />
        <Excellence />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05060f]">
      {/* Atmospheric gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 15% 20%, rgba(124,58,237,0.28), transparent 60%), radial-gradient(800px 500px at 85% 80%, rgba(37,99,235,0.22), transparent 60%), radial-gradient(600px 400px at 50% 100%, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />

      {/* Subtle grid pattern */}
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
          {/* Left: copy ~ 6 cols */}
          <div className="md:col-span-6 lg:col-span-6">
            <AnimateOnScroll animation="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300 animate-pulse-dot" />
                Services & Infrastructure
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
              <h1 className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Spatial
                <br />
                <span className="text-gradient-brand">Precision</span>
                <br />
                Therapy.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
              <p className="mt-7 max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
                Clinical-grade recovery, reimagined inside immersive spatial
                environments. We don&apos;t just treat symptoms — we
                reprogram movement in 3D space.
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
                Book Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-3 w-3 fill-white" />
                </span>
                Watch Demo
              </Link>
            </AnimateOnScroll>

            {/* Trust strip */}
            <AnimateOnScroll
              animation="animate-fade-in"
              delay="0.6s"
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"
            >
              <span>FDA-aligned protocols</span>
              <span>HIPAA secure</span>
              <span className="text-violet-300">Sub-5ms latency</span>
            </AnimateOnScroll>
          </div>

          {/* Right: visual ~ 6 cols */}
          <AnimateOnScroll
            animation="animate-slide-in-right"
            delay="0.2s"
            className="relative md:col-span-6 lg:col-span-6"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              {/* Glow halo behind headset */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(139,92,246,0.45), rgba(139,92,246,0) 70%)",
                  filter: "blur(20px)",
                }}
              />
              {/* Soft secondary glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-10"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(109,213,255,0.25), rgba(109,213,255,0) 70%)",
                  filter: "blur(28px)",
                }}
              />

              {/* The headset itself, gently floating */}
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

              {/* Floating spec chips */}
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

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 md:flex">
          <span>Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function SpecChip({
  label,
  tone,
}: {
  label: string;
  tone: "violet" | "cyan" | "magenta";
}) {
  const dot = {
    violet: "bg-violet-300",
    cyan: "bg-cyan-300",
    magenta: "bg-pink-300",
  }[tone];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-md">
      <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse-dot`} />
      {label}
    </span>
  );
}

/* ---------------------------- Recovery Channels ------------------------- */
function Channels() {
  const channels = [
    {
      no: "Channel 01",
      title: "Neuro-Kinetic Sync",
      desc: "Restoring the link between brain intent and muscle execution through biofeedback-rich spatial cues.",
      img: patient1,
    },
    {
      no: "Channel 02",
      title: "Post-Trauma Elasticity",
      desc: "Gentle, guided range-of-motion protocols within immersive 'gravity-reduced' visual environments.",
      img: patient2,
    },
    {
      no: "Channel 03",
      title: "Hyper-Performance Tuning",
      desc: "Advanced reactive training for elite athletes looking to optimize reaction time and spatial awareness.",
      img: patient3,
    },
  ];

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll
          animation="animate-fade-in"
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Precision Recovery Channels
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="animate-slide-in-up"
          delay="0.15s"
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Focused modalities designed for specific anatomical milestones and
            performance objectives.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {channels.map((c, i) => (
            <AnimateOnScroll
              key={c.title}
              animation="animate-scale-fade-in"
              delay={`${0.2 + i * 0.12}s`}
              className="flex flex-col"
            >
              <article className="flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
                  {c.no}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {c.desc}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Technological Infrastructure -------------------- */
function Infrastructure() {
  const features = [
    {
      icon: <ScanLine className="h-4 w-4" />,
      title: "LiDAR Bio-Mapping",
      desc: "Millimeter-precise skeleton tracking that monitors joint alignment and weight distribution in a 360° volume.",
    },
    {
      icon: <Waves className="h-4 w-4" />,
      title: "Neural Cloud Sync",
      desc: "Edge-computing infrastructure ensuring sub-5ms latency for perfectly synchronized haptic feedback.",
    },
    {
      icon: <Database className="h-4 w-4" />,
      title: "Biometric Ledger",
      desc: "Secure, high-integrity data vault tracking your recovery progress through thousands of session data points.",
    },
  ];

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
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            The Backbone
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="animate-slide-in-up"
          delay="0.15s"
          className="text-center"
        >
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technological Infrastructure
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <AnimateOnScroll
                key={f.title}
                animation="animate-slide-in-left"
                delay={`${0.2 + i * 0.12}s`}
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-violet-400/30 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                      {f.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {f.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Hero card */}
          <AnimateOnScroll
            animation="animate-slide-in-right"
            delay="0.25s"
          >
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
                  System Core: CUVR-1S
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
                  Omni-Immersive
                  <br />
                  Feedback System
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
                  Our flagship hardware integration utilizes ultrasonic haptics
                  and spatial audio to provide real-time tactile cues for body
                  positioning.
                </p>

                <div className="relative mt-8 aspect-[5/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={metaVR}
                    alt="CUVR-1S headset"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    4K per Eye
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    120Hz Refresh
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Excellence ------------------------------ */
function Excellence() {
  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left copy */}
          <div>
            <AnimateOnScroll animation="animate-fade-in">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-500">
                Clinical Validation
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-left" delay="0.15s">
              <h2 className="mt-5 text-6xl font-extrabold tracking-tight sm:text-7xl">
                <span className="text-gradient-brand">Excellence.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
                Our methodology isn&apos;t just advanced—it&apos;s validated.
                By merging spatial data with clinical science, we redefine the
                architecture of human recovery.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay="0.45s">
              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-violet-600"
              >
                Read Clinical Paper
                <ArrowRight className="h-4 w-4" />
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Right stats */}
          <div className="space-y-12">
            <AnimateOnScroll animation="animate-slide-in-right" delay="0.2s">
              <StatBlock
                value="98"
                suffix="%"
                valueClass="text-violet-500"
                label="Long-term tracking shows maintenance of ROM milestones post-treatment cycle."
                chart={<MiniLineChart />}
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-right" delay="0.35s">
              <StatBlock
                value="40"
                suffix="%"
                valueClass="text-cyan-500"
                label="Spatial feedback drives movement adaptation, cutting clinical session significantly."
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
  value,
  suffix,
  valueClass,
  label,
  chart,
}: {
  value: string;
  suffix?: string;
  valueClass: string;
  label: string;
  chart: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span className={`text-7xl font-extrabold leading-none ${valueClass}`}>
          {value}
        </span>
        {suffix && (
          <span className={`text-3xl font-bold ${valueClass}`}>{suffix}</span>
        )}
      </div>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
        {label}
      </p>
      <div className="mt-4">{chart}</div>
    </div>
  );
}

function MiniLineChart() {
  return (
    <svg
      viewBox="0 0 240 60"
      className="h-12 w-full max-w-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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

/* -------------------------------- CTA ----------------------------------- */
function FinalCTA() {
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
                  Ready to <span className="text-gradient-brand">Evolve?</span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                  Join the next generation of recovery. Secure your spatial
                  assessment slot today and experience the future of motion.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation="animate-bounce-in"
                delay="0.45s"
                className="mt-9 flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="/booking"
                  className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
                >
                  Start Onboarding
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
                >
                  <Shield className="h-4 w-4" />
                  Request Specialist Callback
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
