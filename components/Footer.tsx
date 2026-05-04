"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Linkedin,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";
import cuvr_logo from "@/public/cuvr-logo.png";
import { useLanguage } from "@/lib/language-context";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cuvr",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cuvr.health",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/cuvrhealth",
    icon: <Twitter className="h-4 w-4" />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang, setLang, tr } = useLanguage();
  const f = tr.footer;
  const d = tr.disclaimer;

  const exploreLinks = [
    { label: f.home, href: "/" },
    { label: f.services, href: "/services" },
    { label: tr.nav.howItWorks, href: "/how-it-works" },
    { label: f.bookSession, href: "/booking" },
    { label: f.support, href: "/support" },
  ];

  const serviceLinks = [
    { label: f.neuroKinetic, href: "/services#channels" },
    { label: f.postTrauma, href: "/services#channels" },
    { label: f.hyperPerformance, href: "/services#channels" },
    { label: f.spatialProtocol, href: "/how-it-works" },
  ];

  const resourceLinks = [
    { label: f.helpCenter, href: "/support" },
    { label: f.contact, href: "/support#contact" },
    { label: f.privacy, href: "/privacy" },
    { label: f.terms, href: "/terms" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#05060f] text-slate-400">
      {/* ---------- Top: 4-column sitemap ---------- */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src={cuvr_logo} alt="CUVR logo" width={48} height={28} />
              <span className="text-sm font-bold tracking-[0.18em] text-white">
                CUVR
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              {f.tagline}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              {/* {f.dhaLicensed} */}
            </div>

            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Site" className="text-sm">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              {f.explore}
            </h2>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="text-sm">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              {f.services}
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / NAP */}
          <div className="text-sm">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              {f.visitContact}
            </h2>
            <address className="mt-5 space-y-3 not-italic">
              <p className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-300" />
                <span style={{ whiteSpace: "pre-line" }}>{f.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-violet-300" />
                <a
                  href="tel:+971502592439"
                  className="text-slate-400 transition hover:text-white"
                >
                  +971 50 259 2439
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-violet-300" />
                <a
                  href="mailto:support@cuvr.ae"
                  className="text-slate-400 transition hover:text-white"
                >
                  support@cuvr.ae
                </a>
              </p>
              <p className="flex items-start gap-3 text-slate-400">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-300" />
                <span style={{ whiteSpace: "pre-line" }}>{f.hours}</span>
              </p>
            </address>
          </div>
        </div>

        {/* Resources row (secondary nav) */}
        <nav
          aria-label="Resources"
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/5 pt-8 text-xs"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            {f.resources}
          </span>
          {resourceLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-slate-400 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ---------- Regulatory & Compliance strip ---------- */}
      <div className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 space-y-6">
        {/* Badge row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            {d.regulatoryTitle}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
            <ShieldCheck className="h-3 w-3" />
            {d.licenseLabel}: {d.licenseNumber}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <BadgeCheck className="h-3 w-3" />
            {d.nabidh}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
            <BadgeCheck className="h-3 w-3" />
            {d.pdpl}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
            <BadgeCheck className="h-3 w-3" />
            {d.hipaa}
          </span>
          <span className="ms-auto inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-[10px] font-semibold text-red-300">
            <PhoneCall className="h-3 w-3" />
            {d.emergencyLabel}:&nbsp;
            <a href="tel:998" className="font-bold tracking-widest hover:text-white transition">
              {d.emergencyNumber}
            </a>
          </span>
        </div>

        {/* Medical disclaimer */}
        <p className="text-[11px] leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-400">
            {d.licenseLabel} {d.licenseNumber}.
          </span>{" "}
          {d.medicalDisclaimer}
        </p>

        {/* Data / privacy notice */}
        <p className="text-[11px] leading-relaxed text-slate-600">
          {d.dataNotice}
        </p>
      </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 text-xs sm:px-8 md:flex-row md:items-center">
          <p className="uppercase tracking-[0.22em] text-slate-500">
            {f.copyright.replace("{year}", String(year))}
          </p>

          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-2 text-slate-400 transition hover:text-white"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase tracking-[0.22em]">
              {lang === "en" ? "عربي" : "EN"}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
