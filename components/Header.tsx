"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../public/cuvr-logo.png";
import { useLanguage } from "@/lib/language-context";

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
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, tr } = useLanguage();

  const navItems = [
    { href: "/how-it-works", label: tr.nav.howItWorks },
    { href: "/services", label: tr.nav.services },
    { href: "/#testimonials", label: tr.nav.testimonials },
    { href: "/booking", label: tr.nav.booking },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  const closeMenu = () => setIsOpen(false);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#110d29] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
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
            {tr.nav.login}
          </Link>

          {/* Language switcher */}
          <button
            onClick={toggleLang}
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 transition hover:border-white/40 hover:text-white"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>

          <Link
            href="/booking"
            className="hidden btn-gradient rounded-full px-5 py-2 text-sm font-semibold md:inline-block"
          >
            {tr.nav.getStarted}
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#110d29]">
          <nav className="flex flex-col gap-4 px-5 py-4 sm:px-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={closeMenu}
              className="text-sm font-medium text-slate-300 hover:text-white sm:hidden"
            >
              {tr.nav.login}
            </Link>

            {/* Mobile Get Started button */}
            <Link
              href="/booking"
              onClick={closeMenu}
              className="md:hidden btn-gradient rounded-full px-5 py-2 text-sm font-semibold text-center"
            >
              {tr.nav.getStarted}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
