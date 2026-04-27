import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import cuvr_logo from "@/public/cuvr-logo.png";

const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Support", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#05060f] text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image src={cuvr_logo} alt="CUVR logo" width={48} height={28} />
          <span className="text-xs uppercase tracking-[0.32em] text-slate-500">
            © {year} CUVR Spatial Therapy. Beyond Physical.
          </span>
        </div>

        <nav className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em]">
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-slate-400 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-slate-400">
          <Globe className="h-4 w-4" />
          <span className="text-xs uppercase tracking-[0.22em]">EN</span>
        </div>
      </div>
    </footer>
  );
}
