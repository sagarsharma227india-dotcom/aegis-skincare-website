import { QuizQuestion, QuizDiagnosis } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: 'How does your facial skin feel by midday (around 2:00 PM)?',
    subtitle: 'Helps assess your natural oil production and hydration balance.',
    options: [
      {
        id: 'oily-all',
        label: 'Noticeably slick or shiny across forehead, nose & cheeks',
        description: 'Higher oil output with frequent mid-day shine.',
        tag: 'Oil-Prone'
      },
      {
        id: 'combo',
        label: 'Oily on forehead and nose (T-zone), but normal or dry on cheeks',
        description: 'Mixed oil levels across different zones of the face.',
        tag: 'Combination'
      },
      {
        id: 'tight-dry',
        label: 'Tight, flaky, or dry — especially after washing or shaving',
        description: 'Low moisture retention needing barrier support.',
        tag: 'Dry / Dehydrated'
      },
      {
        id: 'balanced',
        label: 'Comfortable, neither overly oily nor uncomfortably dry',
        description: 'Generally balanced everyday moisture levels.',
        tag: 'Balanced'
      }
    ]
  },
  {
    id: 2,
    title: 'What is your primary everyday skin objective?',
    subtitle: 'Select the main area you want your routine to focus on.',
    options: [
      {
        id: 'breakouts',
        label: 'Clear breakouts, blackheads & congested pores',
        description: 'Targeted support for clearing pore buildup and texture.',
        tag: '2% BHA + Zinc'
      },
      {
        id: 'razor-burn',
        label: 'Soothe razor irritation, bumps & post-shave redness',
        description: 'Gentle calming formulas to support post-shave comfort.',
        tag: 'Ceramides + Centella'
      },
      {
        id: 'oil-control',
        label: 'Control excess shine & refine enlarged pores',
        description: 'Weightless matte finishes and sebum-balancing actives.',
        tag: '5% Niacinamide'
      },
      {
        id: 'daily-armor',
        label: 'Daily sun protection & healthy long-term defense',
        description: 'Broad-spectrum UV protection without heaviness.',
        tag: 'Invisible SPF 50'
      }
    ]
  },
  {
    id: 3,
    title: 'How frequently do you shave your facial hair?',
    subtitle: 'Shaving physically contacts the outermost skin layers.',
    options: [
      {
        id: 'shave-daily',
        label: 'Daily or every other day (Clean shave)',
        description: 'Regular razor contact requiring soothing barrier recovery.',
        tag: 'Frequent Shave'
      },
      {
        id: 'shave-trim',
        label: 'I trim stubble or beard with electric trimmers',
        description: 'Moderate friction with facial hair grooming.',
        tag: 'Stubble / Trim'
      },
      {
        id: 'full-beard',
        label: 'Full beard maintained with neckline shaping',
        description: 'Requires lightweight textures that do not leave residue in beards.',
        tag: 'Beard Care'
      },
      {
        id: 'rarely-shave',
        label: 'Rarely shave or naturally clean-shaven',
        description: 'Minimal blade contact on facial skin.',
        tag: 'Minimal Friction'
      }
    ]
  },
  {
    id: 4,
    title: 'How much time do you spend outdoors or in front of screens daily?',
    subtitle: 'Assesses daytime environmental and sun exposure.',
    options: [
      {
        id: 'high-outdoor',
        label: 'Extensive outdoor exposure (commute, sports, travel > 2 hrs)',
        description: 'Higher daytime sun exposure and city commute.',
        tag: 'High Sun Exposure'
      },
      {
        id: 'screen-heavy',
        label: 'Primarily indoors with 8+ hours in air conditioning & screens',
        description: 'Dry indoor air conditioning and screen exposure.',
        tag: 'Indoor / AC'
      },
      {
        id: 'balanced-outdoor',
        label: 'Balanced mix of indoor work and daily city transit',
        description: 'Moderate everyday outdoor and urban exposure.',
        tag: 'Everyday Urban'
      }
    ]
  },
  {
    id: 5,
    title: 'What does your current daily routine look like?',
    subtitle: 'Helps us tailor a simple schedule you can easily maintain.',
    options: [
      {
        id: 'routine-none',
        label: 'Just water or whatever bath soap is in the shower',
        description: 'Ready for a gentle, non-stripping baseline.',
        tag: 'Fresh Start'
      },
      {
        id: 'routine-basic',
        label: 'Basic face wash + standard cream when I remember',
        description: 'Ready to upgrade to targeted active ingredients.',
        tag: 'Essential Upgrade'
      },
      {
        id: 'routine-active',
        label: 'I use serums or sunscreen, but want a streamlined system',
        description: 'Looking for a cohesive, fast 3-minute routine.',
        tag: 'Streamlined System'
      }
    ]
  },
  {
    id: 6,
    title: 'How does your skin react to new products or weather changes?',
    subtitle: 'Ensures your recommended routine matches your skin sensitivity.',
    options: [
      {
        id: 'sensitive-high',
        label: 'Easily stings, turns red, or breaks out with new formulas',
        description: 'Prefers fragrance-free, calming formulations.',
        tag: 'Gentle Formulas'
      },
      {
        id: 'sensitive-mild',
        label: 'Occasionally feels sensitive right after shaving or in winter',
        description: 'Enjoys soothing lipid support during seasonal shifts.',
        tag: 'Post-Shave Comfort'
      },
      {
        id: 'resilient',
        label: 'Resilient — rarely experiences redness or irritation',
        description: 'Can easily use active serums morning and night.',
        tag: 'Direct Actives'
      }
    ]
  },
  {
    id: 7,
    title: 'What is your preferred daily routine structure?',
    subtitle: 'We calibrate our recommendations to fit your daily schedule and personal discipline.',
    options: [
      {
        id: 'pref-essential',
        label: 'The Essential 3-Step Protocol (Cleanse, Treat/Repair, Defend)',
        description: 'Under 3 minutes total daily commitment. The ideal balance of clinical efficacy and speed.',
        tag: 'Recommended (3-Min)'
      },
      {
        id: 'pref-minimal',
        label: 'Ultra-Minimal 2-Step Baseline (Cleanse + Defend / Repair)',
        description: 'Fastest possible protocol for men on tight morning schedules.',
        tag: 'Ultra-Fast (90s)'
      },
      {
        id: 'pref-complete',
        label: 'The Comprehensive 4-Piece System (Cleanse, Treat, Restore, Defend)',
        description: 'Full active protocol targeting both deep congestion and post-shave barrier recovery.',
        tag: 'Complete System'
      }
    ]
  }
];

