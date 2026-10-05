export type CategoryId =
  | "poly-pp"
  | "blister"
  | "hips"
  | "pp-lacquer"
  | "printed"
  | "pet"
  | "custom";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  size: string;
  material: string;
  thickness: string;
  seal: string;
  finish: string;
  supply: string;
  applications: string[];
  description: string;
  image: string;
  featured?: boolean;
};

export const categories: {
  id: CategoryId;
  label: string;
  short: string;
  summary: string;
  note: string;
}[] = [
  {
    id: "poly-pp",
    label: "Poly PP Foil Lids",
    short: "Poly PP",
    summary:
      "Aluminium lids coated with PP heat-seal lacquer, precision die-cut to the rim of polypropylene cups and tubs. The industrial standard choice for dahi, curd, yoghurt, and dairy packs sealed on manual, semi-automatic, or high-speed rotary FFS machines.",
    note: "Seal layer is formulated specifically for PP rims. For PET or HIPS containers, select the corresponding category.",
  },
  {
    id: "blister",
    label: "Blister Foil Lids",
    short: "Blister",
    summary:
      "High-barrier pharmaceutical and medical lidding foil supplied as contoured die-cut lids, flat cut sheets, or continuous slit rolls. Compatible with PVC, PVDC, Alu-Alu, and PP blister formings.",
    note: "Engineered with pinhole-free foil and tamper-evident seal integrity for unit-dose medical and diagnostic packaging.",
  },
  {
    id: "hips",
    label: "HIPS Foil Lids",
    short: "HIPS",
    summary:
      "Lids coated with a specialised HIPS-compatible seal layer for thermoformed high-impact polystyrene cups used in desserts, ice cream, kulfi, and sweets. Formulated for clean peel without fibre tear.",
    note: "HIPS seal chemistry differs from PP — confirm container polymer before placing bulk order.",
  },
  {
    id: "pp-lacquer",
    label: "PP Lacquer Foil Lids",
    short: "PP Lacquer",
    summary:
      "Aluminium foil coated with calibrated PP lacquer supplied as bulk pre-cut lids in cartons or continuous slit rolls for in-line punch-and-seal machines. Lacquer weight calibrated to your peel strength specification.",
    note: "Roll stock is precision slit and wound to your specified core size, web width, and running direction.",
  },
  {
    id: "printed",
    label: "Printed Foil Lids",
    short: "Printed",
    summary:
      "High-definition brand-printed lids in vibrant multi-colour graphics on the outer face. The print layer is separated from the seal chemistry, allowing complete artwork customization while maintaining dependable seal performance.",
    note: "Supply your print-ready artwork or physical sample; full print proofs are approved prior to bulk production.",
  },
  {
    id: "pet",
    label: "PET Jar Foil Lids",
    short: "PET Jar",
    summary:
      "PET-compatible induction and heat-seal discs for wide-mouth jars, bottles, and food containers — honey, peanut butter, spreads, syrups, pickles, and nutraceuticals. Available plain or with backing wad for glass.",
    note: "A PP-only lid will not bond reliably to PET rims. Our PET series guarantees hermetic, leak-proof bonding.",
  },
  {
    id: "custom",
    label: "Custom Foil Lids",
    short: "Custom",
    summary:
      "Precision custom-stamped foil lids engineered for non-standard rim diameters, proprietary mould contours, special pull-tab shapes, and custom barrier thicknesses from 5 mm to 400 mm.",
    note: "Fabricated against your physical container rim sample or engineering drawing with rapid prototype approvals.",
  },
];

