import { Product } from '../../types';

export const MASKS: Product[] = [
  {
    id: 'aegis-clay',
    slug: 'clay-purifying-detox-mask',
    stepNumber: 'TREAT / MASK',
    stepCategory: 'CORRECT',
    name: 'AEGIS CLAY',
    subtitle: 'Purifying Mineral Clay Mask',
    formulaSpec: 'FRENCH GREEN CLAY + KAOLIN + 1% ZINC PCA + 1% COLLOIDAL SULFUR',
    category: 'masks',
    concerns: ['oil', 'acne', 'texture'],
    skinTypes: ['Oily', 'Combination', 'Congested Pores', 'Blackhead-Prone'],
    subcategory: 'Detoxifying Mineral Paste',
    price: 649,
    originalPrice: 799,
    rating: 4.9,
    reviewCount: 156,
    volume: '75 g / 2.6 oz.',
    phLevel: 'pH 6.2',
    badges: ['PORE DETOX', 'NON-CRACKING CLAY', '10-MIN PURIFY'],
    shortDescription: 'Creamy, non-drying mineral clay treatment that draws out deep follicular impurities, vacuums oxidized nose sebum, and calms redness without cracking skin.',
    whyItExists: 'Ordinary clay masks dry into hard, brittle shells that strip natural moisture and dehydrate the skin barrier, triggering rebound oiliness. AEGIS CLAY is formulated with French Green Clay and pure Kaolin in a creamy soothing matrix that remains supple while binding deeply to pore impurities.',
    whatItDoes: 'Clears congested blackheads across the nose and chin, absorbs excess sebum deposits, and reduces the size of enlarged pores.',
    benefits: [
      'Absorbs deep pore oil plugs without causing desert-dry cracking or tightness',
      'French Green Clay and Kaolin pull urban pollution and grime from follicles',
      'Colloidal Sulfur and Zinc PCA purify blemish-prone skin and calm swelling'
    ],
    keyActives: [
      {
        name: 'French Green Clay & Kaolin',
        concentration: '20.0%',
        role: 'Porous Mineral Adsorbent',
        mechanism: 'Pulls positively charged pollution particulate and oxidized sebum plugs from follicular pores.'
      },
      {
        name: 'Zinc PCA',
        concentration: '1.0%',
        role: 'Sebum Normalizer',
        mechanism: 'Regulates hyperactive sebaceous glands and mitigates acne flare-ups.'
      },
      {
        name: 'Colloidal Sulfur & Allantoin',
        concentration: '1.0%',
        role: 'Anti-Redness Buffer',
        mechanism: 'Targets follicular bacteria while buffering the skin barrier against irritation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Rich velvety smooth clay cream',
      finish: 'Rinses completely clean, soft matte skin',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, congested, blackhead-prone skin',
      routine: '1–2 times weekly (PM)',
      size: '75 G',
      expectedUse: 'Approximately 20–25 applications'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'APPLY PASTE',
        amountOrTime: 'Even layer',
        instruction: 'Spread an even opaque layer across clean face, focusing on nose, chin, and forehead.'
      },
      {
        stepNumber: '02',
        action: 'REST',
        amountOrTime: '10 minutes',
        instruction: 'Leave on for 10 minutes. It will dry to a comfortable, non-cracking satin layer.'
      },
      {
        stepNumber: '03',
        action: 'RINSE CLEAN',
        amountOrTime: 'Warm water',
        instruction: 'Rinse off thoroughly with lukewarm water and pat dry. Follow with moisturizer.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS WASH', 'AEGIS HYDRA', 'AEGIS CLEAR'],
      useCarefullyWith: ['Do not use strong acid exfoliants on the same evening'],
      explanation: 'Use once or twice weekly as your intensive follicular decongestion treatment.'
    },
    comparison: {
      bestFor: 'Blackheads, nose oiliness, congested pores, pollution buildup',
      texture: 'Smooth non-drying clay paste',
      keyActive: 'French Green Clay + Kaolin + Zinc PCA + Sulfur',
      amUse: false,
      pmUse: true,
      targetSkin: 'Oily, combination, congested'
    },
    completeRoutineItemIds: ['aegis-purify', 'aegis-clay', 'aegis-hydra'],
    completeRoutineDiscount: 350,
    protocolAM: 'Not intended for morning use.',
    protocolPM: 'Apply to clean skin on Sunday or mid-week evenings for a deep pore cleanse.',
    whoItsFor: 'Men with stubborn blackheads on their nose or shiny oily T-zones needing a reset.',
    fullIngredients: 'Aqua, Montmorillonite (French Green Clay), Kaolin, Glycerin, Caprylic/Capric Triglyceride, Zinc PCA (1.0%), Colloidal Sulfur (1.0%), Allantoin, Camellia Sinensis (Green Tea) Leaf Extract, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this leave my skin feeling tight and cracked?',
        answer: 'No! AEGIS CLAY contains botanical glycerin and soothing allantoin to prevent the crusty drying and tightness of cheap clay masks.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-purify', 'aegis-clear', 'aegis-hydra']
  },
  {
    id: 'aegis-hydra-mask',
    slug: 'hydra-mask-barrier-hydration-treatment',
    stepNumber: 'TREAT / MASK',
    stepCategory: 'REPAIR',
    name: 'AEGIS HYDRA MASK',
    subtitle: 'Overnight Barrier & Hydration Mask',
    formulaSpec: '3% BETA GLUCAN + 2% CERAMIDE COMPLEX + 3% PANTHENOL + TREHALOSE',
    category: 'masks',
    concerns: ['dehydration', 'barrier', 'redness', 'aging'],
    skinTypes: ['Dry', 'Very Dry', 'Dehydrated', 'Post-Shave', 'Compromised Skin'],
    subcategory: 'Intensive Cushion Sleep Mask',
    price: 699,
    originalPrice: 849,
    rating: 5.0,
    reviewCount: 142,
    volume: '75 ml / 2.5 fl. oz.',
    phLevel: 'pH 5.6',
    badges: ['INTENSE HYDRATION', 'OVERNIGHT SLEEP MASK', 'BARRIER CUSHION'],
    shortDescription: 'Cushioning leave-on sleep mask that floods parched skin with moisture, heals razor-scraped barriers, and eliminates morning dry flakes.',
    whyItExists: 'During long flights, cold winter weather, or after intense sun exposure, standard moisturizers evaporate too quickly. AEGIS HYDRA MASK acts as a restorative breathable second skin, delivering sustained beta glucan and bio-ceramides all night long.',
    whatItDoes: 'Rehydrates dry, tight skin overnight, reduces post-shave collar burn, and locks in deep water reserves.',
    benefits: [
      '3% Beta Glucan holds 20% more moisture than hyaluronic acid for prolonged plumping',
      'Ceramide complex reinforces the stratum corneum lipid bilayer while you sleep',
      'Non-greasy, pillow-safe balm formula leaves zero residue on bed linens'
    ],
    keyActives: [
      {
        name: 'Beta Glucan (Oat Derived)',
        concentration: '3.0%',
        role: 'Deep Dermal Hydrator',
        mechanism: 'Stimulates macrophage activity to accelerate epidermal repair and deeply plump moisture reserves.'
      },
      {
        name: 'Ceramide NP/AP/EOP Matrix',
        concentration: '2.0%',
        role: 'Intercellular Mortar',
        mechanism: 'Replaces depleted stratum corneum lipids to halt transepidermal moisture leakage.'
      },
      {
        name: 'Panthenol (Pro-Vitamin B5) & Trehalose',
        concentration: '3.0%',
        role: 'Cellular Osmoprotectant',
        mechanism: 'Protects cells from osmotic dehydration stress and rapidly extinguishes razor friction.'
      }
    ],
    beforeYouBuy: {
      texture: 'Rich bouncy cushion cream-gel',
      finish: 'Dewy nourishing veil, absorbs pillow-safe',
      fragrance: 'Fragrance-free',
      skinType: 'Dry, dehydrated, windburned, post-shave irritated skin',
      routine: '2–3 nights weekly or overnight as needed',
      size: '75 ML',
      expectedUse: 'Approximately 30–40 applications'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'APPLY GENEROUSLY',
        amountOrTime: 'Quarter-sized',
        instruction: 'Smooth a generous layer over clean face and neck 20 minutes before sleeping.'
      },
      {
        stepNumber: '02',
        action: 'SLEEP',
        amountOrTime: 'Overnight',
        instruction: 'Allows biomimetic lipids to seep into the epidermal layers overnight.'
      },
      {
        stepNumber: '03',
        action: 'WAKE UP PLUMP',
        amountOrTime: 'Morning rinse',
        instruction: 'Rinse with cool water in the morning to reveal calm, plumped, hydrated skin.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS CALM', 'AEGIS REPAIR', 'AEGIS AFTER'],
      useCarefullyWith: ['None — pure soothing hydrator'],
      explanation: 'Use as your final evening step in place of regular moisturizer when your skin feels especially dry or stressed.'
    },
    comparison: {
      bestFor: 'Flaky dry skin, post-shave neck tightness, travel dehydration, winter dryness',
      texture: 'Bouncy cushion sleep balm',
      keyActive: '3% Beta Glucan + Ceramides + 3% Panthenol',
      amUse: false,
      pmUse: true,
      targetSkin: 'Dry, compromised, dehydrated, irritated'
    },
    completeRoutineItemIds: ['aegis-calm', 'aegis-repair', 'aegis-hydra-mask'],
    completeRoutineDiscount: 360,
    protocolAM: 'Can be used as a 15-minute quick emergency rescue mask on parched post-flight skin.',
    protocolPM: 'Smooth across face before bed 2-3 nights per week to wake up with fully hydrated skin.',
    whoItsFor: 'Men whose skin feels like sandpaper in the morning or who get dry white flakes around the beard line.',
    fullIngredients: 'Aqua, Butylene Glycol, Beta-Glucan (3.0%), Panthenol (3.0%), Ceramide NP, Ceramide AP, Ceramide EOP, Trehalose, Squalane, Sodium Hyaluronate, Allantoin, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this grease up my pillow?',
        answer: 'No. The cushion formula absorbs within 10–15 minutes into a breathable, dry-touch protective veil.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-calm', 'aegis-repair', 'aegis-barrier']
  }
];
