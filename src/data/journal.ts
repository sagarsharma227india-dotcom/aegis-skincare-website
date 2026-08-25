import { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    slug: 'three-minute-morning-routine',
    title: 'Your 3-Minute Morning Routine: Why Consistency Beats Complexity',
    category: 'ROUTINES',
    readTime: '3 min read',
    date: 'February 18, 2026',
    author: 'AEGIS Editorial Lab',
    summary: 'You do not need a ten-step regimen. A targeted three-step sequence of Cleanse, Correct, and Defend provides everything your skin needs for all-day balance.',
    content: [
      'For decades, skincare marketing has swung between two extremes: hyper-complicated 10-step multi-product routines, or 3-in-1 body washes that strip the skin raw.',
      'The reality of male skin biology is straightforward: skin needs to be cleaned without stripping, targeted with active molecules where congestion exists, and shielded from UV radiation.',
      'Step 1 (Cleanse, 30s): An amino-acid based cleanser at pH 5.5 removes nighttime sweat without compromising the acid mantle.',
      'Step 2 (Correct, 30s): 2-3 drops of oil-soluble salicylic acid and niacinamide regulate sebum and refine pore texture before it can oxidize into blackheads.',
      'Step 3 (Defend, 60s): Broad-spectrum SPF 50 protects against 98% of harmful daytime UV rays and urban particulate pollution.',
      'Total time: 2 minutes in the morning. Consistency over 30 days outperforms any complex occasional regimen.'
    ],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-starter-bundle', 'aegis-wash', 'aegis-shield']
  },
  {
    id: 'art-2',
    slug: 'why-skin-feels-tight-after-washing',
    title: 'Why Your Skin Feels Tight After Washing (And How to Fix It)',
    category: 'FOUNDATIONS',
    readTime: '4 min read',
    date: 'January 28, 2026',
    author: 'Arifa Naved',
    summary: 'That "squeaky clean" feeling is actually the sound of your skin’s protective lipid bilayer being destroyed by alkaline detergents.',
    content: [
      'Many men grew up believing that if your face does not feel tight and completely dry after washing, it is not truly clean. In reality, that squeaky tightness is a warning sign.',
      'The surface of healthy human skin maintains an acidic pH between 4.7 and 5.5, known as the acid mantle. Standard bar soaps and harsh sulfates operate at an alkaline pH of 9.0 to 10.5.',
      'When you wash with alkaline surfactants, you dissolve the intercellular lipids (ceramides, cholesterol, fatty acids) holding stratum corneum cells together. In response, your sebaceous glands produce rebound oil within 2 hours.',
      'Switching to a pH 5.5 amino acid cleanser keeps the lipid bilayer intact, preventing tightness and reducing rebound oiliness throughout the afternoon.'
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-wash', 'aegis-barrier']
  },
  {
    id: 'art-3',
    slug: 'niacinamide-vs-salicylic-acid',
    title: 'Niacinamide vs Salicylic Acid: Which One Does Your Skin Need?',
    category: 'INGREDIENTS',
    readTime: '4 min read',
    date: 'January 14, 2026',
    author: 'AEGIS Editorial Lab',
    summary: 'While both ingredients excel at improving pore appearance and oil control, they work through two completely distinct biological mechanisms.',
    content: [
      'Salicylic Acid (BHA) is lipophilic (oil-soluble). Unlike water-soluble AHAs, it can pass directly through sebum inside the pore lining to dissolve dead skin cell plugs and prevent blackheads.',
      'Niacinamide (Vitamin B3) is a water-soluble co-enzyme precursor. Rather than exfoliating, it downregulates the sebaceous gland synthesis rate and supports the synthesis of native ceramides.',
      'The ideal approach is not choosing between them, but combining them: Salicylic acid clears the canal from within, while Niacinamide strengthens the barrier and calms redness.',
      'In AEGIS CLEAR, we combine 2% Salicylic Acid with 5% Niacinamide and 1% Zinc PCA in a single buffered formula to deliver both benefits in one step.'
    ],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-clear']
  },
  {
    id: 'art-4',
    slug: 'understanding-the-skin-barrier',
    title: 'Understanding the Skin Barrier: The "Brick and Mortar" of Dermatology',
    category: 'SCIENCE',
    readTime: '5 min read',
    date: 'December 20, 2025',
    author: 'Arifa Naved',
    summary: 'Your stratum corneum functions like an architectural brick wall. Here is how daily shaving, weather, and active ingredients interact with it.',
    content: [
      'Dermatologists frequently refer to the outermost layer of skin—the stratum corneum—as a "brick and mortar" structure.',
      'The "bricks" are corneocytes: flattened, protein-rich cellular structures that provide mechanical resistance.',
      'The "mortar" is the lipid matrix: an organized multi-lamellar arrangement of ceramides (approx. 50%), cholesterol (approx. 25%), and free fatty acids (approx. 15%).',
      'Daily razor passes scrape away both bricks and mortar. By replenishing these lipids in a biomimetic 3:1:1 ratio, the skin quickly restores its water-holding capacity and stops redness.'
    ],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-barrier', 'aegis-starter-bundle']
  }
];
