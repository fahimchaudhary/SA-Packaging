import {
  Building2,
  CalendarDays,
  Landmark,
  MapPin,
  Receipt,
  UserRound,
  Users,
  Clock,
  Boxes,
  Gauge,
} from "lucide-react";
import { company, industries, polymers, sealOptions, waLink, defaultWaMessage } from "@/data/company";
import {
  ButtonLink,
  Container,
  ExternalButton,
  PageHero,
  Reveal,
  Section,
  SectionHead,
  SpecRow,
} from "@/components/ui";
import BrandPillarsStrip from "@/components/BrandPillarsStrip";

const works = [
  {
    icon: Gauge,
    label: "Monthly capacity",
    value: company.capacity,
    note: "Across die-cutting and packing",
  },
  {
    icon: Boxes,
    label: "Size range",
    value: company.sizeRange,
    note: `Typical dairy / cup work ${company.typicalSizeRange}`,
  },
  {
    icon: Building2,
    label: "Foil thickness",
    value: company.thickness,
    note: "Set to rim width and sealing pressure",
  },
  {
    icon: Users,
    label: "Supply forms",
    value: "Die-cut lids or roll stock",
    note: company.supply,
  },
];

const particulars = [
  { icon: UserRound, label: "Director / Promoter", value: company.director },
  { icon: Building2, label: "Nature of business", value: company.nature },
  { icon: Receipt, label: "Legal status", value: company.legalStatus },
  { icon: Receipt, label: "GSTIN", value: company.gstin },
  { icon: CalendarDays, label: "GST registered", value: company.gstRegistered },
  { icon: Landmark, label: "Banker", value: company.banker },
  { icon: Boxes, label: "HSN", value: company.hsn },
  { icon: Users, label: "Employees", value: company.employees },
  { icon: Clock, label: "Working hours", value: company.hours },
  { icon: MapPin, label: "Location", value: company.location },
];

const pillars = [
  {
    title: "Our Motto",
    body: `“${company.motto}” — our founding benchmark across foil lacquer selection, precision die-cutting and clean-peel reliability.`,
  },
  {
    title: "Purpose",
    body: "To give dairy and food packers a dependable domestic source for heat-seal foil lids — correct polymer match, consistent cut size and repeatable peel, order after order.",
  },
  {
    title: "Process",
    body: "Sample cup or drawing is received, rim polymer and diameter are confirmed, foil gauge and lacquer are selected, a proof or first-off sample is approved, then bulk is manufactured and packed in cartons or wound to rolls.",
  },
  {
    title: "Who we serve",
    body: "Dairies and co-operatives, beverage and juice packers, PET jar fillers, dessert and ice-cream manufacturers, and converters who need blister or unit-dose lidding in sheet or roll form.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT S A PACKAGING / SAKINAKA, MUMBAI"
        title={
          <>
            Twelve years of manufacturing{" "}
            <span>foil lids for Indian industry.</span>
          </>
        }
        lede={`${company.name} is a proprietorship manufacturer established in ${company.established}, directed by ${company.director} with the motto “${company.motto}”. We die-cut and lacquer-coat aluminium foil lids for dairy, beverage, PET jar, and blister packs in bulk.`}
      >
        <ButtonLink to="/products">View products range</ButtonLink>
        <ExternalButton href={waLink(defaultWaMessage)} variant="outline">
          Enquire on WhatsApp
        </ExternalButton>
      </PageHero>

      {/* Core Manufacturing Guarantees Banner */}
      <BrandPillarsStrip />

      {/* ------------------------------- The works ------------------------------- */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="The works"
                title="Built around repeat dairy offtake"
                lede="Most of our volume is dairy — curd, dahi, lassi and flavoured milk cups that get sealed every single day. That workload shapes how the unit is set up: a stable set of common diameters running continuously, with capacity kept free for custom sizes and print runs."
              />
              <Reveal delay={150}>
                <p className="mt-5 font-lora text-[15.5px] leading-relaxed text-ink-600">
                  With {company.employees} people on the floor and an installed
                  capacity of {company.capacity}, we can hold standing monthly
                  schedules for regular buyers while still taking in new
                  tooling. Lids leave the works either as die-cut pieces packed
                  in cartons, or as lidding foil wound to the core size your
                  sealing machine needs.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {works.map((w, i) => (
                <Reveal key={w.label} delay={i * 80}>
                  <div className="h-full rounded-xl border border-ink-100 bg-paper p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-ink-100">
                      <w.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                    <p className="mt-4 font-geist text-[11px] font-semibold tracking-[0.14em] text-ink-400 uppercase">
                      {w.label}
                    </p>
                    <p className="mt-1.5 font-geist text-[1.1rem] leading-snug font-bold text-ink-900">
                      {w.value}
                    </p>
                    <p className="mt-1.5 font-lora text-[13px] leading-relaxed text-ink-600">
                      {w.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* -------------------------------- Pillars -------------------------------- */}
      <Section className="border-y border-ink-100 bg-paper">
        <Container>
          <SectionHead
            eyebrow="How we operate"
            title="Motto, purpose, process and the buyers we serve"
          />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="h-full rounded-xl border border-ink-100 bg-white p-6">
                  <p className="font-display text-[0.95rem] font-bold tracking-wide text-brand-600 uppercase">
                    {p.title}
                  </p>
                  <p className="mt-3 font-lora text-[15px] leading-relaxed text-ink-700">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 grid gap-4 rounded-xl border border-ink-100 bg-white p-6 sm:grid-cols-2 font-geist">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                  Container polymers supported
                </p>
                <p className="mt-2.5 text-[14.5px] font-medium text-ink-800">
                  {polymers.join(" · ")}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                  Seal options
                </p>
                <p className="mt-2.5 text-[14.5px] font-medium text-ink-800">
                  {sealOptions.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------ Industries ------------------------------- */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow="Industries served"
            title="Five packing categories, each with its own seal"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-ink-100 p-5 transition-colors duration-300 hover:border-brand-200">
                  <p className="font-display text-[1rem] font-bold">{ind.title}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                    {ind.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ----------------------------- Particulars ------------------------------- */}
      <Section className="border-t border-ink-100 bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Registered particulars"
                title="Statutory and banking details"
                lede="Shared up front so vendor registration and purchase-order formalities can be completed without a follow-up email."
              />
              <Reveal delay={150}>
                <address className="mt-8 rounded-xl border border-ink-100 bg-white p-5 text-[14.5px] leading-relaxed text-ink-600 not-italic">
                  <span className="mb-2 block text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                    Works &amp; office
                  </span>
                  {company.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <dl className="rounded-xl border border-ink-100 bg-white px-6 py-2 font-geist">
                {particulars.map((p) => (
                  <SpecRow key={p.label} label={p.label} value={p.value} />
                ))}
                <SpecRow label="Experience" value={`${company.experienceYears} years (established ~${company.established})`} />
                <SpecRow label="Order policy" value={company.orderPolicy} />
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
