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
import vrHeadset from "@/public/meta-1.png";
import metaVR from "@/public/meta-2.png"
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
    <section className="bg-[#05060f] px-5 pt-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#15122e] via-[#0f0d24] to-[#0a0820] p-8 sm:p-12">
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(700px 280px at 0% 0%, rgba(124,58,237,0.20), transparent 60%), radial-gradient(600px 260px at 100% 100%, rgba(37,99,235,0.18), transparent 60%)",
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                Services & Infrastructure
              </span>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
                Spatial{" "}
                <span className="text-gradient-brand">Precision</span>{" "}
                <br className="hidden sm:block" />
                Therapy.
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
                Experience clinical-grade physical recovery transformed through
                immersive spatial environments. We don&apos;t just treat
                symptoms; we reprogram movement in 3D space.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/booking"
                  className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Book Assessment
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10"
                >
                  <Play className="h-3.5 w-3.5 fill-white" />
                  Watch Demo
                </Link>
              </div>
            </div>
                <div className="w-[100%] h-[100%]">
                <Image
                  src={vrHeadset}
                  alt="CUVR VR headset"
                  fill
                  priority
                  className="vr-relative"
                />
                </div>
          </div>
        </div>
      </div>
    </section>
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Precision Recovery Channels
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Focused modalities designed for specific anatomical milestones and
            performance objectives.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {channels.map((c) => (
            <article key={c.title} className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
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
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            The Backbone
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technological Infrastructure
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-violet-400/30 hover:bg-white/[0.05]"
              >
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
            ))}
          </div>

          {/* Hero card */}
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-500">
              Clinical Validation
            </p>
            <h2 className="mt-5 text-6xl font-extrabold tracking-tight sm:text-7xl">
              <span className="text-gradient-brand">Excellence.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
              Our methodology isn&apos;t just advanced—it&apos;s validated. By
              merging spatial data with clinical science, we redefine the
              architecture of human recovery.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-violet-600"
            >
              Read Clinical Paper
              <ArrowRight className="h-4 w-4" />
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </Link>
          </div>

          {/* Right stats */}
          <div className="space-y-12">
            <StatBlock
              value="98"
              suffix="%"
              valueClass="text-violet-500"
              label="Long-term tracking shows maintenance of ROM milestones post-treatment cycle."
              chart={<MiniLineChart />}
            />
            <StatBlock
              value="40"
              suffix="%"
              valueClass="text-cyan-500"
              label="Spatial feedback drives movement adaptation, cutting clinical session significantly."
              chart={<MiniProgress />}
            />
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to <span className="text-gradient-brand">Evolve?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              Join the next generation of recovery. Secure your spatial
              assessment slot today and experience the future of motion.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
