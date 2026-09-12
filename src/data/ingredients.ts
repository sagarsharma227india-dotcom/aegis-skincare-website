import { IngredientInfo } from '../types';

export const INGREDIENTS_DATA: IngredientInfo[] = [
  {
    id: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    category: 'Barrier & Tone Support',
    whatItDoes: 'Helps balance surface sebum production, strengthens the skin moisture barrier, and visibly fades post-acne marks and uneven skin tone.',
    bestFor: 'Oily T-zones, enlarged pores, dark marks, and barrier maintenance.',
    howToUse: 'Suitable for daily morning and evening application. Pairs seamlessly with salicylic acid, hyaluronic acid, and zinc PCA.',
    scientificInsight: 'Niacinamide acts as an essential precursor to cellular co-enzymes (NAD/NADP), aiding natural ceramide biosynthesis and down-regulating transfer of melanosomes to keratinocytes.',
    matchedProducts: ['aegis-clear', 'aegis-even', 'aegis-hydra', 'aegis-shield']
  },
  {
    id: 'zinc-pca',
    name: 'Zinc PCA (1.0%)',
    category: 'Purifying & Calming Mineral',
    whatItDoes: 'Helps regulate surface sebum levels while calming inflammation, inhibiting acne-causing microbes, and supporting a balanced skin microbiome.',
    bestFor: 'Excess shine, breakout-prone skin, enlarged pores, and post-shave bumps.',
    howToUse: 'Combined with niacinamide and BHA in lightweight water-based serums for daily morning or evening use.',
    scientificInsight: 'PCA (Pyrrolidone Carboxylic Acid) is an endogenous component of natural moisturizing factors (NMF), enhancing the dermal bioavailability of elemental zinc while maintaining skin hydration.',
    matchedProducts: ['aegis-clear', 'aegis-purify']
  },
  {
    id: 'salicylic-acid',
    name: 'Salicylic Acid (BHA)',
    category: 'Lipophilic Pore Exfoliant',
    whatItDoes: 'An oil-soluble beta-hydroxy acid that penetrates inside pores to loosen trapped sebum, dead skin cells, and cellular debris.',
    bestFor: 'Blackheads, congested pores, breakouts, body acne, and clogged follicular bumps.',
    howToUse: 'Apply 2-3 drops after cleansing. Can be used daily or 3-4 times a week depending on skin tolerance and formulation strength.',
    scientificInsight: 'Because salicylic acid is lipophilic (oil-soluble), it dissolves the intercellular lipid glue holding keratin plugs together inside sebaceous follicles without abrasive physical scrubbing.',
    matchedProducts: ['aegis-wash', 'aegis-purify', 'aegis-clear', 'aegis-body-wash']
  },
  {
    id: 'hyaluronic-acid',
    name: 'Multi-Weight Hyaluronic Acid',
    category: 'Multi-Depth Hydration',
    whatItDoes: 'Draws moisture into the upper and deeper layers of the epidermis, creating a smooth, plump, non-sticky reservoir of hydration.',
    bestFor: 'Dehydration, dullness, tight skin after showers, and under-eye fatigue.',
    howToUse: 'Apply to freshly cleansed, slightly damp skin before moisturizers or sunscreen.',
    scientificInsight: 'Combines high-molecular-weight sodium hyaluronate (which forms an elastic surface moisture seal) with low-molecular-weight hyaluronic acid (which penetrates the stratum corneum to replenish dermal water pools).',
    matchedProducts: ['aegis-hydra', 'aegis-eye', 'aegis-repair']
  },
  {
    id: 'ceramides',
    name: '3:1:1 Biomimetic Ceramides (NP, AP, EOP)',
    category: 'Barrier Repair Lipids',
    whatItDoes: 'Replenishes the intercellular lipid matrix to prevent transepidermal water loss and accelerate recovery from shaving friction and environmental damage.',
    bestFor: 'Dryness, post-shave sensitivity, tightness, flaking, and compromised skin barriers.',
    howToUse: 'Apply as a fluid moisturizer after serums or directly post-shave to soothe and rebuild.',
    scientificInsight: 'The human stratum corneum is composed of ceramides, cholesterol, and free fatty acids in an approximate 3:1:1 physiological ratio for optimal lipid lamellar stacking and barrier integrity.',
    matchedProducts: ['aegis-calm', 'aegis-repair', 'aegis-recover', 'aegis-body-lotion']
  },
  {
    id: 'panthenol',
    name: 'Panthenol (Pro-Vitamin B5)',
    category: 'Soothing & Hydrating Agent',
    whatItDoes: 'Penetrates deeply into the skin to convert into pantothenic acid, calming irritation, accelerating tissue repair, and boosting skin suppleness.',
    bestFor: 'Razor burn, stinging, post-sun redness, chapped lips, and compromised barrier recovery.',
    howToUse: 'Formulated in cleansers, recovery serums, and daily moisturizers for continuous all-day calming.',
    scientificInsight: 'Pro-Vitamin B5 stimulates cellular proliferation and tissue re-epithelialization while reinforcing stratum corneum lipid organization and reducing erythema.',
    matchedProducts: ['aegis-wash', 'aegis-calm', 'aegis-after', 'aegis-repair']
  },
  {
    id: 'alpha-arbutin',
    name: 'Alpha Arbutin (2.0%)',
    category: 'Targeted Pigment Balancer',
    whatItDoes: 'Safely and visibly reduces hyperpigmentation, dark post-acne blemishes, and sun spots without irritating sensitive or deeper melanin-rich skin.',
    bestFor: 'Post-blemish dark marks (PIH), sun discoloration, and uneven skin tone.',
    howToUse: 'Apply 2-3 drops morning and evening before moisturizer, followed by SPF 50 during daytime.',
    scientificInsight: 'Alpha Arbutin is a glycosylated hydroquinone derivative that competitively inhibits tyrosinase activity without cytotoxic effects on melanocytes, offering a safe, stable depigmenting action.',
    matchedProducts: ['aegis-even']
  },
  {
    id: 'tranexamic-acid',
    name: 'Tranexamic Acid (3.0%)',
    category: 'Advanced Tone Clarifier',
    whatItDoes: 'Blocks the inflammatory pathway that triggers melanocyte hyperactivation following breakouts, UV exposure, or shaving friction.',
    bestFor: 'Stubborn dark patches, persistent post-acne discoloration, and post-inflammatory pigmentation.',
    howToUse: 'Pairs synergistically with Niacinamide and Alpha Arbutin for comprehensive tone correction.',
    scientificInsight: 'Tranexamic acid inhibits the plasminogen/plasmin pathway, preventing the release of intracellular inflammatory arachidonic acid and prostaglandins that over-stimulate melanin synthesis.',
    matchedProducts: ['aegis-even']
  },
  {
    id: 'squalane',
    name: 'Plant-Derived Squalane (100% Olive/Sugarcane)',
    category: 'Biocompatible Emollient',
    whatItDoes: 'Mimics the skin’s natural sebum components to lock in moisture without clogging pores or leaving an oily film.',
    bestFor: 'Dehydrated, barrier-compromised skin, rough patches, and dry lips.',
    howToUse: 'Formulated directly into fluid moisturizers and lip balms for weightless sealing.',
    scientificInsight: 'Squalane is the fully hydrogenated, non-comedogenic, oxidation-stable form of squalene—a lipid that makes up approximately 13% of healthy human sebum.',
    matchedProducts: ['aegis-recover', 'aegis-hydra']
  },
  {
    id: 'peptides',
    name: 'Multi-Peptide Matrix (Matrixyl 3000 + Copper Peptides)',
    category: 'Structural Signaling Molecules',
    whatItDoes: 'Signals dermal fibroblasts to produce collagen, elastin, and hyaluronic acid, improving firmness and reducing under-eye fatigue and fine lines.',
    bestFor: 'Under-eye puffiness, sleep-deprived skin, expression lines, and loss of skin elasticity.',
    howToUse: 'Apply nightly or around the orbital eye area morning and evening.',
    scientificInsight: 'Synthetic signal peptides (matrikines) bind to cell surface receptors to activate extracellular matrix renewal pathways, counteracting dermal degradation caused by UV exposure and chronological stress.',
    matchedProducts: ['aegis-recover', 'aegis-eye']
  },
  {
    id: 'beta-glucan',
    name: 'Oat Beta-Glucan',
    category: 'Deep Soothing Polysaccharide',
    whatItDoes: 'Provides 20% more moisture retention than hyaluronic acid at comparable concentrations while dramatically reducing skin stinging and itching.',
    bestFor: 'Reactive skin, razor irritation, extreme dryness, and environmental wind-burn.',
    howToUse: 'Applied in barrier recovery serums and gentle morning/evening lotions.',
    scientificInsight: 'Extracted from colloidal oats, beta-glucan is a high-molecular polysaccharide that penetrates the intercellular lipid pathways to stimulate macrophage activity and accelerate epidermal wound healing.',
    matchedProducts: ['aegis-calm', 'aegis-repair']
  },
  {
    id: 'apple-amino-acids',
    name: 'Apple Amino Acid Surfactants',
    category: 'Biomimetic Low-Foam Cleansing',
    whatItDoes: 'Gently cleanses skin and beard stubble by lifting dirt and oil without denaturing stratum corneum proteins or stripping natural lipids.',
    bestFor: 'All skin types, especially skin that feels tight, itchy, or stripped after conventional soap.',
    howToUse: 'Used as the primary cleansing surfactant in AEGIS WASH at physiological pH 5.5.',
    scientificInsight: 'Derived from natural essential amino acids, these surfactants maintain the acidic skin mantle and prevent the trans-epidermal lipid extraction typical of harsh sulfates (SLS/SLES).',
    matchedProducts: ['aegis-wash', 'aegis-purify']
  },
  {
    id: 'ectoin',
    name: 'Ectoin (1.0%)',
    category: 'Extremolyte Cellular Shield',
    whatItDoes: 'A natural extremolyte molecule that protects skin cells against environmental stressors, heat, urban pollution, and HEV blue light.',
    bestFor: 'Daily outdoor commuting, screen exposure, and urban defense.',
    howToUse: 'Included in daily sunscreen formulas for all-day ambient photoprotection.',
    scientificInsight: 'Discovered in micro-organisms surviving in extreme desert environments, ectoin forms a protective hydration shell around cellular proteins and membranes.',
    matchedProducts: ['aegis-shield', 'aegis-shield-matte']
  },
  {
    id: 'caffeine',
    name: 'Caffeine (2.0%) + Green Tea EGCG',
    category: 'Micro-Circulation & De-Puffing',
    whatItDoes: 'Constricts delicate micro-capillaries around the eyes, accelerating lymphatic drainage to visibly reduce puffiness and dark vascular circles.',
    bestFor: 'Late-night fatigue, under-eye bags, and morning puffiness.',
    howToUse: 'Gently tap 1 small drop around the orbital bone morning and evening.',
    scientificInsight: 'Caffeine acts as a phosphodiesterase inhibitor, stimulating intracellular lipolysis and vasoconstriction in periorbital tissue.',
    matchedProducts: ['aegis-eye']
  }
];
