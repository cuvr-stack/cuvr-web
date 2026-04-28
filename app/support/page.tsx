import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  CreditCard,
  Headphones,
  Headset,
  LifeBuoy,
  Mail,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  UserCog,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Support — Help Center & FAQs",
  description:
    "CUVR's help center: VR headset setup, billing & UAE insurance, clinical sessions, account help, and DHA / NABIDH / PDPL data-protection answers. Email support@cuvr.ae or call +971 50 259 2439.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "CUVR Support Center",
    description:
      "Answers for setup, billing, sessions, and data protection — plus direct contact channels for DHA-licensed clinical support.",
    url: "/support",
    type: "website",
  },
};

const CATEGORIES = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Getting Started",
    desc: "Onboarding, your first session, and how to set realistic recovery goals.",
    tone: "violet" as const,
  },
  {
    icon: <Headset className="h-5 w-5" />,
    title: "Hardware & Setup",
    desc: "Headset pairing, calibration, room scanning, and device troubleshooting.",
    tone: "cyan" as const,
  },
  {
    icon: <UserCog className="h-5 w-5" />,
    title: "Account & Profile",
    desc: "Sign-in, password reset, profile changes, and connecting to a clinic.",
    tone: "magenta" as const,
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Billing & Plans",
    desc: "Invoices, subscription changes, refunds, and insurance reimbursement.",
    tone: "violet" as const,
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Clinical Sessions",
    desc: "Scheduling, in-session troubleshooting, and how to message your clinician.",
    tone: "cyan" as const,
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Privacy & Security",
    desc: "How we protect your data, manage consent, and handle access requests.",
    tone: "magenta" as const,
  },
];

const FAQ = [
  {
    q: "Do I need a clinician referral to use CUVR?",
    a: "Not always. We offer self-onboarding for general mobility programs, and physician-supervised pathways for post-surgical or neurological recovery — both delivered by DHA Sheryan-licensed clinicians. During booking we'll route you into the right track based on a short intake.",
  },
  {
    q: "Which VR headsets does CUVR support?",
    a: "We currently support Meta Quest 3 / 3S and Quest Pro, plus the CUVR-1S clinical reference unit. Older or unsupported devices will surface a compatibility prompt during setup.",
  },
  {
    q: "How is my health data protected under UAE law?",
    a: "Clinical and biometric data is handled in accordance with UAE Federal Law No. 2 of 2019 (the ICT Health Law), Federal Decree-Law No. 45 of 2021 (PDPL), and the DHA Health Data and Information Standards. As a DHA-licensed facility we are integrated with NABIDH, Dubai's unified health information exchange. All clinical data is hosted on UAE-based infrastructure. See our Privacy Policy for the full breakdown.",
  },
  {
    q: "How do I cancel or pause my subscription?",
    a: "Open Account → Plans, then choose Cancel or Pause. Cancellation takes effect at the end of the current billing period; you'll keep access until then.",
  },
  {
    q: "What if I feel motion sick or dizzy mid-session?",
    a: "Stop immediately and remove the headset. Take a break, hydrate, and resume only when you feel steady. Your clinician can also dial down the visual flow profile to a gentler preset.",
  },
  {
    q: "Can I export my progress data?",
    a: "Yes. From Account → Data, request a full export at any time. Reports include movement metrics, session summaries, and clinician notes (where authorized).",
  },
  {
    q: "Does my UAE health insurance cover CUVR sessions?",
    a: "We are integrated with the DHA eClaim Link / DHPO platform and accept claims from major UAE insurers including Daman, Sukoon (formerly Oman Insurance), ADNIC, AXA Gulf, MetLife, NEXtCARE, and the Dubai Health Insurance Corporation network. Your care team can pre-authorize sessions on your behalf — contact billing@cuvr.ae to start.",
  },
  {
    q: "Where do I report a security or data-protection issue?",
    a: "Email security@cuvr.ae. We acknowledge reports within one business day, prioritize anything affecting clinical or biometric data, and coordinate notifications with the DHA and UAE Data Office where required by the PDPL.",
  },
];

const TONE = {
  violet: {
    icon: "text-violet-300 bg-violet-500/15 border-violet-400/30",
  },
  cyan: {
    icon: "text-cyan-300 bg-cyan-500/15 border-cyan-400/30",
  },
  magenta: {
    icon: "text-pink-300 bg-pink-500/15 border-pink-400/30",
  },
} as const;

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="bg-[#05060f] text-white">
        <Hero />
        <Categories />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </>
  );
}

