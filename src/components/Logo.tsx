import { cn } from "@/utils/cn";

export interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  imgClassName?: string;
  showText?: boolean;
  imgId?: string;
}

/**
 * Official S A Packaging logo component rendering the authentic brand mark
 * (/public/LOGO.png cropped and optimized for light & dark backgrounds).
 */
export function Logo({
  variant = "light",
  className,
  imgClassName,
  showText = true,
  imgId,
}: LogoProps) {
  const logoSrc = variant === "dark" ? "/logo-white.png" : "/logo-transparent.png";

  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <img
        id={imgId}
        src={logoSrc}
        alt="S.A Packaging Logo"
        className={cn(
          "h-11 sm:h-12 w-auto object-contain shrink-0 transition-transform duration-200 group-hover:scale-105",
          imgClassName,
        )}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <span
          id={imgId ? "header-brand-logo-text" : undefined}
          className="flex flex-col leading-tight"
        >
          <span
            className={cn(
              "font-display text-[16px] sm:text-[17px] font-extrabold tracking-tight",
              variant === "dark" ? "text-white" : "text-ink-900",
            )}
          >
            S.A <span className="text-brand-500">Packaging</span>
          </span>
          <span
            className={cn(
              "mt-0.5 text-[9.5px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase",
              variant === "dark" ? "text-white/45" : "text-ink-400",
            )}
          >
            Aluminium Foil Lids
          </span>
        </span>
      )}
    </span>
  );
}

/** Legacy SVG mark preserved for backwards compatibility */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-transparent.png"
      alt="S.A Packaging Mark"
      className={cn("h-9 w-auto object-contain shrink-0", className)}
    />
  );
}
