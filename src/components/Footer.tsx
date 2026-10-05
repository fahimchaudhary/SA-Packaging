import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "@/lib/router";
import { company } from "@/data/company";
import { categories } from "@/data/products";
import { Logo } from "./Logo";


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 text-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr] lg:gap-12">
          <div>
            <Logo variant="dark" />
            <p className="mt-3 font-serif italic text-[13px] text-brand-300 font-medium">
              “Quality Packaging for a Better Tomorrow”
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/65 font-lora">
              Manufacturer of heat-seal aluminium foil lids for dairy, beverage,
              PET jar, HIPS dessert and blister packs. Supply is industrial and
              bulk only — quantities and rates are confirmed on quotation.
            </p>
            <p className="mt-4 font-geist text-[12px] text-white/45 tracking-wide">
              HSN {company.hsn} · GSTIN {company.gstin}
            </p>
          </div>

          <nav aria-label="Footer pages" className="font-geist">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Pages
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Dies & Gallery (77+)", to: "/gallery" },
                { label: "Customization", to: "/customization" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer product categories" className="font-geist">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Products
            </h2>
            <ul className="mt-5 space-y-3">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/products"
                    className="text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="font-geist">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Works &amp; enquiries
            </h2>
            <ul className="mt-5 space-y-4 text-[13.5px] text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <address className="not-italic leading-relaxed">
                  {company.addressLines.slice(1).map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:+${company.phoneE164}`}
                    className="transition-colors hover:text-white"
                  >
                    {company.phoneDisplay} <span className="text-[11px] text-brand-300/80">(WhatsApp)</span>
                  </a>
                  <a
                    href={`tel:+${company.phoneSecondaryE164}`}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {company.phoneSecondaryDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span className="leading-relaxed">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between font-geist">
          <p className="font-geist">
            © {new Date().getFullYear()} {company.name}. Proprietorship · Director:{" "}
            {company.director}. All rights reserved.
          </p>
          <p className="font-serif italic text-brand-300/80 text-[12.5px]">
            Quality Packaging for a Better Tomorrow
          </p>
          <p className="font-geist">Bulk and industrial supply only. No retail or single-piece sale.</p>
        </div>
      </div>
    </footer>
  );
}
