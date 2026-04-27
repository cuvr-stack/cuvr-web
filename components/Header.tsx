"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/cuvr_logo.png"
const NAV_ITEMS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/booking", label: "Booking" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="CUVR home">
     {/*  <svg
        width="36"
        height="22"
        viewBox="0 0 36 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="9"
          stroke="url(#lg1)"
          strokeWidth="2.5"
        />
        <circle
          cx="25"
          cy="11"
          r="9"
          stroke="url(#lg1)"
          strokeWidth="2.5"
        />
        <defs>
          <linearGradient
            id="lg1"
            x1="0"
            y1="0"
            x2="36"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg> */}
      <Image src={logo} alt="CUVR logo" width={66} height={40} />
      {/* <span className="text-sm font-extrabold tracking-widest text-slate-900">
        CUVR
      </span> */}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brand-purple"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded bg-brand-purple" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline"
          >
            Login
          </Link>
          <Link
            href="/booking"
            className="rounded-full bg-brand-purple px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
