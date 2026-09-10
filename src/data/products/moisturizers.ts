import { Product } from '../../types';

export const MOISTURIZERS: Product[] = [
  {
    id: 'aegis-barrier',
    slug: 'barrier-repair-moisturizer',
    stepNumber: '03 / REPAIR',
    stepCategory: 'REPAIR',
    name: 'AEGIS BARRIER',
    subtitle: 'Barrier Repair Moisturizer',
    formulaSpec: '3:1:1 CERAMIDES NP/AP/EOP + 3% SQUALANE + 2% PANTHENOL',
    category: 'moisturizers',
    concerns: ['dehydration', 'redness', 'barrier'],
    skinTypes: ['Normal', 'Dry', 'Sensitive', 'Post-Shave'],
    subcategory: 'Barrier Comfort Lotion',
    price: 749,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 284,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 5.6',
    badges: ['BESTSELLER', 'POST-SHAVE ESSENTIAL'],
    shortDescription: 'Weightless lipid emulsion that restores the skin barrier after shaving and daily environmental stress.',
    whyItExists: 'Shaving physically scrapes away superficial stratum corneum cells, leaving the skin vulnerable. AEGIS BARRIER delivers biomimetic ceramides, squalane, and panthenol to accelerate recovery without greasy shine.',
    whatItDoes: 'Reinforces the protective moisture barrier, calms razor friction, and delivers long-lasting lightweight comfort.',
    benefits: [
      'Rapidly soothes post-shave razor friction and tight dryness',
      'Non-greasy fluid lotion absorbs in seconds without leaving a heavy film',
      'Biomimetic 3:1:1 ceramides interlock into the lipid matrix'
    ],
    keyActives: [
      {
        name: 'Ceramide Complex (NP, AP, EOP)',
        concentration: '2.5%',
        role: 'Barrier Lipids',
        mechanism: 'Replenishes essential stratum corneum intercellular lipids.'
      },
      {
        name: 'Plant Squalane',
        concentration: '3.0%',
        role: 'Biomimetic Sebum Sealant',
        mechanism: 'Prevents transepidermal water loss while remaining non-comedogenic.'
      },
      {
        name: 'Panthenol (Pro-Vitamin B5)',
        concentration: '2.0%',
        role: 'Deep Hydration & Soothing',
        mechanism: 'Soothes razor burn and supports epidermal regeneration.'
      }
    ],
    beforeYouBuy: {
      texture: 'Weightless silky comfort lotion',
      finish: 'Natural satin, non-greasy',
      fragrance: 'Fragrance-free',
      skinType: 'Normal, dry, sensitive, post-shave skin',
      routine: 'AM & PM (Step 03)',
      size: '50 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '1–2 pumps',
        instruction: 'Dispense 1 to 2 pumps into fingertips.'
      },
      {
        stepNumber: '02',
        action: 'SMOOTH',
        amountOrTime: 'Face & neck',
        instruction: 'Smooth gently over face and shaved areas of neck and jawline.'
      },
      {
        stepNumber: '03',
        action: 'PRESS',
        amountOrTime: '15 seconds',
        instruction: 'Press palms against skin to encourage lipid penetration.'
      }
    ],
    compatibility: {
      worksWellWith: ['Salicylic Acid', 'Niacinamide', 'Retinoids', 'SPF 50'],
      useCarefullyWith: ['None — universally compatible barrier base'],
      explanation: 'Biomimetic ceramides and squalane support barrier recovery without blocking pores.'
    },
    comparison: {
      bestFor: 'Razor burn, flakiness, tightness, dehydrated barrier',
      texture: 'Ultra-light fluid lotion',
      keyActive: '3:1:1 Ceramides + Squalane + Panthenol',
      amUse: true,
      pmUse: true,
      targetSkin: 'Normal to dry, sensitive, razor-irritated'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-barrier', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Apply 1 pump to face and neck if extra moisture is needed, followed by sunscreen.',
    protocolPM: 'Apply 2 pumps evenly as your evening restorative step after serum or shaving.',
    whoItsFor: 'Men dealing with dry flaking, razor irritation, tightness, or compromised skin barriers.',
    fullIngredients: 'Aqua, Caprylic/Capric Triglyceride, Vegetable Squalane (3.0%), Panthenol (2.0%), Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Polyglutamic Acid, Glycerin, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum, Phenoxyethanol.',
    faqList: [
      {
        question: 'Is this heavy or greasy in humid weather?',
        answer: 'No. It is formulated as a light fluid emulsion that absorbs cleanly in seconds without any greasy residue.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611078449492-5743b35be9bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-clear', 'aegis-shield']
  },
  {
    id: 'aegis-hydra',
    slug: 'hydra-lightweight-gel-moisturizer',
    stepNumber: '03 / REPAIR',
    stepCategory: 'REPAIR',
    name: 'AEGIS HYDRA',
    subtitle: 'Lightweight Gel Moisturizer',
    formulaSpec: 'OIL-FREE WATER GEL + 2% HYALURONIC + 3% NIACINAMIDE',
    category: 'moisturizers',
    concerns: ['oil', 'dehydration', 'acne'],
    skinTypes: ['Oily', 'Combination', 'Hot/Humid Climates'],
    subcategory: 'Oil-Free Water Gel',
    price: 699,
    originalPrice: 799,
    rating: 4.8,
    reviewCount: 220,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 5.8',
    badges: ['OIL-FREE', 'WEIGHTLESS COOLING'],
    shortDescription: 'Ultra-light water gel that bursts into instant hydration without heaviness, grease, or clogging.',
    whyItExists: 'In hot and humid climates or for naturally oily skin, heavy creams cause clogged pores and excessive shine. AEGIS HYDRA provides intense humectant hydration through hyaluronic acid and niacinamide in a 100% oil-free matrix.',
    whatItDoes: 'Delivers a cooling burst of hydration, refines the look of pores, and dries down to an imperceptible matte finish.',
    benefits: [
      '100% oil-free formula will not clog pores or trigger breakouts',
      'Provides an instant cooling sensation ideal after workouts or hot commutes',
      'Niacinamide balances mid-day surface oil while maintaining moisture'
    ],
    keyActives: [
      {
        name: 'Hyaluronic Acid Micro-Complex',
        concentration: '2.0%',
        role: 'Humectant Water Magnet',
        mechanism: 'Binds up to 1000x its weight in water to plump epidermal cells.'
      },
      {
        name: 'Niacinamide',
        concentration: '3.0%',
        role: 'Sebum & Pore Balancer',
        mechanism: 'Keeps pore openings refined and reduces afternoon greasy shine.'
      },
      {
        name: 'Centella Asiatica Water',
        concentration: '5.0%',
        role: 'Heat & Redness Soother',
        mechanism: 'Cools surface facial temperature and calms inflammation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Translucent watery jelly',
      finish: 'Weightless clean matte, zero residue',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, very oily, combination, humid weather',
      routine: 'AM & PM (Step 03)',
      size: '50 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'SCOOP',
        amountOrTime: 'Nickel-sized',
        instruction: 'Dispense a nickel-sized amount onto fingers.'
      },
      {
        stepNumber: '02',
        action: 'APPLY',
        amountOrTime: 'Quick spread',
        instruction: 'Spread across face; it instantly breaks into a cooling water texture.'
      },
      {
        stepNumber: '03',
        action: 'MATTE',
        amountOrTime: '10 seconds',
        instruction: 'Absorbs fully in 10 seconds leaving zero tackiness.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS CLEAR', 'AEGIS PURIFY', 'AEGIS SHIELD MATTE'],
      useCarefullyWith: ['None — pure oil-free gel'],
      explanation: 'Pairs flawlessly under sunscreens and over clarifying serums.'
    },
    comparison: {
      bestFor: 'Oily skin, humidity, post-workout cooling, zero shine',
      texture: 'Cooling translucent water-gel',
      keyActive: 'Hyaluronic Acid + 3% Niacinamide',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, combination, hot climates'
    },
    completeRoutineItemIds: ['aegis-purify', 'aegis-clear', 'aegis-hydra'],
    completeRoutineDiscount: 320,
    protocolAM: 'Apply after serum. Provides weightless all-day hydration under sunscreen.',
    protocolPM: 'Apply after cleansing to wake up with balanced, non-greasy skin.',
    whoItsFor: 'Men who hate the feeling of face creams or live in warm, humid cities.',
    fullIngredients: 'Aqua, Centella Asiatica Leaf Water (5.0%), Glycerin, Niacinamide (3.0%), Sodium Hyaluronate, Betaine, Allantoin, Carbomer, Sodium Hydroxide, 1,2-Hexanediol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this make me look shiny?',
        answer: 'No. It is 100% oil-free and dries to an invisible matte finish that actually helps control shine.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1556228720-1c2be2414d8c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-1c2be2414d8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-purify', 'aegis-clear', 'aegis-shield-matte']
  },
  {
    id: 'aegis-recover',
    slug: 'recover-overnight-recovery-cream',
    stepNumber: '03 / REPAIR',
    stepCategory: 'REPAIR',
    name: 'AEGIS RECOVER',
    subtitle: 'Overnight Recovery Cream',
    formulaSpec: 'MULTI-PEPTIDES + CERAMIDES + SQUALANE + ADAPTOGENS',
    category: 'moisturizers',
    concerns: ['aging', 'dehydration', 'barrier'],
    skinTypes: ['Normal', 'Dry', 'Fatigued', 'Mature'],
    subcategory: 'Night Recovery Treatment',
    price: 849,
    originalPrice: 999,
    rating: 4.9,
    reviewCount: 162,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 5.5',
    badges: ['NIGHT RENEWAL', 'PEPTIDE POWER'],
    shortDescription: 'Intensive nocturnal repair cream that accelerates cellular recovery while you sleep so you wake up rested.',
    whyItExists: 'During deep sleep, epidermal blood flow increases and cellular regeneration peaks. AEGIS RECOVER feeds this recovery window with collagen-signaling peptides, biomimetic ceramides, and botanical adaptogens to reverse daily environmental wear.',
    whatItDoes: 'Deeply restores barrier lipids, improves skin elasticity, and softens signs of fatigue and stress lines.',
    benefits: [
      'Peptide matrix supports natural overnight collagen synthesis',
      'Ceramides and squalane lock in moisture for 12+ hours',
      'Wake up with energized, firm, and fully hydrated skin'
    ],
    keyActives: [
      {
        name: 'Matrixyl 3000 Peptide Complex',
        concentration: '3.0%',
        role: 'Cellular Messenger',
        mechanism: 'Stimulates extracellular matrix production and cellular remodeling.'
      },
      {
        name: '3:1:1 Biomimetic Ceramides',
        concentration: '2.0%',
        role: 'Overnight Barrier Shield',
        mechanism: 'Prevents nocturnal transepidermal water loss during sleep.'
      },
      {
        name: 'Ashwagandha Extract',
        concentration: '1.0%',
        role: 'Adaptogenic Stress Shield',
        mechanism: 'Mitigates cellular cortisol impact and revives exhausted skin.'
      }
    ],
    beforeYouBuy: {
      texture: 'Rich comforting velvety balm-cream',
      finish: 'Nourished, restorative cushion',
      fragrance: 'Fragrance-free',
      skinType: 'Normal, dry, fatigued, aging skin',
      routine: 'PM Only (Final Step)',
      size: '50 ML',
      expectedUse: 'Approximately 60 nights'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'EVENING DISPENSE',
        amountOrTime: 'Dime-sized',
        instruction: 'Warm between palms 30 minutes before bed.'
      },
      {
        stepNumber: '02',
        action: 'MASSAGE',
        amountOrTime: 'Face & neck',
        instruction: 'Massage upward across cheeks, forehead, and jawline.'
      },
      {
        stepNumber: '03',
        action: 'SLEEP',
        amountOrTime: 'Overnight',
        instruction: 'Absorbs cleanly into pillow-safe velvet finish.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS CLEAR', 'AEGIS HYDRATE', 'AEGIS EYE'],
      useCarefullyWith: ['None — night repair booster'],
      explanation: 'Use as your final evening step to seal in all prior active serums.'
    },
    comparison: {
      bestFor: 'Fatigued skin, sleep deprivation, aging signs, night restoration',
      texture: 'Rich non-greasy night cream',
      keyActive: 'Peptides + Ceramides + Ashwagandha',
      amUse: false,
      pmUse: true,
      targetSkin: 'Normal to dry, fatigued, 30+'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-hydrate', 'aegis-recover'],
    completeRoutineDiscount: 350,
    protocolAM: 'Not intended for daytime use due to its rich restorative lipid profile.',
    protocolPM: 'Massage 1-2 pumps as the final step of your nighttime protocol before sleeping.',
    whoItsFor: 'Men who work late hours, travel frequently, or want to combat fine lines and dull fatigue.',
    fullIngredients: 'Aqua, Butyrospermum Parkii (Shea) Butter, Caprylic/Capric Triglyceride, Vegetable Squalane, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Ceramide NP, Ceramide AP, Ceramide EOP, Withania Somnifera (Ashwagandha) Root Extract, Sodium Hyaluronate, Tocopherol, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this stain my pillowcase?',
        answer: 'No. It is non-greasy and absorbs into a velvety cushion within 5 minutes.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1611078449492-5743b35be9bd?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611078449492-5743b35be9bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-1c2be2414d8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-hydrate', 'aegis-eye']
  },
  {
    id: 'aegis-matte',
    slug: 'matte-oil-control-moisturizer',
    stepNumber: '03 / REPAIR',
    stepCategory: 'REPAIR',
    name: 'AEGIS MATTE',
    subtitle: 'Oil-Control Matte Moisturizer',
    formulaSpec: '3% SILICA AEROGEL + 4% NIACINAMIDE + 1% ZINC PCA + GREEN TEA',
    category: 'moisturizers',
    concerns: ['oil', 'acne', 'dehydration'],
    skinTypes: ['Oily', 'Very Oily', 'Combination', 'Hot/Humid Climates'],
    subcategory: 'Shine-Free Balancing Emulsion',
    price: 699,
    originalPrice: 849,
    rating: 4.9,
    reviewCount: 198,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 5.5',
    badges: ['8-HR SHINE CONTROL', 'POWDER-SOFT MATTE'],
    shortDescription: 'Advanced sebum-absorbing moisturizer that hydrates dehydrated deeper layers while leaving the surface skin completely shine-free and powdery soft.',
    whyItExists: 'Oily skin often overproduces sebum because aggressive cleansers strip moisture, triggering a compensatory grease slick. AEGIS MATTE balances moisture deep within while porous silica aerogels continuously trap surface oil throughout the day.',
    whatItDoes: 'Locks in lightweight oil-free moisture, controls T-zone shine for up to 8 hours, and tightens the visible look of oil-stretched pores.',
    benefits: [
      'Controls midday forehead and nose grease without feeling chalky or tight',
      'Porous silica aerogel traps up to 4x its weight in excess facial sebum',
      'Green tea polyphenols and Zinc PCA calm inflammatory acne triggers'
    ],
    keyActives: [
      {
        name: 'Oil-Capturing Silica Aerogel',
        concentration: '3.0%',
        role: 'Sebum Micro-Trap',
        mechanism: 'Porous mineral network that absorbs surface lipid secretions continuously.'
      },
      {
        name: 'Niacinamide (Vitamin B3)',
        concentration: '4.0%',
        role: 'Sebaceous Flow Regulator',
        mechanism: 'Regulates follicular sebum excretion rate and tightens pore elasticity.'
      },
      {
        name: 'Zinc PCA + Green Tea',
        concentration: '1.5%',
        role: 'Antioxidant Anti-Shine Shield',
        mechanism: 'Neutralizes oxidized sebum and calms localized inflammatory redness.'
      }
    ],
    beforeYouBuy: {
      texture: 'Feather-light whipped cream-gel',
      finish: 'Zero-shine powdery matte',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, very oily, combination, humid city weather',
      routine: 'AM & PM (Step 03)',
      size: '50 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '1 pump',
        instruction: 'Dispense one pump onto fingertips.'
      },
      {
        stepNumber: '02',
        action: 'SPREAD',
        amountOrTime: 'Face & Neck',
        instruction: 'Distribute across forehead, nose, cheeks, and jawline.'
      },
      {
        stepNumber: '03',
        action: 'MATTE SET',
        amountOrTime: '15 seconds',
        instruction: 'Dries down within 15 seconds to a smooth, shine-free finish.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS PURIFY', 'AEGIS CLEAR', 'AEGIS SHIELD MATTE'],
      useCarefullyWith: ['Do not mix with facial oils before application'],
      explanation: 'Formulated to maintain a non-greasy matte film under sunscreen.'
    },
    comparison: {
      bestFor: 'Excess shine, oily forehead, afternoon greasiness, hot weather',
      texture: 'Whipped matte cream-gel',
      keyActive: '3% Silica Aerogel + 4% Niacinamide + Zinc PCA',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, very oily, shiny combination'
    },
    completeRoutineItemIds: ['aegis-purify', 'aegis-clear', 'aegis-matte', 'aegis-shield-matte'],
    completeRoutineDiscount: 420,
    protocolAM: 'Apply 1 pump as your morning hydrator. Follow with AEGIS SHIELD MATTE SPF 50.',
    protocolPM: 'Apply after serums to control overnight oiliness and wake up matte.',
    whoItsFor: 'Men who experience greasy foreheads, shiny noses in photographs, or live in hot humid climates.',
    fullIngredients: 'Aqua, Silica, Niacinamide (4.0%), Glycerin, Zinc PCA (1.0%), Camellia Sinensis (Green Tea) Leaf Extract, Sodium Hyaluronate, Allantoin, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this make my skin feel dry and tight?',
        answer: 'No. Unlike alcohol-heavy astringents, AEGIS MATTE hydrates skin with hyaluronic acid while porous silica controls only surface grease.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1629198725699-317fb57375a0?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611078449492-5743b35be9bd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-purify', 'aegis-clear', 'aegis-shield-matte']
  }
];
