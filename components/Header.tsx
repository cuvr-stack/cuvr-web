"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/cuvr-logo.png";

const NAV_ITEMS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/booking", label: "Booking" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="CUVR home">
      <Image src={logo} alt="CUVR logo" width={66} height={40} />
      <span className="brand-text-color">CUVR</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#110d29] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] rounded underline-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:inline"
          >
            Login
          </Link>
          <Link
            href="/booking"
            className="btn-gradient rounded-full px-5 py-2 text-sm font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
