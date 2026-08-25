import { Product, ProductReview } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'aegis-wash',
    slug: 'wash-amino-acid-purifier',
    stepNumber: '01 / CLEANSE',
    stepCategory: 'CLEANSE',
    name: 'AEGIS WASH',
    subtitle: 'Amino Acid Purifying Cleanser',
    formulaSpec: '15% APPLE AMINO ACIDS + 0.5% SALICYLIC ACID',
    category: 'cleansers',
    concerns: ['oil', 'acne', 'redness'],
    price: 549,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 215,
    volume: '150 ml / 5.1 fl. oz.',
    phLevel: 'pH 5.5 (Acid Mantle Compatible)',
    badges: ['ESSENTIAL', 'SULFATE-FREE'],
    shortDescription: 'Gentle low-foam cleanser that lifts grime and excess sebum without stripping the natural moisture barrier.',
    whyItExists: 'Traditional soaps have a high alkaline pH that strips essential stratum corneum lipids. AEGIS WASH uses gentle apple amino acid surfactants at physiological pH 5.5 to cleanse cleanly without post-wash tightness.',
    whatItDoes: 'Gently dissolves daily pollution, sweat, and excess sebum while maintaining your skin’s natural moisture barrier and softening beard stubble.',
    benefits: [
      'Removes surface oil and pollution without tight, dry sensations',
      'Micro-dosed 0.5% salicylic acid helps keep pore openings clear',
      'Green tea antioxidants provide post-cleansing comfort'
    ],
    keyActives: [
      {
        name: 'Apple Amino Acid Surfactants',
        concentration: '15.0%',
        role: 'Gentle Cleansing Base',
        mechanism: 'Biocompatible surfactant matrix that respects the skin lipid bilayer.'
      },
      {
        name: 'Salicylic Acid (BHA)',
        concentration: '0.5%',
        role: 'Micro-Exfoliant',
        mechanism: 'Low-dose oil-soluble acid that assists in clearing loose surface keratin.'
      },
      {
        name: 'Green Tea EGCG Extract',
        concentration: '1.0%',
        role: 'Antioxidant & Calming',
        mechanism: 'Polyphenol complex that helps calm environmental and shaving-induced redness.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silky low-foaming gel',
      finish: 'Clean & refreshed, non-stripped',
      fragrance: 'Fragrance-free (subtle natural botanical note)',
      skinType: 'All skin types, especially oily & combination',
      routine: 'AM & PM (Step 01)',
      size: '150 ML',
      expectedUse: 'Approximately 60–75 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '1 pump',
        instruction: 'Dispense 1 pump into wet palms and work into a soft, low-density lather.'
      },
      {
        stepNumber: '02',
        action: 'MASSAGE',
        amountOrTime: '30 seconds',
        instruction: 'Gently massage in circular motions across forehead, nose, and jawline.'
      },
      {
        stepNumber: '03',
        action: 'RINSE',
        amountOrTime: 'Cool water',
        instruction: 'Rinse thoroughly with lukewarm or cool water and gently pat dry with a clean towel.'
      },
      {
        stepNumber: '04',
        action: 'FOLLOW',
        amountOrTime: 'Next step',
        instruction: 'Apply AEGIS CLEAR serum while skin is freshly prepped and dry.'
      }
    ],
    compatibility: {
      worksWellWith: ['Niacinamide', 'Ceramides', 'Hyaluronic Acid', 'SPF 50'],
      useCarefullyWith: ['Physical abrasive walnut scrubs', 'High-strength alcohol toners'],
      explanation: 'AEGIS WASH is pH 5.5 balanced and pairs seamlessly with all active treatments and serums.'
    },
    comparison: {
      bestFor: 'Daily dirt, oil, and sweat removal without barrier stripping',
      texture: 'Low-foaming silky gel',
      keyActive: '15% Apple Amino Acids + 0.5% BHA',
      amUse: true,
      pmUse: true,
      targetSkin: 'All skin types, oily/combination'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Lather 1 pump with warm water in palms. Massage over face for 30 seconds, then rinse thoroughly with cool water.',
    protocolPM: 'Use nightly to remove daytime sunscreen, sweat, and environmental airborne particles.',
    whoItsFor: 'Anyone who experiences tightness or rebound oiliness from standard face washes, or wants a gentle daily start.',
    fullIngredients: 'Aqua (Purified Water), Sodium Cocoyl Apple Amino Acids, Cocamidopropyl Betaine, Vegetable Glycerin, Salicylic Acid (0.5%), Camellia Sinensis (Green Tea) Leaf Extract, Panthenol (Pro-Vitamin B5), Allantoin, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Can I use this on a beard or stubble?',
        answer: 'Yes. The amino acid foam softens facial hair follicles and rinses completely clean with zero residue.'
      },
      {
        question: 'Will this dry out my cheeks?',
        answer: 'No. Formulated at pH 5.5 with Pro-Vitamin B5, it preserves your skin’s natural lipid mantle.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    },
    pairsWith: ['aegis-clear', 'aegis-shield', 'aegis-barrier']
  },
  {
    id: 'aegis-clear',
    slug: 'clear-bha-serum',
    stepNumber: '02 / CORRECT',
    stepCategory: 'CORRECT',
    name: 'AEGIS CLEAR',
    subtitle: '2% BHA + Niacinamide Serum',
    formulaSpec: '2.0% SALICYLIC ACID + 5.0% NIACINAMIDE + 1% ZINC PCA',
    category: 'serums',
    concerns: ['acne', 'oil', 'redness'],
    price: 699,
    originalPrice: 849,
    rating: 4.9,
    reviewCount: 342,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 3.8 – 4.2',
    badges: ['BEST SELLER', 'EVIDENCE-INFORMED'],
    shortDescription: 'Clarifying treatment serum that penetrates oil-clogged pores to help reduce congestion and refine texture.',
    whyItExists: 'Physical scrubs cause micro-tears in the skin barrier. Oil-soluble salicylic acid dissolves pore-clogging sebum from within, paired with niacinamide to help balance surface shine.',
    whatItDoes: 'Gently exfoliates inside the pore lining, visibly refines skin texture, and calms post-shave redness and ingrown hair irritation.',
    benefits: [
      'Helps clear blackheads and prevent pore congestion',
      'Balances mid-day T-zone shine with 5% niacinamide and zinc',
      'Soothes shaving friction and redness with centella asiatica'
    ],
    keyActives: [
      {
        name: 'Salicylic Acid (BHA)',
        concentration: '2.0%',
        role: 'Oil-Soluble Exfoliant',
        mechanism: 'Lipophilic beta-hydroxy acid that penetrates sebum to dissolve follicular impactions.'
      },
      {
        name: 'Niacinamide (Vitamin B3)',
        concentration: '5.0%',
        role: 'Barrier & Oil Balancer',
        mechanism: 'Supports natural ceramide synthesis and helps regulate excessive sebum appearance.'
      },
      {
        name: 'Zinc PCA',
        concentration: '1.0%',
        role: 'Purifying Mineral',
        mechanism: 'Helps balance the skin microbiome and soothe irritated pore follicles.'
      }
    ],
    beforeYouBuy: {
      texture: 'Lightweight water-gel fluid',
      finish: 'Weightless matte',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, combination, breakout-prone',
      routine: 'AM & PM (Step 02)',
      size: '30 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'CLEANSE',
        amountOrTime: '30 seconds',
        instruction: 'Cleanse face thoroughly with AEGIS WASH and pat dry.'
      },
      {
        stepNumber: '02',
        action: 'APPLY',
        amountOrTime: '2–3 drops',
        instruction: 'Dispense 2–3 drops into palm and press gently into forehead, nose, and neck.'
      },
      {
        stepNumber: '03',
        action: 'ABSORB',
        amountOrTime: '20 seconds',
        instruction: 'Allow serum to fully sink in until skin feels smooth and dry to the touch.'
      },
      {
        stepNumber: '04',
        action: 'SEAL / DEFEND',
        amountOrTime: 'Final step',
        instruction: 'Follow with AEGIS BARRIER at night or AEGIS SHIELD SPF 50 during the day.'
      }
    ],
    compatibility: {
      worksWellWith: ['Ceramides', 'Hyaluronic Acid', 'Panthenol', 'SPF 50'],
      useCarefullyWith: ['High-percentage pure Vitamin C (>15%) in same step', 'Strong prescription retinoids'],
      explanation: 'For best tolerance, alternate evenings when using strong retinoids or let serum absorb fully before layering.'
    },
    comparison: {
      bestFor: 'Clogged pores, blackheads, excess oil, razor bumps',
      texture: 'Fast-absorbing water gel',
      keyActive: '2% BHA + 5% Niacinamide + Zinc PCA',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, combination, acne-prone'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Apply 2-3 drops to clean, dry skin. Allow 30 seconds to absorb before applying AEGIS SHIELD.',
    protocolPM: 'Apply 3-4 drops after cleansing. Can be followed by AEGIS BARRIER for restorative hydration.',
    whoItsFor: 'Men with oily skin, enlarged pores, blackheads, post-shave neck irritation, or frequent breakouts.',
    fullIngredients: 'Aqua, Niacinamide (5.0%), Salicylic Acid (2.0%), Glycerin, Zinc PCA (1.0%), Centella Asiatica (Gotu Kola) Extract, Sodium Hyaluronate, Allantoin, Propanediol, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'How quickly does it absorb?',
        answer: 'In about 15 to 20 seconds. It sets to a clean, non-greasy matte finish.'
      },
      {
        question: 'Will this sting right after shaving?',
        answer: 'Formulated with buffered Centella and Allantoin to minimize irritation. If you have open nicks, apply around them.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1608248597359-00994f728c77?auto=format&fit=crop&w=600&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    },
    pairsWith: ['aegis-wash', 'aegis-shield', 'aegis-barrier']
  },
  {
    id: 'aegis-barrier',
    slug: 'barrier-ceramide-fluid',
    stepNumber: '03 / REPAIR',
    stepCategory: 'REPAIR',
    name: 'AEGIS BARRIER',
    subtitle: '3:1:1 Ceramide Fluid',
    formulaSpec: '3:1:1 BIOMIMETIC CERAMIDE NP/AP/EOP + POLYGLUTAMIC ACID',
    category: 'moisturizers',
    concerns: ['dehydration', 'redness', 'aging'],
    price: 749,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 165,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 5.6',
    badges: ['BARRIER SUPPORT', 'FAST ABSORBING'],
    shortDescription: 'Weightless lipid emulsion that helps restore the skin barrier after shaving and environmental exposure.',
    whyItExists: 'Shaving physically scrapes away superficial stratum corneum cells. AEGIS BARRIER provides a biomimetic 3:1:1 ratio of ceramides, cholesterol, and free fatty acids to support barrier recovery without greasy residue.',
    whatItDoes: 'Reinforces the protective moisture barrier, calms razor friction, and delivers long-lasting lightweight hydration.',
    benefits: [
      'Assists in rapid post-shave barrier comfort and recovery',
      'Lightweight fluid absorbs quickly without heavy or sticky feel',
      'Polyglutamic acid and squalane provide deep, weightless hydration'
    ],
    keyActives: [
      {
        name: 'Ceramide Complex (NP, AP, EOP)',
        concentration: '2.5%',
        role: 'Barrier Lipids',
        mechanism: 'Biomimetic ceramides inspired by the physiological lipid composition of the stratum corneum.'
      },
      {
        name: 'Phytosphingosine & Cholesterol',
        concentration: '1.0%',
        role: 'Intercellular Cement',
        mechanism: 'Essential co-factors that lock ceramides into place within the lipid matrix.'
      },
      {
        name: 'Polyglutamic Acid (PGA)',
        concentration: '0.8%',
        role: 'Advanced Hydrator',
        mechanism: 'Forms a supple micro-film over skin to prevent transepidermal water loss.'
      }
    ],
    beforeYouBuy: {
      texture: 'Weightless silky milky lotion',
      finish: 'Natural satin, non-greasy',
      fragrance: 'Fragrance-free',
      skinType: 'Dry, normal, sensitive, post-shave skin',
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
        instruction: 'Press palms against cheeks and neck to encourage lipid penetration.'
      }
    ],
    compatibility: {
      worksWellWith: ['Salicylic Acid', 'Niacinamide', 'Retinoids', 'Vitamin C', 'SPF 50'],
      useCarefullyWith: ['None — universally compatible barrier base'],
      explanation: 'Biomimetic ceramides and squalane support barrier recovery and soothe irritation caused by potent actives.'
    },
    comparison: {
      bestFor: 'Razor burn, flakiness, tightness, dehydrated barrier',
      texture: 'Ultra-light fluid emulsion',
      keyActive: '3:1:1 Ceramides + Polyglutamic Acid',
      amUse: true,
      pmUse: true,
      targetSkin: 'Dry, sensitive, razor-irritated'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-barrier', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Apply 1 pump to face and neck if extra moisture is needed, followed by sunscreen.',
    protocolPM: 'Apply 2 pumps evenly as your evening restorative step after serum or shaving.',
    whoItsFor: 'Men dealing with dry flaking, razor irritation, tightness, or compromised skin barriers.',
    fullIngredients: 'Aqua, Caprylic/Capric Triglyceride, Vegetable Squalane, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Polyglutamic Acid, Panthenol, Glycerin, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum, Phenoxyethanol.',
    faqList: [
      {
        question: 'Is this heavy or greasy in humid weather?',
        answer: 'No. It is formulated as a light fluid emulsion that absorbs cleanly in seconds without a heavy film.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-wash', 'aegis-clear', 'aegis-shield']
  },
  {
    id: 'aegis-shield',
    slug: 'shield-spf50-daily-sunscreen',
    stepNumber: '04 / DEFEND',
    stepCategory: 'DEFEND',
    name: 'AEGIS SHIELD',
    subtitle: 'SPF 50 PA++++ Daily Sunscreen',
    formulaSpec: 'BROAD SPECTRUM UVA/UVB + 1.0% ECTOIN + MATTE SILICA',
    category: 'spf',
    concerns: ['aging', 'oil', 'redness'],
    price: 799,
    originalPrice: 949,
    rating: 5.0,
    reviewCount: 421,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 6.0',
    badges: ['100% INVISIBLE', 'NO WHITE CAST'],
    shortDescription: 'Zero-cast, lightweight daily sunscreen with broad-spectrum photoprotection and a comfortable matte finish.',
    whyItExists: 'Most sunscreens leave a greasy sheen or white chalky streaks in facial hair. AEGIS SHIELD was specifically engineered with modern photostable filters that absorb completely clear in stubble and beards.',
    whatItDoes: 'Provides high-level broad-spectrum UVA and UVB defense, shields against urban particulate pollution, and helps prevent sun-induced dark spots and premature aging.',
    benefits: [
      '100% transparent on all skin tones with zero white cast in beards',
      'Weightless water-gel texture with a clean natural matte dry-down',
      'Ectoin and green tea defend against urban oxidative stress and blue light'
    ],
    keyActives: [
      {
        name: 'Modern Photostable UV Filters',
        concentration: 'SPF 50 / PA++++',
        role: 'Broad Spectrum Defense',
        mechanism: 'High-efficacy organic filters offering photostable protection against UVA and UVB rays.'
      },
      {
        name: 'Ectoin',
        concentration: '1.0%',
        role: 'Environmental Shield',
        mechanism: 'Natural extremolyte that helps shield cellular structures from pollution and heat stress.'
      },
      {
        name: 'Silica Microspheres',
        concentration: '2.0%',
        role: 'Shine Control',
        mechanism: 'Porous mineral microspheres that absorb excess surface sebum throughout the day.'
      }
    ],
    beforeYouBuy: {
      texture: 'Water-light fluid',
      finish: 'Completely clear, non-chalky matte',
      fragrance: 'Fragrance-free',
      skinType: 'All skin types, stubble & beard friendly',
      routine: 'AM (Step 04 / Final Step)',
      size: '50 ML',
      expectedUse: 'Approximately 45–60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'MEASURE',
        amountOrTime: '2 finger lengths',
        instruction: 'Dispense two full strips of sunscreen along the length of index and middle fingers.'
      },
      {
        stepNumber: '02',
        action: 'DOT',
        amountOrTime: 'Even distribution',
        instruction: 'Dot evenly across forehead, nose, cheeks, ears, and neck.'
      },
      {
        stepNumber: '03',
        action: 'BLEND',
        amountOrTime: '15 seconds',
        instruction: 'Blend gently into skin and facial hair until completely transparent.'
      }
    ],
    compatibility: {
      worksWellWith: ['Niacinamide', 'Salicylic Acid', 'Ceramides', 'All serums'],
      useCarefullyWith: ['Do not mix directly in the palm with moisturizer (apply as separate top layer)'],
      explanation: 'Apply sunscreen as the standalone final step in your morning routine to preserve its protective photofilter film.'
    },
    comparison: {
      bestFor: 'Daily sun protection without white cast or shine in beards',
      texture: 'Water-gel fluid',
      keyActive: 'Modern UV Filters + 1% Ectoin + Silica',
      amUse: true,
      pmUse: false,
      targetSkin: 'All skin types, facial hair friendly'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Apply 2 finger lengths evenly over face and neck every morning as your final step.',
    protocolPM: 'Not required at night. Cleanse off thoroughly with AEGIS WASH.',
    whoItsFor: 'Every man exposed to daily daylight, outdoor commuting, or screen time who wants effortless UV defense.',
    fullIngredients: 'Aqua, Ethylhexyl Methoxycinnamate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ectoin (1.0%), Silica, Niacinamide, Camellia Sinensis (Green Tea) Leaf Extract, Tocopherol, Carbomer, Propanediol, Phenoxyethanol.',
    faqList: [
      {
        question: 'Will this leave white residue in my beard or stubble?',
        answer: 'No. The clear micro-dispersion formula blends in completely clear with zero residue in facial hair.'
      },
      {
        question: 'Does it sting the eyes when sweating?',
        answer: 'It is formulated without volatile fragrances and uses water-resistant structuring agents to resist running.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-wash', 'aegis-clear']
  },
  {
    id: 'aegis-starter-bundle',
    slug: 'starter-routine-system',
    stepNumber: 'THE STARTER SYSTEM',
    stepCategory: 'ROUTINE',
    name: 'THE STARTER SYSTEM',
    subtitle: '3-Step Daily Skincare Protocol',
    formulaSpec: 'WASH (150ml) + CLEAR SERUM (30ml) + SHIELD SPF 50 (50ml)',
    category: 'bundles',
    concerns: ['acne', 'oil', 'redness', 'aging'],
    price: 1999,
    originalPrice: 2347,
    rating: 5.0,
    reviewCount: 528,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Complete Physiological Range',
    badges: ['SAVE 15%', 'POPULAR'],
    shortDescription: 'The essential everyday foundation: Cleanse, Correct, and Defend in less than 3 minutes a day.',
    whyItExists: 'Healthy skin does not require complicated multi-step regimens. This 3-step system delivers the essential active pathway for clear, balanced, protected skin.',
    whatItDoes: 'Lifts grime without stripping, clears pore congestion, balances oil, and defends against daily sun exposure.',
    benefits: [
      'Covers your complete morning (~90s) and evening (~60s) routine',
      'Saves ₹348 compared to purchasing items individually',
      'Includes full-size WASH (150ml), CLEAR (30ml), and SHIELD (50ml)'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS WASH',
        concentration: '150 ml',
        role: 'Cleanse',
        mechanism: 'Apple amino acids preserve barrier pH 5.5.'
      },
      {
        name: 'Step 2: AEGIS CLEAR',
        concentration: '30 ml',
        role: 'Correct',
        mechanism: '2% BHA + 5% Niacinamide to balance oil and refine pores.'
      },
      {
        name: 'Step 3: AEGIS SHIELD',
        concentration: '50 ml',
        role: 'Defend',
        mechanism: 'SPF 50 PA++++ broad spectrum matte sunscreen.'
      }
    ],
    beforeYouBuy: {
      texture: 'Full System: Gel + Serum + Sun Fluid',
      finish: 'Clean matte throughout the day',
      fragrance: '100% Fragrance-free',
      skinType: 'Oily, combination, normal skin',
      routine: 'Full AM & PM Daily Protocol',
      size: '150ml + 30ml + 50ml',
      expectedUse: 'Approximately 60–75 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'AM: CLEANSE',
        amountOrTime: '30 sec',
        instruction: 'Lather AEGIS WASH with water, massage over face, and rinse.'
      },
      {
        stepNumber: '02',
        action: 'AM: CORRECT',
        amountOrTime: '2 drops',
        instruction: 'Press AEGIS CLEAR into forehead, nose, and cheeks.'
      },
      {
        stepNumber: '03',
        action: 'AM: DEFEND',
        amountOrTime: '2 fingers',
        instruction: 'Apply AEGIS SHIELD SPF 50 evenly across face and neck.'
      },
      {
        stepNumber: '04',
        action: 'PM: RESET',
        amountOrTime: '60 sec',
        instruction: 'Cleanse with WASH, followed by 3 drops of CLEAR.'
      }
    ],
    comparison: {
      bestFor: 'All-in-one daily defense against oil, breakouts, and UV damage',
      texture: 'Cohesive 3-step protocol',
      keyActive: 'Amino Acids + BHA/Niacinamide + SPF 50',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, combination, normal'
    },
    protocolAM: 'Step 1: WASH (30s) → Step 2: CLEAR (2 drops) → Step 3: SHIELD SPF 50 (2 finger lengths).',
    protocolPM: 'Step 1: WASH (30s) → Step 2: CLEAR (3 drops across face).',
    whoItsFor: 'Men who want an effective, straightforward daily routine with zero guesswork.',
    fullIngredients: 'Please refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'How long does this kit last?',
        answer: 'Approximately 60 to 75 days of twice-daily recommended usage.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield']
  },
  {
    id: 'aegis-barrier-trio',
    slug: 'barrier-repair-trio',
    stepNumber: 'THE REPAIR TRIO',
    stepCategory: 'ROUTINE',
    name: 'THE BARRIER REPAIR TRIO',
    subtitle: 'Post-Shave & Dryness System',
    formulaSpec: 'WASH (150ml) + BARRIER FLUID (50ml) + SHIELD SPF 50 (50ml)',
    category: 'bundles',
    concerns: ['dehydration', 'redness', 'aging'],
    price: 1899,
    originalPrice: 2247,
    rating: 4.9,
    reviewCount: 142,
    volume: 'Complete 3-Piece Kit (60-Day Supply)',
    phLevel: 'Complete Physiological Range',
    badges: ['SAVE 15%', 'BARRIER FOCUS'],
    shortDescription: 'Dedicated to men with dry, sensitive, or razor-stressed skin needing restorative hydration.',
    whyItExists: 'Frequent shaving and dry weather deplete natural ceramides. This trio pairs gentle cleansing with restorative biomimetic lipids and daily UV defense.',
    whatItDoes: 'Restores skin suppleness, calms razor friction, and shields against daily environmental stress.',
    benefits: [
      'Deep barrier recovery for post-shave comfort and dry flaking',
      'Saves ₹348 compared to individual items',
      'Full-size WASH (150ml), BARRIER (50ml), and SHIELD (50ml)'
    ],
    keyActives: [
      {
        name: 'Step 1: AEGIS WASH',
        concentration: '150 ml',
        role: 'Cleanse',
        mechanism: 'Apple amino acid base preserving barrier lipids.'
      },
      {
        name: 'Step 2: AEGIS BARRIER',
        concentration: '50 ml',
        role: 'Repair',
        mechanism: '3:1:1 Ceramides and Polyglutamic Acid.'
      },
      {
        name: 'Step 3: AEGIS SHIELD',
        concentration: '50 ml',
        role: 'Defend',
        mechanism: 'Zero-cast SPF 50 PA++++ photoprotection.'
      }
    ],
    beforeYouBuy: {
      texture: 'Full System: Cleanser + Ceramide Fluid + SPF',
      finish: 'Comfortable hydrated satin finish',
      fragrance: '100% Fragrance-free',
      skinType: 'Dry, sensitive, razor-irritated skin',
      routine: 'Full AM & PM Restorative Protocol',
      size: '150ml + 50ml + 50ml',
      expectedUse: 'Approximately 60–75 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'AM: CLEANSE',
        amountOrTime: '30 sec',
        instruction: 'Gentle wash with AEGIS WASH.'
      },
      {
        stepNumber: '02',
        action: 'AM: HYDRATE & DEFEND',
        amountOrTime: '1 pump + SPF',
        instruction: 'Apply 1 pump of BARRIER if dry, followed by AEGIS SHIELD SPF 50.'
      },
      {
        stepNumber: '03',
        action: 'PM: RESTORE',
        amountOrTime: '2 pumps',
        instruction: 'After evening wash, apply 2 pumps of BARRIER across face and neck.'
      }
    ],
    comparison: {
      bestFor: 'Razor irritation, post-shave stinging, and dry barrier repair',
      texture: 'Hydrating restorative trio',
      keyActive: 'Amino Acids + 3:1:1 Ceramides + SPF 50',
      amUse: true,
      pmUse: true,
      targetSkin: 'Dry, sensitive, post-shave'
    },
    protocolAM: 'WASH (30s) → BARRIER (1 pump if dry) → SHIELD SPF 50.',
    protocolPM: 'WASH (30s) → BARRIER (2 pumps for overnight recovery).',
    whoItsFor: 'Men who experience post-shave burn, tightness, dry flaking, or reactive skin.',
    fullIngredients: 'Please refer to individual product listings for complete INCI disclosures.',
    faqList: [
      {
        question: 'Is this suitable for sensitive skin?',
        answer: 'Yes. Formulated completely fragrance-free and tested on sensitive and post-shave skin.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80'
    },
    isBundle: true,
    bundleItemIds: ['aegis-wash', 'aegis-barrier', 'aegis-shield']
  }
];

