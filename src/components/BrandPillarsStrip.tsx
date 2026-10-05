import { ShieldCheck, Settings2, Truck } from "lucide-react";
import { Container } from "./ui";
import { cn } from "@/utils/cn";

interface BrandPillarsStripProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Authentic 3-pillar trust strip directly sampled from S.A Packaging's
 * factory signage and banner:
 * [High Quality Material] | [Custom Size & Design] | [On-Time Delivery]
 */
export default function BrandPillarsStrip({
  className,
  variant = "dark",
}: BrandPillarsStripProps) {
  const isDark = variant === "dark";

  return (
    <section
      aria-label="Core Manufacturing Guarantees"
      className={cn(
        "border-y transition-colors font-geist select-none",
        isDark
          ? "border-white/10 bg-[#091830] text-white py-4.5 sm:py-5 shadow-inner"
          : "border-ink-100 bg-[#f8fafc] text-ink-900 py-4.5 sm:py-5",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x",
            isDark ? "divide-white/15" : "divide-ink-200/80",
          )}
        >
          {/* 1. High Quality Material */}
          <div className="flex items-center gap-3.5 sm:px-4 lg:px-6 pt-3 sm:pt-0 first:pt-0">
            <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border-2 border-[#bbf438] bg-[#bbf438]/15 text-[#bbf438] shrink-0 shadow-[0_0_14px_rgba(187,244,56,0.22)]">
              <ShieldCheck className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2.2]" />
            </div>
            <div className="leading-tight">
              <span
                className={cn(
                  "block font-bold text-[14.5px] sm:text-[15.5px] tracking-tight",
                  isDark ? "text-white" : "text-ink-900",
                )}
              >
                High Quality Material
              </span>
              <span
                className={cn(
                  "block text-[11.5px] sm:text-[12px] font-medium mt-0.5",
                  isDark ? "text-white/60" : "text-ink-500",
                )}
              >
                Food-grade foil &amp; matched seal lacquer
              </span>
            </div>
          </div>

          {/* 2. Custom Size & Design */}
          <div className="flex items-center gap-3.5 sm:px-4 lg:px-6 pt-3 sm:pt-0">
            <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border-2 border-[#bbf438] bg-[#bbf438]/15 text-[#bbf438] shrink-0 shadow-[0_0_14px_rgba(187,244,56,0.22)]">
              <Settings2 className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2.2]" />
            </div>
            <div className="leading-tight">
              <span
                className={cn(
                  "block font-bold text-[14.5px] sm:text-[15.5px] tracking-tight",
                  isDark ? "text-white" : "text-ink-900",
                )}
              >
                Custom Size &amp; Design
              </span>
              <span
                className={cn(
                  "block text-[11.5px] sm:text-[12px] font-medium mt-0.5",
                  isDark ? "text-white/60" : "text-ink-500",
                )}
              >
                5 mm – 400 mm dies · Multi-colour print
              </span>
            </div>
          </div>

          {/* 3. On-Time Delivery */}
          <div className="flex items-center gap-3.5 sm:px-4 lg:px-6 pt-3 sm:pt-0">
            <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border-2 border-[#bbf438] bg-[#bbf438]/15 text-[#bbf438] shrink-0 shadow-[0_0_14px_rgba(187,244,56,0.22)]">
              <Truck className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2.2]" />
            </div>
            <div className="leading-tight">
              <span
                className={cn(
                  "block font-bold text-[14.5px] sm:text-[15.5px] tracking-tight",
                  isDark ? "text-white" : "text-ink-900",
                )}
              >
                On-Time Delivery
              </span>
              <span
                className={cn(
                  "block text-[11.5px] sm:text-[12px] font-medium mt-0.5",
                  isDark ? "text-white/60" : "text-ink-500",
                )}
              >
                Scheduled dispatches for bulk packing lines
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
