import { ChevronRight } from "lucide-react";
import { Link } from "@/lib/router";
import { getCategory, getProduct, products } from "@/data/products";
import { quoteChecklist, waLink } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import {
  ButtonLink,
  CheckItem,
  Container,
  ExternalButton,
  Img,
  Note,
  Pill,
  Reveal,
  Section,
  SpecRow,
} from "@/components/ui";

export default function ProductDetail({ slug }: { slug: string }) {
  const product = getProduct(slug);

  if (!product) {
    return (
      <Section className="bg-white">
        <Container>
          <h1 className="font-display text-[1.75rem] font-bold">
            Product not found
          </h1>
          <p className="mt-3 text-[15px] text-ink-500">
            This item may have been renamed. Browse the full range instead.
          </p>
          <div className="mt-6">
            <ButtonLink to="/products">Back to products</ButtonLink>
          </div>
        </Container>
      </Section>
    );
  }

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const message =
    `Hello S.A Packaging, I would like a quotation for: ${product.name}.\n\n` +
    `Category: ${category.label}\nSize: ${product.size}\nSeal: ${product.seal}\n\n` +
    `Cup / jar polymer: \nRim diameter (mm): \nPrint: \nSupply form: \nMonthly quantity: `;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-ink-100 bg-paper font-geist">
        <Container className="flex items-center gap-1.5 overflow-x-auto py-3.5 text-[12.5px] whitespace-nowrap text-ink-400">
          <Link to="/" className="hover:text-brand-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-brand-600 transition-colors">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-ink-800">{product.name}</span>
        </Container>
      </div>

      <Section className="bg-white pt-10! sm:pt-12!">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            {/* Image */}
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-ink-100 bg-gradient-to-b from-slate-50 to-slate-100/80 p-8 flex items-center justify-center">
                <Img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/3] w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 font-geist">
                <Pill tone="blue">{category.short}</Pill>
                <Pill>{product.finish}</Pill>
                <Pill>{product.supply.split(",")[0]}</Pill>
              </div>
            </Reveal>

            {/* Summary */}
            <div>
              <Reveal>
                <p className="font-geist text-[11px] font-semibold tracking-[0.2em] text-brand-600 uppercase">
                  {category.label}
                </p>
                <h1 className="mt-3 font-display text-[1.8rem] leading-tight font-bold sm:text-[2.2rem]">
                  {product.name}
                </h1>
                <p className="mt-4 font-lora text-[16px] leading-relaxed text-ink-700">
                  {product.description}
                </p>
              </Reveal>

              <Reveal delay={90}>
                <dl className="mt-7 rounded-xl border border-ink-100 px-5 py-1 font-geist">
                  <SpecRow label="Category" value={category.label} />
                  <SpecRow label="Size / diameter" value={product.size} />
                  <SpecRow label="Material" value={product.material} />
                  <SpecRow label="Foil thickness" value={product.thickness} />
                  <SpecRow label="Seal type" value={product.seal} />
                  <SpecRow label="Finish" value={product.finish} />
                  <SpecRow label="Supply form" value={product.supply} />
                  <SpecRow
                    label="Typical applications"
                    value={product.applications.join(" · ")}
                  />
                  <SpecRow label="HSN" value="3919" />
                  <SpecRow
                    label="Order policy"
                    value="Industrial / bulk only — quantity and rate confirmed on quotation"
                  />
                </dl>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-6">
                  <Note>{category.note}</Note>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 flex flex-wrap gap-3 font-geist">
                  <ExternalButton href={waLink(message)} variant="whatsapp">
                    Enquire about this lid
                  </ExternalButton>
                  <ButtonLink to="/contact" variant="outline">
                    Send a written enquiry
                  </ButtonLink>
                  <ButtonLink to="/gallery" variant="ghost">
                    View work in Gallery →
                  </ButtonLink>
                </div>
                <p className="mt-3 font-geist text-[12.5px] text-ink-400">
                  No prices are published. Rates depend on diameter, gauge,
                  print and monthly offtake.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Quote checklist */}
          <Reveal delay={80}>
            <div className="mt-14 grid gap-8 rounded-xl border border-ink-100 bg-paper p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="font-display text-[1.2rem] font-bold">
                  To quote this lid, send us
                </h2>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-500">
                  With these details we can confirm cutting size, foil gauge and
                  lacquer in the first reply.
                </p>
              </div>
              <ul className="space-y-3">
                {quoteChecklist.map((q) => (
                  <CheckItem key={q}>{q}</CheckItem>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h2 className="font-display text-[1.3rem] font-bold">
                  Other products in our range
                </h2>
                <Link to="/gallery" className="font-geist text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline">
                  View 77+ Live Dies in Gallery →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 70} className="h-full">
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
