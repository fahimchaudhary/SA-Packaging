import { useEffect, useState } from "react";
import { MapPin, Phone, Menu, X, BadgeCheck, Factory, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { Link, useRoute } from "@/lib/router";
import { company, waLink, defaultWaMessage } from "@/data/company";
import { Logo } from "./Logo";

const nav: { label: string; to: string; badge?: string }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Products", to: "/products" },
  { label: "Gallery", to: "/gallery", badge: "77+ Dies" },
  { label: "Customization", to: "/customization" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const route = useRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [route.path, route.param]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      {/* Thin trust bar */}
      <div className="hidden bg-ink-900 text-white md:block font-geist">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex h-9 items-center justify-between text-[11.5px]">
          <ul className="flex items-center gap-5 text-white/70">
            <li className="hidden xl:flex items-center gap-1.5 font-medium text-brand-300">
              <span className="italic font-serif">“Quality Packaging for a Better Tomorrow”</span>
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-300" />
              Sakinaka, Mumbai
            </li>
            <li className="flex items-center gap-1.5">
              <Factory className="h-3.5 w-3.5 text-brand-300" />
              Manufacturer · {company.capacity}
            </li>
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-brand-300" />
              GSTIN {company.gstin}
            </li>
          </ul>
          <a
            href={`tel:+${company.phoneE164}`}
            className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-brand-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {company.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <header
        className={cn(
          "border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 font-geist",
          scrolled ? "border-ink-100 shadow-[0_6px_24px_-18px_rgba(20,20,24,0.6)]" : "border-ink-100",
        )}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex h-[66px] items-center justify-between gap-4 xl:gap-8">
          {/* Corner Left: Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" aria-label="S.A Packaging — home">
              <Logo imgId="header-brand-logo-img" />
            </Link>
          </div>

          {/* Center: Navigation Equally Spaced (Desktop) */}
          <nav aria-label="Primary" className="hidden lg:flex items-center justify-center flex-1 font-geist">
            <ul className="flex items-center justify-center gap-2 lg:gap-3 xl:gap-6 2xl:gap-8">
              {nav.map((item) => {
                const isActive = route.path === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "relative flex items-center justify-center gap-1.5 rounded-lg px-3.5 xl:px-4 py-2 text-[13.5px] xl:text-[14px] font-semibold transition-all duration-200 text-center whitespace-nowrap min-w-[72px] xl:min-w-[86px]",
                        isActive
                          ? "bg-brand-50/90 text-brand-700 shadow-xs"
                          : "text-ink-600 hover:bg-ink-50/80 hover:text-ink-900",
                      )}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-brand-500/10 text-brand-700 px-1.5 py-0.5 text-[9.5px] xl:text-[10px] font-bold tracking-tight">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Corner Right: Action Buttons */}
          <div className="hidden items-center gap-2.5 lg:flex font-geist shrink-0">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center rounded-lg border border-ink-200/80 bg-white px-4 py-2 text-[13px] font-semibold text-ink-900 shadow-xs transition-all hover:border-brand-400 hover:text-brand-600 hover:shadow-sm"
            >
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="tap inline-flex items-center rounded-lg bg-brand-500 px-4 py-2 text-[13px] font-semibold text-white shadow-xs transition-all duration-200 hover:bg-brand-600 hover:shadow-[0_8px_20px_-8px_rgba(11,99,206,0.9)]"
            >
              Request a quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Open navigation menu"
            className="tap grid h-10 w-10 place-items-center rounded-lg border border-ink-200 text-ink-900 transition-colors hover:bg-ink-50 lg:hidden shrink-0 cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ----------------- Mobile Drawer Backdrop Overlay ----------------- */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink-900/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ----------------- Mobile Left Slide-In Drawer ----------------- */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-[70] flex w-[84vw] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden font-geist",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Drawer Header with Circular Logo Emblem & Close Button */}
        <div className="relative flex flex-col items-center pt-8 pb-6 px-6 text-center border-b border-ink-100">
          {/* Circular Close Button at Top Right */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="tap absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-slate-100/90 border border-ink-200/80 text-ink-600 hover:text-ink-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>

          {/* Centered Circular Logo Emblem Badge */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex flex-col items-center group cursor-pointer"
            aria-label="S.A Packaging Home"
          >
            <div className="h-20 w-20 rounded-full border border-ink-200/90 bg-white shadow-xs p-3.5 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/logo-transparent.png"
                alt="S.A Packaging Monogram"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-3.5 font-display text-[15px] font-extrabold tracking-wider text-ink-900 uppercase">
              S.A Packaging
            </p>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-ink-400 uppercase mt-0.5">
              Aluminium Foil Lids · Mumbai
            </p>
            <p className="mt-1 font-serif italic text-[11px] text-brand-600 font-medium">
              “Quality Packaging for a Better Tomorrow”
            </p>
          </Link>
        </div>

        {/* Scrollable Navigation List (Chevron on left) */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-ink-100/80">
            {nav.map((item) => {
              const isActive = route.path === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "tap flex items-center gap-3 px-6 py-4 text-[14.5px] transition-colors",
                      isActive
                        ? "bg-brand-50/90 text-brand-700 font-bold"
                        : "text-ink-800 hover:bg-slate-50 font-semibold",
                    )}
                  >
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors stroke-[2.2]",
                        isActive ? "text-brand-600" : "text-ink-400",
                      )}
                    />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="rounded-full bg-brand-500/10 text-brand-700 px-2 py-0.5 text-[10px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-ink-100 bg-slate-50/70 space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:+${company.phoneE164}`}
              className="tap inline-flex items-center justify-center gap-1.5 rounded-xl border border-ink-200 bg-white py-2.5 text-[13px] font-semibold text-ink-900 shadow-2xs hover:bg-slate-50"
            >
              <Phone className="h-3.5 w-3.5 text-brand-600" />
              Call Works
            </a>
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-[13px] font-semibold text-white shadow-2xs hover:bg-[#20ba59]"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-center text-[10.5px] text-ink-400 font-medium tracking-wide">
            Sakinaka, Mumbai · Mon–Sat 9:30am–6:30pm
          </p>
        </div>
      </aside>
    </div>
  );
}
