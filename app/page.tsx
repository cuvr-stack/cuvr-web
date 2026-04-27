import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Brain,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Info,
  LineChart,
  Play,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vr_person from '@/public/cuvr_person_vr.png'
import brain_icon from '@/public/brain_icon.png'
import therapist_tablet from '@/public/therapist_tablet.png'
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyVR />
        <Approach />
        <PatientStories />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-purple">
            The Future of Physio
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Recovery,
            <br />
            <span className="text-gradient-brand">Reimagined.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
            CUVR combines clinical expertise with immersive virtual reality
            to accelerate your healing journey. Professional physical therapy
            that feels like a breakthrough.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/booking"
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Start Your Journey
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-indigo"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-blue/30">
                <Play className="h-3 w-3 fill-current" />
              </span>
              See it in Action
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#a78bfa", "#60a5fa", "#f472b6"].map((c, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white"
                  style={{
                    background: `linear-gradient(135deg, ${c}, #6366f1)`,
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Trusted by{" "}
              <span className="font-semibold text-slate-900">2,400+</span>{" "}
              active recovery patients
            </p>
          </div>
        </div>

        <VRHeadsetCard />
      </div>
    </section>
  );
}

function VRHeadsetCard() {
  return (
    <div className="relative mx-auto w-full max-w-md perspective-container">
      <div className="aspect-[4/5] animate-tilt rounded-3xl p-6 box-gradient">
        <div className="flex h-full flex-col items-center justify-between">
          {/* VR headset silhouette */}
          <div className="flex flex-1 items-center justify-center image-padding-25">
            {/* <svg
              viewBox="0 0 200 140"
              className="w-56 text-teal-300/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect
                x="20"
                y="40"
                width="160"
                height="70"
                rx="18"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <circle cx="70" cy="75" r="20" />
              <circle cx="130" cy="75" r="20" />
              <path d="M20 60 Q 0 70 10 95" />
              <path d="M180 60 Q 200 70 190 95" />
            </svg> */}
            <Image src={vr_person} alt="vr person" />
          </div>

          <div className="w-full rounded-2xl bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-medium text-white/70">
              <span>LIVE SESSION</span>
              <span>Progress</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <span className="text-base font-semibold text-white">
                Shoulder Mobility
              </span>
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Why VR ---------------------------------- */
function WhyVR() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Why Virtual Reality?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Traditional therapy can be repetitive. VR turns clinical exercises
            into engaging environments that boost compliance and neurological
            recovery speed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[70%_1fr]">
          {/* Neural Plasticity */}
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100">
            <div className="grid gap-6 md:grid-cols-[60%_1fr] items-center h-full">
              {/* Left column - Text content */}
              <div>
                <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl icon-bg-light text-brand-blue">
                  {/* <Info className="h-5 w-5" /> */}
                  <Image src={brain_icon} alt="brain icon" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Neural Plasticity Focus
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  By providing visual feedback in 3D space, we stimulate neural
                  pathways more effectively than standard repetitive motions.
                </p>
              </div>
              
              {/* Right column - Brain visualization */}
              <div className="relative mx-auto flex h-full w-full items-center justify-center rounded-xl bg-gray">
                <Brain className="h-16 w-16 text-slate-400" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  px-2 py-0.5 text-xs font-bold text-brand-purple">
                  +45% RECOVERY RATE
                </span>
              </div>
            </div>
          </div>

          {/* Brain visualization card */}
          {/* <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100">
            <div className="flex h-full flex-col justify-between">
              <div className="relative mx-auto flex h-32 w-full items-center justify-center rounded-xl bg-slate-100">
                <Brain className="h-16 w-16 text-slate-400" />
                <span className="absolute right-4 top-3 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-brand-purple shadow">
                  +45% RECOVERY RATE
                </span>
              </div>
              <p className="mt-4 text-center text-xs font-medium text-slate-500">
                Safe work
              </p>
            </div>
          </div> */}

          {/* Engaging Gameflow purple card */}
          <div className="relative overflow-hidden rounded-3xl gardient-blue-box p-8 text-white shadow-xl">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">Engaging Gameflow</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              We turn mundane stretches into immersive goals. You won&apos;t
              even realize you&apos;re doing &ldquo;work.&rdquo;
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/25">
              <Sparkles className="h-4 w-4" />
              14 New Worlds
            </button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-[30%_1fr]">
           {/* Real-time Biofeedback */}
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-brand-purple">
              <Activity className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Real-time Biofeedback
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Precision motion tracking measures your range of motion down to
              the millimeter.
            </p>
          </div>

          {/* Monitor placeholder */}
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100 ">
            <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="mx-auto flex h-32 w-full items-center justify-center rounded-xl bg-slate-100">
              <LineChart className="h-14 w-14 text-slate-400" />
            </div>
            {/* Clinical Supervision */}
          
          <div className="bg-white">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Clinical Supervision
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Your data is monitored by licensed physiotherapists who adjust
              your program remotely for optimal safety and progress.
            </p>
          </div>
          </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Approach ------------------------------- */
function Approach() {
  const steps = [
    {
      n: 1,
      title: "Initial Clinical Assessment",
      body:
        "We start with a thorough evaluation by a senior physiotherapist to identify your specific mobility limitations and goals.",
    },
    {
      n: 2,
      title: "VR Environment Selection",
      body:
        "We tailor the virtual worlds to your interests—from calming nature retreats to active sports challenges—to maximize engagement.",
    },
    {
      n: 3,
      title: "Progressive Loading",
      body:
        "The software automatically increases difficulty and complexity as your body heals, ensuring continuous progress.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="relative rounded-3xl">
            {/* Silhouette placeholder */}
            {/* <svg
              viewBox="0 0 200 250"
              className="absolute inset-0 h-full w-full text-slate-500/60"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="100" cy="70" r="32" />
              <path d="M40 250 C 40 170 60 130 100 130 C 140 130 160 170 160 250 Z" />
            </svg> */}
            <Image src={therapist_tablet} alt="Therapist with Tablet" />
          </div>
          <div className="absolute bottom-8 opacity_7 btn-right rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 px-6 py-4 text-white shadow-xl md:right-10">
            <p className="text-3xl font-extrabold">98%</p>
            <p className="text-xs uppercase tracking-wider opacity-90">
              Patient Success
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Approach
          </h2>
          <ol className="mt-8 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple text-sm font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Patient Stories ---------------------------- */
function PatientStories() {
  const stories = [
    {
      quote:
        "After my ACL surgery, traditional physio felt like a chore. CUVR turned my recovery into something I actually looked forward to every morning. My range of motion improved significantly faster than expected.",
      name: "Mark Henderson",
      role: "Post-Surgical Patient",
    },
    {
      quote:
        "The gamified aspect made me forget I was doing physical therapy. The metrics they show you are so encouraging. I'm back to hiking after just 8 weeks of sessions.",
      name: "Sarah Jenkins",
      role: "Chronic Back Pain Patient",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Patient Stories
            </h2>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              See how CUVR has helped real patients reclaim their mobility
              and their lives.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <div
              key={s.name}
              className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur"
            >
              <svg
                className="h-8 w-8 text-violet-400"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 8H4v8h4c0 4-2 6-4 6v2c6 0 10-4 10-10V8zm14 0h-6v8h4c0 4-2 6-4 6v2c6 0 10-4 10-10V8h-4z" />
              </svg>
              <p className="mt-5 text-base leading-relaxed text-slate-100">
                &ldquo;{s.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #a78bfa, #6366f1)",
                  }}
                />
                <div>
                  <p className="text-sm font-semibold">{s.name}</p>
                  <p className="text-xs text-slate-400">{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------- */
function FinalCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-10 text-white md:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to reclaim your strength?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/85">
              Book your free initial consultation and see how VR can transform
              your clinical recovery today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple transition hover:bg-slate-100"
              >
                Book Free Consult
              </Link>
              <Link
                href="/booking"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
