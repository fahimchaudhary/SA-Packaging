import { useState } from "react";
import { ArrowRight, Images } from "lucide-react";
import { Link } from "@/lib/router";
import { galleryItems, GalleryItem } from "@/data/galleryData";
import GalleryModal from "./GalleryModal";
import { Reveal } from "./ui";

export default function ProductsGallerySlider() {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // We'll use a single continuous marquee for the products page to keep it sleek.
  // We'll pick a nice subset of items for the slider.
  const marqueeItems = galleryItems.slice(5, 25);

  return (
    <Reveal delay={100} className="mt-14">
      <div className="relative overflow-hidden rounded-2xl border border-brand-200/50 bg-[#0a121d] shadow-2xl font-geist isolate">
        
        {/* Deep background glows */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

        {/* Content Overlay - Glassmorphism card floating in center on lg screens, top on mobile */}
        <div className="relative z-30 flex flex-col items-center text-center p-8 sm:p-10 pointer-events-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold text-white uppercase tracking-widest backdrop-blur-md shadow-lg">
            <Images className="h-3.5 w-3.5" />
            <span>77+ Live Packaging Dies</span>
          </div>
          
          <h3 className="mt-5 font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-white drop-shadow-md">
            Inspect Our Factory Work
          </h3>
          
          <p className="mt-3 max-w-xl font-lora text-[15px] text-slate-300 leading-relaxed drop-shadow-md">
            Browse high-resolution samples of physical foil lids, embossed textures, and custom prints manufactured at our Sakinaka facility.
          </p>

          <div className="mt-7 pointer-events-auto">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[14px] font-bold text-ink-900 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:bg-brand-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95"
            >
              Open Interactive Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Infinite Image Slider running through the background */}
        <div className="relative w-full overflow-hidden pb-8 pt-4 select-none">
          {/* Edge fade gradients for the slider */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-[#0a121d] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-[#0a121d] to-transparent" />

          <div className="flex w-max gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div
                key={`slider-${item.id}-${idx}`}
                onClick={() => setActiveModalItem(item)}
                className="group relative flex h-28 w-28 sm:h-36 sm:w-36 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
              >
                <img
                  src={item.thumbUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        item={activeModalItem}
        items={galleryItems}
        onClose={() => setActiveModalItem(null)}
        onSelect={(newItem) => setActiveModalItem(newItem)}
      />
    </Reveal>
  );
}
