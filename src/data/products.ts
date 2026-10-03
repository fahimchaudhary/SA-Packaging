export type CategoryId =
  | "poly-pp"
  | "printed"
  | "hips"
  | "pp-lacquer"
  | "blister"
  | "pet";

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
      "Aluminium lids coated with a PP heat-seal lacquer, die-cut to the rim of polypropylene cups and tubs. The standard choice for dahi, curd, yoghurt and other dairy packs sealed on manual, semi-automatic or form-fill-seal machines.",
    note: "Seal layer is formulated for PP rims only. For PET or HIPS containers, select the matching category.",
  },
  {
    id: "printed",
    label: "Printed Foil Lids",
    short: "Printed",
    summary:
      "Brand-printed lids in 1 to 4 colours on the outer face. The print layer is independent of the seal layer, so artwork can change without altering seal performance on your existing cup and sealing temperature.",
    note: "Supply a print-ready file or a physical sample; a proof is approved before bulk manufacture.",
  },
  {
    id: "hips",
    label: "HIPS Foil Lids",
    short: "HIPS",
    summary:
      "Lids with a HIPS-compatible seal layer for thermoformed high-impact polystyrene cups used in desserts, ice cream and sweets. Formulated for a clean peel at typical dessert-line sealing temperatures.",
    note: "HIPS seal chemistry differs from PP — confirm the cup polymer before ordering.",
  },
  {
    id: "pp-lacquer",
    label: "PP Lacquer Foil Lids",
    short: "PP Lacquer",
    summary:
      "PP lacquer-coated aluminium supplied either as die-cut lids in cartons or as lidding foil in roll form for in-line sealing. Lacquer weight is set to the peel strength you specify.",
    note: "Roll stock is wound to your core size, web width and running direction.",
  },
  {
    id: "blister",
    label: "Pharma & Blister Foil Lids",
    short: "Pharma & Blister",
    summary:
      "Lidding foil and custom contoured lids for pharmaceutical, diagnostic, unit-dose and blister formats. Supplied as custom die-cut shapes made to your tool, flat sheets, or rolls.",
    note: "Custom shapes are cut to a dedicated tool made from your drawing or sample.",
  },
  {
    id: "pet",
    label: "PET Jar Foil Lids",
    short: "PET",
    summary:
      "PET-compatible seals for jars, wide-mouth containers and bottle necks — honey, spreads, pickles and nutraceuticals. Available as plain induction seals or with a wad for glass.",
    note: "A PP-only lid must never be used on PET. The seal layer has to match the rim polymer.",
  },
];

