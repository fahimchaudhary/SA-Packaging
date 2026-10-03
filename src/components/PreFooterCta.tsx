import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/router";
import { Container, Reveal } from "./ui";
import { company, waLink, defaultWaMessage } from "@/data/company";
import type { Product } from "@/data/products";

interface PreFooterCtaProps {
  routePath: string;
  product?: Product;
}

interface PageCtaContent {
  kicker: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryTo: string;
  isPrimaryExternal?: boolean;
  secondaryLabel: string;
  secondaryTo: string;
  isSecondaryExternal?: boolean;
}

export default function PreFooterCta({ routePath, product }: PreFooterCtaProps) {
  let content: PageCtaContent;

  if (product) {
    content = {
      kicker: "SPECIFICATION & SAMPLING",
      title: `The right ${product.name.toLowerCase()} starts with your rim.`,
      subtitle: `Share your cup, jar or drawing details. We will prepare test samples, confirm the polymer lacquer chemistry and send quotation requirements.`,
      primaryLabel: "Request sample & quote",
      primaryTo: "/contact",
      secondaryLabel: "WhatsApp the works",
      secondaryTo: waLink(
        `Hello S.A Packaging, I would like to request test samples for ${product.name}. My container polymer is: `,
      ),
      isSecondaryExternal: true,
    };
  } else {
    switch (routePath) {
      case "/about":
        content = {
          kicker: "DIRECT FACTORY WORKS",
          title: "Direct from the works in Sakinaka. No middlemen.",
          subtitle:
            "Deal directly with the plant that cuts your dies, coats your foil, and packs your orders. Repeatable specifications and strict quality inspection on every shipment.",
          primaryLabel: "Request factory quote",
          primaryTo: "/contact",
          secondaryLabel: "Explore all products",
          secondaryTo: "/products",
        };
        break;

      case "/products":
        content = {
          kicker: "LIVE PRODUCTION WORK & SAMPLES",
          title: "Want to inspect our live packaging dies & samples?",
          subtitle:
            "Browse our interactive gallery of 77+ physical production dies, custom printed lids, embossed foils, and roll stock samples from our Sakinaka works.",
          primaryLabel: "Explore Work in Gallery",
          primaryTo: "/gallery",
          secondaryLabel: "Request custom quotation",
          secondaryTo: "/contact",
        };
        break;

      case "/customization":
        content = {
          kicker: "ENGINEERED SEALING CHEMISTRY",
          title: "The right seal starts with your container polymer.",
          subtitle:
            "Whether sealing to PP, PS, HIPS, PET, PE or glass, our engineers formulate the exact lacquer bond and peel behaviour for your packaging line.",
          primaryLabel: "Send rim specifications",
          primaryTo: "/contact",
          secondaryLabel: "Talk to the works",
          secondaryTo: "/contact",
        };
        break;

      case "/contact":
        content = {
          kicker: "DIRECT INDUSTRIAL SALES",
          title: "The right lid starts with your rim.",
          subtitle:
            "Share your cup or jar details. We will confirm the seal specification, minimum order run and quotation requirements within 24 working hours.",
          primaryLabel: "WhatsApp the works",
          primaryTo: waLink(defaultWaMessage),
          isPrimaryExternal: true,
          secondaryLabel: `Call ${company.phoneDisplay}`,
          secondaryTo: `tel:+${company.phoneE164}`,
          isSecondaryExternal: true,
        };
        break;

      case "/":
      default:
        content = {
          kicker: "MADE TO YOUR TOOL",
          title: "The right lid starts with your rim.",
          subtitle:
            "Share your cup or jar details. We will confirm the seal specification and quotation requirements.",
          primaryLabel: "Explore customization",
          primaryTo: "/customization",
          secondaryLabel: "Talk to the works",
          secondaryTo: "/contact",
        };
        break;
    }
  }

  return (
    <section aria-labelledby="prefooter-title" className="prefooter-banner">
      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-2.5 text-[10.5px] font-bold tracking-[0.18em] text-[#70a7e7] uppercase">
                <span
                  className="h-2 w-2 rounded-[1.5px] bg-[#38bdf8]"
                  aria-hidden="true"
                />
                <span>{content.kicker}</span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h2
                id="prefooter-title"
                className="mt-4 font-display text-[clamp(28px,4.8vw,52px)] font-bold leading-[1.08] tracking-[-0.04em] text-white"
              >
                {content.title}
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-4 max-w-xl font-lora text-[15.5px] leading-relaxed text-[#a8bace] sm:text-[17px]">
                {content.subtitle}
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="flex flex-col items-stretch gap-3.5 sm:items-start lg:items-end font-geist">
              {content.isPrimaryExternal ? (
                <a
                  href={content.primaryTo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[14.5px] font-bold text-[#0c1520] shadow-sm transition-all hover:bg-[#f1f5f9] hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] active:scale-[0.99] sm:w-auto"
                >
                  {content.primaryLabel}
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </a>
              ) : (
                <Link
                  to={content.primaryTo}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[14.5px] font-bold text-[#0c1520] shadow-sm transition-all hover:bg-[#f1f5f9] hover:shadow-[0_12px_28px_-8px_rgba(255,255,255,0.35)] active:scale-[0.99] sm:w-auto"
                >
                  {content.primaryLabel}
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </Link>
              )}

              {content.isSecondaryExternal ? (
                <a
                  href={content.secondaryTo}
                  className="inline-flex items-center justify-center gap-2 py-1 text-[13.5px] font-semibold text-[#cbd5e1] transition-colors hover:text-white"
                >
                  {content.secondaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to={content.secondaryTo}
                  className="inline-flex items-center justify-center gap-2 py-1 text-[13.5px] font-semibold text-[#cbd5e1] transition-colors hover:text-white"
                >
                  {content.secondaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
