import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, Ruler, Layers, ShieldCheck } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";
import { company, waLink } from "@/data/company";

interface GalleryModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function GalleryModal({ item, items, onClose, onSelect }: GalleryModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((x) => x.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const waMessage = `Hi S.A Packaging, I am interested in Die Sample ${item.id} (${item.title}, ${item.diameter}, ${item.substrate}). Please share pricing and minimum order quantity.`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/85 p-3 sm:p-6 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col lg:flex-row w-full max-w-4xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-3xl border border-white/15 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/60 text-white backdrop-blur-md transition-colors hover:bg-ink-900 hover:scale-105 active:scale-95"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left: Image Canvas */}
        <div className="relative flex min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] flex-1 items-center justify-center bg-radial from-slate-100 to-slate-200/90 p-8 sm:p-12 overflow-hidden select-none">
          {/* Subtle blueprint grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Navigation Chevrons */}
          <button
            onClick={handlePrev}
            aria-label="Previous sample"
            className="absolute left-3 sm:left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-md backdrop-blur-xs transition-all hover:bg-white hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next sample"
            className="absolute right-3 sm:right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-md backdrop-blur-xs transition-all hover:bg-white hover:scale-110 active:scale-95"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Transparent Product Foil Lid */}
          <div className="relative z-10 flex items-center justify-center max-w-[340px] sm:max-w-[420px] transition-transform duration-300">
            <img
              src={item.fullUrl}
              alt={item.title}
              className="max-h-[320px] sm:max-h-[400px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(15,23,42,0.25)]"
              loading="eager"
            />
          </div>

          <div className="absolute bottom-3 left-4 font-geist text-[11px] font-semibold tracking-wide text-ink-500">
            Die Sample {currentIndex + 1} of {items.length}
          </div>
        </div>

        {/* Right: Technical Details & B2B Enquiry */}
        <div className="flex w-full lg:w-[360px] flex-col justify-between border-t lg:border-t-0 lg:border-l border-ink-100 bg-white p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-brand-50 border border-brand-200 px-2.5 py-0.5 font-geist text-[11px] font-bold text-brand-700 uppercase tracking-wide">
                {item.categoryLabel}
              </span>
              <span className="font-geist text-[12px] font-semibold text-ink-400">
                {item.id}
              </span>
            </div>

            <h2 className="mt-3 font-display text-[20px] sm:text-[22px] font-extrabold text-ink-900 leading-tight">
              {item.title}
            </h2>

            <p className="mt-2 font-lora text-[13.5px] leading-relaxed text-ink-600">
              Custom heat-seal aluminium foil lid manufactured to specification. Tested for burst pressure, hermetic barrier, and clean peel.
            </p>

            {/* Spec Matrix */}
            <div className="mt-5 space-y-2.5 rounded-2xl border border-ink-100 bg-slate-50/80 p-4 font-geist text-[13px]">
              <div className="flex items-center justify-between text-ink-700">
                <span className="flex items-center gap-2 text-ink-500">
                  <Ruler className="h-4 w-4 text-brand-500" />
                  Diameter / Size:
                </span>
                <span className="font-bold text-ink-900">{item.diameter}</span>
              </div>
              <div className="flex items-center justify-between text-ink-700 border-t border-ink-100/60 pt-2">
                <span className="flex items-center gap-2 text-ink-500">
                  <Layers className="h-4 w-4 text-brand-500" />
                  Sealing Substrate:
                </span>
                <span className="font-bold text-ink-900">{item.substrate}</span>
              </div>
              <div className="flex items-center justify-between text-ink-700 border-t border-ink-100/60 pt-2">
                <span className="flex items-center gap-2 text-ink-500">
                  <ShieldCheck className="h-4 w-4 text-brand-500" />
                  Foil Thickness:
                </span>
                <span className="font-bold text-ink-900">{item.thickness}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-ink-100">
            <a
              href={waLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3.5 font-geist text-[14px] font-bold text-white shadow-md transition-all hover:bg-[#20ba59] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              Enquire Sample on WhatsApp
            </a>
            <p className="mt-2 text-center font-geist text-[11px] text-ink-400">
              Bulk production from Sakinaka, Mumbai · Min. Orders Apply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
