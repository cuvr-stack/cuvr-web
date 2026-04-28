import type { Metadata } from "next";
import Link from "next/link";
import { ScrollText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Terms of Service — CUVR Patient Agreement",
  description:
    "Read CUVR's clinical terms covering eligibility, billing in AED, insurance via eClaim Link, telemetry, liability, and UAE governing law for our DHA-licensed VR physical therapy services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "CUVR Terms of Service",
    description:
      "Patient agreement for CUVR — DHA-licensed VR physical therapy in Dubai.",
    url: "/terms",
    type: "article",
  },
};

const SECTIONS = [
  {
    id: "agreement",
    title: "1. Agreement to terms",
    body: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) form a binding
          agreement between you and CUVR Spatial Systems (&ldquo;CUVR&rdquo;)
          governing your access to our website, applications, hardware, and
          virtual reality therapy services (collectively, the
          &ldquo;Services&rdquo;). By creating an account, booking a session,
          or using our Services, you confirm that you are at least 18 years
          old (or have valid guardian authorization) and that you accept
          these Terms.
        </p>
      </>
    ),
  },
  {
    id: "medical-disclaimer",
    title: "2. Medical disclaimer",
    body: (
      <>
        <p>
          CUVR is licensed by the Dubai Health Authority (DHA) and operates
          under DHA Sheryan facility and professional licensing. The Services
          provide clinical-grade physical rehabilitation tooling under the
          supervision of DHA-licensed clinicians. The Services are not a
          substitute for emergency care, medical diagnosis, or independent
          medical advice, and do not replace any care pathway prescribed by
          your treating physician. Any insights, scores, or recommendations
          surfaced inside the platform are decision-support, not a
          prescription.
        </p>
        <p>
          In a medical emergency dial 998 (Dubai Ambulance) or 999. Stop
          using the Services and contact a clinician immediately if you
          experience pain, dizziness, nausea, severe disorientation, or any
          symptom that concerns you.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "3. Accounts and access",
    body: (
      <>
        <p>
          You are responsible for safeguarding the credentials used to access
          your account, for activity that occurs under those credentials, and
          for keeping your contact information accurate. Notify us
          immediately at{" "}
          <Link
            href="mailto:security@cuvr.ae"
            className="font-semibold text-violet-600 hover:underline"
          >
            security@cuvr.ae
          </Link>{" "}
          if you suspect unauthorized access.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "4. Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            Use the Services in a way that violates law or infringes another
            person&apos;s rights.
          </li>
          <li>
            Reverse-engineer, decompile, or attempt to derive source code from
            our hardware, firmware, or applications.
          </li>
          <li>
            Bypass safety boundaries, calibration steps, or clinical
            guardrails built into a session.
          </li>
          <li>
            Resell, sublicense, or commercially redistribute the Services
            without a written agreement.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "billing",
    title: "5. Subscriptions and billing",
    body: (
      <>
        <p>
          Some Services are sold on a subscription or per-session basis.
          Prices are quoted in UAE Dirhams (AED) and are inclusive of VAT
          where applicable in accordance with UAE Federal Decree-Law No. 8
          of 2017 on Value Added Tax. Charges are billed in advance, are
          non-refundable except where required by law, and renew
          automatically until cancelled. Where covered, claims may be
          submitted through DHA-authorized insurers and the eClaim Link
          platform. You may cancel anytime from your account settings;
          cancellation takes effect at the end of the current billing
          period.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "6. Intellectual property",
    body: (
      <>
        <p>
          The Services, including software, environments, content, models,
          and trademarks, are owned by CUVR or its licensors and are
          protected by intellectual-property laws. We grant you a limited,
          non-exclusive, non-transferable license to use the Services for
          personal, non-commercial recovery purposes.
        </p>
        <p>
          You retain ownership of any content you submit (such as session
          notes); you grant us a license to use it as needed to deliver and
          improve the Services.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "7. Data and privacy",
    body: (
      <>
        <p>
          Our handling of personal, clinical, and biometric data is governed
          by our{" "}
          <Link
            href="/privacy"
            className="font-semibold text-violet-600 hover:underline"
          >
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference.
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    title: "8. Disclaimers",
    body: (
      <>
        <p>
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; To the maximum extent permitted by law, CUVR
          disclaims all warranties — express, implied, and statutory —
          including merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "9. Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by UAE law, CUVR will not be
          liable for indirect, incidental, special, consequential, or
          punitive damages, or for lost profits, revenues, data, or goodwill
          arising from your use of the Services. Our total liability for any
          claim is limited to the greater of (a) the amount you paid us for
          the Services in the 12 months preceding the claim, or (b) AED
          500. Nothing in these Terms limits liability that cannot be
          limited under the UAE Civil Transactions Law or DHA professional
          conduct standards.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "10. Suspension and termination",
    body: (
      <>
        <p>
          We may suspend or terminate access to the Services if you violate
          these Terms, create risk to other users or to clinical safety, or
          if we are required to do so by law. You may stop using the
          Services at any time; certain provisions (e.g., payment, IP,
          liability) survive termination.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "11. Governing law and disputes",
    body: (
      <>
        <p>
          These Terms are governed by the federal laws of the United Arab
          Emirates and, where applicable, the laws of the Emirate of Dubai
          (including the regulations of the Dubai Health Authority).
          Disputes will be referred first to the DHA Health Regulation
          Sector for clinical or licensing matters, and otherwise resolved
          exclusively in the courts of Dubai, except where you have a
          statutory right to a different forum.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to these terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time. Material changes will
          be communicated by email and surfaced in-product before they take
          effect. Continued use of the Services after changes take effect
          constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "13. Contact",
    body: (
      <>
        <p>
          Questions about these Terms? Reach our legal team at{" "}
          <Link
            href="mailto:legal@cuvr.ae"
            className="font-semibold text-violet-600 hover:underline"
          >
            legal@cuvr.ae
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-900">
        <LegalHero
          eyebrow="Service Agreement"
          title="Terms of Service"
          description="The ground rules for using CUVR — what you can expect from us, what we expect from you, and how we keep things safe."
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
                  delay={`${0.05 + i * 0.04}s`}
                >
                  <article id={s.id} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {s.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
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
            <ScrollText className="h-3.5 w-3.5" />
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
