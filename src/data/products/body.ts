import { Product } from '../../types';

export const BODY: Product[] = [
  {
    id: 'aegis-body-wash',
    slug: 'body-wash-daily-body-cleanser',
    stepNumber: 'BODY / CLEANSE',
    stepCategory: 'CLEANSE',
    name: 'AEGIS BODY WASH',
    subtitle: 'Clarifying Body Cleanser',
    formulaSpec: '1.0% SALICYLIC ACID + ZINC PCA + EUCALYPTUS & MENTHOL',
    category: 'body',
    concerns: ['acne', 'oil'],
    skinTypes: ['All Skin Types', 'Gym & Athletes', 'Bacne-Prone'],
    subcategory: 'Clarifying Shower Gel',
    price: 549,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 214,
    volume: '250 ml / 8.4 fl. oz.',
    phLevel: 'pH 5.5',
    badges: ['ANTI-BACNE', 'GYM ESSENTIAL'],
    shortDescription: 'Deep-cleansing active body wash that eliminates workout sweat, back and chest acne, and odor-causing bacteria.',
    whyItExists: 'Heavy gym sweat and tight clothing trap sebum on the back, shoulders, and chest. AEGIS BODY WASH infuses lipophilic salicylic acid and Zinc PCA into an exhilarating eucalyptus lather to keep skin clear.',
    whatItDoes: 'Clears clogged pores on the back and chest (bacne), washes away stubborn gym sweat, and leaves skin refreshed.',
    benefits: [
      '1.0% Salicylic Acid clears breakout-causing dead skin and oil on back and chest',
      'Zinc PCA neutralizes odor-causing bacteria naturally',
      'Natural cooling eucalyptus and menthol provide an invigorating post-workout shower'
    ],
    keyActives: [
      {
        name: 'Salicylic Acid (BHA)',
        concentration: '1.0%',
        role: 'Follicular Body Cleanser',
        mechanism: 'Penetrates thick body skin to dissolve bacne blockages.'
      },
      {
        name: 'Zinc PCA',
        concentration: '0.5%',
        role: 'Odor & Sebum Regulator',
        mechanism: 'Controls bacterial proliferation responsible for sweat odor.'
      },
      {
        name: 'Eucalyptus & Menthol',
        concentration: 'Natural Extracts',
        role: 'Cooling Invigoration',
        mechanism: 'Stimulates thermal skin receptors for an instant refreshed feeling.'
      }
    ],
    beforeYouBuy: {
      texture: 'Crisp foaming body gel',
      finish: 'Invigorated, ultra-clean, non-stripped',
      fragrance: 'Crisp eucalyptus & peppermint botanical aroma',
      skinType: 'All skin types, especially athletic or bacne prone',
      routine: 'Daily shower / Post-workout',
      size: '250 ML',
      expectedUse: 'Approximately 45–60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'LATHER',
        amountOrTime: 'Generous pump',
        instruction: 'Lather between palms or washcloth with warm water.'
      },
      {
        stepNumber: '02',
        action: 'APPLY',
        amountOrTime: '60 seconds',
        instruction: 'Massage across chest, shoulders, and back, leaving on for 60 seconds.'
      },
      {
        stepNumber: '03',
        action: 'RINSE',
        amountOrTime: 'Clean rinse',
        instruction: 'Rinse thoroughly with cool or lukewarm water.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS BODY LOTION'],
      useCarefullyWith: ['Do not use on open wounds or immediately post-waxing'],
      explanation: 'Designed for daily body hygiene and post-training showers.'
    },
    comparison: {
      bestFor: 'Back acne (bacne), chest breakouts, gym sweat, body odor',
      texture: 'Refreshing foaming gel',
      keyActive: '1% BHA + Zinc PCA + Eucalyptus',
      amUse: true,
      pmUse: true,
      targetSkin: 'All body skin, workout active'
    },
    protocolAM: 'Use in morning shower to kickstart energy with cooling menthol.',
    protocolPM: 'Use after workouts to immediately remove dried sweat and sebum.',
    whoItsFor: 'Men who exercise, commute in heat, or struggle with back and shoulder pimples.',
    fullIngredients: 'Aqua, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Salicylic Acid (1.0%), Zinc PCA (0.5%), Eucalyptus Globulus Leaf Oil, Menthol, Glycerin, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Can I use this on my face?',
        answer: 'We recommend AEGIS WASH or PURIFY for the face, as the body wash includes invigorating menthol designed for body skin.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-body-lotion']
  },
  {
    id: 'aegis-body-lotion',
    slug: 'body-lotion-barrier-hydration',
    stepNumber: 'BODY / REPAIR',
    stepCategory: 'REPAIR',
    name: 'AEGIS BODY HYDRATE',
    subtitle: 'Restorative Body Moisturizer',
    formulaSpec: '5.0% UREA + 2.0% LACTIC ACID + 3:1:1 CERAMIDES',
    category: 'body',
    concerns: ['dehydration', 'barrier'],
    skinTypes: ['Dry Body', 'Rough Elbows & Knees', 'Keratosis Pilaris'],
    subcategory: 'Exfoliating Moisture Lotion',
    price: 649,
    originalPrice: 799,
    rating: 4.9,
    reviewCount: 168,
    volume: '200 ml / 6.7 fl. oz.',
    phLevel: 'pH 4.8',
    badges: ['SMOOTHS ROUGHNESS', 'FAST ABSORBING'],
    shortDescription: 'Clinical smoothing body lotion that dissolves rough bumps (strawberry skin / KP) and hydrates ashiness without greasy residue.',
    whyItExists: 'Men frequently suffer from rough, ashy elbows, dry knees, and keratosis pilaris bumps on upper arms. AEGIS BODY HYDRATE unites hydrating urea with lactic acid and ceramides to smooth rough texture in days.',
    whatItDoes: 'Gently sloughs off dry keratin scales, deeply hydrates thick skin, and restores soft suppleness with zero stickiness.',
    benefits: [
      '5.0% Urea provides natural moisturizing factor (NMF) hydration',
      'Lactic acid gently dissolves bumpy keratosis pilaris on arms and thighs',
      'Non-greasy formula absorbs so fast you can put clothes on immediately'
    ],
    keyActives: [
      {
        name: 'Urea (Pharmaceutical Grade)',
        concentration: '5.0%',
        role: 'Keratolytic Humectant',
        mechanism: 'Binds moisture while gently softening stubborn hard keratin.'
      },
      {
        name: 'Lactic Acid (AHA)',
        concentration: '2.0%',
        role: 'Micro-Exfoliant',
        mechanism: 'Loosens dry surface flakes and stimulates natural ceramide synthesis.'
      },
      {
        name: 'Ceramide Complex',
        concentration: '1.0%',
        role: 'Lipid Replenisher',
        mechanism: 'Restores the epidermal lipid shield across arms, legs, and torso.'
      }
    ],
    beforeYouBuy: {
      texture: 'Weightless quick-dry body cream',
      finish: 'Silk-touch smooth, completely non-sticky',
      fragrance: 'Fragrance-free',
      skinType: 'Dry body skin, rough elbows, bumpy arms (KP)',
      routine: 'Daily post-shower',
      size: '200 ML',
      expectedUse: 'Approximately 45–60 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'PUMP',
        amountOrTime: '2–3 pumps',
        instruction: 'Apply directly onto towel-dried skin right after showering.'
      },
      {
        stepNumber: '02',
        action: 'TARGET',
        amountOrTime: 'Rough zones',
        instruction: 'Massage into elbows, knees, arms, and dry legs.'
      },
      {
        stepNumber: '03',
        action: 'DRESS',
        amountOrTime: '30 seconds',
        instruction: 'Absorbs instantly. Dress immediately with zero stickiness.'
      }
    ],
    compatibility: {
      worksWellWith: ['aegis-body-wash'],
      useCarefullyWith: ['Do not apply on freshly shaved groin or face'],
      explanation: 'Formulated specifically for the thicker skin barrier of the body.'
    },
    comparison: {
      bestFor: 'Keratosis pilaris bumps, ashy dry skin, rough elbows, cracked heels',
      texture: 'Fast-absorbing smooth cream',
      keyActive: '5% Urea + 2% Lactic Acid + Ceramides',
      amUse: true,
      pmUse: true,
      targetSkin: 'Dry, flaky, or bumpy body skin'
    },
    protocolAM: 'Apply post-shower for all-day skin softness and zero ashiness.',
    protocolPM: 'Apply to rough elbows and feet before bed for intensive overnight renewal.',
    whoItsFor: 'Men with rough bumpy skin on the backs of their arms, dry ashy legs, or rough elbows.',
    fullIngredients: 'Aqua, Urea (5.0%), Caprylic/Capric Triglyceride, Lactic Acid (2.0%), Glycerin, Ceramide NP, Ceramide AP, Phytosphingosine, Cetearyl Alcohol, Dimethicone, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Does this leave a sticky film on the skin?',
        answer: 'No. The light emulsion is engineered to sink into the skin within 20 seconds.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-body-wash']
  },
  {
    id: 'aegis-lip',
    slug: 'lip-daily-lip-barrier-balm',
    stepNumber: 'DAILY / LIP',
    stepCategory: 'REPAIR',
    name: 'AEGIS LIP',
    subtitle: 'Daily Lip Barrier Balm',
    formulaSpec: 'SQUALANE + 3:1:1 CERAMIDES + CANDELILLA WAX + VITAMIN E',
    category: 'body',
    concerns: ['dehydration', 'barrier'],
    skinTypes: ['All Skin Types', 'Chapped Lips', 'Outdoor Commuters'],
    subcategory: 'Matte Lip Shield',
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviewCount: 388,
    volume: '10 ml / 0.3 fl. oz.',
    phLevel: 'Neutral',
    badges: ['ZERO SHINE', 'MATTE FINISH'],
    shortDescription: 'Pocket-sized restorative lip balm that instantly relieves dry, chapped lips with zero glossy shine.',
    whyItExists: 'Most lip balms leave an awkward glossy shine or contain irritating menthol/camphor that dries lips further in the long run. AEGIS LIP delivers bio-identical ceramides and plant squalane in a strictly matte barrier seal.',
    whatItDoes: 'Heals painful cracked lips, prevents wind and sun chapping, and remains 100% invisible on the lips.',
    benefits: [
      '100% non-glossy natural matte finish — looks completely undetectable',
      'Ceramides and plant squalane heal deep fissures and cracks',
      'Pocket-friendly squeeze tube designed for on-the-go reapplication'
    ],
    keyActives: [
      {
        name: 'Vegetable Squalane',
        concentration: '10.0%',
        role: 'Lipid Restorer',
        mechanism: 'Penetrates thin vermilion border to replenish natural fats.'
      },
      {
        name: 'Ceramide Complex',
        concentration: '1.5%',
        role: 'Fissure Repair',
        mechanism: 'Seals microscopic cracks to prevent bleeding and peeling.'
      },
      {
        name: 'Euphorbia Cerifera (Candelilla Wax)',
        concentration: 'Natural Wax',
        role: 'Matte Moisture Lock',
        mechanism: 'Creates an invisible protective moisture shield without shine.'
      }
    ],
    beforeYouBuy: {
      texture: 'Velvet matte balm',
      finish: 'Zero shine, completely invisible',
      fragrance: 'Flavor-free & Fragrance-free',
      skinType: 'All men, dry chapped lips',
      routine: 'Apply as needed throughout the day',
      size: '10 ML',
      expectedUse: 'Approximately 90 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'SQUEEZE',
        amountOrTime: 'Pin drop',
        instruction: 'Squeeze a tiny drop onto the angled silicone applicator.'
      },
      {
        stepNumber: '02',
        action: 'GLIDE',
        amountOrTime: 'Both lips',
        instruction: 'Glide smoothly across upper and lower lips.'
      },
      {
        stepNumber: '03',
        action: 'MATTE',
        amountOrTime: 'Instant',
        instruction: 'Sets immediately with zero glossy sheen.'
      }
    ],
    compatibility: {
      worksWellWith: ['Any skincare routine'],
      useCarefullyWith: ['Avoid licking lips after application'],
      explanation: 'Pocket-friendly formulation for daily use.'
    },
    comparison: {
      bestFor: 'Cracked lips, winter chapping, outdoor wind protection, zero gloss',
      texture: 'Invisible velvet matte balm',
      keyActive: 'Squalane + Ceramides + Vitamin E',
      amUse: true,
      pmUse: true,
      targetSkin: 'All men, chapped lips'
    },
    protocolAM: 'Apply before heading outdoors in sun, wind, or dry AC environments.',
    protocolPM: 'Apply a generous layer before sleeping for overnight fissure healing.',
    whoItsFor: 'Men who suffer from dry, peeling lips but refuse to use glossy or sweet-tasting women’s lip glosses.',
    fullIngredients: 'Ricinus Communis Seed Oil, Caprylic/Capric Triglyceride, Vegetable Squalane (10.0%), Euphorbia Cerifera (Candelilla) Cera, Ceramide NP, Ceramide AP, Phytosphingosine, Tocopherol (Vitamin E).',
    faqList: [
      {
        question: 'Will this look shiny on my lips?',
        answer: 'No. It was engineered specifically with candelilla wax to deliver a 100% natural, undetectable matte finish.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80'
    ],
    textureImage: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
    pairsWith: ['aegis-shield', 'aegis-barrier']
  }
];
