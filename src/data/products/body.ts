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
    image: '/aegis-body-wash.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248593883-7d727b4074ee?auto=format&fit=crop&w=800&q=80'
    ],
    pairsWith: []
  }
];
