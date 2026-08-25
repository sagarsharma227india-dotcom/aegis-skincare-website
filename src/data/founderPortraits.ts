export interface FounderPortrait {
  id: string;
  title: string;
  roleSubtitle: string;
  setting: string;
  description: string;
  recommendedGrade: 'warm-mineral' | 'studio-contrast' | 'natural-daylight' | 'monochrome-lab';
  quote: string;
  imageUrl: string;
  tag: string;
}

export const ARIFA_PORTRAITS: FounderPortrait[] = [
  {
    id: 'architectural-lead',
    title: 'Architectural Director',
    roleSubtitle: 'Senior Formulation & Design Lead · Delhi Lab',
    setting: 'Neoclassical Atrium & Laboratory Studio',
    description:
      'Captured in minimalist dark chocolate tailoring against modern architectural columns. Represents AEGIS MEN’s structural discipline: subtracting cosmetic clutter and engineering precise, lipid-compatible daily formulas.',
    recommendedGrade: 'warm-mineral',
    quote:
      'Formulation is an architecture of subtraction. Every active molecule must have an indisputable physiological purpose, buffered to the exact cellular pH of male skin.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
    tag: 'PRIMARY FORMULATOR PORTRAIT'
  },
  {
    id: 'botanical-sourcing',
    title: 'Botanical & Lipid Research',
    roleSubtitle: 'Head of Active Extraction & Sourcing',
    setting: 'Botanical Research Garden · Delhi',
    description:
      'Seated in natural daylight wearing hand-embroidered artisanal linen. Reflects AEGIS’s commitment to plant-derived biocompatible actives: fermented apple amino acids, oat beta-glucan, and cold-pressed lipids.',
    recommendedGrade: 'natural-daylight',
    quote:
      'We do not mimic nature cosmetically; we extract its most stable, resilient bioactive fractions to defend against modern city stress and daily shaving abrasion.',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=85',
    tag: 'BOTANICAL LAB PORTRAIT'
  },
  {
    id: 'candid-research',
    title: 'Clinical Diagnostics',
    roleSubtitle: 'Epidermal Barrier Integrity Research',
    setting: 'Laboratory Field Office',
    description:
      'A candid portrait during morning formulation review. Focused on barrier recovery kinetics and low-foaming surfactant biocompatibility.',
    recommendedGrade: 'studio-contrast',
    quote:
      'Shaving removes up to two layers of stratum corneum every single day. Our formulas exist first and foremost as a protective shield for that exposed surface.',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=85',
    tag: 'CLINICAL RESEARCH'
  },
  {
    id: 'minimalist-form',
    title: 'Design & Packaging Chemistry',
    roleSubtitle: 'Airless Dispenser & Photostability Lead',
    setting: 'Mineral Stone Studio Wall',
    description:
      'Posed against textured mineral stone, demonstrating the minimalist aesthetic and UV-opaque airless packaging engineered to protect sensitive actives.',
    recommendedGrade: 'monochrome-lab',
    quote:
      'Great skincare should feel effortless on the bathroom shelf and invisible on the skin within 30 seconds.',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    tag: 'PACKAGING & STABILITY'
  }
];
