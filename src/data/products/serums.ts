import { Product } from '../../types';

export const SERUMS: Product[] = [
  {
    id: 'aegis-clear',
    slug: 'clear-bha-niacinamide-serum',
    stepNumber: '02 / CORRECT',
    stepCategory: 'CORRECT',
    name: 'AEGIS CLEAR',
    subtitle: 'Oil & Blemish Control Serum',
    formulaSpec: '2.0% SALICYLIC ACID + 10.0% NIACINAMIDE + 1.0% ZINC PCA',
    category: 'serums',
    concerns: ['acne', 'oil', 'redness'],
    skinTypes: ['Oily', 'Combination', 'Acne-Prone'],
    subcategory: 'Clarifying Treatment Serum',
    price: 749,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 342,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 4.0 – 4.2',
    badges: ['BEST SELLER', 'HIGH POTENCY'],
    shortDescription: 'High-potency clinical serum targeting stubborn pore congestion, midday shine, and post-shave bumps.',
    whyItExists: 'Men need effective blemish control without abrasive scrubbing. Salicylic acid clears sebum inside pore linings, while 10% niacinamide and zinc PCA balance shine and strengthen the pore structure.',
    whatItDoes: 'Penetrates deeply to clear blackheads, regulate excess oil production, and visibly minimize enlarged pores.',
    benefits: [
      'Dissolves trapped follicular sebum to prevent active breakouts',
      'High-dose 10% niacinamide visibly reduces T-zone shine',
      'Calms shaving-induced razor bumps and redness'
    ],
    keyActives: [
      {
        name: 'Niacinamide (Vitamin B3)',
        concentration: '10.0%',
        role: 'Pore & Sebum Modulator',
        mechanism: 'Reduces sebocyte lipid synthesis and reinforces epidermal barrier proteins.'
      },
      {
        name: 'Salicylic Acid (BHA)',
        concentration: '2.0%',
        role: 'Lipophilic Exfoliant',
        mechanism: 'Dissolves the intercellular desmosomes binding dead skin cells inside pores.'
      },
      {
        name: 'Zinc PCA',
        concentration: '1.0%',
        role: 'Purifying Mineral Co-Factor',
        mechanism: 'Inhibits 5-alpha-reductase activity to decrease surface oily appearance.'
      }
    ],
    beforeYouBuy: {
      texture: 'Fast-absorbing water-gel fluid',
      finish: 'Non-tacky clean matte',
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
        instruction: 'Wash face thoroughly and pat dry.'
      },
      {
        stepNumber: '02',
        action: 'APPLY',
        amountOrTime: '2–3 drops',
        instruction: 'Dispense 2–3 drops into palms and press gently into forehead, nose, and chin.'
      },
      {
        stepNumber: '03',
        action: 'ABSORB',
        amountOrTime: '20 seconds',
        instruction: 'Dries matte in 20 seconds. Follow with moisturizer or sunscreen.'
      }
    ],
    compatibility: {
      worksWellWith: ['Ceramides', 'Hyaluronic Acid', 'SPF 50'],
      useCarefullyWith: ['Direct layering with high-strength pure Vitamin C (>15%) in the same step'],
      explanation: 'For sensitive skin, start 3 evenings per week before advancing to daily use.'
    },
    comparison: {
      bestFor: 'Clogged pores, blackheads, excess oil, razor bumps',
      texture: 'Fast-absorbing water gel',
      keyActive: '10% Niacinamide + 2% BHA + 1% Zinc PCA',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, combination, acne-prone'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Apply 2 drops before AEGIS SHIELD to maintain matte skin throughout the day.',
    protocolPM: 'Apply 3 drops after cleansing to work on pore clearance overnight.',
    whoItsFor: 'Men with persistent blackheads, midday oily shine, or razor bumps.',
    fullIngredients: 'Aqua, Niacinamide (10.0%), Salicylic Acid (2.0%), Glycerin, Zinc PCA (1.0%), Centella Asiatica Extract, Sodium Hyaluronate, Allantoin, Propanediol, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Does it leave a sticky finish?',
        answer: 'No. Formulated as a fast-absorbing water-gel that dries completely weightless and matte.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580870059805-47c63be3db94?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-shield', 'aegis-barrier']
  },
  {
    id: 'aegis-bright',
    slug: 'bright-dark-spot-serum',
    stepNumber: '02 / CORRECT',
    stepCategory: 'CORRECT',
    name: 'AEGIS BRIGHT',
    subtitle: 'Dark Spot & Uneven Tone Serum',
    formulaSpec: '2.0% ALPHA ARBUTIN + 3.0% TRANEXAMIC ACID + 5.0% NIACINAMIDE',
    category: 'serums',
    concerns: ['dark-spots', 'aging', 'redness'],
    skinTypes: ['All Skin Types', 'Sun-Damaged', 'Uneven Tone'],
    subcategory: 'Tone Correcting Serum',
    price: 849,
    originalPrice: 999,
    rating: 4.9,
    reviewCount: 196,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 5.2',
    badges: ['CLINICAL TONE', 'STABLE ACTIVES'],
    shortDescription: 'Multi-pathway brightening serum engineered to fade persistent post-acne dark marks and sun spots.',
    whyItExists: 'Melanin-rich men’s skin is especially prone to post-inflammatory hyperpigmentation (PIH) after acne or shaving nicks. AEGIS BRIGHT tackles pigment production through three complementary clinical pathways without causing irritation or lightening normal skin.',
    whatItDoes: 'Blocks excessive melanin synthesis, accelerates epidermal cell turnover, and visibly evens out discoloration.',
    benefits: [
      'Alpha Arbutin 2% safely suppresses tyrosinase enzyme activity',
      'Tranexamic Acid 3% blocks the inflammatory pathway that triggers pigmentation',
      'Niacinamide prevents melanin transfer to surface skin cells'
    ],
    keyActives: [
      {
        name: 'Tranexamic Acid',
        concentration: '3.0%',
        role: 'Pigment Pathway Interrupter',
        mechanism: 'Blocks UV- and injury-induced plasmin activity to curb melanocyte activation.'
      },
      {
        name: 'Alpha Arbutin',
        concentration: '2.0%',
        role: 'Targeted Depigmenting Agent',
        mechanism: 'Biocompatible tyrosinase inhibitor that fades existing discoloration.'
      },
      {
        name: 'Niacinamide (Vitamin B3)',
        concentration: '5.0%',
        role: 'Melanosome Transfer Blocker',
        mechanism: 'Inhibits pigment movement while boosting stratum corneum barrier strength.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silk-touch fluid serum',
      finish: 'Weightless luminous satin',
      fragrance: 'Fragrance-free',
      skinType: 'All skin types, especially uneven tone or sun marks',
      routine: 'AM & PM (Step 02)',
      size: '30 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '2–3 drops',
        instruction: 'Apply directly onto clean, dry skin.'
      },
      {
        stepNumber: '02',
        action: 'TARGET',
        amountOrTime: 'Dark marks',
        instruction: 'Gently press into pigmented spots, acne marks, and sun-exposed areas.'
      },
      {
        stepNumber: '03',
        action: 'PROTECT',
        amountOrTime: 'Daily AM',
        instruction: 'Always follow with AEGIS SHIELD SPF 50 during daytime to prevent UV pigment rebound.'
      }
    ],
    compatibility: {
      worksWellWith: ['Hyaluronic Acid', 'Ceramides', 'SPF 50'],
      useCarefullyWith: ['Strong glycolic acid peels at the same moment'],
      explanation: 'Extremely well-tolerated formula designed for daily continuous morning and evening use.'
    },
    comparison: {
      bestFor: 'Stubborn post-acne marks, sun spots, dullness, uneven complexion',
      texture: 'Silk-touch hydrating serum',
      keyActive: '2% Alpha Arbutin + 3% Tranexamic Acid + 5% Niacinamide',
      amUse: true,
      pmUse: true,
      targetSkin: 'All skin types, pigmented skin'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-bright', 'aegis-shield'],
    completeRoutineDiscount: 350,
    protocolAM: 'Apply 2 drops after cleansing, followed immediately by AEGIS SHIELD SPF 50.',
    protocolPM: 'Apply 3 drops as your nightly tone-correcting treatment step.',
    whoItsFor: 'Men with stubborn dark spots from old acne, sun spots on cheekbones, or uneven patchy tone.',
    fullIngredients: 'Aqua, Propanediol, Tranexamic Acid (3.0%), Niacinamide (5.0%), Alpha-Arbutin (2.0%), Acetyl Glucosamine, Sodium Hyaluronate, Allantoin, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this bleach my natural skin color?',
        answer: 'No. It specifically regulates overactive pigment production in damaged areas without affecting natural melanin baseline.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aegis-hydrate',
    slug: 'hydrate-multi-depth-barrier-serum',
    stepNumber: '02 / CORRECT',
    stepCategory: 'CORRECT',
    name: 'AEGIS HYDRATE',
    subtitle: 'Hydration + Barrier Serum',
    formulaSpec: 'MULTI-WEIGHT HYALURONIC ACID + 2.0% BETA-GLUCAN + 2.0% PANTHENOL',
    category: 'serums',
    concerns: ['dehydration', 'redness', 'aging'],
    skinTypes: ['Dehydrated', 'Dry', 'Sensitive', 'Normal'],
    subcategory: 'Hydrating Recovery Serum',
    price: 749,
    originalPrice: 899,
    rating: 4.8,
    reviewCount: 152,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 5.5',
    badges: ['DEEP MOISTURE', 'PLUMPING'],
    shortDescription: 'Multi-depth hydrating concentrate that quenches tight, dehydrated skin and replenishes moisture reservoirs.',
    whyItExists: 'Indoor air conditioning, outdoor heat, and daily showers deplete moisture from men’s skin, causing tightness and micro-wrinkles. AEGIS HYDRATE combines 3 molecular weights of hyaluronic acid with soothing beta-glucan and provitamin B5.',
    whatItDoes: 'Floods the skin with non-sticky hydration, plumps surface fine dehydration lines, and relieves post-shower tightness.',
    benefits: [
      'Multi-molecular weight hyaluronic acid hydrates surface and deeper layers',
      'Oat beta-glucan binds 20% more moisture than standard HA while calming irritation',
      'Restores skin suppleness and elasticity with zero greasy weight'
    ],
    keyActives: [
      {
        name: 'Multi-Weight Hyaluronic Acid',
        concentration: '2.0%',
        role: 'Multi-Layer Moisture Magnet',
        mechanism: 'High- and low-molecular fractions hydrate the stratum corneum and deeper epidermis.'
      },
      {
        name: 'Oat Beta-Glucan',
        concentration: '2.0%',
        role: 'Deep Hydration & Soothing',
        mechanism: 'Polysaccharide that penetrates inter-cellular pathways to calm irritation.'
      },
      {
        name: 'Panthenol (Pro-Vitamin B5)',
        concentration: '2.0%',
        role: 'Cellular Hydration Supporter',
        mechanism: 'Accelerates barrier repair and reduces transepidermal moisture loss.'
      }
    ],
    beforeYouBuy: {
      texture: 'Bouncy water-drop fluid',
      finish: 'Fresh dewy cushion, zero stickiness',
      fragrance: 'Fragrance-free',
      skinType: 'All types, especially dehydrated and tight skin',
      routine: 'AM & PM (Step 02)',
      size: '30 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'PREP',
        amountOrTime: 'Damp skin',
        instruction: 'Best applied to slightly damp skin right after washing.'
      },
      {
        stepNumber: '02',
        action: 'PRESS',
        amountOrTime: '2–3 drops',
        instruction: 'Press across entire face and neck until absorbed.'
      },
      {
        stepNumber: '03',
        action: 'SEAL',
        amountOrTime: 'Moisturizer',
        instruction: 'Lock in with AEGIS BARRIER or AEGIS HYDRA.'
      }
    ],
    compatibility: {
      worksWellWith: ['All actives', 'Niacinamide', 'Ceramides', 'BHA', 'Retinoids'],
      useCarefullyWith: ['None — universal hydration carrier'],
      explanation: 'Can be layered underneath any treatment serum or moisturizer.'
    },
    comparison: {
      bestFor: 'Tight, thirsty skin, rough texture, post-workout dehydration',
      texture: 'Bouncy water fluid',
      keyActive: 'Multi-Weight HA + Beta-Glucan + Panthenol',
      amUse: true,
      pmUse: true,
      targetSkin: 'All skin types, dehydrated skin'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-hydrate', 'aegis-barrier'],
    completeRoutineDiscount: 340,
    protocolAM: 'Press 2 drops into damp skin, seal with sunscreen or light moisturizer.',
    protocolPM: 'Apply generously to restore hydration lost to AC or commute throughout the day.',
    whoItsFor: 'Men whose skin feels dry, tight, dull, or looks fatigued after long workdays.',
    fullIngredients: 'Aqua, Sodium Hyaluronate (Multi-Molecular), Beta-Glucan, Panthenol (2.0%), Glycerin, Polyglutamic Acid, Betaine, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this feel sticky on my skin?',
        answer: 'No. It penetrates completely within 10 seconds leaving only a soft, hydrated skin feel.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1580870059805-47c63be3db94?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580870059805-47c63be3db94?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-barrier', 'aegis-shield']
  },
  {
    id: 'aegis-repair',
    slug: 'repair-barrier-recovery-serum',
    stepNumber: '02 / CORRECT',
    stepCategory: 'CORRECT',
    name: 'AEGIS REPAIR',
    subtitle: 'Barrier Recovery Serum',
    formulaSpec: '3:1:1 CERAMIDES + CHOLESTEROL + MADECASSOSIDE + FATTY ACIDS',
    category: 'serums',
    concerns: ['redness', 'barrier', 'dehydration'],
    skinTypes: ['Sensitive', 'Compromised', 'Razor-Damaged', 'Dry'],
    subcategory: 'Intensive Barrier Serum',
    price: 849,
    originalPrice: 999,
    rating: 5.0,
    reviewCount: 168,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 5.4',
    badges: ['CRITICAL REPAIR', 'DERMA TESTED'],
    shortDescription: 'Emergency barrier reconstitution serum for stinging, over-exfoliated, or razor-ravaged skin.',
    whyItExists: 'When the stratum corneum is damaged by harsh soaps, aggressive razor blades, or pollution, skin becomes red, sensitive, and stings upon touch. AEGIS REPAIR delivers physiological lipids and concentrated madecassoside to rapidly heal the barrier.',
    whatItDoes: 'Stops stinging sensations, accelerates tissue recovery, and rebuilds the lipid protective layer.',
    benefits: [
      'Rapidly stops post-shave burning and sensitivity',
      'Provides the exact 3:1:1 physiological ratio of ceramides, cholesterol, and free fatty acids',
      'Pharmaceutical-grade Centella Madecassoside calms active vascular redness'
    ],
    keyActives: [
      {
        name: 'Physiological Lipid Matrix (Ceramides/Cholesterol/Fatty Acids)',
        concentration: '3.0%',
        role: 'Barrier Membrane Reconstitution',
        mechanism: 'Interlocks directly into broken lipid bilayers of the stratum corneum.'
      },
      {
        name: 'Madecassoside (Purified Centella)',
        concentration: '1.0%',
        role: 'Vascular Soothing Agent',
        mechanism: 'Down-regulates pro-inflammatory cytokines and stimulates wound closure.'
      },
      {
        name: 'Panthenol',
        concentration: '2.5%',
        role: 'Tissue Repair Promoter',
        mechanism: 'Maintains moist cellular repair environment.'
      }
    ],
    beforeYouBuy: {
      texture: 'Comforting milky emulsion',
      finish: 'Satin calm cushion',
      fragrance: 'Fragrance-free',
      skinType: 'Compromised, stinging, razor-irritated skin',
      routine: 'AM & PM (Step 02)',
      size: '30 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'CALM',
        amountOrTime: 'Clean skin',
        instruction: 'Cleanse gently with AEGIS CALM or cool water.'
      },
      {
        stepNumber: '02',
        action: 'PAT',
        amountOrTime: '1 dropper',
        instruction: 'Pat gently over irritated, stinging, or red zones without rubbing.'
      },
      {
        stepNumber: '03',
        action: 'REST',
        amountOrTime: 'Overnight',
        instruction: 'Leave on overnight to rebuild barrier integrity.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS CALM', 'AEGIS BARRIER', 'AEGIS AFTER'],
      useCarefullyWith: ['Do not use strong exfoliating acids or retinoids until barrier is healed'],
      explanation: 'Designed for acute barrier reset periods and daily post-shave protection.'
    },
    comparison: {
      bestFor: 'Stinging, burning, over-exfoliation, severe razor irritation',
      texture: 'Soothing milky fluid',
      keyActive: '3:1:1 Ceramides + Madecassoside + Panthenol',
      amUse: true,
      pmUse: true,
      targetSkin: 'Compromised, reactive, sensitive'
    },
    completeRoutineItemIds: ['aegis-calm', 'aegis-repair', 'aegis-barrier'],
    completeRoutineDiscount: 350,
    protocolAM: 'Apply 2 drops directly over razor-burned neck or red cheeks before sunscreen.',
    protocolPM: 'Apply 3-4 drops as your intensive overnight healing barrier step.',
    whoItsFor: 'Men whose skin stings from sweat, aftershave, or face wash, or who have red sensitive patches.',
    fullIngredients: 'Aqua, Caprylic/Capric Triglyceride, Squalane, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Madecassoside (1.0%), Panthenol (2.5%), Allantoin, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this sting if my skin is raw?',
        answer: 'No. Formulated free of drying alcohols, fragrance, and essential oils to provide instant relief.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-calm', 'aegis-barrier', 'aegis-after']
  },
  {
    id: 'aegis-even',
    slug: 'even-tone-texture-resurfacing-serum',
    stepNumber: '02 / CORRECT',
    stepCategory: 'CORRECT',
    name: 'AEGIS EVEN',
    subtitle: 'Tone & Texture Resurfacing Serum',
    formulaSpec: '10% AZELAIC DERIVATIVE (PAD) + 3% NIACINAMIDE + CENTELLA',
    category: 'serums',
    concerns: ['dark-spots', 'redness', 'texture', 'acne'],
    skinTypes: ['All Skin Types', 'Uneven Texture', 'Redness-Prone', 'Sensitive'],
    subcategory: 'Tone & Texture Clarifying Fluid',
    price: 799,
    originalPrice: 949,
    rating: 4.9,
    reviewCount: 168,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 5.2',
    badges: ['TEXTURE RESURFACER', 'ANTI-REDNESS', 'AZELAIC SCIENCE'],
    shortDescription: 'Multi-functional clarifier powered by Potassium Azeloyl Diglycinate to smooth rough bumps, calm persistent flush, and refine skin texture without stinging.',
    whyItExists: 'Traditional pure azelaic acid can be gritty, chalky, and irritating. AEGIS EVEN utilizes Potassium Azeloyl Diglycinate (PAD)—an advanced water-soluble azelaic derivative that combines potent tyrosinase and sebum regulation with deep hydration.',
    whatItDoes: 'Smooths micro-bumps and uneven cheek texture, fades stubborn post-blemish redness, and balances surface oiliness for an even, calm complexion.',
    benefits: [
      'Dissolves rough sandpaper texture and post-inflammatory erythema (red marks)',
      'Potassium Azeloyl Diglycinate is gentler than pure azelaic acid with zero peeling',
      'Centella and Niacinamide soothe facial flushing caused by heat, shaving, and friction'
    ],
    keyActives: [
      {
        name: 'Potassium Azeloyl Diglycinate (PAD)',
        concentration: '10.0%',
        role: 'Bio-Available Azelaic Active',
        mechanism: 'Inhibits follicular bacterial proliferation, reduces localized redness, and normalizes keratinocyte turnover.'
      },
      {
        name: 'Niacinamide (Vitamin B3)',
        concentration: '3.0%',
        role: 'Lipid Barrier Booster',
        mechanism: 'Improves skin resilience, refines pore collars, and balances surface sebum.'
      },
      {
        name: 'Centella Asiatica Extract',
        concentration: '2.0%',
        role: 'Vascular Soothing Agent',
        mechanism: 'Reduces capillary reactivity and accelerates epidermal calming.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silky weightless milk-essence',
      finish: 'Matte satin, non-sticky',
      fragrance: 'Fragrance-free',
      skinType: 'Textured, bumpy, redness-prone, post-blemish skin',
      routine: 'AM and/or PM (Step 02)',
      size: '30 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '3–4 drops',
        instruction: 'Dispense 3–4 drops onto clean fingertips.'
      },
      {
        stepNumber: '02',
        action: 'SMOOTH',
        amountOrTime: 'Cheeks & T-Zone',
        instruction: 'Smooth gently across cheeks, forehead, and areas with rough texture or persistent redness.'
      },
      {
        stepNumber: '03',
        action: 'SEAL',
        amountOrTime: '20 seconds',
        instruction: 'Allow 20 seconds to absorb before applying moisturizer or SPF.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS WASH', 'AEGIS BARRIER', 'AEGIS SHIELD'],
      useCarefullyWith: ['Do not layer with high-strength peeling acids on the same morning'],
      explanation: 'Gentle enough for daily use even on skin prone to flushing or post-shave redness.'
    },
    comparison: {
      bestFor: 'Rough bumpy texture, post-acne red marks, rosacea-prone flushing, uneven skin',
      texture: 'Fast-absorbing silky fluid',
      keyActive: '10% Azelaic Derivative (PAD) + 3% Niacinamide',
      amUse: true,
      pmUse: true,
      targetSkin: 'Bumpy, red, textured, combination skin'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-even', 'aegis-barrier'],
    completeRoutineDiscount: 350,
    protocolAM: 'Apply 3 drops before moisturizer and SPF to defend against daytime redness and pollution.',
    protocolPM: 'Apply 4 drops to clean skin to accelerate overnight texture smoothing.',
    whoItsFor: 'Men with persistent red marks, rough forehead or cheek bumps, or skin that flushes easily.',
    fullIngredients: 'Aqua, Potassium Azeloyl Diglycinate (10.0%), Propanediol, Niacinamide (3.0%), Centella Asiatica Extract, Glycerin, Sodium Hyaluronate, Allantoin, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this cause stinging like regular azelaic acid creams?',
        answer: 'No. Potassium Azeloyl Diglycinate (PAD) is chemically bound with glycine, making it far gentler and non-irritating while maintaining clinical efficacy.'
      },
      {
        question: 'Can I use this after shaving?',
        answer: 'Yes, but if you have open razor nicks, use AEGIS AFTER first and apply AEGIS EVEN the following day.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-barrier', 'aegis-shield']
  }
];
