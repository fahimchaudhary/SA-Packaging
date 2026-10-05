import { CupSoda, FileImage, Layers, PackageCheck } from "lucide-react";
import {
  company,
  polymers,
  quoteChecklist,
  sealOptions,
  waLink,
} from "@/data/company";
import {
  ButtonLink,
  CheckItem,
  Container,
  ExternalButton,
  Note,
  PageHero,
  Reveal,
  Section,
  SectionHead,
} from "@/components/ui";

const steps = [
  {
    icon: CupSoda,
    step: "Step 01",
    title: "Share your cup",
    body: "Send a sample cup, jar or a dimensioned drawing. We measure the rim outer diameter and confirm the polymer — PP, PS, HIPS, PET or glass.",
  },
  {
    icon: Layers,
    step: "Step 02",
    title: "Lock the seal layer",
    body: "We select the seal chemistry and lacquer weight for that polymer and the peel you want, then fix the foil gauge between 25 and 40 micron.",
  },
  {
    icon: FileImage,
    step: "Step 03",
    title: "Approve the print proof",
    body: "For printed lids, artwork is set in custom multi-colour designs and a proof is sent for written approval. Plain silver work skips straight to a first-off sample.",
  },
  {
    icon: PackageCheck,
    step: "Step 04",
    title: "Bulk manufacture",
    body: "The approved specification is cut to your tool and produced in bulk, packed as die-cut lids in cartons or wound as lidding foil in roll form.",
  },
];

const specifiable = [
  {
    title: "Diameter",
    body: `Anywhere from ${company.sizeRange}. Dairy and beverage cups typically fall in the ${company.typicalSizeRange} band.`,
  },
  {
    title: "Foil thickness",
    body: `${company.thickness}. Wider rims and liquid fills generally move to the heavier end of the range.`,
  },
  {
    title: "Seal chemistry",
    body: sealOptions.join(", ") + " — always matched to the container polymer.",
  },
  {
    title: "Print",
    body: company.print + ". The print layer sits on the outer face, independent of the seal.",
  },
  {
    title: "Supply form",
    body: company.supply + ", wound to your core size and web width for in-line sealers.",
  },
  {
    title: "Shape",
    body: "Round as standard; oval, rectangular and multi-cavity blister shapes are cut to a tool made from your drawing.",
  },
];

export default function Customization() {
  const message =
    "Hello S.A Packaging, I would like to develop a custom foil lid.\n\n" +
    "Cup / jar polymer: \nRim diameter (mm): \nFoil thickness: \nPrint (plain / multi-colour): \nSupply form (die-cut / roll): \nMonthly quantity: ";

  return (
    <>
      <PageHero
        eyebrow="CUSTOM TOOLING / SAKINAKA, MUMBAI"
        title={
          <>
            Lids made to your cup,{" "}
            <span>your print and your sealing line.</span>
          </>
        }
        lede="Most buyers arrive with an existing container and an existing machine. Our job is to fit a lid between the two that seals cleanly at your temperature and peels the way your customer expects — then hold that specification for every repeat order."
      >
        <ExternalButton href={waLink(message)} variant="whatsapp">
          Start on WhatsApp
        </ExternalButton>
        <ButtonLink to="/contact" variant="outline">
          Send a written brief
        </ButtonLink>
      </PageHero>

      {/* -------------------------------- Process -------------------------------- */}
      <Section className="bg-white">
        <Container>
          <SectionHead
            eyebrow="The process"
            title="Four steps from sample cup to bulk run"
            lede="Nothing is tooled until the polymer, diameter and seal are confirmed in writing."
          />

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.step}
                as="li"
                delay={i * 90}
                className="relative h-full rounded-xl border border-ink-100 bg-paper p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 text-white">
                  <s.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="mt-5 font-geist text-[11px] font-semibold tracking-[0.16em] text-brand-600 uppercase">
                  {s.step}
                </p>
                <h3 className="mt-1.5 font-display text-[1.05rem] font-bold">
                  {s.title}
                </h3>
                <p className="mt-2.5 font-lora text-[14.5px] leading-relaxed text-ink-600">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <div className="mt-8 max-w-3xl">
              <Note>
                The seal layer must match the rim polymer. A PP-only lid cannot
                be supplied for a PET jar, and a PP lid will not peel correctly
                from a HIPS dessert cup — we confirm the polymer before any
                quotation is issued.
              </Note>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ----------------------------- Specifiable ------------------------------- */}
      <Section className="border-y border-ink-100 bg-paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="What you can specify"
                title="Six variables on every custom lid"
              />
              <div className="mt-9 divide-y divide-ink-200 border-y border-ink-200">
                {specifiable.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <div className="py-4">
                      <p className="font-geist text-[15px] font-bold text-ink-900">
                        {s.title}
                      </p>
                      <p className="mt-1 font-lora text-[14.5px] leading-relaxed text-ink-600">
                        {s.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal delay={100}>
                <div className="rounded-xl border border-ink-100 bg-white p-7">
                  <h3 className="font-display text-[1.2rem] font-bold">
                    What to send us
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-500">
                    A sample cup is the single most useful thing you can send —
                    it settles diameter, polymer and rim profile in one go.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {quoteChecklist.map((q) => (
                      <CheckItem key={q}>{q}</CheckItem>
                    ))}
                    <CheckItem>
                      Print-ready artwork as PDF or AI, if the lid is branded
                    </CheckItem>
                    <CheckItem>
                      Sealing machine type and temperature, where known
                    </CheckItem>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-4 rounded-xl border border-ink-100 bg-white p-7">
                  <h3 className="font-display text-[1.05rem] font-bold">
                    Polymers we coat for
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {polymers.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-ink-200 px-3 py-1.5 text-[13px] font-medium text-ink-600"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-[13.5px] leading-relaxed text-ink-500">
                    Private label and OEM work is routine — many of our lids
                    carry a packer&apos;s own brand with no reference to S A
                    Packaging on the pack.
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