export const products: Product[] = [
  /* ---------------------------- Poly PP foil lids --------------------------- */
  {
    slug: "pp-foil-lid-50mm-silver",
    name: "50 mm Plain Silver PP Foil Lid",
    category: "poly-pp",
    size: "50 mm diameter",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "30 micron",
    seal: "PP lacquer",
    finish: "Plain silver",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Small dahi cups", "Sample / trial cups", "Sauce and chutney cups"],
    description:
      "A small-diameter die-cut lid for 50 mm PP cups. Plain bright silver on the outer face with a PP heat-seal lacquer underside, cut to a consistent edge so it feeds cleanly on manual and semi-automatic cup sealers.",
    image: "/products/gallery/thumb/20261003_003307.webp",
  },
  {
    slug: "pp-foil-lid-80mm-silver",
    name: "80 mm Plain Silver PP Foil Lid",
    category: "poly-pp",
    size: "80 mm diameter",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "30 micron",
    seal: "PP lacquer",
    finish: "Plain silver",
    supply: "Die-cut lids, packed in cartons",
    applications: ["200 ml dahi cups", "Yoghurt cups", "Dessert cups"],
    description:
      "The most widely moved dairy size. Die-cut to 80 mm for standard 200 ml PP curd cups, with a 30 micron foil body that holds shape through stacking, transport and high-speed sealing.",
    image: "/products/pp-silver-lids.jpg",
    featured: true,
  },
  {
    slug: "pp-foil-lid-95mm-silver",
    name: "95 mm Plain Silver PP Foil Lid",
    category: "poly-pp",
    size: "95 mm diameter",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "30 – 35 micron",
    seal: "PP lacquer",
    finish: "Plain silver",
    supply: "Die-cut lids, packed in cartons",
    applications: ["400 – 500 g curd tubs", "Paneer tubs", "Bulk dahi packs"],
    description:
      "Mid-size die-cut lid for 95 mm PP tubs used in half-kilo curd and paneer packing. Supplied at 30 or 35 micron depending on the rim width and the sealing pressure on your line.",
    image: "/products/gallery/thumb/20261003_003216.webp",
  },
  {
    slug: "pp-foil-lid-120mm-silver",
    name: "120 mm Plain Silver PP Foil Lid",
    category: "poly-pp",
    size: "120 mm diameter",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "35 – 40 micron",
    seal: "PP lacquer",
    finish: "Plain silver",
    supply: "Die-cut lids, packed in cartons",
    applications: ["1 kg curd tubs", "Bulk dairy buckets", "Catering packs"],
    description:
      "Large-diameter lid for 1 kg PP tubs. Heavier 35 – 40 micron foil is used so the lid stays flat across the wider span and resists doming during cold storage.",
    image: "/products/gallery/thumb/20261003_003342.webp",
  },
  {
    slug: "pp-foil-lid-custom-diameter",
    name: "Custom Diameter PP Foil Lid",
    category: "poly-pp",
    size: "5 mm – 400 mm (made to your rim)",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "25 – 40 micron",
    seal: "PP lacquer",
    finish: "Plain silver or printed",
    supply: "Die-cut lids in cartons, or roll form",
    applications: ["Non-standard cups", "Imported tooling", "New SKU development"],
    description:
      "Lids die-cut to any diameter from 5 mm to 400 mm against your cup or drawing. Send a sample container and we confirm the cutting size, foil gauge and lacquer weight before tooling.",
    image: "/products/gallery/thumb/20261003_002811.webp",
  },

  /* ---------------------------- Printed foil lids --------------------------- */
  {
    slug: "printed-curd-cup-lid",
    name: "Curd Cup Printed Foil Lid",
    category: "printed",
    size: "70 – 95 mm diameter",
    material: "Aluminium foil, printed outer, PP heat-seal lacquer inner",
    thickness: "30 micron",
    seal: "PP lacquer",
    finish: "Up to 4-colour brand print",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Dahi and curd cups", "Dairy retail packs", "Co-operative branding"],
    description:
      "Brand-printed dairy lid in up to four colours, with the seal lacquer applied independently of the print. Artwork, batch panel and FSSAI declarations can be carried on the same face.",
    image: "/products/printed-curd-lids.jpg",
    featured: true,
  },
  {
    slug: "printed-yoghurt-seal",
    name: "Yoghurt Cup Printed Seal",
    category: "printed",
    size: "60 – 85 mm diameter",
    material: "Aluminium foil, printed outer, PP heat-seal lacquer inner",
    thickness: "30 micron",
    seal: "PP lacquer",
    finish: "1 to 4-colour print",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Flavoured yoghurt", "Greek yoghurt cups", "Probiotic cups"],
    description:
      "Printed seal for flavoured and set yoghurt cups. Flavour variants are run as separate die-cut lots from one common base structure, so changeover on your line stays simple.",
    image: "/products/gallery/thumb/20261003_002740.webp",
  },
  {
    slug: "printed-juice-cup-lid",
    name: "Juice Cup Printed Foil Lid",
    category: "printed",
    size: "75 – 95 mm diameter",
    material: "Aluminium foil, printed outer, PP heat-seal lacquer inner",
    thickness: "30 – 35 micron",
    seal: "PP lacquer / specified peel",
    finish: "Up to 4-colour brand print",
    supply: "Die-cut lids in cartons, or roll form",
    applications: ["Juice cups", "Buttermilk cups", "Mocktail and beverage cups"],
    description:
      "Beverage lid printed in up to four colours with a peel tuned for liquid fills — firm enough to survive transit, clean enough to open without tearing across the centre.",
    image: "/products/juice-cup-lids.jpg",
    featured: true,
  },
  {
    slug: "printed-flavoured-milk-lid",
    name: "Flavoured Milk Cup Printed Lid",
    category: "printed",
    size: "65 – 90 mm diameter",
    material: "Aluminium foil, printed outer, PP heat-seal lacquer inner",
    thickness: "30 micron",
    seal: "PP lacquer",
    finish: "Up to 4-colour brand print",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Flavoured milk", "Milkshake cups", "Dairy beverage cups"],
    description:
      "Printed lid for flavoured milk and shake cups. Heavier ink coverage is handled without affecting the underside lacquer, so seal integrity stays constant across flavours.",
    image: "/products/gallery/thumb/20261003_002940.webp",
  },
  {
    slug: "printed-custom-brand-lid",
    name: "Custom Printed Brand Lid",
    category: "printed",
    size: "20 – 150 mm typical, up to 400 mm",
    material: "Aluminium foil, printed outer, seal layer to specification",
    thickness: "25 – 40 micron",
    seal: "PP, HIPS, PET or universal — specified per order",
    finish: "1 to 4-colour print",
    supply: "Die-cut lids in cartons, or roll form",
    applications: ["Private label", "OEM packing", "Contract manufacturers"],
    description:
      "Made-to-order branded lid where diameter, print and seal chemistry are all set to your pack. A print proof is approved before the bulk run, and the approved artwork is held for repeat orders.",
    image: "/products/gallery/thumb/20261003_003025.webp",
  },

  /* ----------------------------- HIPS foil lids ----------------------------- */
  {
    slug: "hips-dessert-cup-lid",
    name: "HIPS Dessert Cup Foil Lid",
    category: "hips",
    size: "60 – 100 mm diameter",
    material: "Aluminium foil with HIPS-compatible heat-seal coating",
    thickness: "30 micron",
    seal: "HIPS-compatible",
    finish: "Plain silver or printed",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Thermoformed dessert cups", "Pudding cups", "Mousse cups"],
    description:
      "Seal coated for high-impact polystyrene rims, which need a different chemistry from PP. Gives a clean peel on thermoformed dessert cups without fibre tear or foil residue on the rim.",
    image: "/products/hips-dessert-lids.jpg",
    featured: true,
  },
  {
    slug: "hips-ice-cream-cup-lid-75mm",
    name: "75 mm HIPS Ice Cream Cup Lid",
    category: "hips",
    size: "75 mm diameter",
    material: "Aluminium foil with HIPS-compatible heat-seal coating",
    thickness: "30 – 35 micron",
    seal: "HIPS-compatible",
    finish: "Plain silver or printed",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Ice cream cups", "Kulfi cups", "Frozen dessert packs"],
    description:
      "Die-cut 75 mm lid for frozen dessert cups. The seal holds through blast freezing and cold-chain handling, and stays peelable straight from the deep freezer.",
    image: "/products/gallery/thumb/20261003_003237.webp",
  },
  {
    slug: "hips-sweet-cup-lid",
    name: "HIPS Sweet & Mithai Cup Lid",
    category: "hips",
    size: "50 – 120 mm diameter",
    material: "Aluminium foil with HIPS-compatible heat-seal coating",
    thickness: "30 – 40 micron",
    seal: "HIPS-compatible",
    finish: "Plain silver or printed",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Mithai cups", "Rabri and basundi cups", "Sweet shop packs"],
    description:
      "Lid for HIPS cups used by sweet manufacturers and dessert counters. Supplied across a wide size band so a single supplier covers your whole cup range.",
    image: "/products/gallery/thumb/20261003_003259.webp",
  },

  /* -------------------------- PP lacquer foil lids -------------------------- */
  {
    slug: "pp-lacquer-lidding-foil-roll",
    name: "PP Lacquer Lidding Foil — Roll Stock",
    category: "pp-lacquer",
    size: "Web width made to your sealer",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "25 – 40 micron",
    seal: "PP lacquer",
    finish: "Plain silver or printed",
    supply: "Roll form, wound to your core size",
    applications: ["Form-fill-seal lines", "In-line cup sealing", "Automatic sealers"],
    description:
      "Lidding foil supplied in roll form for in-line sealing machines that punch the lid themselves. Web width, core size, roll diameter and winding direction are all set to your machine.",
    image: "/products/gallery/thumb/20261003_002921.webp",
  },
  {
    slug: "pp-lacquer-die-cut-lid",
    name: "PP Lacquer Die-Cut Lid",
    category: "pp-lacquer",
    size: "Made to your tool, 5 mm – 400 mm",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "25 – 40 micron",
    seal: "PP lacquer",
    finish: "Plain silver or printed",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Manual cup sealers", "Semi-automatic lines", "Low-changeover plants"],
    description:
      "Pre-cut lids for plants that seal manually or semi-automatically. Lacquer weight is adjusted to the peel strength you want — firm lock for transit, or easy peel for counter service.",
    image: "/products/gallery/thumb/20261003_002821.webp",
  },
  {
    slug: "lassi-cup-lid-150mm",
    name: "150 mm Lassi Cup PP Lid",
    category: "pp-lacquer",
    size: "150 mm diameter",
    material: "Aluminium foil with PP heat-seal lacquer",
    thickness: "35 – 40 micron",
    seal: "PP lacquer",
    finish: "Plain silver or printed",
    supply: "Die-cut lids, packed in cartons",
    applications: ["Lassi tubs", "Chaas buckets", "Bulk beverage packs"],
    description:
      "Upper end of the common dairy band at 150 mm. Heavier gauge keeps the lid rigid over the wide rim and resists bulging from liquid movement in transit.",
    image: "/products/gallery/thumb/20261003_003326.webp",
  },

  /* --------------------------- Blister foil lids ---------------------------- */
  {
    slug: "blister-lidding-foil-sheet",
    name: "Blister Lidding Foil — Sheet",
    category: "blister",
    size: "Cut sheets to your dimension",
    material: "Aluminium foil with heat-seal coating",
    thickness: "25 – 40 micron",
    seal: "Specified to the blister polymer",
    finish: "Plain silver or printed",
    supply: "Flat sheets, packed in cartons",
    applications: ["Unit-dose packs", "Nutraceutical blisters", "Industrial kit packs"],
    description:
      "Lidding foil supplied as flat cut sheets for plate-type blister sealing. Sheet size is cut to your platen, with the coating matched to the forming film you run.",
    image: "/products/gallery/thumb/20261003_002947.webp",
  },
  {
    slug: "blister-lidding-foil-roll",
    name: "Blister Lidding Foil — Roll",
    category: "blister",
    size: "Web width made to your machine",
    material: "Aluminium foil with heat-seal coating",
    thickness: "25 – 40 micron",
    seal: "Specified to the blister polymer",
    finish: "Plain silver or printed",
    supply: "Roll form, wound to your core size",
    applications: ["Continuous blister lines", "Unit-dose sachets", "Automatic sealing"],
    description:
      "Continuous roll lidding for automatic blister lines. Supplied slit to width with controlled edge quality so the web tracks without wander at running speed.",
    image: "/products/blister-foil-roll.jpg",
  },
  {
    slug: "pharma-custom-die-cut-lid",
    name: "Custom Die-Cut Pharma Foil Lids",
    category: "blister",
    size: "Special contour / custom die shapes",
    material: "Pharmaceutical grade aluminium foil with heat-seal coating",
    thickness: "25 – 40 micron",
    seal: "Specified to blister / container polymer (PVC, PVDC, Alu-Alu, PP)",
    finish: "Plain silver bright foil",
    supply: "Die-cut contoured lids, packed in cartons",
    applications: [
      "Pharmaceutical & medical packs",
      "Custom blister packs",
      "Unit-dose trays",
      "Nutraceutical blisters",
    ],
    description:
      "Precision custom-shaped pharmaceutical aluminium foil lids die-cut to specialised contoured tools. Engineered with high-barrier heat-seal coating for airtight moisture-barrier integrity, light protection and tamper evidence on medical and unit-dose packaging lines.",
    image: "/products/pharma-foil-lids.webp",
    featured: true,
  },

  /* ---------------------------- PET jar foil lids --------------------------- */
  {
    slug: "pet-jar-induction-seal",
    name: "PET Jar Induction Foil Seal",
    category: "pet",
    size: "28 – 120 mm diameter",
    material: "Aluminium foil with PET-compatible seal layer",
    thickness: "25 – 40 micron",
    seal: "PET-compatible",
    finish: "Plain silver or printed",
    supply: "Die-cut discs, packed in cartons",
    applications: ["Honey jars", "Spreads and jams", "Nutraceutical jars"],
    description:
      "Induction seal disc for PET jars and wide-mouth containers. The seal layer is formulated for PET rims — a PP-only lacquer will not bond reliably and must not be substituted.",
    image: "/products/pet-jar-seals.jpg",
    featured: true,
  },
  {
    slug: "pet-bottle-neck-seal",
    name: "Wide-Mouth PET Bottle Foil Seal",
    category: "pet",
    size: "28 – 70 mm neck diameter",
    material: "Aluminium foil with PET-compatible seal layer",
    thickness: "25 – 35 micron",
    seal: "PET-compatible",
    finish: "Plain silver or printed",
    supply: "Die-cut discs, packed in cartons",
    applications: ["Syrups and sauces", "Health drinks", "Edible oil bottles"],
    description:
      "Neck seal for PET bottles, cut to the finish diameter of your closure. Gives tamper evidence and a leak-tight barrier under cap during transport.",
    image: "/products/gallery/thumb/20261003_003029.webp",
  },
  {
    slug: "glass-jar-wad-seal",
    name: "Glass Jar Induction Wad Seal",
    category: "pet",
    size: "38 – 110 mm diameter",
    material: "Aluminium foil seal with backing wad",
    thickness: "Foil 25 – 40 micron plus wad",
    seal: "Induction / wad",
    finish: "Plain silver",
    supply: "Die-cut discs, packed in cartons",
    applications: ["Glass honey jars", "Pickle jars", "Preserve and masala jars"],
    description:
      "Foil-and-wad seal for glass jars closed with metal or plastic caps. The wad stays in the cap after opening and continues to act as a liner for re-closure.",
    image: "/products/gallery/thumb/20261003_003129.webp",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getCategory = (id: CategoryId) =>
  categories.find((c) => c.id === id)!;

export const featuredProducts = products.filter((p) => p.featured);