export const products: Product[] = [
  /* 1. Poly PP Foil Lids */
  {
    slug: "poly-pp-foil-lids",
    name: "Poly PP Foil Lids",
    category: "poly-pp",
    size: "5 mm – 400 mm (popular: 50, 75, 80, 95, 120 mm)",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "25 – 40 micron (30 micron standard for dairy)",
    seal: "PP heat-seal lacquer",
    finish: "Plain bright silver or printed",
    supply: "Die-cut lids in cartons, or roll form",
    applications: [
      "Dahi & curd cups (100g, 200g, 400g, 1kg)",
      "Yoghurt, shrikhand & mishti doi tubs",
      "Lassi & flavoured milk cups",
      "Chutney, sauce & catering sample cups",
    ],
    description:
      "Aluminium foil lids coated with PP heat-seal lacquer, precision die-cut to the rim of polypropylene cups and tubs. Formulated for hermetic seal and clean peel on manual, semi-automatic, and rotary form-fill-seal machines. Excellent stacking and feeding properties.",
    image: "/products/pp-silver-lids.jpg",
    featured: true,
  },

  /* 2. Blister Foil Lids */
  {
    slug: "blister-foil-lids",
    name: "Blister Foil Lids",
    category: "blister",
    size: "Cut sheets, slit rolls, or custom contoured shapes",
    material: "Pharma-grade aluminium foil with barrier heat-seal coating",
    thickness: "25 – 40 micron",
    seal: "Specified for PVC, PVDC, Alu-Alu, or PP blisters",
    finish: "Plain silver bright foil or printed",
    supply: "Contoured die-cut lids, flat cut sheets, or rolls",
    applications: [
      "Pharmaceutical unit-dose blisters",
      "Medical diagnostic kits & trays",
      "Nutraceutical tablet & capsule blister packs",
      "Industrial single-use sterile kits",
    ],
    description:
      "High-barrier pharmaceutical lidding foil and custom contoured lids for unit-dose, diagnostic, and blister formats. Engineered with high-barrier heat-seal coating for airtight moisture-barrier integrity, light protection, and tamper evidence on medical packaging lines.",
    image: "/products/pharma-foil-lids.webp",
    featured: true,
  },

  /* 3. HIPS Foil Lids */
  {
    slug: "hips-foil-lids",
    name: "HIPS Foil Lids",
    category: "hips",
    size: "50 mm – 150 mm diameter",
    material: "Aluminium foil with HIPS-compatible heat-seal coating",
    thickness: "30 – 35 micron",
    seal: "HIPS-compatible coating",
    finish: "Plain bright silver or custom multi-colour print",
    supply: "Die-cut lids, packed in cartons",
    applications: [
      "Thermoformed dessert cups & pudding packs",
      "Ice cream, kulfi & frozen dessert cups",
      "Mithai, rabri, basundi & halwa tubs",
      "Bakery mousse & fruit dessert cups",
    ],
    description:
      "Engineered specifically for high-impact polystyrene (HIPS) rims which require distinct seal chemistry compared to PP. Delivers a clean peel without fibre tear at typical dessert-line sealing temperatures and holds barrier through deep freezing and cold storage.",
    image: "/products/hips-dessert-lids.jpg",
    featured: true,
  },

  /* 4. PP Lacquer Foil Lids */
  {
    slug: "pp-lacquer-foil-lids",
    name: "PP Lacquer Foil Lids",
    category: "pp-lacquer",
    size: "5 mm – 400 mm die-cut, or custom web width roll stock",
    material: "Aluminium foil with calibrated PP lacquer",
    thickness: "25 – 40 micron",
    seal: "PP lacquer (calibrated for firm seal or easy peel)",
    finish: "Plain bright silver or printed",
    supply: "Die-cut lids in cartons, or continuous lidding rolls",
    applications: [
      "Continuous form-fill-seal (FFS) lines",
      "In-line cup sealing machines",
      "Automatic & semi-automatic packaging machines",
      "Wide-rim dairy beverage and lassi buckets",
    ],
    description:
      "PP lacquer-coated aluminium foil supplied either as pre-cut lids in cartons or as continuous lidding roll stock. Lacquer coat weight is calibrated to the exact heat-dwell cycle and peel-strength behaviour required on your packaging line.",
    image: "/products/blister-foil-roll.jpg",
    featured: true,
  },

  /* 5. Printed Foil Lids */
  {
    slug: "printed-foil-lids",
    name: "Printed Foil Lids",
    category: "printed",
    size: "20 mm – 150 mm typical, up to 400 mm",
    material: "Aluminium foil with high-definition outer print & lacquer inner",
    thickness: "30 – 35 micron",
    seal: "Polymer-specific lacquer (PP, HIPS, or PET)",
    finish: "High-definition multi-colour brand print with protective topcoat",
    supply: "Die-cut lids in cartons, or printed roll stock",
    applications: [
      "Branded curd & dahi retail cups",
      "Flavoured yoghurt, Greek yoghurt & fruit curd",
      "Juice cups, buttermilk & packaged beverages",
      "Private label brands & FMCG dairy packaging",
    ],
    description:
      "Custom brand-printed aluminium foil lids in high-definition multi-colour on the outer face. Incorporates artwork branding, batch coding panels, and FSSAI declarations while preserving uncompromised heat-seal bonding against your container rim.",
    image: "/products/printed-curd-lids.jpg",
    featured: true,
  },

  /* 6. PET Jar Foil Lids */
  {
    slug: "pet-jar-foil-lids",
    name: "PET Jar Foil Lids",
    category: "pet",
    size: "28 mm – 120 mm diameter",
    material: "Aluminium foil with PET-compatible induction / heat-seal layer",
    thickness: "25 – 40 micron (or with backing wad for glass)",
    seal: "PET-compatible induction / heat seal",
    finish: "Plain silver or branded print",
    supply: "Die-cut discs, packed in cartons",
    applications: [
      "Honey jars & wide-mouth syrup bottles",
      "Peanut butter, jam & chocolate spreads",
      "Nutraceutical, tablet & dietary supplement jars",
      "Pickle, chutney & condiment wide-mouth jars",
    ],
    description:
      "Dedicated induction and heat-seal discs for PET jars, wide-mouth containers, and bottle necks. Designed with specialised PET-bonding chemistry that creates an airtight, tamper-evident, and leak-proof barrier under caps during transport and retail shelf life.",
    image: "/products/pet-jar-seals.jpg",
    featured: true,
  },

  /* 7. Custom Foil Lids */
  {
    slug: "custom-foil-lids",
    name: "Custom Foil Lids",
    category: "custom",
    size: "5 mm – 400 mm (made to your container tool & drawing)",
    material: "Custom-gauge aluminium foil matched to container specification",
    thickness: "25 – 45 micron to specification",
    seal: "PP, HIPS, PET, PE, or Universal peel lacquer",
    finish: "Plain silver, embossed, or custom multi-colour print",
    supply: "Die-cut shaped lids, custom cartons, or slit rolls",
    applications: [
      "Non-standard rim diameters & proprietary moulds",
      "Special pull-tab contours & easy-peel shapes",
      "Custom thermoformed trays & multi-cavity packs",
      "New product SKU development & export projects",
    ],
    description:
      "Custom-stamped aluminium foil lids fabricated against your physical container rim sample or engineering drawing. Our Sakinaka works designs dedicated stamping tooling, tests barrier lacquer compatibility, and provides pilot samples for line approval before bulk manufacturing.",
    image: "/products/juice-cup-lids.jpg",
    featured: true,
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getCategory = (id: CategoryId) =>
  categories.find((c) => c.id === id)!;

export const featuredProducts = products.filter((p) => p.featured);
