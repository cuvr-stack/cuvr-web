import Link from "next/link";
import {
  BarChart3,
  Headphones,
  LineChart,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Howvr from "../../public/vr-how.png"
export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Path />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-purple">
            The Digital Frontier
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Rehab,
            <br />
            <span className="italic text-gradient-brand">Redefined.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
            CUVR combines clinical physiotherapy expertise with immersive VR
            technology to transform your recovery journey from a chore into an
            adventure.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 shadow-xl">
            <div className="flex h-full w-full flex-col items-center justify-center text-slate-500">
             {/*  <Headphones className="h-20 w-20 opacity-60" /> */}
             <Image src={Howvr} alt="How Vr" />
              <p className="mt-3 text-xs font-medium uppercase tracking-widest">
                Clinical VR session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your Path to Recovery
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded bg-brand-purple" />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100 md:col-span-2">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-brand-blue">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              01. Clinical Assessment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every journey starts with a deep dive. Our clinical experts
              evaluate your range of motion, strength, and specific recovery
              goals to build your digital twin profile.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#a78bfa", "#60a5fa"].map((c, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white"
                    style={{
                      background: `linear-gradient(135deg, ${c}, #6366f1)`,
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-brand-blue">
                Expert Consultation Included
              </span>
            </div>
          </div>

          {/* Card 2 purple */}
          <div className="rounded-3xl bg-gradient-to-br from-violet-500 via-violet-600 to-purple-700 p-8 text-white shadow-xl">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <Headphones className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">02. VR Exercises</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Step into a curated world. Your therapy is gamified into
              immersive environments—from tranquil beaches to forest peaks—
              designed to trigger the correct physiological responses.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-brand-blue">
              <LineChart className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              03. Live Metrics
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Our sensors track your every movement with millimetric
              precision, providing immediate visual feedback and ensuring
              every repetition counts towards your healing.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100 md:col-span-2">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-brand-blue">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  04. Clinical Oversight
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                  You&apos;re never alone. A dedicated clinical
                  physiotherapist reviews your VR session data weekly,
                  adjusting your program remotely to match your pace of
                  recovery.
                </p>
              </div>
              <div className="hidden h-32 w-40 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white sm:flex">
                <UserCheck className="h-10 w-10 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-10 text-white md:p-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to enter the clinic?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/85">
              Join thousands of patients who have accelerated their recovery
              through the power of CUVR immersion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple transition hover:bg-slate-100"
              >
                Start Free Assessment
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                View VR Environments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
