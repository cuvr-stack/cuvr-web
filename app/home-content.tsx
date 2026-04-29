"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Headphones,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  User,
  UserCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useLanguage } from "@/lib/language-context";
import vr_person from "@/public/cuvr_person_vr.png";
import vr_headset from "@/public/quest1.png";

export default function HomeContent() {
  return (
    <>
      <Header />
      <main className="bg-space text-white">
        <Hero />
        <WhySpatial />
        <Protocol />
        <PatientSuccess />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------- Hero ---------------------------------- */
function Hero() {
  const { tr } = useLanguage();
  const h = tr.home;

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0">
        <Image
          src={vr_person}
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover object-center opacity-60 img-height"
        />
        <div className="absolute inset-0 hero-photo-overlay" />
      </div>

      <div className="relative mx-auto flex min-h-[640px] max-w-5xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8 md:py-36 h-screen">
        <span className="animate-fade-in rounded-full px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-300">
          {h.badge}
        </span>

        <h1
          className="animate-slide-in-up mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          {h.heroTitle1}{" "}
          <span className="text-gradient-future">{h.heroHighlight}</span>{" "}
          {h.heroTitle2}
        </h1>

        <p
          className="animate-slide-in-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300"
          style={{ animationDelay: "0.4s" }}
        >
          {h.heroBody}
        </p>

        <div
          className="animate-bounce-in mt-10 flex flex-wrap items-center justify-center gap-6"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href="/booking"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            {h.startJourney}
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/5">
              <Play className="h-3 w-3 fill-white" />
            </span>
            {h.watchExperience}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Why Spatial Therapy ------------------------ */
function WhySpatial() {
  const { tr } = useLanguage();
  const h = tr.home;

  const features = [
    {
      title: h.neuralImmersionTitle,
      body: h.neuralImmersionBody,
      icon: <UserCircle2 className="h-6 w-6" />,
      tone: "violet" as const,
    },
    {
      title: h.biometricsTitle,
      body: h.biometricsBody,
      icon: <Activity className="h-6 w-6" />,
      tone: "cyan" as const,
    },
    {
      title: h.gamifiedTitle,
      body: h.gamifiedBody,
      icon: <Play className="h-5 w-5 fill-current" />,
      tone: "magenta" as const,
    },
  ];

  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll
          animation="animate-fade-in"
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-purple">
            {h.futureBadge}
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="animate-slide-in-up"
          delay="0.2s"
          className="mx-auto max-w-2xl text-center mt-4"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {h.whySpatialTitle}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="animate-slide-in-up"
          delay="0.4s"
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mt-4 text-base text-slate-500">{h.whySpatialBody}</p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <AnimateOnScroll
          animation="animate-bounce-in"
          delay="0.6s"
          className="mt-12 flex justify-center"
        >
          <div className="stats-card flex w-full max-w-3xl items-center justify-around rounded-2xl px-8 py-6">
            <Stat value="40%" label={h.fasterRecovery} />
            <Divider />
            <Stat value="92%" label={h.userRetention} />
            <Divider />
            <Stat value="24/7" label={h.expertSupport} />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  icon,
  tone,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
  tone: "violet" | "cyan" | "magenta";
}) {
  const glowMap = {
    violet: "icon-glow-violet",
    cyan: "icon-glow-cyan",
    magenta: "icon-glow-magenta",
  } as const;
  const ringMap = {
    violet: "ring-violet text-violet-500",
    cyan: "ring-cyan text-cyan-400",
    magenta: "ring-magenta text-pink-400",
  } as const;

  return (
    <AnimateOnScroll
      animation="animate-scale-fade-in"
      className="card-light rounded-2xl p-8 text-center"
    >
      <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full blur-md ${glowMap[tone]}`}
        />
        <span
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-white ${ringMap[tone]}`}
        >
          {icon}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{body}</p>
    </AnimateOnScroll>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <span className="h-10 w-px bg-slate-200" />;
}

/* ----------------------------- Protocol --------------------------------- */
function Protocol() {
  const { tr } = useLanguage();
  const h = tr.home;

  const phases = [
    {
      n: h.phase1Title,
      icon: <Sparkles className="h-4 w-4 color-1" />,
      body: h.phase1Body,
    },
    {
      n: h.phase2Title,
      icon: <Headphones className="h-4 w-4 color-2" />,
      body: h.phase2Body,
    },
    {
      n: h.phase3Title,
      icon: <TrendingUp className="h-4 w-4 color-3" />,
      body: h.phase3Body,
    },
  ];

  return (
    <section className="bg-space-soft py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <AnimateOnScroll animation="animate-slide-in-left" className="space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-300">
            {h.methodologyBadge}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {h.cuvrProtocol}
          </h2>

          <ul className="mt-10 space-y-5">
            {phases.map((p, i) => (
              <AnimateOnScroll
                key={p.n}
                animation="animate-slide-in-left"
                delay={`${0.3 + i * 0.15}s`}
                className="card-phase flex gap-4 rounded-2xl p-5"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-200">
                  {p.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.n}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {p.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-right" className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7b36d0] via-[#10081f] to-[#0a0a1f] p-6 shadow-2xl">
            <div className="animate-float-slow">
              <Image
                src={vr_headset}
                alt="CUVR-1S clinical VR headset used for spatial physical therapy"
                className="mx-auto rounded-2xl"
                priority
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md md:right-auto md:max-w-xs">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                {h.protocolActive}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {h.protocolStatus}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* --------------------------- Patient Success ---------------------------- */
function PatientSuccess() {
  const { tr } = useLanguage();
  const h = tr.home;

  const stories = [
    {
      stars: 5,
      quote: h.quote1,
      name: "Marcus Thorne",
      role: h.proAthlete,
    },
    {
      stars: 5,
      quote: h.quote2,
      name: "Sarah Jenkins",
      role: h.uxEngineer,
    },
    {
      stars: 5,
      quote: h.quote3,
      name: "David Kim",
      role: h.retiredEducator,
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {h.patientSuccess.split(" ")[0]}{" "}
            <span className="text-gradient-cyan">
              {h.patientSuccess.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-500">{h.patientSuccessBody}</p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <AnimateOnScroll
              key={s.name}
              animation="animate-bounce-in"
              delay={`${0.4 + i * 0.15}s`}
              className="rounded-2xl bg-[#0d1024] p-7 text-white ring-1 ring-white/5 shadow-xl"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: s.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-200">
                &ldquo;{s.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <User className="h-4 w-4 text-slate-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{s.name}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {s.role}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------- */
function FinalCTA() {
  const { tr } = useLanguage();
  const h = tr.home;

  return (
    <section className="bg-[#0a0a1c] py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <AnimateOnScroll
          animation="animate-scale-fade-in"
          className="bg-cta-gradient relative overflow-hidden rounded-[32px] border border-white/10 px-8 py-16 text-center md:px-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {h.ctaTitle1}{" "}
            <span className="text-gradient-future">{h.ctaHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            {h.ctaBody}
          </p>

          <form
            className="mx-auto mt-9 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row"
            action="/booking"
          >
            <input
              type="email"
              required
              placeholder={h.emailPlaceholder}
              className="input-glass flex-1 rounded-full px-6 py-3.5 text-sm"
            />
            <button
              type="submit"
              className="btn-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              {h.getEarlyAccess}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
