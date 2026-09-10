import { Product } from '../../types';

export const TREATMENTS: Product[] = [
  {
    id: 'aegis-spot',
    slug: 'spot-targeted-blemish-treatment',
    stepNumber: 'TARGET / SPOT',
    stepCategory: 'CORRECT',
    name: 'AEGIS SPOT',
    subtitle: 'Targeted Blemish Treatment',
    formulaSpec: '2% ENCAPSULATED SALICYLIC + 3% COLLOIDAL SULFUR + ZINC + ALLANTOIN',
    category: 'treatments',
    concerns: ['acne', 'redness'],
    skinTypes: ['All Skin Types', 'Blemish-Prone'],
    subcategory: 'Precision Spot Gel',
    price: 449,
    originalPrice: 549,
    rating: 4.8,
    reviewCount: 187,
    volume: '15 ml / 0.5 fl. oz.',
    phLevel: 'pH 4.5',
    badges: ['FAST ACTING', 'PRECISION TIP'],
    shortDescription: 'Emergency spot treatment gel with a precision nozzle that shrinks stubborn blemishes overnight without drying surrounding skin.',
    whyItExists: 'Traditional acne creams dry out the entire face and leave chalky residue. AEGIS SPOT features a targeted precision tip and time-released encapsulated salicylic acid and colloidal sulfur that work directly on the inflamed follicle.',
    whatItDoes: 'Rapidly reduces blemish swelling, unclogs the pore opening, and calms redness within hours.',
    benefits: [
      'Encapsulated BHA provides sustained release directly into the pimple',
      'Colloidal sulfur absorbs excess localized exudate and calms swelling',
      'Dries completely invisible so it can be worn during the day'
    ],
    keyActives: [
      {
        name: 'Encapsulated Salicylic Acid',
        concentration: '2.0%',
        role: 'Pore Penetrater',
        mechanism: 'Time-released liposomes deliver BHA deeply into the clogged follicle.'
      },
      {
        name: 'Colloidal Sulfur',
        concentration: '3.0%',
        role: 'Purifying & Drying Agent',
        mechanism: 'Inactivates follicular bacterial colonies and absorbs localized fluid.'
      },
      {
        name: 'Allantoin & Centella',
        concentration: '1.0%',
        role: 'Anti-Redness Buffer',
        mechanism: 'Prevents post-blemish dark marks and calms throbbing irritation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Invisible clear drying gel',
      finish: 'Imperceptible matte film',
      fragrance: 'Fragrance-free',
      skinType: 'All skin types experiencing breakouts',
      routine: 'As needed (AM & PM)',
      size: '15 ML',
      expectedUse: 'Approximately 90 spot applications'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DAB',
        amountOrTime: 'Pinhead drop',
        instruction: 'Squeeze a tiny pinhead-sized drop directly onto clean blemish.'
      },
      {
        stepNumber: '02',
        action: 'DRY',
        amountOrTime: '60 seconds',
        instruction: 'Allow clear gel to form a weightless breathable seal.'
      },
      {
        stepNumber: '03',
        action: 'LEAVE',
        amountOrTime: 'Overnight or Day',
        instruction: 'Leave on. Can be used under sunscreen or before bed.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS WASH', 'AEGIS CLEAR', 'AEGIS BARRIER'],
      useCarefullyWith: ['Do not apply across entire face — spot use only'],
      explanation: 'Targeted spot application only on active blemishes.'
    },
    comparison: {
      bestFor: 'Sudden pimples, angry red bumps, ingrown shaving cysts',
      texture: 'Clear fast-drying spot gel',
      keyActive: 'Encapsulated BHA + 3% Sulfur + Zinc',
      amUse: true,
      pmUse: true,
      targetSkin: 'All types with active breakouts'
    },
    protocolAM: 'Dab onto blemish 1 minute before applying sunscreen.',
    protocolPM: 'Apply directly onto clean blemish as your final step before bed.',
    whoItsFor: 'Anyone with an unexpected breakout or painful red spot needing rapid reduction.',
    fullIngredients: 'Aqua, Alcohol Denat., Colloidal Sulfur (3.0%), Salicylic Acid (2.0%), Zinc PCA, Allantoin, Centella Asiatica Extract, Hydroxyethylcellulose, Phenoxyethanol.',
    faqList: [
      {
        question: 'Will this leave a white crust?',
        answer: 'No. Unlike traditional sulfur pastes, this dries completely transparent and invisible.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629198725699-317fb57375a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629198725699-317fb57375a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-clear', 'aegis-wash']
  },
  {
    id: 'aegis-eye',
    slug: 'eye-hydration-depuffing-gel',
    stepNumber: 'TARGET / EYE',
    stepCategory: 'CORRECT',
    name: 'AEGIS EYE',
    subtitle: 'Under-Eye Hydration & De-Puffing Gel',
    formulaSpec: '2.0% CAFFEINE + MULTI-PEPTIDES + HYALURONIC ACID + GREEN TEA',
    category: 'treatments',
    concerns: ['aging', 'dehydration', 'dark-spots'],
    skinTypes: ['All Skin Types', 'Screen Fatigue', 'Dark Circles'],
    subcategory: 'Under-Eye Refresh Gel',
    price: 649,
    originalPrice: 799,
    rating: 4.8,
    reviewCount: 210,
    volume: '15 ml / 0.5 fl. oz.',
    phLevel: 'pH 6.5 (Ocular Safe)',
    badges: ['ANTI-FATIGUE', 'OPHTHALMOLOGIST SAFE'],
    shortDescription: 'Refreshing, non-sticky gel that drains morning under-eye fluid, brightens vascular dark circles, and hydrates tired eyes.',
    whyItExists: 'Men’s periorbital skin is delicate and frequently shows signs of screen fatigue, sleep deficits, and dark circles. AEGIS EYE delivers concentrated caffeine and micro-circulation peptides in an instant cooling gel.',
    whatItDoes: 'Reduces puffiness within 15 minutes, improves under-eye brightness, and smoothes fine fatigue lines.',
    benefits: [
      '2.0% Caffeine stimulates micro-circulation to drain pooled fluids',
      'Targeted peptides reinforce thin periorbital tissue',
      'Instant cooling roller-touch sensation awakens tired morning eyes'
    ],
    keyActives: [
      {
        name: 'Caffeine Complex',
        concentration: '2.0%',
        role: 'Vasoconstrictor & Fluid Drainer',
        mechanism: 'Narrows micro-capillaries to reduce puffy morning eye bags.'
      },
      {
        name: 'Eyeseryl Peptide',
        concentration: '1.5%',
        role: 'Anti-Edema Tetrapeptide',
        mechanism: 'Prevents vascular leakage and improves lymphatic draining.'
      },
      {
        name: 'Hyaluronic Acid Micro-Beads',
        concentration: '1.0%',
        role: 'Fine Line Plumper',
        mechanism: 'Hydrates thin ocular skin without causing fluid retention.'
      }
    ],
    beforeYouBuy: {
      texture: 'Cooling fluid gel-serum',
      finish: 'Weightless refreshed dry-down',
      fragrance: 'Fragrance-free',
      skinType: 'All skin types, screen workers, late sleepers',
      routine: 'AM & PM (Step 02)',
      size: '15 ML',
      expectedUse: 'Approximately 90 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'TAP',
        amountOrTime: 'Half pea size',
        instruction: 'Dispense half a pea size between ring fingertips.'
      },
      {
        stepNumber: '02',
        action: 'PRESS',
        amountOrTime: 'Orbital bone',
        instruction: 'Gently tap along the orbital bone from inner eye outward.'
      },
      {
        stepNumber: '03',
        action: 'ABSORB',
        amountOrTime: '15 seconds',
        instruction: 'Absorbs instantly. Do not rub eyelids directly.'
      }
    ],
    compatibility: {
      worksWellWith: ['All face serums and moisturizers', 'Contact lens wearers'],
      useCarefullyWith: ['Do not get directly inside eyes'],
      explanation: 'Ocular-safe formula tested for contact lens wearers.'
    },
    comparison: {
      bestFor: 'Dark circles, morning puffy eyes, screen fatigue, late work nights',
      texture: 'Cooling non-greasy eye gel',
      keyActive: '2% Caffeine + Eyeseryl Peptides + HA',
      amUse: true,
      pmUse: true,
      targetSkin: 'All skin types with tired eye areas'
    },
    protocolAM: 'Tap gently along orbital bone to instantly depuff and look refreshed.',
    protocolPM: 'Apply before sleeping to boost overnight lymphatic drainage.',
    whoItsFor: 'Men who stare at computer screens, sleep less than 7 hours, or have dark eye circles.',
    fullIngredients: 'Aqua, Caffeine (2.0%), Acetyl Tetrapeptide-5, Sodium Hyaluronate, Camellia Sinensis (Green Tea) Leaf Extract, Glycerin, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this sting my eyes if I sweat?',
        answer: 'No. Formulated free of migrating oils and volatile scents to prevent eye irritation.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1609175402361-9c6f2c69470c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-shield', 'aegis-recover']
  },
  {
    id: 'aegis-pore',
    slug: 'pore-refining-treatment',
    stepNumber: 'TARGET / TEXTURE',
    stepCategory: 'CORRECT',
    name: 'AEGIS PORE',
    subtitle: 'Pore Refining Treatment',
    formulaSpec: '5.0% NIACINAMIDE + 2.0% WILLOW BARK + 1.0% ZINC PCA',
    category: 'treatments',
    concerns: ['oil', 'acne'],
    skinTypes: ['Oily', 'Textured', 'Enlarged Pores'],
    subcategory: 'Pore Minimizing Solution',
    price: 649,
    originalPrice: 799,
    rating: 4.8,
    reviewCount: 145,
    volume: '30 ml / 1.0 fl. oz.',
    phLevel: 'pH 5.0',
    badges: ['TEXTURE REFINE', 'MATTE T-ZONE'],
    shortDescription: 'Focused pore-tightening treatment that smooths rough skin texture and shrinks the visible diameter of stretched pores.',
    whyItExists: 'Stretched, visible pores around the nose and inner cheeks occur when oil pools and oxidizes in the follicular opening. AEGIS PORE combines natural willow bark salicin with niacinamide to decongest and structurally tighten the pore collar.',
    whatItDoes: 'Visibly refines the surface diameter of pores, smooths uneven cheek texture, and controls mid-day grease.',
    benefits: [
      'Willow bark natural salicin clears oxidized plugs from pore openings',
      'Niacinamide tightens the collagen sheath surrounding individual pores',
      'Creates a smooth, velvet texture across the nose and cheeks'
    ],
    keyActives: [
      {
        name: 'Natural Willow Bark Extract',
        concentration: '2.0%',
        role: 'Gentle Salicin Clarifier',
        mechanism: 'Breaks down sebum debris without provoking barrier sensitivity.'
      },
      {
        name: 'Niacinamide',
        concentration: '5.0%',
        role: 'Pore Wall Tightener',
        mechanism: 'Reinforces elastin around follicular openings to reduce pore elasticity sagging.'
      },
      {
        name: 'Zinc PCA',
        concentration: '1.0%',
        role: 'Sebum Neutralizer',
        mechanism: 'Reduces the oil volume expanding the pore.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silk-liquid pore toner-serum',
      finish: 'Blurred matte skin finish',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, combination, textured nose/cheeks',
      routine: 'AM or PM (Step 02)',
      size: '30 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'TARGET',
        amountOrTime: '3–4 drops',
        instruction: 'Focus on nose, inner cheeks, and center of forehead.'
      },
      {
        stepNumber: '02',
        action: 'PAT',
        amountOrTime: '15 seconds',
        instruction: 'Pat firmly into textured zones until smooth.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS WASH', 'AEGIS HYDRA', 'AEGIS SHIELD MATTE'],
      useCarefullyWith: ['Physical exfoliating brushes'],
      explanation: 'Gentle enough for everyday use alongside your regular routine.'
    },
    comparison: {
      bestFor: 'Enlarged pores on nose/cheeks, orange-peel skin texture, oiliness',
      texture: 'Silky liquid toner-serum',
      keyActive: '5% Niacinamide + Willow Bark + Zinc',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, combination, textured skin'
    },
    protocolAM: 'Apply to nose and cheeks before moisturizer to keep pores refined all day.',
    protocolPM: 'Apply after cleansing to clear oxidized oil overnight.',
    whoItsFor: 'Men with visible pores on the nose or cheeks that look like tiny dark pinholes.',
    fullIngredients: 'Aqua, Salix Alba (Willow) Bark Extract (2.0%), Niacinamide (5.0%), Zinc PCA (1.0%), Hamamelis Virginiana Water, Glycerin, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Can pores actually shrink?',
        answer: 'Pores don’t have muscles, but clearing out oxidized oil plugs and boosting skin elasticity significantly reduces their visible diameter.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629198725699-317fb57375a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629198725699-317fb57375a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-hydra', 'aegis-shield-matte']
  },
  {
    id: 'aegis-after',
    slug: 'after-post-shave-soothing-serum',
    stepNumber: 'TARGET / SHAVE',
    stepCategory: 'REPAIR',
    name: 'AEGIS AFTER',
    subtitle: 'Post-Shave Soothing Serum',
    formulaSpec: '1.0% BISABOLOL + 3.0% PANTHENOL + CENTELLA + ALLANTOIN',
    category: 'treatments',
    concerns: ['redness', 'barrier'],
    skinTypes: ['Sensitive Neck', 'Razor-Burn Prone', 'All Shaving Men'],
    subcategory: 'Post-Shave Recovery Serum',
    price: 599,
    originalPrice: 749,
    rating: 5.0,
    reviewCount: 312,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 5.5',
    badges: ['ZERO STING', 'RAZOR BURN RELIEF'],
    shortDescription: 'Alcohol-free soothing serum that neutralizes razor burn, stops itching, and accelerates healing of microscopic shaving nicks.',
    whyItExists: 'Traditional aftershaves rely on high-proof alcohol that burns, dehydrates, and damages the healing epidermal barrier. AEGIS AFTER delivers clinical anti-inflammatories like bisabolol and panthenol with zero sting.',
    whatItDoes: 'Extinguishes razor heat in seconds, prevents razor bumps and irritation, and leaves neck skin soft and calm.',
    benefits: [
      '100% alcohol-free — zero burn or sting on freshly shaved skin',
      'Pharmaceutical bisabolol instantly extinguishes inflammatory razor heat',
      'Allantoin and panthenol seal microscopic razor abrasions'
    ],
    keyActives: [
      {
        name: 'Alpha-Bisabolol (German Chamomile)',
        concentration: '1.0%',
        role: 'Acute Anti-Inflammatory',
        mechanism: 'Blocks leukotriene and prostaglandin synthesis to extinguish heat and redness.'
      },
      {
        name: 'Panthenol (Pro-Vitamin B5)',
        concentration: '3.0%',
        role: 'Micro-Wound Healer',
        mechanism: 'Accelerates keratinocyte migration over microscopic razor nicks.'
      },
      {
        name: 'Allantoin',
        concentration: '1.0%',
        role: 'Epithelial Soother',
        mechanism: 'Soothes stinging and prevents razor bump formation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Cooling water-milky serum',
      finish: 'Non-greasy, soothing velvet touch',
      fragrance: 'Fragrance-free',
      skinType: 'Any man who shaves with a razor or electric trimmer',
      routine: 'Directly after shaving',
      size: '50 ML',
      expectedUse: 'Approximately 60 shaves'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'SHAVE & RINSE',
        amountOrTime: 'Cool water',
        instruction: 'Finish shave and rinse face/neck thoroughly with cool water.'
      },
      {
        stepNumber: '02',
        action: 'PUMP',
        amountOrTime: '2 pumps',
        instruction: 'Pump 2 drops into clean hands.'
      },
      {
        stepNumber: '03',
        action: 'SMOOTH',
        amountOrTime: 'Neck & jaw',
        instruction: 'Smooth generously over freshly shaved jawline and neck.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS WASH', 'AEGIS BARRIER', 'AEGIS SHIELD'],
      useCarefullyWith: ['Do not follow with harsh cologne or alcohol splashes'],
      explanation: 'Use as your first post-shave step before any other cream or sunscreen.'
    },
    comparison: {
      bestFor: 'Razor burn, neck redness, post-shave stinging, collar irritation',
      texture: 'Cooling milk-serum',
      keyActive: '1% Bisabolol + 3% Panthenol + Allantoin',
      amUse: true,
      pmUse: true,
      targetSkin: 'All shaving skin, sensitive neck'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-after', 'aegis-barrier'],
    completeRoutineDiscount: 350,
    protocolAM: 'Apply 2 pumps immediately after morning shaving, followed by AEGIS SHIELD.',
    protocolPM: 'Apply after evening shaves or beard trims to calm skin overnight.',
    whoItsFor: 'Men who dread shaving because of red bumps, stinging, or razor burn around the collar.',
    fullIngredients: 'Aqua, Panthenol (3.0%), Glycerin, Bisabolol (1.0%), Centella Asiatica Extract, Allantoin (1.0%), Vegetable Squalane, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this sting on a fresh cut?',
        answer: 'No! It is 100% alcohol-free and specifically engineered to deliver zero sting.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abce?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-wash', 'aegis-barrier']
  }
];
