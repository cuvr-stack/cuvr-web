import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Headphones,
  LineChart,
  Stethoscope,
  UserCheck,
  Zap,
  Brain,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import heroImage from "@/public/how-it-works-hero.png";
import personImage from "@/public/how-person.png";
import vrImage from "@/public/how-vr.png";

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
  return (
    <>
      <Header />
      <main className="bg-space text-white">
        <Hero />
        <Journey />
        <Technology />
        <Precision />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background VR Headset Image */}
      <div className="absolute inset-0 ">
        <Image
          src={heroImage}
          alt="Patient in a CUVR immersive VR physical therapy session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060f]/60 via-[#05060f]/80 to-[#05060f] opacity-40" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center px-5 py-24 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Pioneering Clinical VR
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            The Science of
            <br />
            <span className="text-gradient-brand">Recovery</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-slate-300">
            Experience physical therapy reimagined through immersive spatial
            computing. We combine clinical expertise with high-end VR
            gaming technology to accelerate your healing journey.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-bounce-in" delay="0.3s" className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/booking"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Start Your Journey
            <span>→</span>
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
            <span>▶</span>
            Watch Overview
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ----------------------------- Patient Journey --------------------------- */
function Journey() {
  const steps = [
    {
      number: "01",
      icon: <Brain className="h-5 w-5" />,
      title: "Spatial Assessment",
      description:
        "Advanced 3D body mapping captures 50,000+ data points. Proprietary algorithms establish your baseline.",
      color: "bg-violet-500/20",
      iconBg: "bg-violet-500",
    },
    {
      number: "02",
      icon: <Headphones className="h-5 w-5" />,
      title: "Personalized Protocol",
      description:
        "AI-generated routines tailored to your specific recovery goals, injury type, and mobility milestones.",
      color: "bg-cyan-500/20",
      iconBg: "bg-cyan-500",
    },
    {
      number: "03",
      icon: <Zap className="h-5 w-5" />,
      title: "Immersive Session",
      description:
        "Engagement-focused VR environments that turn your exercises into epic quests throughout your healing journey.",
      color: "bg-pink-500/20",
      iconBg: "bg-pink-500",
    },
    {
      number: "04",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Biometric Analytics",
      description:
        "Real-time feedback loops ensure motion accuracy, muscle engagement, and cardio performance tracking.",
      color: "bg-purple-500/20",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="mb-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
            Process Flow
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The Patient Journey
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mx-auto mt-3 max-w-2xl text-center">
          <p className="text-slate-600">
            From your first touchpoint to your final milestone, our data-driven path ensures precision at every degree of motion.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimateOnScroll
              key={step.number}
              animation="animate-scale-fade-in"
              delay={`${0.3 + i * 0.1}s`}
              className={`rounded-2xl p-6 ring-1 ring-slate-200 ${step.color}`}
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${step.iconBg} text-white`}>
                {step.icon}
              </div>
              <p className="text-sm font-semibold text-slate-500">{step.number}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Technology & Interface ----------------------- */
function Technology() {
  return (
    <section className="bg-space-soft py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div>
          <AnimateOnScroll animation="animate-fade-in" className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Spatial Ecosystem
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-left" delay="0.1s">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Next-Gen Interface for
              <br />
              Human Movement
            </h2>
          </AnimateOnScroll>

          <div className="mt-10 space-y-6">
            <AnimateOnScroll animation="animate-slide-in-left" delay="0.2s" className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Sub-Millimeter Tracking</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Precision sensors monitor every subtle movement with microsecond-level accuracy for biomechanical perfection.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-left" delay="0.3s" className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Haptic Bio-Feedback</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Tactile sensory cues guide your body through the physical rehabilitation in perfect synchronization.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-left" delay="0.4s" className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Live Session Feedback</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  TFM Datasync Interface tracks all metrics in real-time for instant coaching adjustments.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll animation="animate-slide-in-right" className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 blur-3xl" />
            </div>
            <Image
              src={vrImage}
              alt="CUVR spatial VR interface showing live motion-tracking telemetry"
              className="relative rounded-xl"
              priority
              width={600}
              height={400}
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur">
              ● Active Tracking: 99%
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ------------------------ Clinical Precision ----------------------- */
function Precision() {
  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <AnimateOnScroll animation="animate-slide-in-left" className="relative overflow-hidden rounded-3xl">
            <Image
              src={personImage}
              alt="Physiotherapist guiding a patient through a CUVR clinical VR rehabilitation session"
              className="rounded-3xl"
              priority
              width={500}
              height={600}
            />
            <div className="absolute bottom-6 right-6 rounded-2xl bg-slate-900 px-6 py-4 text-white">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-xs font-semibold text-slate-400">Data Accuracy</div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="order-1 md:order-2">
          <AnimateOnScroll animation="animate-fade-in" className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Clinical Integrity
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right" delay="0.1s">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Clinical Precision in Every Pixel
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right" delay="0.2s" className="mt-6">
            <p className="max-w-md leading-relaxed text-slate-600">
              Our protocols are developed in collaboration with leading orthopedic experts. Every VR environment is calibrated to stimulate specific muscle groups and recovery pathways.
            </p>
          </AnimateOnScroll>

          <div className="mt-10 space-y-4">
            <AnimateOnScroll animation="animate-slide-in-right" delay="0.3s" className="rounded-lg border-l-4 border-brand-blue bg-blue-50 p-4">
              <p className="font-semibold text-slate-900">Evidence Based</p>
              <p className="mt-1 text-sm text-slate-600">
                Protocols validated through clinical trials with leading physical therapy research institutions.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-right" delay="0.4s" className="rounded-lg border-l-4 border-brand-purple bg-violet-50 p-4">
              <p className="font-semibold text-slate-900">HIPAA Secure</p>
              <p className="mt-1 text-sm text-slate-600">
                Enterprise-grade encryption ensures your personal data remains confidential and secure always.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------- */
function CTA() {
  return (
    <section className="bg-space-soft py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-scale-fade-in" className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 px-8 py-16 text-center backdrop-blur sm:px-16">
          <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Evolve?
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mt-4">
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-300">
              Take the first step toward a faster, smarter, and more engaging recovery. Our clinical team is ready to meet you exactly where you are.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-bounce-in" delay="0.3s" className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold"
            >
              Book Your Assessment
            </Link>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Clinical Support
            </button>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
