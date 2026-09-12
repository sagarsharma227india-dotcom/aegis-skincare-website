import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { INGREDIENTS_DATA } from '../data/ingredients';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  recommendedProducts?: Product[];
  quickActions?: string[];
}

export interface ChatResponse {
  message: string;
  recommendedProducts?: Product[];
  suggestedPrompts?: string[];
}

/**
 * AEGIS AI Skincare Assistant Service
 *
 * Supports two operational modes:
 * - MODE 1: Local deterministic intelligent assistant using site dataset.
 * - MODE 2: External AI API integration (e.g. Gemini / backend /api/chat) if configured.
 *
 * Always fails gracefully to Mode 1 without exposing secret API keys.
 */
class ChatService {
  private apiEndpoint: string = '/api/chat';

  constructor() {
    // Check for optional custom AI endpoint (never store raw API keys on client)
    const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env;
    if (metaEnv?.VITE_AI_CHAT_API_URL) {
      this.apiEndpoint = metaEnv.VITE_AI_CHAT_API_URL;
    }
  }

  /**
   * Main entry point to send a user query
   */
  public async sendMessage(query: string, history: ChatMessage[] = []): Promise<ChatResponse> {
    const cleanQuery = query.trim().toLowerCase();

    // Attempt server-side AI chat API with graceful fallback to local derma engine
    if (this.apiEndpoint) {
      try {
        const response = await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: query, history })
        });
        if (response.ok) {
          const data = await response.json();
          if (!data.fallback && data.message) {
            return {
              message: data.message,
              recommendedProducts: this.resolveProducts(data.productIds || []),
              suggestedPrompts: data.suggestedPrompts || [
                'What is the 3-step routine?',
                'Explain 3:1:1 Ceramides',
                'Is AEGIS fragrance-free?'
              ]
            };
          }
        }
      } catch (err) {
        console.warn('Server AI API endpoint unavailable, falling back to local derma engine.', err);
      }
    }

    // Default Mode 1: Local Deterministic Intelligent Assistant
    return this.generateLocalResponse(cleanQuery);
  }

  private resolveProducts(productIds: string[]): Product[] {
    return PRODUCTS.filter((p) => productIds.includes(p.id));
  }

  private generateLocalResponse(query: string): ChatResponse {
    // 1. Medical & Clinical Disclaimer Check
    if (
      query.includes('cystic') ||
      query.includes('eczema') ||
      query.includes('psoriasis') ||
      query.includes('infection') ||
      query.includes('prescription') ||
      query.includes('tretinoin') ||
      query.includes('dermatologist') ||
      query.includes('cure')
    ) {
      return {
        message:
          "AEGIS MEN formulations are developed around physiological barrier support and everyday skin maintenance. For severe cystic acne, eczema, psoriasis, or prescription guidance, we strongly recommend consulting a board-certified dermatologist. For everyday barrier defense, our gentle pH 5.5 AEGIS WASH and 3:1:1 Ceramide formulations can support comfortable skin recovery alongside professional medical advice.",
        recommendedProducts: [
          PRODUCTS.find((p) => p.id === 'aegis-repair') || PRODUCTS.find((p) => p.id === 'aegis-hydra')!,
          PRODUCTS.find((p) => p.id === 'aegis-wash')!
        ].filter(Boolean),
        suggestedPrompts: [
          'What is the 3-step routine?',
          'Explain 3:1:1 Ceramides',
          'Is AEGIS fragrance-free?'
        ]
      };
    }

    // 2. Build My Routine / What should I use first / AM-PM
    if (
      query.includes('routine') ||
      query.includes('build my routine') ||
      query.includes('first') ||
      query.includes('start') ||
      query.includes('beginner') ||
      query.includes('how to use') ||
      query.includes('steps') ||
      query.includes('am') ||
      query.includes('pm')
    ) {
      return {
        message:
          "The core AEGIS MEN philosophy is 'Protection, made simple' — a disciplined 3-minute framework based on biological necessity:\n\n" +
          "• Morning (AM) ~ 90s:\n" +
          "  1. Cleanse: AEGIS WASH (removes overnight sweat at pH 5.5)\n" +
          "  2. Treat: AEGIS CLEAR (2% BHA + 10% Niacinamide to balance oil)\n" +
          "  3. Protect: AEGIS SHIELD SPF 50 (invisible defense in stubble & beards)\n\n" +
          "• Evening (PM) ~ 60s:\n" +
          "  1. Cleanse: AEGIS WASH (lifts city grime & daytime sunscreen)\n" +
          "  2. Repair: AEGIS HYDRA or AEGIS RECOVER (hydrates and rebuilds skin)",
        recommendedProducts: [
          PRODUCTS.find((p) => p.id === 'aegis-starter-bundle') || PRODUCTS[0],
          PRODUCTS.find((p) => p.id === 'aegis-wash')!,
          PRODUCTS.find((p) => p.id === 'aegis-shield')!
        ].filter(Boolean),
        suggestedPrompts: [
          'Take the Skin Quiz',
          'Tell me about AEGIS CLEAR',
          'Does the sunscreen leave a white cast?'
        ]
      };
    }

    // 3. Acne / Breakouts / Clogged Pores / Blackheads
    if (
      query.includes('acne') ||
      query.includes('breakout') ||
      query.includes('pimple') ||
      query.includes('blackhead') ||
      query.includes('clogged') ||
      query.includes('pore') ||
      query.includes('blemish')
    ) {
      const clear = PRODUCTS.find((p) => p.id === 'aegis-clear')!;
      const wash = PRODUCTS.find((p) => p.id === 'aegis-wash')!;
      return {
        message:
          "For breakouts and congested pores, scrubbing aggressively with physical beads damages your moisture mantle. We recommend targeted chemical clarification:\n\n" +
          "1. AEGIS WASH: Uses 15% Apple Amino Acids with 0.5% micro-dosed Salicylic Acid to cleanse without stripping.\n" +
          "2. AEGIS CLEAR: Delivers 2.0% oil-soluble BHA to dissolve pore-lining sebum, paired with 10.0% Niacinamide and 1.0% Zinc PCA to calm redness and regulate surface oil appearance.",
        recommendedProducts: [clear, wash],
        suggestedPrompts: [
          'Will this dry my skin out?',
          'How often should I use AEGIS CLEAR?',
          'What moisturizer should I pair with it?'
        ]
      };
    }

    // 4. Oily Skin / Shine / Greasiness
    if (
      query.includes('oily') ||
      query.includes('oil') ||
      query.includes('shine') ||
      query.includes('greasy') ||
      query.includes('sebum') ||
      query.includes('t-zone')
    ) {
      return {
        message:
          "Male skin naturally produces up to 2x more sebum due to higher androgen levels. Stripping it with harsh sulfates causes 'rebound oiliness'.\n\n" +
          "The solution is regulating oil without drying:\n" +
          "• AEGIS CLEAR balances surface sebum with 10% Niacinamide and 1% Zinc PCA.\n" +
          "• AEGIS SHIELD SPF 50 contains porous silica microspheres for an all-day natural matte finish with zero shine.",
        recommendedProducts: [
          PRODUCTS.find((p) => p.id === 'aegis-clear')!,
          PRODUCTS.find((p) => p.id === 'aegis-shield')!
        ].filter(Boolean),
        suggestedPrompts: [
          'Show me the Oil Defense Bundle',
          'Is the sunscreen non-comedogenic?',
          'Can I use moisturizer if I am oily?'
        ]
      };
    }

    // 5. Dry Skin / Flakiness / Tightness / Barrier
    if (
      query.includes('dry') ||
      query.includes('flak') ||
      query.includes('tight') ||
      query.includes('dehydrat') ||
      query.includes('barrier') ||
      query.includes('peel')
    ) {
      const repair = PRODUCTS.find((p) => p.id === 'aegis-repair') || PRODUCTS.find((p) => p.id === 'aegis-hydra')!;
      const wash = PRODUCTS.find((p) => p.id === 'aegis-wash')!;
      return {
        message:
          "Skin tightness after showering is a classic sign of barrier lipid depletion. When the stratum corneum lacks ceramides, water evaporates rapidly (Transepidermal Water Loss).\n\n" +
          "• AEGIS WASH maintains your natural lipid barrier at pH 5.5.\n" +
          "• AEGIS REPAIR restores essential lipids with 3:1:1 Ceramides, cholesterol, and madecassoside in a weightless, non-greasy fluid.",
        recommendedProducts: [repair, wash].filter(Boolean),
        suggestedPrompts: [
          'What is 3:1:1 ratio?',
          'Can I use this post-shave?',
          'Will this feel sticky in humidity?'
        ]
      };
    }

    // 6. Shaving / Razor Burn / In-grown Hairs / Stubble
    if (
      query.includes('shav') ||
      query.includes('razor') ||
      query.includes('burn') ||
      query.includes('bump') ||
      query.includes('ingrown') ||
      query.includes('stubble') ||
      query.includes('beard')
    ) {
      return {
        message:
          "Daily razor passes physically scrape off up to 2 superficial layers of skin cells, causing razor burn and exposed micro-abrasions.\n\n" +
          "• Pre-shave/Cleanse: AEGIS WASH softens facial hair keratin with apple amino acid foam.\n" +
          "• Post-shave Calm: AEGIS AFTER replenishes calm and soothes blade friction with bisabolol and centella.\n" +
          "• Sun Defense: AEGIS SHIELD SPF 50 is 100% transparent in stubble and beards with zero white chalkiness.",
        recommendedProducts: [
          PRODUCTS.find((p) => p.id === 'aegis-after') || PRODUCTS.find((p) => p.id === 'aegis-repair')!,
          PRODUCTS.find((p) => p.id === 'aegis-shield')!
        ].filter(Boolean),
        suggestedPrompts: [
          'Does sunscreen stick in beards?',
          'How to stop razor bumps on neck?',
          'View Recovery System'
        ]
      };
    }

    // 7. Sunscreen / SPF / Protection
    if (
      query.includes('sunscreen') ||
      query.includes('spf') ||
      query.includes('shield') ||
      query.includes('white cast') ||
      query.includes('sun') ||
      query.includes('uv')
    ) {
      const shield = PRODUCTS.find((p) => p.id === 'aegis-shield')!;
      return {
        message:
          "AEGIS SHIELD SPF 50 PA++++ was engineered specifically to solve the two biggest complaints men have about sunscreen: greasiness and white residue in facial hair.\n\n" +
          "• 100% Invisible: Micro-emulsion dries down transparent on all skin tones with zero cast in beards or stubble.\n" +
          "• Clean Matte Finish: Porous silica absorbs sweat and sebum without clogging pores.\n" +
          "• Cellular Defense: Infused with 1.0% Ectoin to protect against urban airborne pollution and HEV screen light.",
        recommendedProducts: [shield],
        suggestedPrompts: [
          'How much should I apply?',
          'Do I need cleanser to wash it off?',
          'Can I use it under a beard?'
        ]
      };
    }

    // 8. Specific Ingredients Inquiry
    const matchedIngredient = INGREDIENTS_DATA.find((ing) =>
      query.includes(ing.id) ||
      query.includes(ing.name.toLowerCase()) ||
      (ing.id === 'niacinamide' && query.includes('vitamin b3')) ||
      (ing.id === 'salicylic-acid' && (query.includes('bha') || query.includes('salicylic'))) ||
      (ing.id === 'ceramides' && query.includes('ceramide'))
    );

    if (matchedIngredient || query.includes('ingredient') || query.includes('actives')) {
      if (matchedIngredient) {
        const related = PRODUCTS.filter((p) => matchedIngredient.matchedProducts.includes(p.id));
        return {
          message:
            `**${matchedIngredient.name}**\n` +
            `• Category: ${matchedIngredient.category}\n` +
            `• Mechanism: ${matchedIngredient.whatItDoes}\n` +
            `• Best for: ${matchedIngredient.bestFor}\n` +
            `• Scientific Insight: ${matchedIngredient.scientificInsight}`,
          recommendedProducts: related,
          suggestedPrompts: [
            'Explain Salicylic Acid',
            'Explain 3:1:1 Ceramides',
            'View full ingredient list'
          ]
        };
      } else {
        return {
          message:
            "AEGIS MEN relies strictly on biocompatible actives at proven physiological concentrations. Key active ingredients include:\n\n" +
            "• Apple Amino Acids (15%): Sulfate-free cleansing base at pH 5.5\n" +
            "• Salicylic Acid (2.0% BHA): Oil-soluble pore-clearing acid\n" +
            "• Niacinamide (5.0% Vitamin B3): Sebum regulator & barrier promoter\n" +
            "• 3:1:1 Ceramides: Natural lipid restoration for post-shave recovery\n" +
            "• Ectoin (1.0%): Extremolyte cellular environmental defense\n" +
            "• Zinc PCA (1.0%): Antimicrobial mineral balancing shine",
          recommendedProducts: PRODUCTS.slice(0, 3),
          suggestedPrompts: [
            'Tell me about Niacinamide',
            'Tell me about Salicylic Acid',
            'Tell me about Ceramides'
          ]
        };
      }
    }

    // 9. About Arifa Naved / Formulator
    if (query.includes('arifa') || query.includes('founder') || query.includes('who made') || query.includes('team')) {
      return {
        message:
          "Arifa Naved serves as Senior Head, Product & Formulation for AEGIS MEN. Directing our product development from our Delhi lab, she leads the architectural standard behind all formulations: 100% disclosed active percentages, 0% synthetic fragrance, and barrier-compatible physiological pH levels.",
        suggestedPrompts: [
          'Read our brand philosophy',
          'View our 3-minute protocol',
          'Explore our science page'
        ]
      };
    }

    // 10. Fallback / General Guidance
    return {
      message:
        "I'm here to help you find the right AEGIS MEN routine for your skin. Skincare doesn't need to be complicated.\n\n" +
        "You can ask me about:\n" +
        "• Daily AM and PM routines\n" +
        "• Oily skin, blackheads, or acne\n" +
        "• Post-shave razor irritation & dryness\n" +
        "• Invisible SPF 50 sunscreen\n" +
        "• Any active ingredient (BHA, Niacinamide, Ceramides)",
      recommendedProducts: PRODUCTS.slice(0, 2),
      suggestedPrompts: [
        'Build my routine',
        'I have acne & oily skin',
        'My skin is dry after shaving',
        'Take the Skin Quiz'
      ]
    };
  }
}

export const chatService = new ChatService();
