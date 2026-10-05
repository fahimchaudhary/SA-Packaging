import { useState } from "react";
import { Container, Reveal, ButtonLink } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/galleryData";
import GalleryModal from "./GalleryModal";

export default function HomeGalleryShowcase() {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Marquee row 1 & row 2
  const marqueeRow1 = galleryItems.slice(0, 16);
  const marqueeRow2 = galleryItems.slice(16, 32);

  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-[#f8fafc] py-16 sm:py-24">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e115_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e115_1px,transparent_1px)] bg-[size:32px_32px]" />

      <Container className="relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50/80 px-3 py-1 font-geist text-[11px] font-bold text-brand-700 tracking-wide uppercase">
                <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                Live Tooling Inventory · 5 mm to 400 mm Range · 77+ Dies
              </div>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-3 font-display text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-[-0.03em] text-ink-900 leading-[1.12]">
                Every cup diameter, rim profile & print finish.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-3 font-lora text-[15px] sm:text-[16px] leading-relaxed text-ink-600">
                We manufacture any diameter from 5 mm up to 400 mm—covering everything from 53 mm packaged water lids and 95 mm lassi cups to large bulk container foils and custom multi-colour brand packaging. Over 77 ready dies manufactured at our Sakinaka facility.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="shrink-0 w-full md:w-auto">
            <div className="flex flex-col items-start md:items-end gap-3.5">
              {/* Brand Slogan Banner directly matching factory catalog / standee */}
              <div className="relative inline-flex flex-col items-start md:items-end -rotate-1 sm:-rotate-2 transition-transform duration-300 hover:rotate-0 select-none">
                <span className="font-serif italic font-bold text-[19px] sm:text-[22px] text-[#0f3060] tracking-tight leading-tight">
                  Quality Packaging
                </span>
                <span className="relative font-serif italic font-bold text-[16px] sm:text-[18.5px] text-[#0f3060] tracking-tight leading-tight pb-1.5">
                  for a Better Tomorrow
                  {/* Dynamic Royal Blue Brush Underline matching factory banner */}
                  <svg
                    className="absolute -bottom-0.5 left-0 w-full h-[6px] text-[#0066ee]"
                    viewBox="0 0 160 6"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 3.8 C 45 1.5, 110 2, 159 3.2 C 120 5.2, 50 5.5, 2 3.8 Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>

              <ButtonLink
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 font-geist text-[14px] font-semibold text-white shadow-sm hover:bg-ink-800 active:scale-98 transition-all w-full sm:w-auto justify-center"
              >
                Explore Full Catalog ({galleryItems.length})
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Dual Infinite Marquee Strips */}
      <div className="relative mt-12 w-full space-y-4 overflow-hidden select-none py-2">
        {/* Left & Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-[#f8fafc] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-[#f8fafc] to-transparent" />

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeRow1, ...marqueeRow1].map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              onClick={() => setActiveModalItem(item)}
              className="group relative flex h-32 w-32 sm:h-36 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <img
                src={item.thumbUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain drop-shadow-[0_6px_12px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute bottom-1.5 left-2 font-geist text-[9.5px] font-bold text-ink-500">
                {item.diameter}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...marqueeRow2, ...marqueeRow2].map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              onClick={() => setActiveModalItem(item)}
              className="group relative flex h-32 w-32 sm:h-36 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <img
                src={item.thumbUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain drop-shadow-[0_6px_12px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute bottom-1.5 left-2 font-geist text-[9.5px] font-bold text-ink-500">
                {item.diameter}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        item={activeModalItem}
        items={galleryItems}
        onClose={() => setActiveModalItem(null)}
        onSelect={(newItem) => setActiveModalItem(newItem)}
      />
    </section>
  );
}
