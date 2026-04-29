"use client";

import Link from "next/link";
import {
  BarChart3,
  Headphones,
  LineChart,
  Zap,
  Brain,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/language-context";
import heroImage from "@/public/how-it-works-hero.png";
import personImage from "@/public/how-person.png";
import vrImage from "@/public/how-vr.png";

export default function HowItWorksContent() {
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

function Hero() {
  const { tr } = useLanguage();
  const h = tr.howItWorks;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
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
            {h.pioneeringBadge}
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            {h.scienceTitle}
            <br />
            <span className="text-gradient-brand">{h.scienceHighlight}</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-slate-300">{h.heroBody}</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-bounce-in" delay="0.3s" className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/booking"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            {h.startJourney}
            <span>→</span>
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
            <span>▶</span>
            {h.watchOverview}
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function Journey() {
  const { tr } = useLanguage();
  const h = tr.howItWorks;

  const steps = [
    {
      number: "01",
      icon: <Brain className="h-5 w-5" />,
      title: h.spatialAssessmentTitle,
      description: h.spatialAssessmentBody,
      color: "bg-violet-500/20",
      iconBg: "bg-violet-500",
    },
    {
      number: "02",
      icon: <Headphones className="h-5 w-5" />,
      title: h.personalizedProtocolTitle,
      description: h.personalizedProtocolBody,
      color: "bg-cyan-500/20",
      iconBg: "bg-cyan-500",
    },
    {
      number: "03",
      icon: <Zap className="h-5 w-5" />,
      title: h.immersiveSessionTitle,
      description: h.immersiveSessionBody,
      color: "bg-pink-500/20",
      iconBg: "bg-pink-500",
    },
    {
      number: "04",
      icon: <BarChart3 className="h-5 w-5" />,
      title: h.biometricAnalyticsTitle,
      description: h.biometricAnalyticsBody,
      color: "bg-purple-500/20",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="mb-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
            {h.processFlow}
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s" className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {h.patientJourney}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mx-auto mt-3 max-w-2xl text-center">
          <p className="text-slate-600">{h.journeyBody}</p>
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
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const { tr } = useLanguage();
  const h = tr.howItWorks;

  const techLines = h.techTitle.split("\n");

  return (
    <section className="bg-space-soft py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div>
          <AnimateOnScroll animation="animate-fade-in" className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {h.spatialEcosystem}
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-left" delay="0.1s">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {techLines[0]}
              <br />
              {techLines[1]}
            </h2>
          </AnimateOnScroll>

          <div className="mt-10 space-y-6">
            <AnimateOnScroll animation="animate-slide-in-left" delay="0.2s" className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{h.subMillimeterTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{h.subMillimeterBody}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-left" delay="0.3s" className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{h.hapticTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{h.hapticBody}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-left" delay="0.4s" className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{h.liveFeedbackTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{h.liveFeedbackBody}</p>
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
              {h.activeTracking}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function Precision() {
  const { tr } = useLanguage();
  const h = tr.howItWorks;

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
              <div className="text-xs font-semibold text-slate-400">{h.dataAccuracy}</div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="order-1 md:order-2">
          <AnimateOnScroll animation="animate-fade-in" className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              {h.clinicalIntegrity}
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right" delay="0.1s">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{h.precisionTitle}</h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right" delay="0.2s" className="mt-6">
            <p className="max-w-md leading-relaxed text-slate-600">{h.precisionBody}</p>
          </AnimateOnScroll>

          <div className="mt-10 space-y-4">
            <AnimateOnScroll animation="animate-slide-in-right" delay="0.3s" className="rounded-lg border-l-4 border-brand-blue bg-blue-50 p-4">
              <p className="font-semibold text-slate-900">{h.evidenceTitle}</p>
              <p className="mt-1 text-sm text-slate-600">{h.evidenceBody}</p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-right" delay="0.4s" className="rounded-lg border-l-4 border-brand-purple bg-violet-50 p-4">
              <p className="font-semibold text-slate-900">{h.hipaaTitle}</p>
              <p className="mt-1 text-sm text-slate-600">{h.hipaaBody}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { tr } = useLanguage();
  const h = tr.howItWorks;

  return (
    <section className="bg-space-soft py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-scale-fade-in" className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 px-8 py-16 text-center backdrop-blur sm:px-16">
          <AnimateOnScroll animation="animate-slide-in-up" delay="0.1s">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{h.readyTitle}</h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-up" delay="0.2s" className="mt-4">
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-300">{h.readyBody}</p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-bounce-in" delay="0.3s" className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold"
            >
              {h.bookAssessment}
            </Link>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {h.contactSupport}
            </button>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
