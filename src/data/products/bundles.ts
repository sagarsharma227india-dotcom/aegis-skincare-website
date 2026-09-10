import { Product } from '../../types';

export const BUNDLES: Product[] = [
  {
    id: 'aegis-starter-bundle',
    slug: 'starter-routine-system',
    stepNumber: 'BUNDLE / 01',
    stepCategory: 'ROUTINE',
    name: 'THE AEGIS STARTER KIT',
    subtitle: 'Essential 3-Step Daily Protocol',
    formulaSpec: 'WASH (150ml) + BARRIER (50ml) + SHIELD SPF 50 (50ml)',
    category: 'bundles',
    concerns: ['oil', 'dehydration', 'aging', 'sun'],
    skinTypes: ['All Skin Types', 'Normal', 'Combination'],
    subcategory: 'Complete Routine Bundle',
    price: 1899,
    originalPrice: 2197,
    rating: 5.0,
    reviewCount: 528,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Physiological pH Matched',
    badges: ['SAVE ₹298', 'MOST POPULAR', 'STARTER CHOICE'],
    shortDescription: 'The foundational everyday triad: Cleanse, Repair, and Defend in less than 2 minutes each morning and night.',
    whyItExists: 'Healthy skin doesn’t require a shelf full of confusing products. This 3-step system delivers everything men need for clear, resilient, and protected skin.',
    whatItDoes: 'Gently cleanses away daily grime, restores skin barrier lipids post-shave, and provides invisible broad-spectrum SPF 50 defense.',
    benefits: [
      'Covers your complete morning (90 sec) and evening (60 sec) routine',
      'Saves ₹298 compared to purchasing items individually',
      'Includes full-size WASH (150ml), BARRIER (50ml), and SHIELD (50ml)'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS WASH',
        concentration: '150 ml',
        role: 'Gentle Cleanse',
        mechanism: 'Apple amino acids preserve barrier pH 5.5.'
      },
      {
        name: 'Step 2: AEGIS BARRIER',
        concentration: '50 ml',
        role: 'Lipid Repair',
        mechanism: '3:1:1 Ceramides and Squalane soothe and moisturize.'
      },
      {
        name: 'Step 3: AEGIS SHIELD',
        concentration: '50 ml',
        role: 'Daily Defend',
        mechanism: 'SPF 50 PA++++ zero-cast invisible sunscreen.'
      }
    ],
    beforeYouBuy: {
      texture: 'Cohesive 3-step ritual: Gel + Comfort Lotion + Sun Fluid',
      finish: 'Comfortable natural satin matte',
      fragrance: '100% Fragrance-free',
      skinType: 'All skin types, beginners, everyday users',
      routine: 'Full AM & PM Protocol',
      size: '150ml + 50ml + 50ml',
      expectedUse: 'Approximately 60–75 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'AM / PM CLEANSE',
        amountOrTime: '30 sec',
        instruction: 'Lather AEGIS WASH with water and cleanse thoroughly.'
      },
      {
        stepNumber: '02',
        action: 'REPAIR',
        amountOrTime: '1 pump',
        instruction: 'Apply AEGIS BARRIER to face and shaved neck.'
      },
      {
        stepNumber: '03',
        action: 'AM DEFEND',
        amountOrTime: '2 fingers',
        instruction: 'Apply AEGIS SHIELD SPF 50 as the morning top layer.'
      }
    ],
    compatibility: {
      worksWellWith: ['Universal compatibility'],
      useCarefullyWith: ['None'],
      explanation: 'Scientifically designed as a unified, synergistic daily system.'
    },
    comparison: {
      bestFor: 'Everyday skin health, post-shave comfort, and daily UV defense',
      texture: 'Harmonized 3-step protocol',
      keyActive: 'Amino Acids + 3:1:1 Ceramides + SPF 50',
      amUse: true,
      pmUse: true,
      targetSkin: 'All skin types'
    },
    protocolAM: 'WASH (30s) → BARRIER (1 pump if dry) → SHIELD SPF 50 (2 fingers).',
    protocolPM: 'WASH (30s) → BARRIER (2 pumps across face & neck).',
    whoItsFor: 'Men who want an effortless, high-performance skincare routine with zero confusion.',
    fullIngredients: 'Refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'How long does this kit last?',
        answer: 'Approximately 60 to 75 days of twice-daily recommended usage.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1696497327672-2bdce2e033dd?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-wash', 'aegis-barrier', 'aegis-shield']
  },
  {
    id: 'aegis-clear-routine',
    slug: 'clear-routine-bundle',
    stepNumber: 'BUNDLE / 02',
    stepCategory: 'ROUTINE',
    name: 'AEGIS CLEAR ROUTINE',
    subtitle: 'Pore Clarifying & Oil-Control Trio',
    formulaSpec: 'WASH (150ml) + CLEAR SERUM (30ml) + SHIELD SPF 50 (50ml)',
    category: 'bundles',
    concerns: ['acne', 'oil', 'redness', 'sun'],
    skinTypes: ['Oily', 'Combination', 'Acne-Prone'],
    subcategory: 'Anti-Acne Routine Bundle',
    price: 1849,
    originalPrice: 2147,
    rating: 4.9,
    reviewCount: 384,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Physiological pH Matched',
    badges: ['SAVE ₹298', 'OIL CONTROL', 'CLINICAL BHA'],
    shortDescription: 'Targeted daily regimen for men battling stubborn blackheads, midday shine, and frequent breakouts.',
    whyItExists: 'Acne and excessive shine require consistent follicular decongestion. This trio delivers gentle daily cleansing, high-potency BHA and Niacinamide, and zero-grease sun defense.',
    whatItDoes: 'Clears clogged pores, regulates sebum production, and shields skin against UV-induced post-blemish dark marks.',
    benefits: [
      'Dissolves pore-clogging sebum and prevents blackheads',
      'Balances shiny T-zones without dehydrating skin',
      'Protects acne-prone skin with zero pore-clogging sunscreen'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS WASH',
        concentration: '150 ml',
        role: 'Purifying Cleanse',
        mechanism: 'Apple amino acids lift surface grease.'
      },
      {
        name: 'Step 2: AEGIS CLEAR',
        concentration: '30 ml',
        role: 'Pore Decongestion',
        mechanism: '2% BHA + 10% Niacinamide + 1% Zinc PCA.'
      },
      {
        name: 'Step 3: AEGIS SHIELD',
        concentration: '50 ml',
        role: 'Clean Matte Defend',
        mechanism: 'SPF 50 PA++++ non-comedogenic fluid.'
      }
    ],
    beforeYouBuy: {
      texture: 'Lightweight clarifying protocol: Gel + Water Serum + Fluid SPF',
      finish: 'Clean matte throughout the day',
      fragrance: '100% Fragrance-free',
      skinType: 'Oily, congested, acne-prone skin',
      routine: 'Full AM & PM Daily Protocol',
      size: '150ml + 30ml + 50ml',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'AM CLEANSE',
        amountOrTime: '30 sec',
        instruction: 'Wash with AEGIS WASH and pat dry.'
      },
      {
        stepNumber: '02',
        action: 'AM CORRECT',
        amountOrTime: '2 drops',
        instruction: 'Press 2 drops of CLEAR into oily zones.'
      },
      {
        stepNumber: '03',
        action: 'AM DEFEND',
        amountOrTime: '2 fingers',
        instruction: 'Seal with AEGIS SHIELD SPF 50.'
      }
    ],
    compatibility: {
      worksWellWith: ['Synergistic acne defense'],
      useCarefullyWith: ['Physical scrub brushes'],
      explanation: 'Formulated to clear skin gently without barrier peeling.'
    },
    comparison: {
      bestFor: 'Oily shine, blackheads, breakouts, clogged pores',
      texture: 'Weightless matte clarifying trio',
      keyActive: 'Amino Acids + 2% BHA/10% Niacinamide + SPF 50',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, combination, breakout-prone'
    },
    protocolAM: 'WASH (30s) → CLEAR (2 drops) → SHIELD SPF 50 (2 finger lengths).',
    protocolPM: 'WASH (30s) → CLEAR (3 drops across face).',
    whoItsFor: 'Men dealing with forehead shine, clogged nose pores, or regular breakouts.',
    fullIngredients: 'Refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'Will this dry out my cheeks?',
        answer: 'No. AEGIS CLEAR is balanced with 10% niacinamide and hyaluronic acid to preserve moisture while controlling shine.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield']
  },
  {
    id: 'aegis-bright-routine',
    slug: 'bright-routine-bundle',
    stepNumber: 'BUNDLE / 03',
    stepCategory: 'ROUTINE',
    name: 'AEGIS BRIGHT ROUTINE',
    subtitle: 'Dark Spot & Even Tone System',
    formulaSpec: 'WASH (150ml) + BRIGHT SERUM (30ml) + SHIELD SPF 50 (50ml)',
    category: 'bundles',
    concerns: ['dark-spots', 'aging', 'sun'],
    skinTypes: ['All Skin Types', 'Hyperpigmentation', 'Sun Damage'],
    subcategory: 'Tone Correcting Bundle',
    price: 1949,
    originalPrice: 2247,
    rating: 4.9,
    reviewCount: 226,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Physiological pH Matched',
    badges: ['SAVE ₹298', 'FADES DARK MARKS'],
    shortDescription: 'Clinical tone-correcting system designed to fade persistent acne marks and sun spots while preventing new discoloration.',
    whyItExists: 'Post-blemish marks and sun spots require active pigment inhibition combined with strict broad-spectrum UV protection. This routine provides the clinical trio needed to visibly clear discoloration.',
    whatItDoes: 'Fades stubborn dark marks, evens out blotchy skin tone, and locks in high-level UVA/UVB photoprotection.',
    benefits: [
      'Alpha Arbutin and Tranexamic Acid fade melanin clusters',
      'SPF 50 prevents UV rays from re-darkening existing spots',
      'Improves overall facial clarity and radiance'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS WASH',
        concentration: '150 ml',
        role: 'Cleanse & Prep',
        mechanism: 'Apple amino acids optimize active absorption.'
      },
      {
        name: 'Step 2: AEGIS BRIGHT',
        concentration: '30 ml',
        role: 'Tone Correction',
        mechanism: '2% Alpha Arbutin + 3% Tranexamic Acid + 5% Niacinamide.'
      },
      {
        name: 'Step 3: AEGIS SHIELD',
        concentration: '50 ml',
        role: 'Photoprotection',
        mechanism: 'SPF 50 PA++++ blocks UV pigment reactivation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silk-touch clarifying trio',
      finish: 'Even, luminous satin matte',
      fragrance: '100% Fragrance-free',
      skinType: 'All skin types, dark spots, sun discoloration',
      routine: 'Full AM & PM Tone Protocol',
      size: '150ml + 30ml + 50ml',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'AM CLEANSE',
        amountOrTime: '30 sec',
        instruction: 'Wash with AEGIS WASH and pat dry.'
      },
      {
        stepNumber: '02',
        action: 'AM BRIGHTEN',
        amountOrTime: '2–3 drops',
        instruction: 'Press AEGIS BRIGHT into dark spots and face.'
      },
      {
        stepNumber: '03',
        action: 'AM PROTECT',
        amountOrTime: '2 fingers',
        instruction: 'Apply AEGIS SHIELD SPF 50 diligently every morning.'
      }
    ],
    compatibility: {
      worksWellWith: ['Synergistic depigmenting protocol'],
      useCarefullyWith: ['Never skip sunscreen when using brightening serums'],
      explanation: 'Sun protection is essential to prevent rebound pigmentation.'
    },
    comparison: {
      bestFor: 'Dark acne marks, sun spots, blotchy tone, dull complexion',
      texture: 'Silk-touch tone correcting trio',
      keyActive: 'Amino Acids + Alpha Arbutin/Tranexamic + SPF 50',
      amUse: true,
      pmUse: true,
      targetSkin: 'All types with hyperpigmentation'
    },
    protocolAM: 'WASH (30s) → BRIGHT (2 drops) → SHIELD SPF 50 (2 fingers).',
    protocolPM: 'WASH (30s) → BRIGHT (3 drops across face & dark spots).',
    whoItsFor: 'Men with dark marks left behind after pimples heal or brown sun spots from driving and sports.',
    fullIngredients: 'Refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'How long until I see dark spots fade?',
        answer: 'Visible lightening typically begins in 4 to 6 weeks of daily twice-a-day application paired with consistent SPF 50.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-wash', 'aegis-bright', 'aegis-shield']
  },
  {
    id: 'aegis-barrier-reset',
    slug: 'barrier-reset-bundle',
    stepNumber: 'BUNDLE / 04',
    stepCategory: 'ROUTINE',
    name: 'AEGIS BARRIER RESET',
    subtitle: 'Intensive Barrier Recovery Protocol',
    formulaSpec: 'CALM (150ml) + REPAIR SERUM (30ml) + BARRIER (50ml)',
    category: 'bundles',
    concerns: ['barrier', 'redness', 'dehydration'],
    skinTypes: ['Compromised', 'Sensitive', 'Dry', 'Stinging'],
    subcategory: 'Barrier Reconstruction Bundle',
    price: 1899,
    originalPrice: 2197,
    rating: 5.0,
    reviewCount: 172,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Physiological pH Matched',
    badges: ['SAVE ₹298', 'ZERO STING', 'CLINICAL REPAIR'],
    shortDescription: 'Emergency rebuilding regimen for over-exfoliated, stinging, or chronically dry and damaged skin barriers.',
    whyItExists: 'When the stratum corneum is breached, skin stings, turns red, and loses water rapidly. This non-foaming, lipid-replenishing trio reconstructs the moisture barrier from the ground up.',
    whatItDoes: 'Stops stinging sensations, replenishes physiological 3:1:1 ceramides, and deeply calms persistent redness.',
    benefits: [
      '100% non-foaming, zero-sting formula relieves burning sensations',
      'Supplies bio-identical ceramides, cholesterol, and madecassoside',
      'Restores skin softness and barrier resilience within 7 days'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS CALM',
        concentration: '150 ml',
        role: 'Non-Foaming Cleanse',
        mechanism: 'Ceramides + Colloidal Oat clean without stripping.'
      },
      {
        name: 'Step 2: AEGIS REPAIR',
        concentration: '30 ml',
        role: 'Intensive Rebuilding',
        mechanism: '3:1:1 Ceramides + Madecassoside + Panthenol.'
      },
      {
        name: 'Step 3: AEGIS BARRIER',
        concentration: '50 ml',
        role: 'Lipid Seal',
        mechanism: 'Ceramides + Squalane lock in moisture.'
      }
    ],
    beforeYouBuy: {
      texture: 'Ultra-gentle restorative protocol: Cream Cleanser + Milky Serum + Comfort Lotion',
      finish: 'Cushioned calm, zero tightness',
      fragrance: '100% Fragrance-free',
      skinType: 'Compromised, reactive, stinging, post-peel skin',
      routine: 'Full AM & PM Recovery Protocol',
      size: '150ml + 30ml + 50ml',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'CALM CLEANSE',
        amountOrTime: 'Gentle wash',
        instruction: 'Cleanse gently with non-foaming AEGIS CALM and rinse cool.'
      },
      {
        stepNumber: '02',
        action: 'REPAIR SERUM',
        amountOrTime: '3–4 drops',
        instruction: 'Pat AEGIS REPAIR gently onto red and stinging areas.'
      },
      {
        stepNumber: '03',
        action: 'SEAL BARRIER',
        amountOrTime: '2 pumps',
        instruction: 'Smooth AEGIS BARRIER over entire face and neck.'
      }
    ],
    compatibility: {
      worksWellWith: ['Emergency barrier recovery'],
      useCarefullyWith: ['Do not use BHA, AHA, or retinoids during reset period'],
      explanation: 'Pause all active exfoliating acids for 2 weeks while the barrier recovers.'
    },
    comparison: {
      bestFor: 'Stinging skin, over-exfoliation, chronic peeling, extreme sensitivity',
      texture: 'Gentle milky barrier reconstruction trio',
      keyActive: 'Ceramides + Madecassoside + Squalane',
      amUse: true,
      pmUse: true,
      targetSkin: 'Compromised, reactive, dry, damaged'
    },
    protocolAM: 'CALM wash → REPAIR (2 drops) → BARRIER (1 pump). Follow with sunscreen.',
    protocolPM: 'CALM wash → REPAIR (4 drops) → BARRIER (2 pumps for overnight recovery).',
    whoItsFor: 'Men whose skin stings from basic water, is peeling red, or feels raw from shaving.',
    fullIngredients: 'Refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'Will any of these products sting on raw skin?',
        answer: 'No. Every formula in this kit is formulated strictly free of fragrance, essential oils, and drying alcohols to eliminate stinging.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-calm', 'aegis-repair', 'aegis-barrier']
  },
  {
    id: 'aegis-shaving-recovery',
    slug: 'shaving-recovery-routine',
    stepNumber: 'BUNDLE / 05',
    stepCategory: 'ROUTINE',
    name: 'THE SHAVING + RECOVERY ROUTINE',
    subtitle: 'Post-Shave Comfort & Barrier Defense',
    formulaSpec: 'WASH (150ml) + AFTER (50ml) + BARRIER (50ml)',
    category: 'bundles',
    concerns: ['redness', 'barrier', 'dehydration'],
    skinTypes: ['All Shaving Men', 'Razor Burn Prone', 'Sensitive Neck'],
    subcategory: 'Grooming Recovery Bundle',
    price: 1649,
    originalPrice: 1947,
    rating: 5.0,
    reviewCount: 349,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Physiological pH Matched',
    badges: ['SAVE ₹298', 'RAZOR BURN CURE', 'ZERO STING'],
    shortDescription: 'The definitive anti-razor burn system engineered to soften facial stubble before shaving and eliminate redness and burning after.',
    whyItExists: 'Every razor stroke scrapes away healthy skin cells along with facial stubble. This routine prepares skin with amino acids, instantly extinguishes post-shave heat with bisabolol, and seals microscopic abrasions with ceramides.',
    whatItDoes: 'Eliminates razor burn, soothes post-shave heat within seconds, and prevents razor bumps and razor irritation.',
    benefits: [
      'AEGIS WASH softens beard stubble for a smoother, friction-free shave',
      'AEGIS AFTER delivers 100% alcohol-free soothing with zero sting',
      'AEGIS BARRIER replenishes stripped lipids across the neck and jawline'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS WASH',
        concentration: '150 ml',
        role: 'Stubble Prep',
        mechanism: 'Amino acids soften facial stubble and cleanse pores.'
      },
      {
        name: 'Step 2: AEGIS AFTER',
        concentration: '50 ml',
        role: 'Instant Firefighter',
        mechanism: '1% Bisabolol + 3% Panthenol neutralizes razor burn.'
      },
      {
        name: 'Step 3: AEGIS BARRIER',
        concentration: '50 ml',
        role: 'Collar Protection',
        mechanism: '3:1:1 Ceramides seal micro-cuts and abrasions.'
      }
    ],
    beforeYouBuy: {
      texture: 'Shaving comfort protocol: Purifying Foam + Soothing Milk-Serum + Barrier Fluid',
      finish: 'Ultra-calm, zero redness, non-greasy',
      fragrance: '100% Fragrance-free',
      skinType: 'All men who shave with razors or electric trimmers',
      routine: 'Pre- and Post-Shave Protocol',
      size: '150ml + 50ml + 50ml',
      expectedUse: 'Approximately 60 shaves'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'PRE-SHAVE WASH',
        amountOrTime: '60 sec',
        instruction: 'Wash with AEGIS WASH using warm water to soften beard bristles.'
      },
      {
        stepNumber: '02',
        action: 'POST-SHAVE AFTER',
        amountOrTime: '2 pumps',
        instruction: 'Rinse shave with cool water, then smooth AEGIS AFTER over neck.'
      },
      {
        stepNumber: '03',
        action: 'SEAL BARRIER',
        amountOrTime: '1 pump',
        instruction: 'Lock in comfort with AEGIS BARRIER.'
      }
    ],
    compatibility: {
      worksWellWith: ['Any razor blade or electric trimmer', 'AEGIS SHIELD SPF 50'],
      useCarefullyWith: ['Do not use alcohol aftershaves or perfumed colognes on neck'],
      explanation: 'Replaces drying alcohol aftershaves with clinical barrier therapy.'
    },
    comparison: {
      bestFor: 'Neck razor burn, red shaving bumps, stinging, post-trim irritation',
      texture: 'Hydrating shaving defense trio',
      keyActive: 'Apple Amino Acids + 1% Bisabolol + 3:1:1 Ceramides',
      amUse: true,
      pmUse: true,
      targetSkin: 'All shaving men, sensitive necks'
    },
    protocolAM: 'WASH (warm water) → Shave → AFTER (2 pumps) → BARRIER (1 pump) → SHIELD.',
    protocolPM: 'Use AFTER following evening beard or neck trims for overnight calm.',
    whoItsFor: 'Men who suffer from red razor burn on their neck, collar friction, or post-shave bumps.',
    fullIngredients: 'Refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'Will this stop razor bumps?',
        answer: 'Yes. Softening stubble before the cut and calming the follicle with bisabolol dramatically reduces the incidence of red post-shave bumps.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-wash', 'aegis-after', 'aegis-barrier']
  },
  {
    id: 'aegis-oil-control-set',
    slug: 'oil-control-complete-regimen',
    stepNumber: 'BUNDLE / 06',
    stepCategory: 'ROUTINE',
    name: 'THE COMPLETE OIL CONTROL SET',
    subtitle: '4-Step Maximum Shine & Pore Defense',
    formulaSpec: 'PURIFY (150ml) + CLEAR (30ml) + MATTE (50ml) + SHIELD MATTE SPF 50 (50ml)',
    category: 'bundles',
    concerns: ['oil', 'acne', 'sun'],
    skinTypes: ['Oily', 'Very Oily', 'Combination', 'Hot/Humid Climates'],
    subcategory: 'Comprehensive Oil-Control System',
    price: 2399,
    originalPrice: 2846,
    rating: 5.0,
    reviewCount: 264,
    volume: 'Complete 4-Piece System (60-Day Supply)',
    phLevel: 'Physiological pH Matched',
    badges: ['SAVE ₹447', 'TOTAL SHINE CONTROL', 'BESTSELLER'],
    shortDescription: 'The ultimate 4-part defense against severe grease, persistent blackheads, and midday shine in hot and humid weather.',
    whyItExists: 'For men with hyperactive sebaceous glands, a simple wash or single cream isn’t enough. This 4-step protocol systematically targets oil at every stage: follicular deep-cleansing, sebum normalization, micro-trap silica hydration, and sweat-resistant matte photoprotection.',
    whatItDoes: 'Clears blackheads, shrinks oil-stretched pores, stops greasy forehead shine, and provides high-potency UVA/UVB photoprotection without pore clogging.',
    benefits: [
      'Comprehensive 4-step system: Purify, Clarify, Hydrate Matte, and Defend',
      'Saves ₹447 compared to purchasing products individually',
      'Provides guaranteed 8+ hours of shine control even in high summer heat'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS PURIFY',
        concentration: '150 ml',
        role: 'Pore Cleanse',
        mechanism: '2% BHA and Zinc PCA clear follicular oil buildup.'
      },
      {
        name: 'Step 2: AEGIS CLEAR',
        concentration: '30 ml',
        role: 'Sebum Normalizer',
        mechanism: '10% Niacinamide + 1% Zinc PCA balances oil flow.'
      },
      {
        name: 'Step 3: AEGIS MATTE',
        concentration: '50 ml',
        role: 'Oil-Trap Moisture',
        mechanism: 'Porous silica aerogel traps surface sebum.'
      },
      {
        name: 'Step 4: AEGIS SHIELD MATTE',
        concentration: '50 ml',
        role: 'Invisible Defense',
        mechanism: 'SPF 50 PA++++ powdery matte dry-down.'
      }
    ],
    beforeYouBuy: {
      texture: 'Complete 4-step shine-free protocol',
      finish: 'Long-wearing velvety matte',
      fragrance: '100% Fragrance-free',
      skinType: 'Oily, very oily, acne-prone, humid climate',
      routine: 'Full AM & PM Daily Protocol',
      size: '150ml + 30ml + 50ml + 50ml',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'AM CLEANSE',
        amountOrTime: '30 sec',
        instruction: 'Lather AEGIS PURIFY with water and cleanse face thoroughly.'
      },
      {
        stepNumber: '02',
        action: 'AM CORRECT',
        amountOrTime: '2 drops',
        instruction: 'Press AEGIS CLEAR into oily T-zone and congested pores.'
      },
      {
        stepNumber: '03',
        action: 'AM HYDRATE',
        amountOrTime: '1 pump',
        instruction: 'Smooth AEGIS MATTE for an instant powder-soft dry-down.'
      },
      {
        stepNumber: '04',
        action: 'AM DEFEND',
        amountOrTime: '2 fingers',
        instruction: 'Seal with AEGIS SHIELD MATTE SPF 50 for 8-hour shine defense.'
      }
    ],
    compatibility: {
      worksWellWith: ['Synergistic matte oil defense'],
      useCarefullyWith: ['Do not apply heavy facial oils'],
      explanation: 'Scientifically calibrated for extreme oil control without skin dehydration.'
    },
    comparison: {
      bestFor: 'Extremely shiny skin, oily forehead, greasy nose, hot Indian climate',
      texture: 'Ultra-lightweight matte protocol',
      keyActive: 'Salicylic Acid + Niacinamide + Silica Aerogel + SPF 50',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, very oily, combination'
    },
    protocolAM: 'PURIFY → CLEAR → MATTE → SHIELD MATTE (complete 2-minute morning protocol).',
    protocolPM: 'PURIFY → CLEAR → MATTE (wake up without greasy pillow transfer).',
    whoItsFor: 'Men whose skin becomes an oil slick by lunch or who struggle with shiny skin in photos and video calls.',
    fullIngredients: 'Refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'Will this over-dry my face?',
        answer: 'No. Every formula contains humectant hydration like glycerin and hyaluronic acid so your skin stays hydrated while porous silica controls only unwanted surface sebum.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-purify', 'aegis-clear', 'aegis-matte', 'aegis-shield-matte']
  }
];