/* -------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05060f] px-5 py-24 sm:px-8 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 20%, rgba(124,58,237,0.28), transparent 60%), radial-gradient(700px 400px at 80% 100%, rgba(37,99,235,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <AnimateOnScroll animation="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200">
            <LifeBuoy className="h-3.5 w-3.5" />
            Support Center
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            How can we{" "}
            <span className="text-gradient-brand">help?</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            Browse our most-asked questions, find a category, or reach a
            human. Our specialists average a 2-hour response on weekdays.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="animate-bounce-in"
          delay="0.45s"
          className="mx-auto mt-9 flex w-full max-w-xl items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur transition focus-within:border-violet-400/40"
        >
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search articles, e.g. 'reset password'"
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          <kbd className="hidden items-center rounded border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:inline-flex">
            ⌘ K
          </kbd>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ----------------------------- Categories ------------------------------ */
function Categories() {
  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateOnScroll
          animation="animate-fade-in"
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-500">
            Browse by topic
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="animate-slide-in-up"
          delay="0.15s"
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Pick a category
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <AnimateOnScroll
              key={c.title}
              animation="animate-scale-fade-in"
              delay={`${0.15 + i * 0.08}s`}
            >
              <Link
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_18px_40px_-18px_rgba(124,58,237,0.35)]"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${TONE[c.tone].icon}`}
                >
                  {c.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {c.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 transition group-hover:gap-2">
                  Browse articles
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQs --------------------------------- */
function FAQs() {
  return (
    <section className="relative overflow-hidden bg-[#0a0820] py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 350px at 50% 0%, rgba(124,58,237,0.20), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            Frequently Asked
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="animate-slide-in-up"
          delay="0.15s"
          className="text-center"
        >
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Quick answers
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => (
            <AnimateOnScroll
              key={item.q}
              animation="animate-slide-in-up"
              delay={`${0.1 + i * 0.05}s`}
            >
              <details className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05] backdrop-blur-sm transition hover:border-violet-400/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                    {item.a}
                  </p>
                </div>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Contact -------------------------------- */
function Contact() {
  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: contact options */}
          <div>
            <AnimateOnScroll animation="animate-fade-in">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-500">
                Talk to a human
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Still stuck? <br />
                <span className="text-gradient-brand">We&apos;re here.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
                Reach our specialist team through whichever channel suits you
                best. Clinical questions go straight to the on-call clinician
                rotation.
              </p>
            </AnimateOnScroll>

            <div className="mt-9 space-y-3">
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                title="Email"
                value="support@cuvr.ae"
                href="mailto:support@cuvr.ae"
                meta="Avg. 2h reply"
              />
              <ContactRow
                icon={<PhoneCall className="h-4 w-4" />}
                title="Phone"
                value="+971 502592439"
                href="tel:+971 502592439"
                meta="Mon–Fri · 7am–7pm GST"
              />
              <ContactRow
                icon={<Calendar className="h-4 w-4" />}
                title="Book a specialist call"
                value="cuvr.ae/specialist"
                href="/booking"
                meta="15-minute video call"
              />
              <ContactRow
                icon={<MessageCircle className="h-4 w-4" />}
                title="Live chat"
                value="Open in-app"
                href="#"
                meta="Inside your account"
              />
            </div>
          </div>

          {/* Right: contact form */}
          <AnimateOnScroll
            animation="animate-slide-in-right"
            delay="0.2s"
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-violet-50/40 p-8 shadow-[0_18px_60px_-18px_rgba(124,58,237,0.18)] sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900">
                Send us a message
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Tell us what you&apos;re running into. We&apos;ll route it to
                the right team.
              </p>

              <form className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name">
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Topic">
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    <option>Getting started</option>
                    <option>Hardware &amp; setup</option>
                    <option>Account &amp; profile</option>
                    <option>Billing &amp; plans</option>
                    <option>Clinical sessions</option>
                    <option>Privacy &amp; security</option>
                    <option>Something else</option>
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe what you're seeing — include any error codes if you have them."
                    className="form-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
                >
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  By sending, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-violet-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  value,
  href,
  meta,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_14px_30px_-16px_rgba(124,58,237,0.35)]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
          {icon}
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {title}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-slate-900">
            {value}
          </p>
        </div>
      </div>
      <div className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:block">
        {meta}
      </div>
    </Link>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-700">
        {label}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}
