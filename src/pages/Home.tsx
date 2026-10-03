import {
  Factory,
  Layers,
  Ruler,
  Printer,
  ShieldCheck,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router";
import {
  company,
  industries,
  polymers,
  quoteChecklist,
  sealOptions,
  waLink,
  defaultWaMessage,
} from "@/data/company";
import { featuredProducts, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import HomeGalleryShowcase from "@/components/HomeGalleryShowcase";
import {
  ButtonLink,
  CheckItem,
  Container,
  ExternalButton,
  Img,
  Note,
  Reveal,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui";

const stats = [
  { value: "12+", label: "Years manufacturing", sub: "Established 2014" },
  { value: "2 Crore", label: "Pieces per month", sub: "Installed capacity" },
  { value: "5–400 mm", label: "Die-cut size range", sub: "20–150 mm typical" },
  { value: "11–25", label: "People on the works", sub: "Sakinaka, Mumbai" },
];

const capabilities = [
  {
    icon: Factory,
    title: "We manufacture, we do not trade",
    body: "Die-cutting, lacquer coating and packing are run in-house at Sakinaka, so the specification you approve is the specification that is produced on every repeat order.",
  },
  {
    icon: Layers,
    title: "Seal layer matched to your polymer",
    body: "PP, PS, HIPS, PET and glass each need their own seal chemistry. We confirm the rim polymer before quoting — a PP-only lid is never substituted onto a PET pack.",
  },
  {
    icon: Ruler,
    title: "Any diameter from 5 mm to 400 mm",
    body: "Lids are cut to your cup or your drawing. Dairy and beverage work usually sits between 20 mm and 150 mm, at 25 to 40 micron foil.",
  },
  {
    icon: Printer,
    title: "Plain silver to 4-colour brand print",
    body: "Print sits on the outer face and is independent of the seal layer, so artwork changes do not alter sealing temperature or peel behaviour.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------- Hero --------------------------------- */}
      <section className="home-hero-section">
        <Container className="py-10 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14 lg:items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-white/95 px-3.5 py-1 text-[11px] sm:text-[12px] font-bold tracking-[0.06em] text-brand-700 shadow-xs backdrop-blur-xs font-geist">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                  <span>MANUFACTURER · SAKINAKA, MUMBAI</span>
                </div>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-4 font-display text-[32px] min-[390px]:text-[37px] sm:text-[46px] lg:text-[52px] xl:text-[58px] font-extrabold tracking-[-0.04em] text-ink-900 leading-[1.08]">
                  Custom Aluminium Foil Lids,{" "}
                  <span className="text-brand-500">Made to Your Requirements.</span>
                </h1>
              </Reveal>

              <Reveal delay={110}>
                <p className="mt-4 font-lora text-[15px] sm:text-[16.5px] leading-[1.7] text-ink-600">
                  Heat-seal foil lids manufactured for dairy, beverages, food and FMCG packaging—with custom sizes, designs and printing.
                </p>
              </Reveal>

              <Reveal delay={140} className="w-full sm:w-auto">
                <div className="mt-6 sm:mt-7 flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:items-center font-geist">
                  <ButtonLink
                    to="/products"
                    className="w-full sm:w-auto justify-center bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl px-7 py-3.5 text-[14.5px] shadow-sm flex items-center gap-2 active:scale-[0.98]"
                  >
                    View product range
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ExternalButton
                    href={waLink(defaultWaMessage)}
                    variant="outline"
                    className="w-full sm:w-auto justify-center bg-white hover:bg-slate-50 text-ink-900 font-semibold border border-ink-200/90 rounded-xl px-7 py-3.5 text-[14.5px] shadow-xs active:scale-[0.98]"
                  >
                    Enquire on WhatsApp
                  </ExternalButton>
                </div>
              </Reveal>
            </div>

            {/* Right Media / Card Column */}
            <div className="relative mt-2 lg:mt-0 w-full pb-6 lg:pb-0">
              <Reveal delay={90}>
                <div className="group relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-[0_20px_44px_-20px_rgba(20,24,32,0.25)]">
                  <Img
                    src="/hero-foil.jpg"
                    alt="Precision high-speed aluminium foil converting and die-cutting line at S.A Packaging works"
                    className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-ink-900/85 px-3 py-1 font-geist text-[10.5px] font-semibold tracking-wide text-white shadow-xs backdrop-blur-md">
                    Sakinaka Works
                  </div>
                </div>
              </Reveal>

              {/* Floating Works Capacity Card matching screenshot */}
              <Reveal delay={130}>
                <div className="relative -mt-16 sm:-mt-20 ml-3 sm:ml-6 max-w-[290px] sm:max-w-[325px] rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.22)] backdrop-blur-xs">
                  <span className="block font-geist text-[11px] sm:text-[11.5px] font-bold tracking-[0.14em] text-[#708ca6] uppercase">
                    Works Capacity
                  </span>
                  <h2 className="mt-2 font-display text-[22px] sm:text-[26px] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#111827]">
                    2 Crore pieces /<br />month
                  </h2>
                  <p className="mt-2.5 font-geist text-[12px] sm:text-[13px] leading-relaxed text-[#64748b]">
                    Die-cut lids in cartons, or foil in roll form
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* --------------------------------- Stats --------------------------------- */}
      <section className="border-b border-ink-100 bg-white">
        <Container>
          <dl className="grid grid-cols-2 divide-ink-100 sm:grid-cols-4 sm:divide-x">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 70}
                className="border-b border-ink-100 px-1 py-7 sm:border-b-0 sm:px-6 sm:py-9 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-geist text-[1.75rem] leading-none font-bold tracking-tight text-ink-900 sm:text-[2.1rem]">
                    {s.value}
                  </span>
                  <span className="mt-2 block font-geist text-[13px] font-semibold text-ink-700">
                    {s.label}
                  </span>
                  <span className="mt-0.5 block font-geist text-[12px] text-ink-400">
                    {s.sub}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ------------------------------- Capability ------------------------------ */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow="What we do"
            title="A single works for every lid on your line"
            lede="Foil lids look simple until the seal fails in transit. Our work is to match foil gauge, lacquer and cutting size to the exact cup you run — and then hold that specification order after order."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="group h-full rounded-xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_18px_40px_-30px_rgba(20,20,24,0.6)]">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <c.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.05rem] font-bold">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-500">
                    {c.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------- Featured -------------------------------- */}
      <Section className="border-y border-ink-100 bg-paper">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHead
              eyebrow="Product range"
              title="Lids we manufacture every week"
              lede="Six categories covering PP cups, printed brand lids, HIPS dessert cups, PP lacquer roll stock, blister lidding and PET jar seals."
            />
            <Reveal delay={160} className="shrink-0 sm:pb-2">
              <TextLink to="/products">See all products</TextLink>
            </Reveal>
          </div>

          <div className="mt-11 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2 font-geist">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to="/products"
                  className="tap inline-flex items-center rounded-full border border-ink-200 bg-white px-4 py-2 text-[13px] font-semibold text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* --------------------------- Live Dies & Gallery -------------------------- */}
      <HomeGalleryShowcase />

      {/* ------------------------------ Industries ------------------------------- */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Who we supply"
                title="Packers who seal thousands of cups a shift"
                lede="Our lids go to plants where a failed seal means a returned consignment. Each industry below has its own polymer and peel requirement."
              />

              <ul className="mt-9 divide-y divide-ink-100 border-y border-ink-100">
                {industries.map((ind, i) => (
                  <Reveal
                    key={ind.title}
                    as="li"
                    delay={i * 60}
                    className="flex gap-4 py-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    <div>
                      <p className="font-display text-[15.5px] font-bold text-ink-900">
                        {ind.title}
                      </p>
                      <p className="mt-1 font-lora text-[14.5px] leading-relaxed text-ink-600">
                        {ind.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={120}>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 font-geist">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                      Container polymers
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-ink-800">
                      {polymers.join(" · ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                      Seal options
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-ink-800">
                      {sealOptions.join(" · ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="rounded-xl border border-ink-100 bg-paper p-7 lg:sticky lg:top-32">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 text-white">
                  <PackageCheck className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-[1.2rem] font-bold">
                  What to send for a quotation
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  Six details let us quote accurately on the first reply instead
                  of going back and forth.
                </p>
                <ul className="mt-6 space-y-3">
                  {quoteChecklist.map((q) => (
                    <CheckItem key={q}>{q}</CheckItem>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <ButtonLink to="/contact" className="w-full sm:w-auto">
                    Send enquiry
                  </ButtonLink>
                  <ExternalButton
                    href={waLink(defaultWaMessage)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    WhatsApp
                  </ExternalButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ------------------------------ Compliance ------------------------------- */}
      <Section className="border-t border-ink-100 bg-paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-ink-200">
                <Img
                  src="/works-floor.jpg"
                  alt="Cartons of die-cut foil lids and rolls of lidding foil at the works"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <SectionHead
                eyebrow="How we work"
                title="Technical rules we will not bend"
                lede="These three points prevent most of the seal complaints we see when buyers switch suppliers."
              />
              <div className="mt-8 space-y-4">
                <Reveal delay={60}>
                  <Note>
                    A PP-only lid must not be quoted or used for PET. The
                    polymer of the rim has to match the seal layer of the lid.
                  </Note>
                </Reveal>
                <Reveal delay={120}>
                  <Note>
                    Custom diameter, print and seal chemistry are always made to
                    the customer&apos;s own tool and sample cup.
                  </Note>
                </Reveal>
                <Reveal delay={180}>
                  <Note>
                    Bulk minimums apply on every item. The exact quantity is
                    confirmed on the quotation, not on the website.
                  </Note>
                </Reveal>
              </div>

              <Reveal delay={230}>
                <div className="mt-8 flex items-center gap-3 rounded-lg border border-ink-100 bg-white p-4">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.8} />
                  <p className="text-[13.5px] text-ink-600">
                    GST registered since {company.gstRegistered} · GSTIN{" "}
                    {company.gstin} · HSN {company.hsn} · Banker:{" "}
                    {company.banker}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
