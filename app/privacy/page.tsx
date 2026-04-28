import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy — DHA & PDPL Compliant",
  description:
    "How CUVR collects, processes, and protects your health and biometric data under UAE Federal Law No. 2 of 2019 (ICT Health Law), the PDPL, and DHA / NABIDH standards.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "CUVR Privacy Policy",
    description:
      "DHA, NABIDH, and PDPL-aligned privacy practices for clinical VR physical therapy.",
    url: "/privacy",
    type: "article",
  },
};

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    body: (
      <>
        <p>
          CUVR Spatial Systems (&ldquo;CUVR,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a Dubai Health Authority
          (&ldquo;DHA&rdquo;) licensed provider of immersive, clinical-grade
          physical therapy delivered through virtual reality. Because our
          service captures health-related data, biometric signals, and
          movement telemetry, we treat your privacy as a clinical obligation —
          not just a legal one.
        </p>
        <p>
          This Privacy Policy explains what we collect, why we collect it, how
          we use and protect it, and what choices you have under UAE Federal
          Law No. 2 of 2019 on the Use of ICT in Health Fields (the
          &ldquo;ICT Health Law&rdquo;), Federal Decree-Law No. 45 of 2021 on
          the Protection of Personal Data (the &ldquo;PDPL&rdquo;), and the
          DHA Health Data and Information Standards. It applies to our
          website, mobile and desktop applications, in-clinic VR sessions,
          and any related services that link to this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    body: (
      <>
        <p>
          <strong>Account &amp; identity:</strong> name, email address,
          password hash, date of birth, and (where applicable) the clinic or
          provider that referred you.
        </p>
        <p>
          <strong>Clinical &amp; biometric:</strong> range-of-motion readings,
          joint-angle telemetry, balance and gait data, heart rate and
          respiration cues, and clinician notes captured during sessions.
        </p>
        <p>
          <strong>Session telemetry:</strong> headset model, controller inputs,
          spatial-tracking data, environment selected, session length, and
          performance scores.
        </p>
        <p>
          <strong>Device &amp; technical:</strong> IP address, browser/app
          version, device identifiers, crash logs, and diagnostic events used
          to keep the service stable.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How we use information",
    body: (
      <>
        <p>
          We use your information to deliver and personalize your recovery
          program, to enable your care team to monitor progress, to keep our
          systems secure, to comply with legal obligations, and — only with
          explicit consent — to improve our protocols through aggregated,
          de-identified research.
        </p>
        <p>
          We do not sell personal information. We do not use your clinical
          data to target advertising.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. How we share information",
    body: (
      <>
        <p>
          Your data is shared only with: (a) your authorized DHA-licensed
          clinicians and care team, (b) the Dubai unified health information
          exchange (NABIDH) as mandated by DHA Circular 67 of 2021, (c)
          trusted infrastructure providers under written data processing
          agreements aligned with the PDPL, (d) regulatory authorities (DHA,
          UAE Data Office, Ministry of Health and Prevention) when required
          by law, and (e) parties you explicitly direct us to share with.
        </p>
        <p>
          Health data is hosted on infrastructure located within the United
          Arab Emirates in accordance with the ICT Health Law&apos;s data
          residency requirements. Any cross-border transfer occurs only with
          your explicit consent and to jurisdictions that meet the PDPL&apos;s
          adequate-protection standard.
        </p>
        <p>
          When we engage subprocessors, they are bound to confidentiality,
          minimum-necessary access, and audit obligations equivalent to ours.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "5. How we protect information",
    body: (
      <>
        <p>
          Clinical and biometric data is encrypted in transit (TLS 1.2+) and
          at rest (AES-256). Access is gated by role-based permissions,
          hardware-backed multi-factor authentication for our staff, and
          continuous audit logging. Production systems are isolated from
          development environments and reviewed against the DHA Health Data
          and Information Standards, the ICT Health Law, and ISO/IEC 27001
          controls.
        </p>
        <p>
          No system is impervious. If we ever detect a breach affecting your
          data, we will notify you, the DHA, and the UAE Data Office within
          the windows required by Article 9 of the PDPL and applicable DHA
          guidance.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data retention",
    body: (
      <>
        <p>
          In line with DHA medical records retention requirements, adult
          clinical records are retained for at least 25 years from the date
          of last patient contact. Pediatric records are retained until the
          patient reaches the age of 21 plus an additional 25 years.
          Telemetry and diagnostic logs are retained for shorter,
          role-defined windows (typically 12&ndash;24 months) and then
          anonymized or deleted.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your rights",
    body: (
      <>
        <p>
          Under the PDPL and the ICT Health Law you have the right to (a)
          access and obtain a copy of your personal and health data, (b)
          correct inaccurate or incomplete data, (c) request erasure or
          restriction of processing where permitted, (d) object to
          processing, (e) request portability of data you have provided, and
          (f) withdraw any previously granted consent. Submit requests
          through your account settings or by contacting{" "}
          <Link
            href="mailto:privacy@cuvr.ae"
            className="font-semibold text-violet-600 hover:underline"
          >
            privacy@cuvr.ae
          </Link>
          . We respond within 30 days. You also have the right to lodge a
          complaint with the UAE Data Office or the DHA.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "8. Children",
    body: (
      <>
        <p>
          CUVR is not directed at children under 13. Pediatric care, when
          offered, is delivered exclusively under verified parent or
          guardian authorization in accordance with UAE Federal Law No. 3 of
          2016 on Child Rights (Wadeema&apos;s Law) and the DHA Pediatric
          Care Standards, with the additional safeguards described in our
          Pediatric Care Addendum.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    body: (
      <>
        <p>
          We may update this policy as our services evolve. Material changes
          will be communicated by email and surfaced in-product before they
          take effect. The effective date below always reflects the current
          version.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact us",
    body: (
      <>
        <p>
          Questions, complaints, or requests? Reach our Data Protection
          Officer at{" "}
          <Link
            href="mailto:privacy@cuvr.ae"
            className="font-semibold text-violet-600 hover:underline"
          >
            privacy@cuvr.ae
          </Link>
          {" "}or by mail at CUVR Spatial Systems, Attn: Data Protection
          Officer, Building 64, Block E, Dubai Healthcare City, P.O. Box
          505276, Dubai, United Arab Emirates. DHA Sheryan Facility ID
          available on request.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-900">
        <LegalHero
          eyebrow="Trust & Privacy"
          title="Privacy Policy"
          description="How we handle your personal, clinical, and biometric data — written in plain language, governed by clinical-grade controls."
          updated="April 28, 2026"
        />

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 md:grid-cols-[260px_minmax(0,1fr)]">
            <TableOfContents sections={SECTIONS} />

            <div className="space-y-12">
              {SECTIONS.map((s, i) => (
                <AnimateOnScroll
                  key={s.id}
                  animation="animate-slide-in-up"
                  delay={`${0.05 + i * 0.05}s`}
                >
                  <article id={s.id} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {s.title}
                    </h2>
                    <div className="prose-cuvr mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                      {s.body}
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* --------------------------- shared sub-components --------------------------- */
function LegalHero({
  eyebrow,
  title,
  description,
  updated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#05060f] px-5 py-24 text-white sm:px-8 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 360px at 20% 20%, rgba(124,58,237,0.28), transparent 60%), radial-gradient(700px 360px at 80% 80%, rgba(37,99,235,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <AnimateOnScroll animation="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            {title}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            {description}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate-fade-in" delay="0.45s">
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            Last updated · {updated}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function TableOfContents({
  sections,
}: {
  sections: { id: string; title: string }[];
}) {
  return (
    <aside className="hidden md:block">
      <div className="sticky top-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          On this page
        </p>
        <ul className="mt-4 space-y-2 border-l border-slate-200 pl-4">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block text-sm text-slate-600 transition hover:text-violet-600"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
