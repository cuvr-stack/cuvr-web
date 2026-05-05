"use client";

import { LanguageProvider } from "@/lib/language-context";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <DisclaimerBanner />
    </LanguageProvider>
  );
}
