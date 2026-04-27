import Link from "next/link";
import {
  Activity,
  BarChart3,
  BookOpen,
  Dumbbell,
  ShieldCheck,
  Waves,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pathways />
        <Validation />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
          Our Expertise
        </span>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          Specialized{" "}
          <span className="text-gradient-brand">VR Therapy</span> Pathways
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
          Experience clinical-grade physical therapy through immersive digital
          environments designed to accelerate neuroplasticity and
          musculoskeletal healing.
        </p>
      </div>
    </section>
  );
}

function Pathways() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {/* Orthopedic Recovery - large left card */}
          <PathwayCard
            className="relative flex h-80 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 p-7 text-white md:col-span-2"
            badge="Pathway One"
            icon={<Activity className="h-5 w-5" />}
            title="Orthopedic Recovery"
            description="Targeted protocols for post-surgical rehab and joint injuries, using real-time biomechanical feedback in gamified landscapes to ensure perfect form."
            cta
          />

          {/* Pain Management */}
          <PathwayCard
            className="relative flex h-80 flex-col justify-end overflow-hidden bg-gradient-to-br from-slate-800 to-indigo-950 p-7 text-white"
            icon={<Waves className="h-5 w-5" />}
            title="Pain Management"
            description="Neuro-distraction techniques designed to rewire chronic pain signals and improve quality of life through immersive sensory therapy."
          />

          {/* Neurological Rehab */}
          <PathwayCard
            className="relative flex h-80 flex-col justify-end overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-black p-7 text-white"
            icon={<Zap className="h-5 w-5" />}
            title="Neurological Rehab"
            description="Specialized modules for stroke recovery and cognitive-motor integration, focusing on neuroplasticity through repetitive VR challenges."
          />

          {/* Performance Training - wide right */}
          <PathwayCard
            className="relative flex h-80 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 p-7 text-white md:col-span-2"
            icon={<Dumbbell className="h-5 w-5" />}
            title="Performance Training"
            description="Elite conditioning protocols that push physical boundaries safely. Perfect for athletes returning to competition or those seeking peak optimization."
            stats={[
              { value: "15%", label: "Faster Recovery" },
              { value: "40+", label: "Pro Drills" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PathwayCard({
  className,
  badge,
  icon,
  title,
  description,
  cta,
  stats,
}: {
  className: string;
  badge?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: boolean;
  stats?: { value: string; label: string }[];
}) {
  return (
    <div className={className + " rounded-3xl"}>
      {/* subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(800px 300px at 20% 0%, rgba(124,58,237,0.15), transparent), radial-gradient(600px 300px at 100% 100%, rgba(37,99,235,0.15), transparent)",
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
              {badge}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
            {description}
          </p>

          {stats && (
            <div className="mt-5 flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {cta && (
            <Link
              href="/booking"
              className="mt-5 inline-flex w-fit items-center rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Pathway
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function Validation() {
  const items = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Evidence-Based Protocols",
      body:
        "Our programs are built on clinical research from leading rehabilitation centers worldwide.",
      tint: "bg-blue-100 text-brand-blue",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Real-Time Biometrics",
      body:
        "Continuous tracking of movement precision and physiological response during every session.",
      tint: "bg-violet-100 text-brand-purple",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Certified Supervision",
      body:
        "Remote monitoring by licensed physical therapists to guide your recovery journey.",
      tint: "bg-blue-100 text-brand-blue",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-300 to-slate-500 shadow-lg">
          <div className="flex h-full w-full items-center justify-center text-white/80">
            <Activity className="h-24 w-24 opacity-70" />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Scientifically Validated Methods
          </h2>

          <ul className="mt-8 space-y-7">
            {items.map((it) => (
              <li key={it.title} className="flex gap-5">
                <span
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${it.tint}`}
                >
                  {it.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {it.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
