import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";

/* --------------------------------- Reveal --------------------------------- */

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        }),
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------- Layout --------------------------------- */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-geist text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-600",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "font-geist text-[11px] font-semibold tracking-[0.2em] uppercase",
              dark ? "text-brand-300" : "text-brand-600",
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2
          className={cn(
            "mt-3 font-display text-[1.75rem] leading-[1.15] font-bold sm:text-[2.25rem]",
            dark && "text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={130}>
          <p
            className={cn(
              "mt-4 font-lora text-[16px] leading-relaxed",
              dark ? "text-white/70" : "text-ink-600",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------------- Buttons -------------------------------- */

const buttonBase =
  "tap inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-geist text-[14px] font-semibold transition-all duration-200 active:scale-[0.98]";

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "onDark";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        buttonBase,
        variant === "primary" &&
          "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-[0_10px_24px_-12px_rgba(11,99,206,0.8)]",
        variant === "outline" &&
          "border border-ink-200 bg-white text-ink-900 hover:border-brand-400 hover:text-brand-600",
        variant === "ghost" && "text-ink-700 hover:text-brand-600",
        variant === "onDark" &&
          "border border-white/20 text-white hover:border-white/50 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function ExternalButton({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "whatsapp" | "onDark";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(
        buttonBase,
        variant === "primary" &&
          "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-[0_10px_24px_-12px_rgba(11,99,206,0.8)]",
        variant === "outline" &&
          "border border-ink-200 bg-white text-ink-900 hover:border-brand-400 hover:text-brand-600",
        variant === "whatsapp" &&
          "bg-[#128C7E] text-white hover:bg-[#0f7a6d] hover:shadow-[0_10px_24px_-12px_rgba(18,140,126,0.9)]",
        variant === "onDark" &&
          "border border-white/20 text-white hover:border-white/50 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600 hover:text-brand-700"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

/* ---------------------------------- Bits ---------------------------------- */

export function Pill({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "blue" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-geist text-[11px] font-semibold tracking-wide",
        tone === "light" && "bg-ink-100 text-ink-600",
        tone === "blue" && "bg-brand-50 text-brand-700",
        tone === "dark" && "bg-white/10 text-white/80",
      )}
    >
      {children}
    </span>
  );
}

export function CheckItem({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full font-geist",
          dark ? "bg-brand-500/25 text-brand-200" : "bg-brand-50 text-brand-600",
        )}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span
        className={cn(
          "font-lora text-[15px] leading-relaxed",
          dark ? "text-white/80" : "text-ink-700",
        )}
      >
        {children}
      </span>
    </li>
  );
}

export function SpecRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink-100/80 py-3 transition-colors hover:bg-ink-50/40 px-2 rounded-lg -mx-2 last:border-0 sm:flex-row sm:gap-6 sm:items-baseline font-geist">
      <dt className="w-full text-[12px] font-semibold tracking-wide text-ink-400 uppercase sm:w-52 sm:shrink-0 font-geist">
        {label}
      </dt>
      <dd className="text-[14.5px] font-medium text-ink-800 font-geist">{value}</dd>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  aside,
  bottomBar,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  children?: ReactNode;
  aside?: ReactNode;
  bottomBar?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("subpage-hero", className)}>
      <Container>
        <div className="page-heading">
          <div className="page-heading-main">
            <Reveal>
              <p className="home-kicker">
                <span className="kicker-line" />
                <span>{eyebrow}</span>
              </p>
            </Reveal>
            <Reveal delay={70}>
              <h1>{title}</h1>
            </Reveal>
            {children && (
              <Reveal delay={130}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {children}
                </div>
              </Reveal>
            )}
          </div>
          <div className="page-heading-aside">
            <Reveal delay={100}>
              <p>{lede}</p>
            </Reveal>
            {aside && (
              <Reveal delay={150}>
                <div className="mt-5">{aside}</div>
              </Reveal>
            )}
          </div>
        </div>
        {bottomBar && (
          <Reveal delay={180}>
            {bottomBar}
          </Reveal>
        )}
      </Container>
    </header>
  );
}

/**
 * Image with a foil-style placeholder fallback, so the catalogue still reads
 * correctly if an image file has not been uploaded yet.
 */
export function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn("foil-sheen grid place-items-center", className)}
      >
        <span className="px-4 text-center text-[11px] font-semibold tracking-[0.18em] text-ink-500 uppercase">
          Aluminium foil lid
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-brand-100 bg-brand-50/70 p-4">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-white font-geist">
        <span className="text-[11px] font-bold">!</span>
      </span>
      <p className="font-lora text-[14px] leading-relaxed text-brand-950">{children}</p>
    </div>
  );
}
