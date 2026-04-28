import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import loginPerson from "@/public/login-person.png";

export const metadata: Metadata = {
  title: "Patient Sign In",
  description:
    "Sign in to your CUVR patient portal to manage appointments, review session insights, and continue your spatial recovery program.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "CUVR Patient Sign In",
    description: "Access your CUVR patient portal.",
    url: "/login",
    type: "website",
  },
};

export default function LoginPage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#05060f] text-white">
      {/* Ambient violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 0% 0%, rgba(124,58,237,0.28), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />

      {/* Header */}
      <Header />

      {/* Body */}
      <main className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-16 md:py-16">
          {/* Left: visual + copy */}
          <div className="relative flex min-h-[420px] flex-col justify-end md:min-h-[560px]">
            <AnimateOnScroll animation="animate-fade-in" className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src={loginPerson}
                  alt="Person wearing CUVR VR headset"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain object-left-bottom md:object-left"
                />
                {/* fade the photo into the dark background */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 50%, rgba(5,6,15,0.85) 100%), linear-gradient(180deg, transparent 60%, rgba(5,6,15,0.6) 100%)",
                  }}
                />
              </div>
            </AnimateOnScroll>

            <div className="relative max-w-md pb-2">
              <AnimateOnScroll animation="animate-slide-in-up" delay="0.15s">
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                  Spatial
                  <br />
                  <span className="text-gradient-cyan">Recovery</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="animate-slide-in-up" delay="0.3s">
                <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-300">
                  Experience the next generation of physical therapy.
                  Immersive, guided, and data-driven movement designed for
                  your peak performance.
                </p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Right: login card */}
          <AnimateOnScroll
            animation="animate-slide-in-right"
            delay="0.2s"
            className="w-full"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(500px 280px at 100% 0%, rgba(139,92,246,0.18), transparent 60%)",
                }}
              />

              <div className="relative">
                <h2 className="text-center text-3xl font-bold text-white">
                  Welcome to CUVR
                </h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                  Sign in to continue your journey.
                </p>

                <form className="mt-8 space-y-5" action="/booking">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-200"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      autoComplete="email"
                      className="input-glass mt-2 w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-slate-200"
                      >
                        Password
                      </label>
                      <Link
                        href="#"
                        className="text-xs font-semibold text-violet-300 transition hover:text-violet-200"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="input-glass mt-2 w-full rounded-xl px-4 py-3 text-sm tracking-widest"
                    />
                  </div>

                  {/* Login button */}
                  <button
                    type="submit"
                    className="btn-gradient mt-2 w-full rounded-full px-6 py-3.5 text-sm font-semibold"
                  >
                    Login
                  </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Or continue with
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <GoogleMark />
                    Google
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <AppleMark />
                    Apple
                  </button>
                </div>

                {/* Sign Up link */}
                <p className="mt-7 text-center text-sm text-slate-300">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="#"
                    className="font-semibold text-violet-400 transition hover:text-violet-300"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:flex-row sm:items-center sm:px-8">
          <p>© {year} CUVR Spatial Systems. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition hover:text-slate-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-slate-200">
              Terms of Service
            </Link>
            <Link href="/support" className="transition hover:text-slate-200">
              System Status
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

/* ---- inline brand marks ---- */
function GoogleMark() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <path
          fill="#4285F4"
          d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.48-1.12 2.73-2.39 3.57v2.97h3.86c2.26-2.08 3.58-5.15 3.58-8.78z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.27 14.32c-.25-.72-.39-1.49-.39-2.32s.14-1.6.39-2.32V6.59H1.29A11.99 11.99 0 0 0 0 12c0 1.94.46 3.78 1.29 5.41l3.98-3.09z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.59l3.98 3.09C6.22 6.85 8.87 4.75 12 4.75z"
        />
      </svg>
    </span>
  );
}

function AppleMark() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-black">
      <svg viewBox="0 0 384 512" className="h-3 w-3" aria-hidden>
        <path
          fill="currentColor"
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.6 84.8c30.3-36 27.5-68.8 26.6-80.6-26.7 1.5-57.6 18.1-75.2 38.6-19.4 22-30.8 49.2-28.3 78 28.9 2.2 55.3-12.7 76.9-36z"
        />
      </svg>
    </span>
  );
}