export function calculateQuizResults(answers: Record<number, string>): QuizDiagnosis {
  const q1 = answers[1] || 'combo';
  const q2 = answers[2] || 'breakouts';
  const q3 = answers[3] || 'shave-trim';

  let skinType = 'Combination + Balanced';
  let barrierScore = 80;
  let oilScore = 65;
  let sensitivityScore = 35;
  let mainIssue = 'Occasional T-zone shine & everyday urban exposure';
  let priorityTitle = 'BALANCE & PROTECT';
  let priorityDescription = 'Maintain steady hydration while fortifying the acid mantle and shielding skin from daily daytime UV rays.';
  let targetActives = ['3:1:1 Ceramides', 'pH 5.5 Amino Acids', 'Broad-Spectrum SPF 50+ PA++++'];
  let recommendedProductIds = ['aegis-starter-bundle', 'aegis-wash', 'aegis-barrier', 'aegis-shield'];

  if (q1 === 'oily-all' || q2 === 'breakouts' || q2 === 'oil-control') {
    skinType = 'Oily + Congestion-Prone';
    barrierScore = 68;
    oilScore = 86;
    sensitivityScore = 42;
    mainIssue = 'Excess surface oil and clogged pores';
    priorityTitle = 'CONTROL CONGESTION';
    priorityDescription = 'Dissolve trapped sebum with lipophilic BHA and regulate surface oil appearance with 10% Niacinamide without stripping your moisture barrier.';
    targetActives = ['2.0% Salicylic Acid (BHA)', '10.0% Niacinamide', '1.0% Zinc PCA', 'Apple Amino Acids'];
    recommendedProductIds = ['aegis-clear-routine', 'aegis-clear', 'aegis-purify', 'aegis-matte'];
  } else if (q1 === 'tight-dry' || q2 === 'razor-burn' || q3 === 'shave-daily') {
    skinType = 'Dry + Barrier-Stressed';
    barrierScore = 58;
    oilScore = 32;
    sensitivityScore = 78;
    mainIssue = 'Post-shave sensitivity and low moisture retention';
    priorityTitle = 'RESTORE THE BARRIER';
    priorityDescription = 'Replenish lost intercellular lipids with biomimetic 3:1:1 Ceramides and soothe shaving friction with Centella and Ectoin.';
    targetActives = ['3:1:1 Biomimetic Ceramides', 'Polyglutamic Acid', 'Apple Amino Acids', '1.0% Ectoin'];
    recommendedProductIds = ['aegis-barrier-reset', 'aegis-barrier', 'aegis-wash', 'aegis-shield'];
  } else if (q2 === 'daily-armor') {
    skinType = 'Everyday Urban + Photo-Defense';
    barrierScore = 84;
    oilScore = 55;
    sensitivityScore = 30;
    mainIssue = 'Daily sun exposure, blue light, and environmental protection';
    priorityTitle = 'DAILY DEFENSE';
    priorityDescription = 'Keep skin resilient with broad-spectrum photoprotection, antioxidant green tea, and barrier-conscious cleansing.';
    targetActives = ['Broad-Spectrum SPF 50+ PA++++', '1.0% Ectoin', 'Green Tea Extract', 'Matte Silica'];
    recommendedProductIds = ['aegis-starter-bundle', 'aegis-shield', 'aegis-clear', 'aegis-wash'];
  }

  return {
    skinType,
    barrierScore,
    oilScore,
    sensitivityScore,
    mainIssue,
    priorityTitle,
    priorityDescription,
    targetActives,
    recommendedProductIds,
    amSteps: [
      {
        step: '01. CLEANSE (30s)',
        product: 'AEGIS WASH',
        instruction: 'Lather 1 pump on damp skin to remove overnight oils without stripping moisture.'
      },
      {
        step: '02. CORRECT (30s)',
        product: 'AEGIS CLEAR',
        instruction: 'Apply 2-3 drops to help balance oil and keep pore openings clear.'
      },
      {
        step: '03. DEFEND (60s)',
        product: 'AEGIS SHIELD SPF 50',
        instruction: 'Apply 2 finger lengths evenly. Absorbs 100% clear with a clean matte finish.'
      }
    ],
    pmSteps: [
      {
        step: '01. CLEANSE (30s)',
        product: 'AEGIS WASH',
        instruction: 'Wash away daytime pollution, sweat, and sunscreen.'
      },
      {
        step: '02. TREAT / REPAIR (30s)',
        product: 'AEGIS CLEAR or BARRIER',
        instruction: 'Apply serum for pore clarity, or barrier fluid for post-shave comfort.'
      }
    ],
    guidanceNote: 'This quiz provides general skincare guidance and is not a medical diagnosis. For chronic dermatological conditions, consult a medical professional.'
  };
}
