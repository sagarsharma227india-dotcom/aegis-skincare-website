import { Product } from '../../types';

export const SUNSCREEN: Product[] = [
  {
    id: 'aegis-shield',
    slug: 'shield-spf50-daily-sunscreen',
    stepNumber: '04 / DEFEND',
    stepCategory: 'DEFEND',
    name: 'AEGIS SHIELD SPF 50',
    subtitle: 'Daily Broad Spectrum Sunscreen',
    formulaSpec: 'SPF 50+ PA++++ + 1.0% ECTOIN + GREEN TEA + MATTE SILICA',
    category: 'spf',
    concerns: ['aging', 'oil', 'redness', 'sun'],
    skinTypes: ['All Skin Types', 'Beard & Stubble Friendly', 'Normal', 'Combination'],
    subcategory: 'Invisible Daily Fluid',
    price: 749,
    originalPrice: 899,
    rating: 5.0,
    reviewCount: 421,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 6.0',
    badges: ['BESTSELLER', '100% INVISIBLE', 'NO WHITE CAST'],
    shortDescription: 'Zero-cast, lightweight daily sunscreen fluid offering broad-spectrum photoprotection that blends invisibly into facial hair.',
    whyItExists: 'Most sunscreens leave chalky white streaks in facial hair or turn greasy in heat. AEGIS SHIELD was specifically engineered with modern photostable filters that absorb completely transparent in stubble and beards.',
    whatItDoes: 'Provides high-level broad-spectrum UVA and UVB defense, shields against urban particulate pollution, and prevents premature photo-aging.',
    benefits: [
      '100% transparent on all skin tones with zero white cast in beards or stubble',
      'Weightless water-gel fluid with a clean, natural matte dry-down',
      'Ectoin and green tea defend against urban oxidative stress and blue light'
    ],
    keyActives: [
      {
        name: 'Modern Photostable UV Filters',
        concentration: 'SPF 50+ / PA++++',
        role: 'Broad Spectrum Defense',
        mechanism: 'High-efficacy organic filters offering photostable protection against UVA and UVB rays.'
      },
      {
        name: 'Ectoin',
        concentration: '1.0%',
        role: 'Extremolyte Cellular Shield',
        mechanism: 'Protects skin cells against heat shock, particulate pollution, and infrared radiation.'
      },
      {
        name: 'Silica Microspheres',
        concentration: '2.0%',
        role: 'Shine Control',
        mechanism: 'Porous mineral spheres that absorb excess surface oil throughout the day.'
      }
    ],
    beforeYouBuy: {
      texture: 'Water-light fluid',
      finish: 'Completely clear, non-chalky natural matte',
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
        instruction: 'Dispense two full strips of sunscreen along index and middle fingers.'
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
        instruction: 'Blend effortlessly into skin and facial hair until completely transparent.'
      }
    ],
    compatibility: {
      worksWellWith: ['Niacinamide', 'Salicylic Acid', 'Ceramides', 'All serums'],
      useCarefullyWith: ['Apply as a separate top layer rather than pre-mixing in palms'],
      explanation: 'Apply as the standalone final step in your morning routine to preserve the protective photofilter film.'
    },
    comparison: {
      bestFor: 'Daily sun protection without white cast or shine in facial hair',
      texture: 'Water-gel fluid',
      keyActive: 'Modern UV Filters + 1% Ectoin + Silica',
      amUse: true,
      pmUse: false,
      targetSkin: 'All skin types, beard & stubble friendly'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Apply 2 finger lengths evenly over face and neck every morning as your final step.',
    protocolPM: 'Not required at night. Cleanse off thoroughly with AEGIS WASH.',
    whoItsFor: 'Every man exposed to daylight, outdoor commuting, or screen time who wants effortless UV defense.',
    fullIngredients: 'Aqua, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Ectoin (1.0%), Silica, Niacinamide, Camellia Sinensis Leaf Extract, Tocopherol, Propanediol, Phenoxyethanol, Ethylhexylglycerin.',
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
      main: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-wash', 'aegis-clear', 'aegis-barrier']
  },
  {
    id: 'aegis-shield-matte',
    slug: 'shield-matte-spf50-oil-control',
    stepNumber: '04 / DEFEND',
    stepCategory: 'DEFEND',
    name: 'AEGIS SHIELD MATTE SPF 50',
    subtitle: 'Oil-Control Matte Sunscreen',
    formulaSpec: 'SPF 50 PA++++ + 3% SEBUM-ABSORBING SILICA + ZINC PCA + GREEN TEA',
    category: 'spf',
    concerns: ['oil', 'acne', 'sun'],
    skinTypes: ['Oily', 'Very Oily', 'Acne-Prone', 'Humid Climates'],
    subcategory: 'Oil-Control Matte Fluid',
    price: 799,
    originalPrice: 949,
    rating: 4.9,
    reviewCount: 289,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 6.0',
    badges: ['ALL-DAY MATTE', 'SWEAT RESISTANT'],
    shortDescription: 'Maximum shine-control matte sunscreen engineered for extremely oily skin and hot, humid Indian summers.',
    whyItExists: 'In intense heat and humidity, standard sunscreens melt and mix with sebum to cause a greasy shine. AEGIS SHIELD MATTE features advanced oil-capturing aerogels and Zinc PCA that trap sebum throughout the day.',
    whatItDoes: 'Provides photostable SPF 50 PA++++ defense while controlling shine for up to 8 hours without feeling powdery or dry.',
    benefits: [
      'Controls midday T-zone shine for up to 8 hours',
      'Dry-touch powdery matte finish that resists high heat and humidity',
      'Sweat-resistant, non-comedogenic, and zero white cast'
    ],
    keyActives: [
      {
        name: 'Oil-Trap Silica Aerogel',
        concentration: '3.0%',
        role: 'Sebum Absorption',
        mechanism: 'Ultra-porous mineral structure that absorbs multiple times its weight in surface oil.'
      },
      {
        name: 'Zinc PCA',
        concentration: '1.0%',
        role: 'Sebum Normalizer',
        mechanism: 'Regulates sebaceous gland hyperactivity in hot weather.'
      },
      {
        name: 'Photostable Filter Matrix',
        concentration: 'SPF 50 PA++++',
        role: 'Broad UVA/UVB Photoprotection',
        mechanism: 'Advanced broad-spectrum chemical filters.'
      }
    ],
    beforeYouBuy: {
      texture: 'Lightweight air-whipped lotion',
      finish: 'Ultra-dry velvety matte',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, very oily, acne-prone, summer heat',
      routine: 'AM (Step 04 / Final Step)',
      size: '50 ML',
      expectedUse: 'Approximately 45–60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'SHAKE',
        amountOrTime: '5 seconds',
        instruction: 'Shake bottle gently to disperse mattifying silica microspheres.'
      },
      {
        stepNumber: '02',
        action: 'APPLY',
        amountOrTime: '2 fingers',
        instruction: 'Apply evenly over face and neck 15 minutes before heading out.'
      },
      {
        stepNumber: '03',
        action: 'MATTE SET',
        amountOrTime: '30 seconds',
        instruction: 'Sets into an instant powder-dry matte finish.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS CLEAR', 'AEGIS PURIFY', 'AEGIS HYDRA'],
      useCarefullyWith: ['Do not apply over thick facial oils'],
      explanation: 'Engineered specifically to lock in a dry matte feel over lightweight water-based serums.'
    },
    comparison: {
      bestFor: 'Extremely oily skin, humid Indian weather, intense summer sun',
      texture: 'Air-whipped velvet fluid',
      keyActive: 'SPF 50 + 3% Silica Aerogel + Zinc PCA',
      amUse: true,
      pmUse: false,
      targetSkin: 'Oily, combination, sweaty environments'
    },
    completeRoutineItemIds: ['aegis-purify', 'aegis-clear', 'aegis-shield-matte'],
    completeRoutineDiscount: 360,
    protocolAM: 'Apply 2 fingers 15 minutes before outdoor exposure. Reapply after heavy sweating.',
    protocolPM: 'Cleanse thoroughly with AEGIS PURIFY to lift sunscreen and trapped oil.',
    whoItsFor: 'Men whose faces get oily within an hour of stepping outside in hot or humid weather.',
    fullIngredients: 'Aqua, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Silica, Zinc PCA (1.0%), Camellia Sinensis (Green Tea) Leaf Extract, Niacinamide, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Propanediol, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Does this dry out normal skin?',
        answer: 'It is specifically formulated for oily skin. If you have dry skin, choose regular AEGIS SHIELD instead.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-purify', 'aegis-clear', 'aegis-hydra']
  },
  {
    id: 'aegis-shield-hydrate',
    slug: 'shield-hydrate-spf50-nourishing-sunscreen',
    stepNumber: '04 / DEFEND',
    stepCategory: 'DEFEND',
    name: 'AEGIS SHIELD HYDRATE SPF 50',
    subtitle: 'Hydrating Daily Sunscreen',
    formulaSpec: 'SPF 50+ PA++++ + 2% HYALURONIC + 1.5% PANTHENOL + CERAMIDE NP',
    category: 'spf',
    concerns: ['dehydration', 'sun', 'barrier', 'aging'],
    skinTypes: ['Dry', 'Normal', 'Dehydrated', 'Flaky Skin', 'Post-Shave'],
    subcategory: 'Moisture-Rich Daily Defense Cream-Fluid',
    price: 799,
    originalPrice: 949,
    rating: 4.9,
    reviewCount: 174,
    volume: '50 ml / 1.7 fl. oz.',
    phLevel: 'pH 6.2',
    badges: ['DEEP HYDRATION', 'NO WHITE CAST', 'DEWY SATIN'],
    shortDescription: 'Cushioning, barrier-reinforcing daily sunscreen that replenishes dry, flaky skin while providing maximum broad-spectrum UV protection.',
    whyItExists: 'Many high-SPF sunscreens contain alcohol or chalky drying powders that emphasize facial dry patches and beard dandruff. AEGIS SHIELD HYDRATE combines photostable filters with biomimetic ceramides and multi-molecular hyaluronic acid to deeply moisturize dry skin all day long.',
    whatItDoes: 'Protects against intense UVA/UVB photoaging, quenches dry tightness, reinforces compromised barriers, and leaves a comfortable natural satin finish.',
    benefits: [
      'Multi-weight Hyaluronic Acid and Ceramide NP cushion dry, tight skin with 12-hour hydration',
      'Completely transparent formula leaves zero white cast across dark beard stubble and deep skin tones',
      'Soothes shaving tightness and windburn in dry, air-conditioned, or winter environments'
    ],
    keyActives: [
      {
        name: 'Broad Spectrum UV Complex',
        concentration: 'SPF 50+ / PA++++',
        role: 'Photostable UVA/UVB Protection',
        mechanism: 'Next-generation filters that convert damaging UV photons into harmless heat energy.'
      },
      {
        name: 'Multi-Molecular Hyaluronic Acid',
        concentration: '2.0%',
        role: 'Deep Hydration Magnet',
        mechanism: 'Penetrates stratified epidermal layers to lock in moisture and plump fine dehydration lines.'
      },
      {
        name: 'Panthenol & Ceramide NP',
        concentration: '1.5%',
        role: 'Moisture Barrier Shield',
        mechanism: 'Prevents transepidermal water loss and calms dry, sensitive cheek irritation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silky hydrating lotion-cream',
      finish: 'Comfortable natural dewy-satin, non-sticky',
      fragrance: 'Fragrance-free',
      skinType: 'Dry, very dry, dehydrated, normal, post-shave skin',
      routine: 'AM (Final Step)',
      size: '50 ML',
      expectedUse: 'Approximately 45–60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '2 fingers',
        instruction: 'Dispense two full finger lengths onto hand.'
      },
      {
        stepNumber: '02',
        action: 'SMOOTH',
        amountOrTime: 'Face & Neck',
        instruction: 'Smooth gently across face, shaved neck, and ears 15 minutes before sun exposure.'
      },
      {
        stepNumber: '03',
        action: 'ABSORB',
        amountOrTime: '30 seconds',
        instruction: 'Absorbs into a dewy, conditioned satin touch with zero chalkiness.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS CALM', 'AEGIS HYDRATE', 'AEGIS BARRIER'],
      useCarefullyWith: ['None — compatible with all hydrating routines'],
      explanation: 'Can serve as both moisturizer and sunscreen for normal-to-dry skin on busy mornings.'
    },
    comparison: {
      bestFor: 'Dry tight skin, flaky patches, air-conditioned offices, winter sun protection',
      texture: 'Moisturizing fluid lotion',
      keyActive: 'SPF 50+ + 2% Hyaluronic Acid + Ceramide NP',
      amUse: true,
      pmUse: false,
      targetSkin: 'Dry, normal, dehydrated skin'
    },
    completeRoutineItemIds: ['aegis-calm', 'aegis-hydrate', 'aegis-shield-hydrate'],
    completeRoutineDiscount: 360,
    protocolAM: 'Apply 2 finger lengths as the final step of your morning skincare protocol.',
    protocolPM: 'Cleanse off before bed with AEGIS CALM or AEGIS WASH.',
    whoItsFor: 'Men whose skin feels tight, dry, or ashy after washing, or who spend long hours in air conditioning.',
    fullIngredients: 'Aqua, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Glycerin, Sodium Hyaluronate (2.0%), Panthenol (1.5%), Ceramide NP, Squalane, Tocopherol, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Can I skip moisturizer if I use this sunscreen?',
        answer: 'Yes! For normal to slightly dry skin, AEGIS SHIELD HYDRATE has enough lipid ceramides and hyaluronic acid to replace a morning moisturizer.'
      },
      {
        question: 'Will this make my face look greasy or sweaty?',
        answer: 'No. It absorbs cleanly into a natural hydrated satin finish, not an oily reflective shine.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1583142305729-5cb119ce5d3e?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-calm', 'aegis-hydrate', 'aegis-barrier']
  }
];
