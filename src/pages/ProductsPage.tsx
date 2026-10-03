import { useMemo, useState } from "react";
import { ArrowRight, Images } from "lucide-react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import {
  categories,
  products,
  type CategoryId,
} from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductsGallerySlider from "@/components/ProductsGallerySlider";
import {
  Container,
  Note,
  PageHero,
  Reveal,
  Section,
} from "@/components/ui";

type Filter = CategoryId | "all";

export default function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () =>
      filter === "all" ? products : products.filter((p) => p.category === filter),
    [filter],
  );

  const activeCategory =
    filter === "all" ? null : categories.find((c) => c.id === filter)!;

  const chips: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All 7 Products", count: products.length },
    ...categories.map((c) => ({
      id: c.id as Filter,
      label: c.label,
      count: products.filter((p) => p.category === c.id).length,
    })),
  ];

  return (
    <>
      <PageHero
        className="products-hero"
        eyebrow="PRODUCT CATALOGUE / SAKINAKA, MUMBAI"
        title={
          <>
            Heat-seal aluminium foil lids{" "}
            <span>for bulk industrial packing.</span>
          </>
        }
        lede="Explore our 7 core foil lid product lines manufactured to order at our Sakinaka works. Available from 5 mm to 400 mm in plain silver, embossed, and up to 4-colour brand print."
        bottomBar={
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-2 font-geist">
            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-ink-700 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse shrink-0" />
              <span>Want to inspect actual physical samples &amp; live production photos?</span>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-white shadow-xs transition-all hover:bg-brand-700 shrink-0 w-fit"
            >
              <Images className="h-3.5 w-3.5" />
              <span>Explore Work in Gallery (77+ Dies)</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        }
      />

      <Section className="bg-white">
        <Container>
          {/* Filters */}
          <div
            role="group"
            aria-label="Filter products by category"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 font-geist [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {chips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setFilter(chip.id)}
                aria-pressed={filter === chip.id}
                className={cn(
                  "tap shrink-0 rounded-full border px-4 py-2 text-[13.5px] font-semibold whitespace-nowrap transition-all duration-200",
                  filter === chip.id
                    ? "border-brand-500 bg-brand-500 text-white shadow-xs"
                    : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-600",
                )}
              >
                {chip.label}
                <span
                  className={cn(
                    "ml-2 text-[11.5px] font-medium",
                    filter === chip.id ? "text-white/80" : "text-ink-400",
                  )}
                >
                  {chip.count}
                </span>
              </button>
            ))}
          </div>

          {/* Category summary */}
          {activeCategory && (
            <div
              key={activeCategory.id}
              className="reveal reveal-in mt-8 rounded-xl border border-ink-100 bg-paper p-6 sm:p-7"
            >
              <h2 className="font-display text-[1.25rem] font-bold">
                {activeCategory.label}
              </h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-700 font-lora">
                {activeCategory.summary}
              </p>
              <div className="mt-5 max-w-3xl">
                <Note>{activeCategory.note}</Note>
              </div>
            </div>
          )}

          {/* Grid Count */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-geist">
            <p className="text-[13px] text-ink-500" aria-live="polite">
              Showing {shown.length} {shown.length === 1 ? "product" : "products"}
              {activeCategory ? ` in ${activeCategory.label}` : ""}
            </p>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
            >
              <Images className="h-3.5 w-3.5" />
              <span>See physical die samples in Gallery →</span>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="mt-5 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 8) * 50} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          {/* ----------------- Gallery Showcase Slider on Product Page ----------------- */}
          <ProductsGallerySlider />

          {/* Category reference when viewing all */}
          {!activeCategory && (
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c, i) => (
                <Reveal key={c.id} delay={i * 60}>
                  <button
                    type="button"
                    onClick={() => setFilter(c.id)}
                    className="h-full w-full rounded-xl border border-ink-100 bg-paper p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white cursor-pointer"
                  >
                    <p className="font-display text-[1rem] font-bold">{c.label}</p>
                    <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-ink-500">
                      {c.summary}
                    </p>
                    <span className="mt-3 inline-block text-[12.5px] font-semibold text-brand-600">
                      Filter {c.short} →
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
