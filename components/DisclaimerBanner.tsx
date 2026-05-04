"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const STORAGE_KEY = "cuvr-disclaimer-accepted";

export default function DisclaimerBanner() {
  const { tr } = useLanguage();
  const d = tr.disclaimer;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if the user has not previously accepted
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={d.bannerTitle}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-400/30 bg-[#0d0b1f]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-start sm:gap-6 sm:px-8">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/10">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
          </span>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            {d.bannerTitle}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
            {d.bannerBody}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-shrink-0 items-center gap-3">
          <Link
            href="/privacy"
            className="text-xs font-semibold text-slate-400 underline underline-offset-2 transition hover:text-white"
          >
            {d.bannerLearnMore}
          </Link>
          <button
            onClick={accept}
            className="btn-gradient rounded-full px-5 py-2 text-xs font-semibold whitespace-nowrap"
          >
            {d.bannerAccept}
          </button>
          <button
            onClick={accept}
            aria-label="Dismiss"
            className="text-slate-500 transition hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