export const REVIEWS: ProductReview[] = [
  {
    id: 'r1',
    author: 'Rohan M., 28',
    location: 'Bengaluru',
    city: 'Bengaluru',
    rating: 5,
    date: '4 days ago',
    verified: true,
    verifiedBuyer: true,
    skinType: 'Oily / T-Zone Congestion',
    productName: 'The Starter System',
    title: 'Simple routine and noticeably less shine by the end of the day',
    comment: 'I work long hours in tech and my forehead used to get noticeably shiny by 3 PM. The Starter System takes maybe two minutes in the morning and keeps my skin balanced without feeling dry.',
    helpfulCount: 38
  },
  {
    id: 'r2',
    author: 'Arjun K., 34',
    location: 'Gurugram',
    city: 'Gurugram',
    rating: 5,
    date: '1 week ago',
    verified: true,
    verifiedBuyer: true,
    skinType: 'Shaving Sensitivity',
    productName: 'AEGIS CLEAR + BARRIER',
    title: 'Post-shave neck redness calmed down significantly',
    comment: 'The BHA serum + Barrier fluid combo made a big difference on my neck after shaving. No burning feeling and no thick fragrance. Really happy with the straightforward approach.',
    helpfulCount: 29
  },
  {
    id: 'r3',
    author: 'Devendra S., 31',
    location: 'Mumbai',
    city: 'Mumbai',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    verifiedBuyer: true,
    skinType: 'Stubble / Outdoor Commute',
    productName: 'AEGIS SHIELD SPF 50',
    title: 'The only sunscreen that doesn’t turn white in my stubble',
    comment: 'I hate sunscreens that leave a chalky film or sting when I sweat on the local train. AEGIS Shield absorbs completely clear like water. Highly recommend.',
    helpfulCount: 44
  },
  {
    id: 'r4',
    author: 'Sameer P., 26',
    location: 'Pune',
    city: 'Pune',
    rating: 4,
    date: '3 weeks ago',
    verified: true,
    verifiedBuyer: true,
    skinType: 'Breakout-Prone',
    productName: 'AEGIS WASH + CLEAR',
    title: 'Solid gentle cleanser, wish the bottle was slightly larger',
    comment: 'The face wash is genuinely gentle and doesn’t leave my skin tight. Serum helped unclog my nose pores in about two weeks. Great quality overall.',
    helpfulCount: 15
  },
  {
    id: 'r5',
    author: 'Karan V., 30',
    location: 'Delhi NCR',
    city: 'Delhi NCR',
    rating: 5,
    date: '1 month ago',
    verified: true,
    verifiedBuyer: true,
    skinType: 'Combination',
    productName: 'AEGIS CLEAR',
    title: 'Texture is water-light, dries matte without stickiness',
    comment: 'Most male grooming serums are heavily perfumed and sticky. This has no added scent, absorbs in 15 seconds, and handles morning humidity well.',
    helpfulCount: 22
  },
  {
    id: 'r6',
    author: 'Vikram T., 36',
    location: 'Hyderabad',
    city: 'Hyderabad',
    rating: 4,
    date: '1 month ago',
    verified: true,
    verifiedBuyer: true,
    skinType: 'Dry / Post-Shave',
    productName: 'AEGIS BARRIER',
    title: 'Great lightweight moisturizer, takes about a week to feel full barrier effect',
    comment: 'Extremely light lotion feel. Does not feel greasy in warm weather. Shaving bumps on my lower neck improved after about 10 days of consistent evening use.',
    helpfulCount: 19
  }
];
