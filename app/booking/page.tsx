import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Body />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-16 sm:px-8 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            The Future of
            <br />
            <span className="text-gradient-brand">Recovery</span> is Here.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
            Bridge the gap between sterile clinics and immersive innovation.
            Secure your consultation for personalized VR physiotherapy today.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/80 to-slate-900 shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 140"
              className="w-48 text-white/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect
                x="40"
                y="55"
                width="120"
                height="55"
                rx="15"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <circle cx="75" cy="85" r="14" />
              <circle cx="125" cy="85" r="14" />
              <ellipse
                cx="100"
                cy="40"
                rx="18"
                ry="22"
                fill="currentColor"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Body() {
  return (
    <section className="bg-white pb-24 pt-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.3fr_1fr]">
        {/* Form card */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-100 md:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-100/80"
          />
          <h2 className="relative text-2xl font-bold text-brand-blue">
            Request a Consultation
          </h2>
          <div className="relative mt-8">
            <BookingForm />
          </div>
        </div>

        {/* Contact column */}
        <div className="space-y-5">
          <ContactCard
            icon={<Mail className="h-5 w-5 text-brand-purple" />}
            title="Email Us"
            primary="care@cuvr.ae"
            secondary="Available 24/7 for urgent clinical inquiries."
          />
          <ContactCard
            icon={<Phone className="h-5 w-5 text-brand-blue" />}
            title="Call Us"
            primary="+971 502592439"
            secondary="Mon–Fri: 8:00 AM – 6:00 PM EST"
          />
          {/* <ContactCard
            icon={<MapPin className="h-5 w-5 text-brand-purple" />}
            title="Visit Our Hub"
            primary={
              <>
                450 Innovation Way, Suite 200
                <br />
                Health-Tech District
                <br />
                San Francisco, CA 94103
              </>
            }
            tall
          /> */}
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  primary,
  secondary,
  tall,
}: {
  icon: React.ReactNode;
  title: string;
  primary: React.ReactNode;
  secondary?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100 ${
        tall ? "min-h-[260px]" : ""
      }`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="text-base font-semibold text-slate-900">{primary}</div>
      {secondary && (
        <p className="mt-2 text-sm text-slate-500">{secondary}</p>
      )}
      {tall && (
        <div className="mt-4 h-32 w-full overflow-hidden rounded-xl bg-slate-200">
          {/* Stylized map */}
          <svg
            viewBox="0 0 300 120"
            className="h-full w-full text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            aria-hidden="true"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 10}
                x2="300"
                y2={i * 10}
              />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="120"
              />
            ))}
            <circle cx="150" cy="60" r="5" fill="#7c3aed" />
          </svg>
        </div>
      )}
    </div>
  );
}
