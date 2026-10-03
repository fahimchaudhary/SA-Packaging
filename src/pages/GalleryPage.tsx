import { Container, Eyebrow, Reveal } from "@/components/ui";
import GalleryGrid from "@/components/GalleryGrid";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { company, waLink } from "@/data/company";

export default function GalleryPage() {
  const customDieMsg = "Hi S.A Packaging, I checked your gallery and need a custom die / lid tooling made for my cup rim drawing. Please let me know the process.";

  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <Container>
          <div className="page-heading">
            <div className="page-heading-main">
              <Reveal>
                <Eyebrow>DIE INVENTORY · 77+ LIVE SAMPLES</Eyebrow>
              </Reveal>
              <Reveal delay={70}>
                <h1 className="mt-3 font-display text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold tracking-[-0.03em] text-ink-900 leading-[1.12]">
                  Aluminium Foil Lids & Die Catalog.
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-4 font-lora text-[15px] sm:text-[16.5px] leading-[1.7] text-ink-600 max-w-2xl">
                  Inspect our running die inventory from 5 mm to 400 mm. Filter by container category, rim diameter, or polymer substrate. Every sample shown is produced at our Sakinaka works.
                </p>
              </Reveal>
            </div>

            {/* Quick Action Box */}
            <div className="flex flex-col gap-3 rounded-2xl border border-ink-200/80 bg-white/95 p-5 shadow-xs font-geist">
              <div className="text-[12px] font-bold uppercase tracking-wider text-brand-700">
                Need a Custom Die?
              </div>
              <p className="text-[13px] leading-snug text-ink-600 font-lora">
                If your cup or jar rim is non-standard, we fabricate custom tooling in-house within 7 to 10 days.
              </p>
              <a
                href={waLink(customDieMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-xs hover:bg-brand-600 active:scale-98 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Discuss Custom Tooling
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 sm:py-16 bg-[#fbfcfd]">
        <Container>
          <GalleryGrid initialLimit={20} showFilters={true} showSearch={true} />
        </Container>
      </section>
    </>
  );
}
