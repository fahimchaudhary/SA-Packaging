import { useEffect, useState } from "react";
import { MapPin, Phone, Menu, X, BadgeCheck, Factory } from "lucide-react";
import { cn } from "@/utils/cn";
import { Link, useRoute } from "@/lib/router";
import { company, waLink, defaultWaMessage } from "@/data/company";
import { Logo } from "./Logo";
import { Container } from "./ui";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
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

  return (
    <div className="sticky top-0 z-50">
      {/* Thin trust bar */}
      <div className="hidden bg-ink-900 text-white md:block font-geist">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex h-9 items-center justify-between text-[11.5px]">
          <ul className="flex items-center gap-5 text-white/70">
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

          {/* Center: Navigation Equally Spaced */}
          <nav aria-label="Primary" className="hidden lg:flex items-center justify-center flex-1 font-geist">
            <ul className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-7 2xl:gap-9">
              {nav.map((item) => {
                const isActive = route.path === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "relative block rounded-lg px-3.5 xl:px-4 py-2 text-[13.5px] xl:text-[14px] font-semibold transition-all duration-200 text-center whitespace-nowrap min-w-[72px] xl:min-w-[86px]",
                        isActive
                          ? "bg-brand-50/90 text-brand-700 shadow-xs"
                          : "text-ink-600 hover:bg-ink-50/80 hover:text-ink-900",
                      )}
                    >
                      {item.label}
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="tap grid h-10 w-10 place-items-center rounded-lg border border-ink-200 text-ink-900 transition-colors hover:bg-ink-50 lg:hidden shrink-0"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-ink-100 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden font-geist",
          open ? "max-h-[36rem] opacity-100 shadow-lg" : "max-h-0 opacity-0",
        )}
      >
        <Container className="py-4 font-geist">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => {
                const isActive = route.path === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "tap flex items-center justify-between rounded-lg px-3.5 py-3 text-[14.5px] font-semibold transition-colors",
                        isActive
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-700 hover:bg-ink-50 hover:text-ink-900",
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-ink-400">→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-ink-100 pt-4 pb-2">
            <a
              href={`tel:+${company.phoneE164}`}
              className="tap inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white text-[13.5px] font-semibold text-ink-900 shadow-xs"
            >
              <Phone className="h-4 w-4 text-brand-600" /> Call works
            </a>
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="tap inline-flex items-center justify-center rounded-lg bg-[#25D366] text-[13.5px] font-semibold text-white shadow-xs hover:bg-[#20ba59]"
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
