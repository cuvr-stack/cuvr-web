import Link from "next/link";
import Image from "next/image";
import cuvr_logo from "@/public/cuvr_logo.png"
type Column = {
  title: string;
  links: { label: string; href: string }[];
};

const COLUMNS: Column[] = [
  {
    title: "Patient Care",
    links: [
      { label: "Booking", href: "/booking" },
      { label: "Our Services", href: "/services" },
      { label: "Find a Clinic", href: "#" },
      { label: "Insurance Partners", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Clinical Research", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog & News", href: "#" },
      { label: "Support Center", href: "#" },
    ],
  },
  {
    title: "Legal & Company",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 w-[15%]">
            {/* <svg width="28" height="18" viewBox="0 0 36 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="#7c3aed" strokeWidth="2.5" />
              <circle cx="25" cy="11" r="9" stroke="#7c3aed" strokeWidth="2.5" />
            </svg> */}
            <Image src={cuvr_logo} alt="cuvr logo" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500">
            Next-generation physiotherapy using immersive VR to accelerate
            clinical recovery and improve patient outcomes globally.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-slate-400 sm:px-8">
          <p>
            © {new Date().getFullYear()} CUVR VR Physiotherapy. Clinical
            Recovery Reimagined.
          </p>
          <div className="flex gap-4">
            <span>EN</span>
            <span>F1</span>
            <span>F2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
