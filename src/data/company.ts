export const company = {
  name: "S.A Packaging",
  tagline: "Heat-seal aluminium foil lids for bulk dairy and beverage packing.",
  nature: "Manufacturer",
  legalStatus: "Proprietorship",
  ceo: "S Shaikh",
  experienceYears: 12,
  established: "2014",
  location: "Sakinaka, Mumbai, Maharashtra, India",
  addressLines: [
    "S.A Packaging",
    "Sakinaka, Andheri East",
    "Mumbai, Maharashtra 400072",
    "India",
  ],
  plusCode: "4V2J+CJC Mumbai, Maharashtra",
  coordinates: "19°06'03.9\"N 72°52'53.4\"E",
  coordinatesDecimal: { lat: 19.101083, lng: 72.8815 },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=19.101083,72.8815",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=19.101083,72.8815",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=19.101083,72.8815&hl=en&z=16&output=embed",
  employees: "11 – 25",
  capacity: "2 Crore pieces / month",
  gstin: "27BFQPD7974E1Z0",
  gstRegistered: "April 2023",
  banker: "Union Bank of India",
  hsn: "3919",
  sizeRange: "5 mm – 400 mm",
  typicalSizeRange: "20 – 150 mm (dairy / cup)",
  thickness: "25 – 40 micron (30 micron common for dairy cups)",
  supply: "Die-cut lids in cartons, or lidding foil in roll form",
  print: "Plain silver, 1 colour, or up to 4-colour brand print",
  orderPolicy: "Industrial / bulk only — no piece retail",
  phoneDisplay: "+91 81698 00610",
  phoneE164: "918169800610",
  phoneSecondaryDisplay: "+91 97951 61580",
  phoneSecondaryE164: "919795161580",
  email: "safoil3095@gmail.com",
  hours: "Monday – Saturday, 9:30 am – 6:30 pm IST",
} as const;

export const industries = [
  {
    title: "Dairy",
    detail: "Dahi, curd, yoghurt and lassi cups sealed on form-fill or manual sealers.",
    icon: "milk",
  },
  {
    title: "Beverages",
    detail: "Juice cups, flavoured milk and water cups needing a clean peel.",
    icon: "cup",
  },
  {
    title: "PET jars & bottles",
    detail: "Honey, spreads and nutraceuticals using induction or wad seals.",
    icon: "jar",
  },
  {
    title: "Desserts & HIPS cups",
    detail: "Thermoformed HIPS dessert and ice-cream cups.",
    icon: "dessert",
  },
  {
    title: "Pharma, Blister & Unit-Dose",
    detail: "Custom contoured pharma lids, sheet, roll or die-cut lidding for medical, diagnostic and unit-dose packs.",
    icon: "blister",
  },
] as const;

export const polymers = ["PP", "PS", "HIPS", "PET", "Glass (induction / wad)"];

export const sealOptions = [
  "PP lacquer",
  "HIPS-compatible",
  "PET-compatible",
  "Universal / specified peel",
];

export const quoteChecklist = [
  "Cup or jar polymer — PP, PS, HIPS, PET or glass",
  "Rim outer diameter in mm (or send a sample cup)",
  "Required lid diameter and foil thickness, if already fixed",
  "Plain silver, 1-colour or up to 4-colour print",
  "Supply form — die-cut lids in cartons, or foil in roll form",
  "Monthly offtake and delivery location",
];

/** Builds a wa.me deep link with a pre-filled enquiry message. */
export function waLink(message: string) {
  return `https://wa.me/${company.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  `Hello S.A Packaging, I would like a quotation for heat-seal aluminium foil lids.\n\n` +
  `Cup / jar polymer: \nRim diameter (mm): \nPrint: \nSupply form: \nMonthly quantity: `;
