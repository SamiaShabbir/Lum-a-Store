// /src/data/products.ts
export type Category =
  | "cleansers"
  | "serums"
  | "moisturizers"
  | "sunscreen"
  | "body"
  | "hair"
  | "tools";

export type ProductRecord = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  badge?: "New" | "Sale" | "Bestseller";
  gallery: string[];
  category: Category;
  description: string;
  bullets?: string[];
};

export const PRODUCTS: ProductRecord[] = [
  {
    id: "1",
    slug: "radiance-serum",
    title: "Radiance Serum 10% Niacinamide",
    price: 29,
    badge: "Bestseller",
    image: "/product-1.webp",
    gallery: [
      "/product-1.webp",
      "/product-1_01.jpeg",
      "/product-1_02.jpeg",
      "/product-1_03.jpeg",
      "/product-1_04.jpeg",
      "/product-1_05.jpeg",
    ],
    category: "serums",
    description:
      "Brightening daily serum with 10% niacinamide to even tone and refine the look of pores—lightweight, non‑sticky, layers well under SPF.",
    bullets: [
      "Targets dark spots and redness",
      "Oil‑control without drying • Non‑comedogenic",
      "Fragrance‑free • Vegan • Cruelty‑free",
    ],
  },
  {
    id: "2",
    slug: "cloud-moisturizer",
    title: "Cloud Cushion Moisturizer",
    price: 34,
    badge: "New",
    image: "/product-2.jpg",
    gallery: [
      "/product-2.jpg",
      "/product-2_04.jpg",
      "/product-2_03.jpg",
      "/product-2_02.jpg",
      "/product-2_01.jpg",
    ],
    category: "moisturizers",
    description:
      "Feather‑light cream that cushions skin with lasting hydration. Ceramides and squalane support barrier comfort without heaviness.",
    bullets: [
      "All‑day hydration, zero grease",
      "Ceramides + Squalane + HA",
      "Dermatologist‑tested • Sensitive‑skin friendly",
    ],
  },
  {
    id: "3",
    slug: "silk-cleanser",
    title: "Silk Cleanser with Amino Acids",
    price: 19,
    image: "/product-3.jpeg",
    gallery: ["/product-3.jpeg"],
    category: "cleansers",
    description:
      "A gentle gel cleanser powered by amino acids to lift impurities while keeping the barrier calm and bouncy.",
    bullets: [
      "pH‑balanced • No tightness",
      "Removes light makeup and sunscreen",
      "Soap‑free • Fragrance‑free",
    ],
  },
  {
    id: "4",
    slug: "daily-spf",
    title: "Daily SPF 50 Mineral",
    price: 26,
    image: "/product-4.jpg",
    gallery: [
      "/product-4.jpg",
      "/product-3_01.jpg",
      "/product-3_02.jpg",
      "/product-3_03.jpg",
      "/product-3_04.jpg",
    ],
    category: "sunscreen",
    description:
      "Sheer mineral sunscreen with zinc oxide for daily UVA/UVB protection. No white cast, no pilling—just a soft, natural finish.",
    bullets: [
      "Broad‑spectrum SPF 50",
      "Sheer, non‑greasy finish",
      "Wears well under makeup",
    ],
  },
  {
    id: "5",
    slug: "dew-mist",
    title: "Dew Mist Hydrating Toner",
    price: 18,
    image: "/product-5.jpg",
    gallery: ["/product-5.jpg", "/product-5_01.jpg", "/product-5_02.jpg"], // fixed filename
    category: "serums",
    description:
      "A refreshing mist‑toner with humectants and soothing botanicals to reset skin between steps—or anytime you need a dew boost.",
    bullets: [
      "Instant hydration on the go",
      "Aloe + Panthenol + Glycerin",
      "Alcohol‑free • Fine cloud spray",
    ],
  },
  {
    id: "6",
    slug: "gentle-exfoliant",
    title: "Gentle Exfoliant 2% PHA",
    price: 22,
    badge: "Sale",
    image: "/product-6.jpg",
    gallery: [
      "/product-6.jpg",
      "/product-6_01.avif",
      "/product-6_02.avif",
      "/product-6_03.avif",
      "/product-6_04.avif",
      "/product-6_05.avif",
      "/product-6_06.avif",
    ],
    category: "cleansers",
    description:
      "Low‑irritation liquid exfoliant with 2% PHA to smooth texture and boost radiance—made for beginners and sensitive routines.",
    bullets: [
      "Refines look of pores and texture",
      "Hydrating polyhydroxy acids",
      "Use 2–4× weekly after cleansing",
    ],
  },
  {
    id: "7",
    slug: "eye-repair",
    title: "Eye Repair Cream",
    price: 24,
    image: "/product-7.webp",
    gallery: ["/product-7.webp"],
    category: "moisturizers",
    description:
      "Cushiony eye cream with peptides and caffeine to visibly depuff and soften fine lines—designed for delicate under‑eye skin.",
    bullets: [
      "Cooling, fast‑absorbing texture",
      "Peptides + Caffeine + HA",
      "Ophthalmologist‑tested",
    ],
  },
  {
    id: "8",
    slug: "night-renew",
    title: "Night Renew Cream",
    price: 36,
    image: "/product-8.jpg",
    gallery: ["/product-8.jpg"],
    category: "moisturizers",
    description:
      "Nourishing night cream that seals in moisture with ceramides and oils to wake up to soft, renewed skin.",
    bullets: [
      "Overnight barrier support",
      "Ceramides + Fatty acids",
      "Rich but breathable finish",
    ],
  },
  {
    id: "9",
    slug: "vitamin-c-serum",
    title: "SkinCeuticals C E Ferulic",
    price: 185,
    image: "/product-9.jpg",
    gallery: [
      "/product-9.jpg",
      "/product-9_01.webp",
      "/product-9_02.jpg",
      "/product-9_03.jpg",
      "/product-9_04.jpg",
      "/product-9_05.jpg",
      "/product-9_06.jpg",
      "/product-9_07.jpg",
      "/product-9_08.jpg",
      "/product-9_09.jpg",
      "/product-9_10.jpg",
    ],
    category: "serums",
    description:
      "High‑potency vitamin C serum with 15% L‑ascorbic acid, vitamin E, and ferulic acid to defend against environmental stressors and brighten tone.",
    bullets: [
      "Clinically‑backed antioxidant blend",
      "Targets dullness and uneven tone",
      "Use AM under SPF",
    ],
  },
  {
    id: "10",
    slug: "anti-aging-serum",
    title: "SkinMedica TNS Advanced+ Serum ",
    price: 295,
    image: "/product-10.avif",
    gallery: [
      "/product-10.avif",
      "/product-10_01.webp",
      "/product-10_02.webp",
      "/product-10_03.webp",
      "/product-10_04.webp",
    ],
    category: "serums",
    description:
      "A powerful anti-aging serum that targets fine lines, deep wrinkles and sagging skin.",
    bullets: [
      "Smooths visible coarse wrinkles and fine lines",
      "Visibly lifts sagging skin",
      "Evens the appearance of skin tone and texture",
      "Visible results start in just 2 weeks, with progressive improvements measured over 24 weeks*",
      "Colorless and fragrance-free",
    ],
  },
  {
    id: "11",
    slug: "hyalu-b5-pure-hyaluronic-acid-serum",
    title: "La Roche-Posay Hyalu B5 Serum",
    price: 40,
    image: "/product-11.jpg",
    gallery: [
      "/product-11.jpg",
      "/product-11_01.jpg",
      "/product-11_02.jpg",
      "/product-11_03.jpg",
    ],
    category: "serums",
    description:
      "This anti-aging ultra hydrating pure hyaluronic acid face and neck serum leaves skin feeling plump to the touch and helps repair skin by replenishing the natural moisture barrier. This serum combines concentrated pure hyaluronic acid, madecassoside and vitamin B5 for optimal effectiveness while also being suitable for sensitive skin.",
    bullets: [
      "Allergy-tested formula with fragrance",
      "Use alone or as an added boost to your favorite moisturizer",
      "Rich serum texture leaves skin feeling supple and hydrated to the touch",
      "Pure hyaluronic acid serum hydrates and visibly plumps skin",
    ],
  },
  {
    id: "12",
    slug: "vanicream-cleanser",
    title: "Vanicream Gentle Facial Cleanser",
    price: 85,
    image: "/product_12.jpg",
    gallery: ["/product_12.jpg", "/product_12_01.jpg", "/product_12_02.jpg"],
    category: "cleansers",
    description:
      "Vanicream Gentle Facial Cleaner, Formulated without Common Irritants for Sensitive Skin Vanicream Gentle Facial Cleanser is our mildest formula designed specifically for daily use on sensitive skin. Helps removes dirt, oil, and makeup without drying or irritating the skin. Unlike traditional facial cleansers, Vanicream leaves your skin feeling clean, soft, and refreshed, never tight. Formulated without common irritants, the cleanser contains no soap, sulfates, gluten, dyes, lanolin, parabens, or formaldehyde releasers. Non-comedogenic, meaning it won’t clog pores.",
    bullets: [
      "Our mildest cleanser specifically formulated for daily facial use.",
      "Helps remove makeup and excess skin oils without drying your skin.",
      "Leaves skin feeling clean and soft.",
      "Ideal for dry skin.",
    ],
  },
  {
    id: "13",
    slug: "rose-ingleton-md-superfruit-facial-cleanser",
    title: "SuperFruit Gentle Brightening Cleanser",
    price: 38,
    image: "/product-13.webp",
    gallery: [
      "/product-13.webp",
      "/product-13_01.webp",
      "/product-13_02.webp",
      "/product-13_03.webp",
    ],
    category: "cleansers",
    description:
      "A gentle, foaming gel cleanser that is formulated with fruit acids, super hydrators, hyaluronic acid, and pro-vitamin B5.This gentle, visibly brightening cleanser lifts away visible impurities, excess oil, and makeup without over-cleansing or drying the skin. It is pH-balanced, sulfate-free, fragrance-free, and contains pro-vitamin B5 to help support your skin barrier while fruit acids leave you visibly glowing.",
    bullets: [
      "Lightweight Gel.",
      "Pores, Dullness, and Oiliness",
      "Normal, Combination, and Oily",
      "Ideal for dry skin.",
    ],
  },
  {
    id: "14",
    slug: "Cleansing-Cleanser-Blackhead-Melting-Removal",
    title: "ma:nyo Pure Cleansing Oil",
    price: 94,
    image: "/product-14.jpg",
    gallery: ["/product-14.jpg", "/product-14_01.jpg", "/product-14_02.jpg"],
    category: "cleansers",
    description: "",
    bullets: [
      "Effective Cleansing: Non-irritating cleansing oil targets makeup, sunscreen, and sebum removal.",
      "Powerful Ingredients: Cleansing oil melts away impurities with argan kernel oil and 14 plant-derived oils.",
      "Skin-Friendly Formula: Argan oil is packed with vitamin E and moisturizing properties.",
      "Trusted Brand: 10 million units sold, manufactured and imported directly from Korea.",
      "Nourishing Benefits: Cleansing oil nourishes skin and maintains moisture and pH balance.",
    ],
  },
  {
    id: "15",
    slug: "Grinding-Cleansing-One-Step-Madecassoside-Non-Greasy",
    title: "Dr.Althea Pure Grinding Cleansing Balm",
    price: 99,
    image: "/product-15.jpg",
    gallery: ["/product-15.jpg", "/product-15_01.jpg", "/product-15_02.jpg"],
    category: "cleansers",
    description:
      "Hygenic One-Step Makeup Cleansing Oil with Madecassoside | Non-Greasy Sorbet Texture | Soothing for All Skin Types | Korean Vegan Skin Care | 1.69 Fl Oz",
    bullets: [
      "HYGIENIC & EASY TO USE : This cleansing balm has an innovative grinding mechanism built into the packaging and a sorbet-like texture to ensure hygienic and convenient use without direct hand contact with the product.",
      "ONE-STEP CLEANSER : Effortlessly remove sunscreen, makeup, and even waterproof products with just a small amount. Cleanse both the surface and deep layers of your skin in one step, so no need for multiple cleansers!",
      "CLEANSE & HYDRATE : Enriched with Madecassoside and plant-based oils, our formula not only excels in cleansing but also enhances your skincare routine by leaving your skin nourished and moisturized so you can enjoy a hydrated, non-tightening finish.",
      "FOR ALL SKIN TYPES : Formulated with 14 essential ingredients for a gentle cleanse, even on sensitive skin. Suitable for all skin types, making it a perfect choice for all skin types.",
      "WHY CHOOSE DR. ALTHEA : Our products are free from artificial coloring, fragrance, and parabens, ensuring it is gentle on the skin. Additionally, it is Vegan-certified to meet ethical and eco-friendly standards.",
    ],
  },
  {
    id: "16",
    slug: "Take-OffTM-Facial-Cleansing-Mousse",
    title:
      "Clinique Take The Day Off Facial Cleansing Mousse With Hyaluronic Acid + Glycerin",
    price: 96,
    image: "/product-16.jpg",
    gallery: ["/product-16.jpg", "/product-16_01.jpg", "/product-16_02.jpg"],
    category: "cleansers",
    description:
      "A luxe silky mousse cleanser that removes long-wearing makeup for clean, refreshed skin. Dermatologist tested. Dissolves Makeup, Sunscreen + Pollution, 4.2 Fl Oz",
    bullets: [
      "Rinses away makeup.",
      "Use morning and night, avoiding eye area",
    ],
  },
  {
    id: "17",
    slug: "Drunk-Elephant-Mello-Marula-Cleanser",
    title: "Drunk Elephant Mello Marula Cream Cleanser",
    price: 105,
    image: "/product-17.jpg",
    gallery: ["/product-17.jpg", "/product-17_01.jpg", "/product-17_02.jpg"],
    category: "cleansers",
    description:
      "An ultra-gentle, low-lather cream cleanser that calms and balances skin as it gently removes water-resistant makeup, sunscreen, and daily pollution. Features a nourishing blend of 1.0% colloidal oatmeal and marula oil.",
    bullets: [
      "Comforts and soothes skin and improves moisture.",
      "Rinses easily and completely, leaving no residue.",
    ],
  },
  {
    id: "18",
    slug: "skinmedica-aha-bha-exfoliating-cleanser",
    title: "SkinMedica AHA/BHA Exfoliating Cleanser",
    price: 48,
    image: "/product-18.webp",
    gallery: ["/product-18.webp", "/product-18_01.webp", "/product-18_02.webp"],
    category: "cleansers",
    description:
      "A resurfacing face wash that brightens and rejuvenates your skin.SkinMedica's AHA/BHA Exfoliating Cleanser combines alpha and beta hydroxy acids to remove dead cells and other impurities from your skin to enhance a smoother and brighter complexion.",
    bullets: [
      "Improves the appearance of skin texture, tone, and smoothness",
      "Thoroughly cleanses and gently exfoliates the skin",
      "Ideal for all skin types",
    ],
  },
  {
    id: "19",
    slug: "skinfix-barrier-strengthening-and-moisturizing-triple-lipid-peptide-refillable-cream",
    title:
      "Triple Lipid-Peptide Cream Refillable Barrier Moisturizer with Ceramides",
    price: 51,
    image: "/product-19.webp",
    gallery: ["/product-19.webp", "/product-19_01.webp", "/product-19_02.webp"],
    category: "moisturizers",
    description:
      "The award-winning, buttery-rich barrier cream that amplifies moisture for skin that looks glowier, smoother, and firmer in as fast as four weeks.Most moisturizers mask dryness at skin’s surface. This one—powered by ingredients like ceramides and peptides—amplifies your skin’s ability to retain moisture right away and over time by rebuilding its protective barrier. Re-meet the original formula of this derm-approved must-have.",
    bullets: ["Cream", "This product is vegan", "Gluten-free", "Cruelty-free"],
  },
  {
    id: "20",
    slug: "innbeauty-project-extreme-cream-firming-moisturizer",
    title:
      "Extreme Cream Anti-Aging, Firming, & Lifting Refillable Moisturizer",
    price: 45,
    image: "/product-20.webp",
    gallery: ["/product-20.webp", "/product-20_01.webp", "/product-20_02.webp"],
    category: "moisturizers",
    description:
      "A luxurious moisturizer that is clinically shown to visibly firm, lift, contour, and reduce sagging while nourishing the skin barrier.",
    bullets: [
      "Free of parabens",
      "This product is vegan",
      "Gluten-free",
      "Cruelty-free",
    ],
  },
  {
    id: "21",
    slug: "la-mer-the-moisturizing-soft-cream-moisturizer",
    title: "La Mer The Moisturizing Soft Cream Moisturizer",
    price: 190,
    image: "/product-21.webp",
    gallery: ["/product-21.webp", "/product-21_01.webp", "/product-21_02.webp"],
    category: "moisturizers",
    description:
      "A silky-soft cream moisturizer that delivers all-day hydration for profound renewal: healthier, plumper-, firmer-, lifted-looking skin.",
    bullets: [
      " Loss of firmness, Plumping, Best for Dry, Combo, Normal Skin",
      "Good for: Pores",
      "Good for: Anti-Aging",
      "Good for: Redness",
    ],
  },
  {
    id: "22",
    slug: "Neutrogena-Hydro-Boost-Water-Ounce",
    title: "Neutrogena Hydro Boost Water Gel, 1.7 Ounce",
    price: 91,
    image: "/product-22.jpg",
    gallery: ["/product-22.jpg", "/product-22_01.jpg"],
    category: "moisturizers",
    description:
      "Award-winning and best selling water gel formula to deliver intense hydration",
    bullets: [
      " Hyaluronic acid acts as a sponge for dry skin cells and can absorb up to 1, 000 times its weight in water",
      "Oil-free formula allows you to wear it alone or under makeup as a smooth velvety Primer",
    ],
  },
  {
    id: "23",
    slug: "Glow-Recipe-Cloudberry-Bright-Refillable",
    title: "Glow Recipe Cloudberry Refillable Face Cream",
    price: 40,
    image: "/product-23.jpg",
    gallery: ["/product-23.jpg", "/product-23_01.jpg", "/product-23_02.jpg"],
    category: "moisturizers",
    description:
      "Ultra Moisturizing Korean Face Cream for Women with CoQ10, Multi Peptides, and Vitamin C to Brighten, Repair Skin Barrier & Even Skin Tone (50 ml)",
    bullets: [
      "A Softer Way to Glow - A whipped, buttery antioxidant-rich peptide moisturizer that assists in skin barrier repair, provides deep, long-lasting hydration and evens your skin tone for a soft, radiant glow. Enriched with a breathable, lightweight feel and non-comedogenic formula.",
      "Clinically Effective Ingredients - Formulated with antioxidant-rich Cloudberry plus CoQ10, this deeply hydrating face cream helps to brighten and even tone while Peptide Lipids deliver fatty acids to lock in moisture for bouncier, soft skin.",
      "From Day, To Night - Whether you're using as a day cream to prep your skin for makeup or to nourish your skin as you sleep, our Cloudberry barrier repair moisturizer does it all! Pair with our Cloudberry Bright Essence Toner for the ultimate radiance-boosting routine.",
    ],
  },
  {
    id: "24",
    slug: "Standard-Procedure.",
    title: "Standard Procedure.",
    price: 40,
    image: "/product-24.jpg",
    gallery: ["/product-24.jpg", "/product-24_01.jpg", "/product-24_02.jpg"],
    category: "moisturizers",
    description:
      "Standard Procedure. SPF 50+ Sunscreen, Broad Spectrum Face & Body Sunblock for Sun-Sensitive Skin, 4HR Water Resistant, Organic Formula, 8.5 oz",
    bullets: [
      "HIGH-PROTECTION SUNSCREEN: Our SPF 50+ is a powerhouse sunscreen, offering very high protection for your skin & designed to withstand the toughest elements. It’s an organic chemical formulation perfect for everyday wear on your face, body or children.",
      "HELPS IMPROVE YOUR SKIN BARRIER: Our SPF 50+ is made with Australian superfruits containing Vitamin A, B & C, Papain & Bromelain to help protect against free radical damage, help reduce skin irritation, redness, swelling & improves skin barrier function.",
      "GREAT FOR ACTIVE DAYS: This dermatologically tested, cruelty-free and reef-friendly sunscreen is fast absorbing, dry touch, and water resistant for up to four hours.",
    ],
  },
  {
    id: "25",
    slug: "Sun-Bum-Moisturizing-SPF-Hypoallergenic",
    title: "Sun Bum Original SPF 70 Sunscreen Body Lotion",
    price: 96,
    image: "/product-25.jpg",
    gallery: ["/product-25.jpg", "/product-25_01.jpg", "/product-25_02.jpg"],
    category: "sunscreen",
    description:
      "Broad Spectrum Moisturizing Sunscreen with Vitamin E - Hawaii 104 Act Compliant (Made without Octinoxate & Oxybenzone) - 8 oz",
    bullets: [
      "ORIGINAL SPF 70 SUNSCREEN LOTION . This is the stuff we use every day. It’s the formula that started it all. People say it smells like summer. We like that. Whether we’re spending a lazy day at the beach or just hangin’ out, our Original formula is definitely our fav.",
      "MOISTURIZING SUN PROTECTION. Dermatologist and Sonny approved, this non-comedogenic sunscreen delivers UVA/UVB protection and is packed with Vitamin E. Our oil-free, water-resistant and Hawaii 104 Reef Act Compliant SPF 70 Lotion is great for all skin types.",
      "PROTECT YOUR SKIN. The key to practicing safe sun is to protect and moisturize your skin. Our Original Sunscreen line is Oxybenzone, Octinoxate, Gluten, Cruelty and Paraben Free to ensure a fun day in the sun.",
    ],
  },
  {
    id: "26",
    slug: "health-onsite-prod",
    title: "La Roche-Posay Anthelios Melt-In Milk Sunscreen SPF 60",
    price: 60,
    image: "/product-26.jpg",
    gallery: ["/product-26.jpg", "/product-26_01.jpg", "/product-26_02.jpg"],
    category: "sunscreen",
    description:
      "Body & face sunscreen with broad spectrum SPF 60 UVA/UVB protection. Non-greasy, fast-absorbing texture leaves skin hydrated and smooth with a velvety texture. Suitable for all skin types, including sensitive skin. Paraben Free.",
    bullets: [
      "Non comedogenic sunscreen for face & body",
      "Fragrance Free.",
      "Paraben Free.",
      "Oil Free",
      "Allergy Tested",
      "Oxybenzone Free.",
    ],
  },
  {
    id: "27",
    slug: "Bali-Body-Watermelon-Tanning-SPF50",
    title: "Bali Body Watermelon Tanning Oil SPF50",
    price: 100.32,
    image: "/product-27.jpg",
    gallery: ["/product-27.jpg", "/product-27_01.jpg", "/product-27_02.jpg"],
    category: "sunscreen",
    description:
      "Tanning Oil with SPF for Dark Glow Skin, Fast-Absorbing, Non-Greasy Formula, Hydrating, Travel Size, Cruelty-Free, Vegan Australian Made (100ml/3.4flo)",
    bullets: [
      "Non comedogenic sunscreen for face & body",
      "Fragrance Free.",
      "Paraben Free.",
      "Oil Free",
      "Allergy Tested",
      "Oxybenzone Free.",
    ],
  },
  {
    id: "28",
    slug: "7Cnf856483014a5408a9d5edac186e7058b16",
    title: "Banana Boat Light As Air Sunscreen Lotion SPF 50 Twin Pack",
    price: 98,
    image: "/product-28.jpg",
    gallery: ["/product-28.jpg", "/product-28_01.jpg", "/product-28_02.jpg"],
    category: "sunscreen",
    description:
      "Lightweight & Non-Greasy Lotion Sunscreen SPF 50, Sunblock, Oxybenzone-Free, 6oz each",
    bullets: [
      "SPF 50 sunscreen lotion absorbs excess oil and moisture, allowing skin to breathe",
      "Lightweight sunscreen quickly and easily rubs in CLEAR.",
      "Non-greasy and fast absorbing formula to keep you feeling dry and fresh.",
      "Broad Spectrum UVA/UVB protection",
      "Water resistant formula (up to 80 minutes)",
      "FREE FROM–Sunscreen lotion SPF 50 formulated without oxybenzone or octinoxate",
    ],
  },
  {
    id: "29",
    slug: "BLUE-LIZARD-Sensitive-Mineral-Sunscreen",
    title: "Blue Lizard SENSITIVE Mineral Sunscreen with Zinc Oxide",
    price: 85,
    image: "/product-29.jpg",
    gallery: ["/product-29.jpg", "/product-29_01.jpg", "/product-29_02.jpg"],
    category: "sunscreen",
    description:
      "SPF 50+, Water Resistant, UVA/UVB Protection with Smart Cap Technology - Fragrance Free, 3 oz. Tube",
    bullets: [
      "POWERFUL MINERAL SUNSCREEN - Protect sensitive skin from the sun’s harmful rays with Blue Lizard Sensitive Mineral SPF 50 Sunscreen Lotion it contains no harsh chemical active ingredients that might irritate sensitive skin.",
      "SPF 50 BROAD SPECTRUM PROTECTION - The water-resistant formula provides broad spectrum protection and helps protect skin from up to 98% of UVB rays.",
      "FORMULATED FOR SENSITIVE SKIN - Developed specifically for sensitive skin, the hypoallergenic formula is also paraben-free and fragrance-free.",
      "INFUSED WITH ORGANIC ALOE VERA - gently soothes and moisturizes",
      "WE ♥ THE REEF – The reef-friendly formula is formulated without Oxybenzone or Octinoxate to help protect fragile reef ecosystems.",
    ],
  },
  {
    id: "30",
    slug: "B08K9GF1FF",
    title:
      "Aveeno Protect + Hydrate Sunscreen Moisturizing Body Lotion with Prebiotic Oat",
    price: 85,
    image: "/product-30.jpg",
    gallery: ["/product-20.jpg", "/product-20_01.jpg", "/product-20_02.jpg"],
    category: "sunscreen",
    description:
      "Broad Spectrum SPF 60, Paraben, Oxybenzone & Oil Free, Weightless, Water & Sweat Resistant for Sensitive Skin, 12 Fl Oz",
    bullets: [
      "Sunscreen lotion for daily protection: Aveeno Protect + Hydrate sunscreen lotion with broad spectrum SPF 60 protects skin from UVA/UVB rays; Weightless, oil-free formula absorbs quickly and leaves skin feeling soft and hydrated all day",
      "Moisturizing sunscreen with prebiotic oat: This moisturizing sunscreen is made with nourishing prebiotic oat to help leave skin soft and moisturized all day; Non-greasy, paraben-free, and suitable for daily use on all skin types",
      "Body sunscreen for sensitive skin: Gentle enough for sensitive skin and decreases the risk of skin cancer and early aging caused by the sun when used as directed with other sun protection measures. Use as part of your everyday skincare routine",
      "Broad spectrum SPF 60 sunscreen: Provides powerful broad spectrum SPF 60 sunscreen protection against sunburn and early skin aging; Water and sweat resistant for up to 80 minutes, ideal for outdoor activities and active lifestyles",
    ],
  },
  {
    id: "31",
    slug: "pure-protect-mineral-sunscreen-stick-spf-50",
    title: "Kopari Beauty Pure Protect Mineral Sunscreen Stick SPF 50+",
    price: 29,
    image: "/product-31.avif",
    gallery: ["/product-31.avif", "/product-31_01.avif", "/product-31_02.avif"],
    category: "body",
    description:
      "Embrace the sun with Kopari Beauty's Pure Protect Mineral Sunscreen Stick SPF 50+. This 100% mineral formula provides sheer broad-spectrum protection for face and body. Infused with nourishing actives and antioxidants, it hydrates and soothes for easy reapplication anytime, anywhere",
    bullets: ["Clean Ingredients", "Cruelty Free"],
  },
  {
    id: "32",
    slug: "golden-hour-amber-white-musk-whipped-argan-oil-refillable-firming-body-butter",
    title:
      "Josie Maran Golden Hour (Amber, White Musk) - Whipped Argan Oil Refillable Firming Body Butter",
    price: 36,
    image: "/product-32.webp",
    gallery: ["/product-32.webp", "/product-32_01.webp", "/product-32_02.webp"],
    category: "body",
    description:
      " An air-whipped body butter powered by argan oil that rapidly soaks in to deliver hydration and all-over glow with amber and white musk notes.",
    bullets: [
      "improves hydration and visible elasticity while smoothing the look of fine lines",
      "Improves the look of skin elasticity and firmness.",
      "Moisturizes and soothes for supple-looking skin.",
    ],
  },
  {
    id: "33",
    slug: "the-foaming-body-scrub",
    title: "The Foaming Body Scrub",
    price: 36,
    image: "/product-33.jpeg",
    gallery: ["/product-33.jpeg", "/product-33_01.jpeg", "/product-33_02.jpeg"],
    category: "body",
    description:
      "The Foaming Body Scrub is for those who crave a deeper, more polished performance with rice and sugar exfoliants, papaya enzymes and nourishing oils — leaving your skin glowing, soft and deserving of a standing ovation.",
    bullets: [
      "NATURAL INGREDIENTS",
      "100% RECYCLABLE",
      "EVENS SKIN TONE",
      "NOURISHING OILS",
      "BRIGHTENS SKIN",
      "RICE & SUGAR EXFOLIANT",
    ],
  },
  {
    id: "34",
    slug: "vanilla-verve-nutrient-rich-body-cream",
    title: "Nutrient-Rich Body Cream",
    price: 29,
    image: "/product-34.jpg",
    gallery: ["/product-34.jpg", "/product-34_01.jpg", "/product-34_02.jpg"],
    category: "body",
    description:
      "A rich and indulgent nutrient-enriched body cream that replenishes the skin with intense hydration.",
    bullets: [
      "BANANA FLOWER EXTRACT Naturally rich in prebiotics and antioxidants that hydrate, balance and soothe.",
      "NIACINAMIDE Form of Vitamin B3 known to promote a healthy skin barrier, soften texture, even tone and restore moisture.",
      "PRICKLY PEAR WATER A botanical water rich in bioactives that boost skin's hydration and overall appearance.",
      "ETHYLHEXYL OLIVATE & SQUALANE Derived from upcycled olives that provides nourishing hydration while enhancing sensoriality.",
    ],
  },
  {
    id: "35",
    slug: "osea-hyaluronic-body-serum",
    title: "Hyaluronic Acid Body Serum",
    price: 48,
    image: "/product-35.jpg",
    gallery: ["/product-35.jpg", "/product-35_01.jpg", "/product-35_02.jpg"],
    category: "body",
    description:
      "Clinically proven, lightweight body serum instantly boosts skin’s hydration by 161%. Improves your natural moisture barrier for visibly healthy, smooth skin. Powered by 5 molecular weights of hyaluronic acid, vegan peptides + nutrient-rich seaweed. This full body treatment delivers multi-surface layer hydration for 24 hours. Recognized by the National Eczema Association with the Seal of Acceptance™.",
    bullets: [
      "Instantly boost hydration by 161%*",
      "97% agreed skin looked hydrated",
    ],
  },
  {
    id: "36",
    slug: "B0891843GC",
    title:
      "Pureology Hydrate Shampoo - For Dry or Color-Treated Hair, Intense Hydration & Softness, With Rose Extract & Green Tea, Vegan & Sulfate-Free",
    price: 40,
    image: "/product-36.jpg",
    gallery: ["/product-36.jpg", "/product-36_01.jpg", "/product-36_02.jpg"],
    category: "hair",
    description:
      "Quench dry or color-treated hair with this sulfate-free, intensely moisturizing formula that provides 3X more moisture and 93% easier detangling. Gently cleanses, leaving hair looking soft and radiant.",
    bullets: [
      "Replenishes essential moisture and nourishes very dry, compromised hair.",
      " Ideal for medium or thick hair types.",
    ],
  },
  {
    id: "40",
    slug: "B084F2M6PJ",
    title: "Kristin Ess Deep Clean Clarifying Shampoo for Oily Hair & Build Up",
    price: 65,
    image: "/product-40.jpg",
    gallery: ["/product-40.jpg", "/product-40_01.jpg", "/product-40_02.jpg"],
    category: "hair",
    description:
      "Quench dry or color-treated hair with this sulfate-free, intensely moisturizing formula that provides 3X more moisture and 93% easier detangling. Gently cleanses, leaving hair looking soft and radiant.",
    bullets: [
      "Cleanse + Condition: A clean, well-conditioned canvas is essential. These universal products cleanse + deeply condition to leave hair feeling moisturized, full and looking shiny from root to tip.",
      "For all hair types, Buildup removing, Purifying + volumizing, Shine enhancing, Mineral detoxifying, Super sudsing",
      "How To: Depending on the thickness of your hair, squeeze a dime to quarter-sized amount of shampoo into your palm. Apply to wet hair, massaging into the scalp to create a rich lather. Add more shampoo if desired. Rinse thoroughly and repeat if necessary.",
      "Cruelty free + vegan, free of parabens, phthalates + silicones",
    ],
  },
  {
    id: "41",
    slug: "B07D37PQGL",
    title: "Olaplex No. 4 Bond Maintenance Shampoo",
    price: 105,
    image: "/product-41.jpg",
    gallery: ["/product-41.jpg", "/product-41_01.jpg", "/product-41_02.jpg"],
    category: "hair",
    description:
      "A highly moisturizing, reparative shampoo that leaves hair easy to manage, shiny, and healthier with each use.Cruelty free",
    bullets: [
      "Shining, Anti-Frizz",
      "Strengthening",
      "Softening",
      "Damage Control",
      "Split End Treatment",
    ],
  },
  {
    id: "42",
    slug: "OUAI-Shampoo-Clarifying-Refreshed-Phthalates",
    title: "OUAI Detox Shampoo",
    price: 96,
    image: "/product-42.jpg",
    gallery: [
      "/product-42.jpg",
      "/product-42_01.jpg",
      "/product-42_03.jpg",
      "/product-42_04.jpg",
    ],
    category: "hair",
    description:
      "Clarifying Shampoo for Build Up, Dirt, Oil, Product and Hard Water - Apple Cider Vinegar & Keratin for Clean, Refreshed Hair - Sulfate-Free Hair Care (10 oz)",
    bullets: [
      "Apple Cider Vinegar Shampoo for Itchy Scalp and Product Build Up - Finally, a Detox that doesn’t suck. Get rid of product and hard water buildup, dirt and oil with this 1-2x week clarifying shampoo. Here's your fresh start, see you next week.",
      "Time to Detox - This cleansing shampoo uses chelating agents to help remove heavy metals, minerals, and chlorine found in hard water, which can cause color fading to the hair while apple cider vinegar exfoliates, removing flakes and build-up to restore volume, bounce, and shine.Time to Detox - This cleansing shampoo uses chelating agents to help remove heavy metals, minerals, and chlorine found in hard water, which can cause color fading to the hair while apple cider vinegar exfoliates, removing flakes and build-up to restore volume, bounce, and shine.",
      "OUAI Means Yes - In that casual Parisian way. OUAI is about being better IRL. It's about having honest conversations with our community. It's about letting go of unrealistic expectations and embracing your imperfections.",
      "Made For Effortless Routines - All OUAI hair care products including this sulfate-free shampoo are carefully crafted to cut styling time and nourish your hair health. We put the good stuff in and leave the bad stuff out, without ever sacrificing quality.",
      "Live Life Your OUAI - OUAI offers luxury hair products at affordable prices that are user-friendly — no glam squad needed. Wet your hair, lather up with ACV shampoo and rinse clean. Follow with any OUAI conditioner to soften your squeaky clean strands.",
    ],
  },
  {
    id: "43",
    slug: "amika-Mirrorball-Protect-Antioxidant-Conditioner",
    title: "amika mirrorball high shine + protect antioxidant conditioner",
    price: 121,
    image: "/product-43.jpg",
    gallery: ["/product-43.jpg", "/product-43_01.jpg", "/product-43_02.jpg"],
    category: "hair",
    description:
      "An antioxidant-rich conditioner that boosts brilliant shine, removes pollution buildup, and adds moisture, while protecting color vibrancy.",
    bullets: [
      "Boost brilliant shine by 45% with this antioxidant-rich shampoo. It removes 57% of pollution buildup that would otherwise block an ultra-shiny, smooth, healthy look. It provides lightweight moisture and helps to protect color vibrancy. Ideal for fine-medium hair types. *Shampoo + Conditioner as a system, tested by TRI Princeton July 2022",
    ],
  },
  {
    id: "44",
    slug: "Verb-Ghost-Conditioner-Protect-Detangle",
    title: "VERB Ghost Conditioner",
    price: 98,
    image: "/product-44.jpg",
    gallery: ["/product-44.jpg", "/product-44_01.jpg", "/product-44_02.jpg"],
    category: "hair",
    description:
      "Clinically proven to reduce frizz by 79%* *proven results in a third-party testing lab when using Verb® Ghost Shampoo, Ghost Conditioner, Ghost Mask and Ghost Primer together",
    bullets: [
      "Verb Ghost anti-frizz conditioner softens, detangles, and protects. An ideal lightweight, deep hair conditioner to smooth and nourish Curly, Fine, Coily, Straight, Thick, and Wavy hair.Suggested use Work the deep conditioner through clean, wet hair and leave in for three to five minutes. Rinse the light hair conditioner thoroughly. Follow with Ghost Oil for extra sheen and hydration.",
    ],
  },
  {
    id: "45",
    slug: "Briogeo-Conditioner-Ultra-Hydrating-Hard-Tame",
    title: "Briogeo Curl Charisma Rice Amino + Avocado Hydrating Conditioner",
    price: 104,
    image: "/product-45.jpg",
    gallery: ["/product-45.jpg", "/product-45_01.jpg", "/product-45_02.jpg"],
    category: "hair",
    description:
      "This ultra-hydrating, silicone-free conditioner helps seal the hair cuticle, fight frizz-causing humidity, and enhance moisture retention to support consistent curl formation. It deeply hydrates for a soft, touchable finish.",
    bullets: [
      "Seal in moisture and minimize frizz for enhanced definition of curls, coils, and waves.",
    ],
  },
  {
    id: "46",
    slug: "Stackable-Organizer-Vtopmart-Organizers",
    title: "Vtopmart 4 Pack Clear Small Stackable Storage Drawers",
    price: 143,
    image: "/product-46.jpg",
    gallery: [
      "/product-46.jpg",
      "/product-46_01.jpg",
      "/product-46_02.jpg",
      "/product-46_03.jpg",
    ],
    category: "tools",
    description:
      "Acrylic Bathroom Makeup Organizer,Plastic Storage Bins For Vanity, Undersink, Kitchen Cabinets, Pantry, Home Organization",
    bullets: [
      "[Multi-Purpose Organizers] Small storage drawers help you to organize everywhere in your home. They can be used as organizers and storage for makeup, bathroom countertop, kitchen or laundry under sink, medicine cabinet, pantry, vanity. You can flexibly use our storage organizer for house organization and storage according to your needs.",
      "[Stackable Design] Come with 4 drawer storage organizers, the outside box measures 7.5 'D x 6'W x 4.4'H,the drawer measures 7.1'D x 5.6'W x 3.7'H,it is usable size. Please measure the space of using before purchasing.The storage containers are stackable, vertical storage will save a lot of space. You can also use them side by side. Put your small objects on top of acrylic bins to make your countertop space more tidy.",
      "[Built-in Handle and Non-Slip] The storage containers are designed with pull-out handles, it is convenient for you to store and take out items.Extra silicone pads are included, just stick them on the bottom of the outer box for non-slip,the outer box will not move when the drawer is pulled out,providing you with easy organization and storage.",
    ],
  },
  {
    id: "47",
    slug: "buff-smooth-konjac-sponge-collection",
    title: "Buff & Smooth Konjac Sponge Collection",
    price: 143,
    image: "/product-47.jpg",
    gallery: ["/product-47.jpg", "/product-47_01.jpg", "/product-47_02.jpg"],
    category: "tools",
    description: "best for kitchen use",
    bullets: ["PERFECT STOCKING FILLER"],
  },
  {
    id: "48",
    slug: "clean-conscience-reusable-make-up-remover-pads",
    title: "Clean Conscience Reusable Make-Up Remover Pads",
    price: 143,
    image: "/product-48.jpg",
    gallery: ["/product-48.jpg", "/product-48_01.jpg"],
    category: "tools",
    description:
      "It’ time to reject single use skincare. Cleanse without creating unnecessary waste using our Clean Conscience Reusable Make-Up Remover Pads.Disposable cotton pad alterative. Made with bamboo and organic cotton,Includes 100% organic cotton laundry bag",
    bullets: ["SUPER GENTLE", "REUSABLE", "MACHINE WASHABLE"],
  },
  {
    id: "49",
    slug: "Kitsch-Dermaplaning-Tool-Eyebrow-Dermaplane",
    title:
      "Kitsch Dermaplane Razor for Women Face - Face Razors for Women and Men",
    price: 143,
    image: "/product-49.jpg",
    gallery: ["/product-49.jpg", "/product-49_01.jpg","/product-49_02.jpg"],
    category: "tools",
    description:
      "Face Razors for Women and Men - Eyebrow Trimmer, Shaver, Recycled Plastic Dermaplaning and Skin Care Tool - Terracotta, 12 pcs",
    bullets: ["FACE RAZORS FOR WOMEN AND MEN – GENTLY REMOVE FACIAL HAIR & DEAD SKIN: These precision dermaplane razors for women face are designed to gently remove peach fuzz, unwanted facial hair, and dead skin cells. Promotes smoother skin texture, creating the perfect canvas for makeup and skincare.", "MADE FROM RECYCLED PLASTIC – SUSTAINABLE SKIN CARE TOOLS: Each face razor in this 12-piece set is made with recycled plastic—an eco-conscious choice for those looking to elevate their skincare routine while caring for the planet.", "PROMOTES SKIN REJUVENATION – REDUCES FINE LINES & WRINKLES: Regular dermaplaning helps stimulate collagen production and encourages skin cell renewal. Reduces the appearance of fine lines, wrinkles, and dullness—revealing visibly fresher, more youthful-looking skin."],
  },
];
export const bySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
