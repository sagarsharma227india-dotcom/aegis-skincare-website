import { Product } from '../../types';

export const EXFOLIATION: Product[] = [
  {
    id: 'aegis-renew',
    slug: 'renew-gentle-chemical-exfoliant',
    stepNumber: 'TREAT / EXFOLIATE',
    stepCategory: 'CORRECT',
    name: 'AEGIS RENEW',
    subtitle: 'Gentle Chemical Exfoliant',
    formulaSpec: '7% LACTIC ACID + 3% MANDELIC ACID + 2% GLUCONOLACTONE (PHA) + CENTELLA',
    category: 'exfoliation',
    concerns: ['texture', 'dark-spots', 'aging', 'dehydration'],
    skinTypes: ['All Skin Types', 'Dull Complexion', 'Textured Skin', 'Sensitive'],
    subcategory: 'Leave-On Resurfacing Liquid',
    price: 749,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 182,
    volume: '100 ml / 3.4 fl. oz.',
    phLevel: 'pH 3.8',
    badges: ['GENTLE AHA+PHA', 'NO SCRUB PEELING', 'WEEKLY RESET'],
    shortDescription: 'Micro-exfoliating leave-on fluid that dissolves dull surface dead skin, clears clogged follicular traps, and brightens tone without abrasive physical scrubbing.',
    whyItExists: 'Aggressive physical facial scrubs with walnut shells or plastic microbeads create micro-tears in male facial skin and trigger painful razor irritation. AEGIS RENEW uses high-molecular-weight AHAs (Lactic + Mandelic) and gentle PHA to dissolve the cellular glue binding dead cells, revealing smooth, clear skin safely.',
    whatItDoes: 'Gently sloughs off dull dead surface cells, softens razor-clogging stubble, fades rough patches, and accelerates cell renewal.',
    benefits: [
      'Lactic and Mandelic acids gently loosen dead stratum corneum cells without stinging',
      'Gluconolactone (PHA) provides sustained surface hydration while exfoliating',
      'Centella Asiatica and Panthenol prevent redness and protect skin barrier tolerance'
    ],
    keyActives: [
      {
        name: 'Lactic Acid (AHA)',
        concentration: '7.0%',
        role: 'Humectant Exfoliant',
        mechanism: 'Breaks down desmosomes between dead skin cells while drawing water into newly exposed skin.'
      },
      {
        name: 'Mandelic Acid (AHA)',
        concentration: '3.0%',
        role: 'Gentle Large-Molecule Acid',
        mechanism: 'Penetrates slowly and evenly, preventing hyperpigmentation and smoothing rough texture.'
      },
      {
        name: 'Gluconolactone (PHA)',
        concentration: '2.0%',
        role: 'Polyhydroxy Acid & Shield',
        mechanism: 'Provides gentle superficial cell turnover with zero irritation and antioxidant benefits.'
      }
    ],
    beforeYouBuy: {
      finish: 'Clean bare skin, instant smoothness',
      fragrance: 'Fragrance-free',
      skinType: 'Dull, textured, uneven, ingrown-prone skin',
      routine: 'PM Only (2–3 nights weekly)',
      size: '100 ML',
      expectedUse: 'Approximately 90 days'
    },
    howToUseTimeline: [
      {
        stepNumber: '01',
        action: 'CLEANSE PM',
        amountOrTime: 'Evenings',
        instruction: 'Wash face thoroughly and pat completely dry.'
      },
      {
        stepNumber: '02',
        action: 'SPLASH & PAT',
        amountOrTime: '4–5 drops',
        instruction: 'Splash 4–5 drops into hands and press over face and neck. Avoid immediate eye area.'
      },
      {
        stepNumber: '03',
        action: 'LEAVE ON',
        amountOrTime: 'Do not rinse',
        instruction: 'Do not rinse. Follow with AEGIS RECOVER after 2 minutes.'
      }
    ],
    compatibility: {
      worksWellWith: ['AEGIS RECOVER', 'AEGIS CALM', 'AEGIS REPAIR'],
      useCarefullyWith: ['Do not use on the same evening as other strong peeling treatments or right after a close razor shave'],
      explanation: 'Use 2 to 3 evenings per week. Always use SPF 50 the following morning.'
    },
    comparison: {
      bestFor: 'Rough forehead texture, flaky dry patches, dull complexion, clogged follicular bumps',
      keyActive: '7% Lactic + 3% Mandelic + 2% PHA',
      amUse: false,
      pmUse: true,
      targetSkin: 'All skin types, especially rough or dull'
    },
    completeRoutineItemIds: ['aegis-wash', 'aegis-renew', 'aegis-recover'],
    completeRoutineDiscount: 350,
    protocolAM: 'Never use in the morning. Always apply AEGIS SHIELD SPF 50 the morning after use.',
    protocolPM: 'Apply 2-3 nights per week to clean dry skin before your moisturizer.',
    whoItsFor: 'Men whose skin feels rough to the touch, looks dull in mirrors, or who hate gritty scrub pastes.',
    fullIngredients: 'Aqua, Lactic Acid (7.0%), Mandelic Acid (3.0%), Gluconolactone (2.0%), Centella Asiatica Extract, Panthenol, Glycerin, Sodium Hydroxide, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin.',
    faqList: [
      {
        question: 'Do I have to wash this off?',
        answer: 'No. AEGIS RENEW is a leave-on micro-peel fluid designed to work overnight while you sleep.'
      },
      {
        question: 'Will my face visibly peel in sheets?',
        answer: 'No. The combination of Lactic and Mandelic acid creates microscopic, invisible exfoliation, not sheets of peeling skin.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    ],
    pairsWith: ['aegis-wash', 'aegis-recover', 'aegis-shield']
  }
];
