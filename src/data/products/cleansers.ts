import { Product } from '../../types';

export const CLEANSERS: Product[] = [
  {
    id: 'aegis-wash',
    slug: 'wash-amino-acid-purifier',
    stepNumber: '01 / CLEANSE',
    stepCategory: 'CLEANSE',
    name: 'AEGIS WASH',
    subtitle: 'Gentle Daily Cleanser',
    formulaSpec: '15% APPLE AMINO ACIDS + 0.5% SALICYLIC ACID + PANTHENOL',
    category: 'cleansers',
    concerns: ['oil', 'acne', 'redness'],
    skinTypes: ['Oily', 'Combination', 'Normal', 'Sensitive'],
    subcategory: 'Gel-to-Foam Cleanser',
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviewCount: 215,
    volume: '150 ml / 5.1 fl. oz.',
    phLevel: 'pH 5.5 (Acid Mantle Compatible)',
    badges: ['BESTSELLER', 'ESSENTIAL'],
    shortDescription: 'Gentle low-foam amino-acid cleanser that lifts daily grime and excess sebum without stripping the natural barrier.',
    whyItExists: 'Traditional soaps have a high alkaline pH (>8.0) that strips essential skin lipids. AEGIS WASH uses biocompatible apple amino acids at physiological pH 5.5 to cleanse cleanly without post-wash tightness.',
    whatItDoes: 'Gently dissolves daily pollution, sweat, and excess sebum while preserving your moisture barrier and softening beard stubble.',
    benefits: [
      'Removes daily urban grime and sebum without squeaky dryness',
      'Micro-dosed 0.5% salicylic acid keeps pore openings unobstructed',
      'Pro-Vitamin B5 and green tea soothe post-wash skin'
    ],
    keyActives: [
      {
        name: 'Apple Amino Acid Surfactants',
        concentration: '15.0%',
        role: 'Gentle Cleansing Base',
        mechanism: 'Biocompatible surfactant matrix that respects the skin lipid bilayer.'
      },
      {
        name: 'Panthenol (Pro-Vitamin B5)',
        concentration: '1.5%',
        role: 'Barrier Protection',
        mechanism: 'Maintains stratum corneum hydration during cleansing.'
      },
      {
        name: 'Salicylic Acid (BHA)',
        concentration: '0.5%',
        role: 'Micro-Exfoliant',
        mechanism: 'Assists in clearing superficial keratin debris from pore mouths.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silky low-foaming gel',
      finish: 'Clean & supple, non-stripped',
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
        amountOrTime: 'Lukewarm water',
        instruction: 'Rinse thoroughly with cool or lukewarm water and pat dry with a clean towel.'
      }
    ],
    compatibility: {
      worksWellWith: ['Niacinamide', 'Ceramides', 'Hyaluronic Acid', 'SPF 50'],
      useCarefullyWith: ['Physical walnut shell scrubs', 'High-strength alcohol toners'],
      explanation: 'AEGIS WASH is pH 5.5 balanced and pairs seamlessly with all active serums.'
    },
    comparison: {
      bestFor: 'Daily dirt, oil, and sweat removal without barrier stripping',
      texture: 'Low-foaming silky gel',
      keyActive: '15% Apple Amino Acids + Panthenol',
      amUse: true,
      pmUse: true,
      targetSkin: 'All skin types, oily/combination'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-clear', 'aegis-shield'],
    completeRoutineDiscount: 348,
    protocolAM: 'Lather 1 pump in palms with water. Massage over face for 30 seconds, then rinse.',
    protocolPM: 'Use nightly to remove daytime sunscreen, sweat, and city pollution.',
    whoItsFor: 'Anyone who experiences post-wash tightness or wants an effortless everyday foundation.',
    fullIngredients: 'Aqua (Purified Water), Sodium Cocoyl Apple Amino Acids, Cocamidopropyl Betaine, Vegetable Glycerin, Panthenol (1.5%), Salicylic Acid (0.5%), Camellia Sinensis (Green Tea) Leaf Extract, Allantoin, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Can I use this on stubble or a short beard?',
        answer: 'Yes. The amino acid foam softens facial hair follicles and rinses completely clean.'
      },
      {
        question: 'Will this cause dry patches?',
        answer: 'No. Formulated at physiological pH 5.5 with Pro-Vitamin B5 to protect the acid mantle.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    },
    pairsWith: ['aegis-clear', 'aegis-shield', 'aegis-barrier']
  },
  {
    id: 'aegis-purify',
    slug: 'purify-clarifying-gel-cleanser',
    stepNumber: '01 / CLEANSE',
    stepCategory: 'CLEANSE',
    name: 'AEGIS PURIFY',
    subtitle: 'Clarifying Gel Cleanser',
    formulaSpec: '1.5% SALICYLIC ACID + 1.0% ZINC PCA + GREEN TEA',
    category: 'cleansers',
    concerns: ['acne', 'oil'],
    skinTypes: ['Oily', 'Acne-Prone', 'Combination'],
    subcategory: 'Targeted Gel Cleanser',
    price: 529,
    originalPrice: 649,
    rating: 4.9,
    reviewCount: 178,
    volume: '150 ml / 5.1 fl. oz.',
    phLevel: 'pH 5.0',
    badges: ['ACNE DEFENSE', 'OIL CONTROL'],
    shortDescription: 'Active clarifying gel wash engineered for breakout-prone and congested skin in humid conditions.',
    whyItExists: 'Men’s skin produces up to twice the sebum of women’s skin, leading to clogged follicular infundibula. AEGIS PURIFY delivers therapeutic 1.5% salicylic acid inside pores alongside sebum-regulating Zinc PCA.',
    whatItDoes: 'Penetrates oil-clogged pores, breaks up dead skin debris, and helps control active blemishes and midday shine.',
    benefits: [
      'Dissolves pore-clogging sebum deep within facial pores and follicles',
      'Zinc PCA reduces surface microbial congestion and shiny skin',
      'Green tea polyphenols soothe blemish-associated redness'
    ],
    keyActives: [
      {
        name: 'Salicylic Acid (BHA)',
        concentration: '1.5%',
        role: 'Lipophilic Exfoliant',
        mechanism: 'Oil-soluble acid that penetrates sebum to clear trapped cellular debris.'
      },
      {
        name: 'Zinc PCA',
        concentration: '1.0%',
        role: 'Sebum Regulator & Purifier',
        mechanism: 'Normalizes sebaceous secretion and balances the follicular microbiome.'
      },
      {
        name: 'Camellia Sinensis (Green Tea)',
        concentration: '1.0%',
        role: 'Calming Antioxidant',
        mechanism: 'Mitigates oxidative stress caused by lipid peroxidation.'
      }
    ],
    beforeYouBuy: {
      texture: 'Clear clarifying gel',
      finish: 'Clean matte, deeply refreshed',
      fragrance: 'Fragrance-free',
      skinType: 'Oily, congested, acne-prone skin',
      routine: 'AM & PM (Step 01)',
      size: '150 ML',
      expectedUse: 'Approximately 60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'APPLY',
        amountOrTime: '1 pump',
        instruction: 'Apply to damp face, focusing on the T-zone and congested jawline.'
      },
      {
        stepNumber: '02',
        action: 'WORK IN',
        amountOrTime: '45 seconds',
        instruction: 'Allow the BHA contact time to penetrate sebum before rinsing.'
      },
      {
        stepNumber: '03',
        action: 'RINSE',
        amountOrTime: 'Cool water',
        instruction: 'Rinse thoroughly with cool water.'
      }
    ],
    compatibility: {
      worksWellWith: ['Niacinamide', 'Hyaluronic Acid', 'SPF 50'],
      useCarefullyWith: ['Strong chemical peels or physical scrub brushes'],
      explanation: 'Use daily. If skin feels dry, alternate with AEGIS WASH in the mornings.'
    },
    comparison: {
      bestFor: 'Stubborn blackheads, congested pores, and active breakouts',
      texture: 'Clear clarifying gel',
      keyActive: '1.5% BHA + 1% Zinc PCA',
      amUse: true,
      pmUse: true,
      targetSkin: 'Oily, congested, acne-prone'
    },
    completeRoutineItemIds: ['aegis-purify', 'aegis-clear', 'aegis-shield-matte'],
    completeRoutineDiscount: 360,
    protocolAM: 'Massage into damp skin for 30–45 seconds. Rinse clean with cool water.',
    protocolPM: 'Essential after workouts or humid days to purge accumulated sebum and sweat.',
    whoItsFor: 'Men with stubborn blackheads, whiteheads, shiny T-zones, or frequent breakouts.',
    fullIngredients: 'Aqua, Cocamidopropyl Hydroxysultaine, Sodium C14-16 Olefin Sulfonate, Salicylic Acid (1.5%), Zinc PCA (1.0%), Camellia Sinensis (Green Tea) Leaf Extract, Glycerin, Allantoin, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Will this cause purging?',
        answer: 'Mild initial purging can occur during the first 1-2 weeks as trapped pore debris clears.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-clear', 'aegis-shield-matte', 'aegis-hydra']
  },
  {
    id: 'aegis-calm',
    slug: 'calm-gentle-barrier-cleanser',
    stepNumber: '01 / CLEANSE',
    stepCategory: 'CLEANSE',
    name: 'AEGIS CALM',
    subtitle: 'Gentle Barrier Cleanser',
    formulaSpec: '3:1:1 CERAMIDES + COLLOIDAL OAT + PANTHENOL',
    category: 'cleansers',
    concerns: ['dehydration', 'redness', 'barrier'],
    skinTypes: ['Dry', 'Sensitive', 'Normal'],
    subcategory: 'Lotion Cleanser',
    price: 549,
    originalPrice: 649,
    rating: 4.9,
    reviewCount: 134,
    volume: '150 ml / 5.1 fl. oz.',
    phLevel: 'pH 5.5',
    badges: ['BARRIER REPAIR', 'NON-FOAMING'],
    shortDescription: 'Creamy, non-foaming barrier wash for dry, sensitive, or razor-compromised skin.',
    whyItExists: 'Frequent shaving removes the outer layer of skin cells. Foaming washes can further aggravate the compromised skin. AEGIS CALM cleanses with comforting lipids, colloidal oat, and ceramides without foaming agents.',
    whatItDoes: 'Gently cleanses while replenishing essential barrier lipids and comforting razor burn and tight dryness.',
    benefits: [
      'Zero stinging on freshly shaved skin or active razor irritation',
      'Colloidal oat beta-glucan calms immediate surface redness',
      'Leaves skin cushioned, calm, and naturally hydrated'
    ],
    keyActives: [
      {
        name: 'Ceramide Complex (NP, AP, EOP)',
        concentration: '1.5%',
        role: 'Lipid Replenishment',
        mechanism: 'Restores essential intercellular lipids while cleansing.'
      },
      {
        name: 'Colloidal Oat Flour',
        concentration: '2.0%',
        role: 'Anti-Irritant',
        mechanism: 'Rich in avenanthramides and beta-glucan to soothe erythema.'
      },
      {
        name: 'Panthenol (Pro-Vitamin B5)',
        concentration: '2.0%',
        role: 'Hydrating Humectant',
        mechanism: 'Retains moisture in the stratum corneum.'
      }
    ],
    beforeYouBuy: {
      texture: 'Silky comforting cleansing cream',
      finish: 'Supple, hydrated, velvet cushion',
      fragrance: 'Fragrance-free',
      skinType: 'Dry, sensitive, razor-irritated',
      routine: 'AM & PM (Step 01)',
      size: '150 ML',
      expectedUse: 'Approximately 60–75 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'DISPENSE',
        amountOrTime: '1–2 pumps',
        instruction: 'Apply directly onto dry or slightly damp skin.'
      },
      {
        stepNumber: '02',
        action: 'MASSAGE',
        amountOrTime: '30 seconds',
        instruction: 'Massage gently across face and sensitive shaved neck area.'
      },
      {
        stepNumber: '03',
        action: 'RINSE OR WIPE',
        amountOrTime: 'Water / Soft cloth',
        instruction: 'Rinse with cool water or gently wipe off with a clean damp cloth.'
      }
    ],
    compatibility: {
      worksWellWith: ['All serums', 'AEGIS REPAIR', 'AEGIS BARRIER'],
      useCarefullyWith: ['None — hypoallergenic non-stripping base'],
      explanation: 'Universally tolerated on sensitive and compromised skin.'
    },
    comparison: {
      bestFor: 'Shaving burn, peeling dryness, sensitivity, and winter tightness',
      texture: 'Creamy non-foaming lotion',
      keyActive: 'Ceramides + Colloidal Oat + 2% Panthenol',
      amUse: true,
      pmUse: true,
      targetSkin: 'Dry, sensitive, razor-damaged'
    },
    completeRoutineItemIds: ['aegis-calm', 'aegis-repair', 'aegis-barrier'],
    completeRoutineDiscount: 350,
    protocolAM: 'Gentle wash on damp skin. Leaves protective barrier intact.',
    protocolPM: 'Use directly following a shave or evening routine to comfort stressed skin.',
    whoItsFor: 'Men whose skin feels itchy, tight, or stings after shaving, or who have naturally dry skin.',
    fullIngredients: 'Aqua, Caprylic/Capric Triglyceride, Glycerin, Cetearyl Alcohol, Colloidal Oatmeal, Panthenol (2.0%), Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Does this foam up?',
        answer: 'No. It is a non-foaming lotion cleanser designed specifically to avoid barrier disruption.'
      }
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1582650448629-3c854f356544?auto=format&fit=crop&w=800&q=80',
      texture: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80'
    },
    pairsWith: ['aegis-repair', 'aegis-barrier', 'aegis-shield']
  }
];
