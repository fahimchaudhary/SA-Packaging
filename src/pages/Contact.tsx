import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Receipt, Landmark } from "lucide-react";
import { cn } from "@/utils/cn";
import { company, polymers, waLink } from "@/data/company";
import { categories, products } from "@/data/products";
import { Container, ExternalButton, Note, PageHero, Reveal, Section } from "@/components/ui";

type Fields = {
  name: string;
  companyName: string;
  phone: string;
  product: string;
  diameter: string;
  polymer: string;
  quantity: string;
  notes: string;
};

const empty: Fields = {
  name: "",
  companyName: "",
  phone: "",
  product: categories[0].label,
  diameter: "",
  polymer: polymers[0],
  quantity: "",
  notes: "",
};

const inputClass =
  "w-full rounded-xl border border-ink-200/90 bg-white px-4 py-3 font-geist text-[14.5px] text-ink-900 placeholder:text-ink-400 shadow-xs transition-all duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 focus:outline-none";

const labelClass = "mb-1.5 block font-geist text-[12.5px] font-semibold text-ink-700";

export default function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const buildMessage = () =>
    `Enquiry for S.A Packaging — heat-seal aluminium foil lids\n\n` +
    `Name: ${f.name || "-"}\n` +
    `Company: ${f.companyName || "-"}\n` +
    `Phone: ${f.phone || "-"}\n` +
    `Product / category: ${f.product}\n` +
    `Diameter required: ${f.diameter || "-"}\n` +
    `Cup / jar material: ${f.polymer}\n` +
    `Monthly quantity: ${f.quantity || "-"}\n` +
    `Notes: ${f.notes || "-"}`;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const productOptions = [
    ...categories.map((c) => c.label),
    ...products.map((p) => p.name),
    "Custom size / not listed",
  ];

  return (
    <>
      <PageHero
        eyebrow="CONTACT S A PACKAGING / SAKINAKA, MUMBAI"
        title={
          <>
            Send your foil lid enquiry{" "}
            <span>or visit our Sakinaka works.</span>
          </>
        }
        lede="Fill the brief below and it opens in WhatsApp, pre-written and ready to send. You can also call the works directly during working hours. Supply is industrial and bulk only."
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            {/* --------------------------------- Form -------------------------------- */}
            <Reveal>
              <div className="rounded-xl border border-ink-100 bg-paper p-6 sm:p-8">
                <h2 className="font-display text-[1.3rem] font-bold">
                  Bulk enquiry brief
                </h2>
                <p className="mt-2 font-lora text-[14.5px] leading-relaxed text-ink-600">
                  No account, no login. Submitting opens WhatsApp with your
                  brief filled in — review it and press send.
                </p>

                <form onSubmit={onSubmit} className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="name"
                        required
                        autoComplete="name"
                        value={f.name}
                        onChange={(e) => set("name")(e.target.value)}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company *
                      </label>
                      <input
                        id="company"
                        required
                        autoComplete="organization"
                        value={f.companyName}
                        onChange={(e) => set("companyName")(e.target.value)}
                        placeholder="Registered firm name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={f.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        placeholder="+91 ..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className={labelClass}>
                        Product
                      </label>
                      <select
                        id="product"
                        value={f.product}
                        onChange={(e) => set("product")(e.target.value)}
                        className={cn(inputClass, "appearance-none select-chevron pr-10 cursor-pointer")}
                      >
                        {productOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="diameter" className={labelClass}>
                        Diameter required
                      </label>
                      <input
                        id="diameter"
                        value={f.diameter}
                        onChange={(e) => set("diameter")(e.target.value)}
                        placeholder="e.g. 80 mm"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="polymer" className={labelClass}>
                        Cup / jar material
                      </label>
                      <select
                        id="polymer"
                        value={f.polymer}
                        onChange={(e) => set("polymer")(e.target.value)}
                        className={cn(inputClass, "appearance-none select-chevron pr-10 cursor-pointer")}
                      >
                        {polymers.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                        <option value="Not sure — sample will be sent">
                          Not sure — sample will be sent
                        </option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="quantity" className={labelClass}>
                        Monthly quantity
                      </label>
                      <input
                        id="quantity"
                        value={f.quantity}
                        onChange={(e) => set("quantity")(e.target.value)}
                        placeholder="e.g. 10 lakh pieces per month"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="notes" className={labelClass}>
                        Notes
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        value={f.notes}
                        onChange={(e) => set("notes")(e.target.value)}
                        placeholder="Print requirement, foil thickness, supply form (die-cut or roll), sealing machine, delivery location"
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="tap inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#128C7E] px-6 py-3.5 font-geist text-[14.5px] font-semibold text-white transition-all duration-200 hover:bg-[#0f7a6d] hover:shadow-[0_12px_26px_-14px_rgba(18,140,126,0.9)] sm:w-auto"
                  >
                    Open brief in WhatsApp
                  </button>

                  {sent && (
                    <p
                      role="status"
                      className="rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 font-geist text-[13.5px] text-brand-800"
                    >
                      WhatsApp should have opened in a new tab with your brief.
                      If it did not, use the direct number in the panel beside
                      this form or email {company.email}.
                    </p>
                  )}

                  <p className="font-lora text-[13px] leading-relaxed text-ink-500">
                    This form does not store data on a server — it simply opens
                    WhatsApp with your brief. You can also{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="font-semibold text-brand-600 hover:underline"
                    >
                      email the same details
                    </a>
                    .
                  </p>
                </form>
              </div>
            </Reveal>

            {/* -------------------------------- Sidebar ------------------------------- */}
            <div className="space-y-4 font-geist">
              <Reveal delay={90}>
                <div className="rounded-xl border border-ink-100 bg-white p-6">
                  <h2 className="font-display text-[1.1rem] font-bold">
                    Works &amp; office
                  </h2>
                  <ul className="mt-5 space-y-4 text-[14px] text-ink-600">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                      <address className="leading-relaxed not-italic">
                        {company.addressLines.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                      <span className="leading-relaxed">{company.hours}</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={`tel:+${company.phoneE164}`}
                            className="font-semibold text-ink-900 hover:text-brand-600 transition-colors"
                          >
                            {company.phoneDisplay}
                          </a>
                          <span className="rounded-full bg-emerald-50 border border-emerald-200/90 px-2 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                            Call &amp; WhatsApp
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={`tel:+${company.phoneSecondaryE164}`}
                            className="font-medium text-ink-700 hover:text-brand-600 transition-colors"
                          >
                            {company.phoneSecondaryDisplay}
                          </a>
                          <span className="rounded-full bg-slate-100 border border-slate-200/90 px-2 py-0.5 text-[10px] font-medium text-ink-500 uppercase tracking-wider">
                            Direct Call
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                      <a
                        href={`mailto:${company.email}`}
                        className="font-medium text-ink-800 hover:text-brand-600"
                      >
                        {company.email}
                      </a>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <ExternalButton
                      href={waLink(buildMessage())}
                      variant="whatsapp"
                      className="w-full"
                    >
                      Chat on WhatsApp
                    </ExternalButton>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="rounded-xl border border-ink-100 bg-paper p-6">
                  <h2 className="font-display text-[1.05rem] font-bold">
                    Registered details
                  </h2>
                  <ul className="mt-4 space-y-3 text-[13.5px] text-ink-600">
                    <li className="flex gap-3">
                      <Receipt className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" strokeWidth={1.8} />
                      <span>
                        GSTIN <strong className="font-semibold text-ink-800">{company.gstin}</strong>{" "}
                        · registered {company.gstRegistered}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" strokeWidth={1.8} />
                      <span>Banker: {company.banker}</span>
                    </li>
                    <li className="flex gap-3">
                      <Receipt className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" strokeWidth={1.8} />
                      <span>
                        HSN {company.hsn} · {company.legalStatus} ·{" "}
                        {company.ceo}
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <Note>
                  We supply to industrial and bulk buyers only. Please include
                  your monthly offtake — single-piece and retail requests
                  cannot be serviced.
                </Note>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
