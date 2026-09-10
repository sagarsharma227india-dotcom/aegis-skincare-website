const fs = require('fs');
const path = require('path');

const journalsContent = `import { JournalArticle } from '../types';

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
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1556228722-dca98b8c59da?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1611078449492-5743b35be9bd?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-barrier', 'aegis-starter-bundle']
  },
  {
    id: 'art-5',
    slug: 'the-60-second-skincare-routine',
    title: 'The 60-Second Skincare Routine for Men',
    category: 'ROUTINES',
    readTime: '3 min read',
    date: 'February 18, 2026',
    author: 'AEGIS Editorial Lab',
    summary: 'A fast, effective approach to daily skin health without the complexity.',
    content: [
      'You do not need a ten-step regimen. A targeted sequence provides everything your skin needs for all-day balance.',
      'For decades, skincare marketing has swung between two extremes: hyper-complicated 10-step multi-product routines, or 3-in-1 body washes that strip the skin raw.',
      'The reality of male skin biology is straightforward: skin needs to be cleaned without stripping, targeted with active molecules where congestion exists, and shielded from UV radiation.',
      'Step 1 (Cleanse, 30s): An amino-acid based cleanser at pH 5.5 removes nighttime sweat without compromising the acid mantle.',
      'Step 2 (Defend, 30s): Broad-spectrum SPF 50 protects against harmful daytime UV rays and urban particulate pollution.',
      'Total time: 60 seconds. Consistency over 30 days outperforms any complex occasional regimen.'
    ],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-starter-bundle', 'aegis-wash', 'aegis-shield']
  },
  {
    id: 'art-6',
    slug: 'spf-50-why-daily-sun-protection-matters',
    title: 'SPF 50: Why Daily Sun Protection Matters Even on Cloudy Days',
    category: 'SCIENCE',
    readTime: '4 min read',
    date: 'January 28, 2026',
    author: 'Arifa Naved',
    summary: 'The single most important step in any routine is defending against UV radiation.',
    content: [
      'Most men wait until a beach vacation to apply sunscreen. This is a critical misunderstanding of how UV damage accumulates.',
      'UVA rays penetrate clouds and glass, silently breaking down the collagen and elastin proteins in your dermis over decades.',
      'A daily SPF 50 formulation provides a vital shield. Modern formulations are lightweight, completely invisible, and do not leave a white cast.',
      'Incorporating sun protection every single morning is the foundation of long-term skin health and structural integrity.'
    ],
    image: 'https://images.unsplash.com/photo-1529154215902-6014cd7b37cb?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-shield', 'aegis-shield-matte']
  },
  {
    id: 'art-7',
    slug: 'skin-barrier-101',
    title: 'Skin Barrier 101: Why Your Face Feels Dry, Tight or Irritated',
    category: 'FOUNDATIONS',
    readTime: '5 min read',
    date: 'December 20, 2025',
    author: 'AEGIS Editorial Lab',
    summary: 'Understanding the protective outer layer of your skin and how to repair it.',
    content: [
      'Dermatologists frequently refer to the outermost layer of skin—the stratum corneum—as a "brick and mortar" structure.',
      'The "bricks" are corneocytes: flattened, protein-rich cellular structures that provide mechanical resistance.',
      'The "mortar" is the lipid matrix: an organized multi-lamellar arrangement of ceramides (approx. 50%), cholesterol (approx. 25%), and free fatty acids (approx. 15%).',
      'Daily razor passes scrape away both bricks and mortar. By replenishing these lipids in a biomimetic ratio, the skin quickly restores its water-holding capacity and stops redness.'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-barrier', 'aegis-wash']
  },
  {
    id: 'art-8',
    slug: 'niacinamide-vs-vitamin-c',
    title: 'Niacinamide vs Vitamin C: What Should You Actually Use?',
    category: 'INGREDIENTS',
    readTime: '4 min read',
    date: 'January 14, 2026',
    author: 'Arifa Naved',
    summary: 'Choosing the right antioxidant for tone, clarity, and structural support.',
    content: [
      'Vitamin C (L-Ascorbic Acid) is highly unstable but provides aggressive antioxidant protection and inhibits melanin production for brightening.',
      'Niacinamide (Vitamin B3) is extremely stable. It downregulates the sebaceous gland synthesis rate and supports the synthesis of native ceramides.',
      'For men dealing with oiliness and pore congestion, Niacinamide is often superior. For men dealing strictly with dullness or sun spots, Vitamin C is preferred.',
      'Understanding your primary goal dictates which targeted active will yield the best results.'
    ],
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-bright', 'aegis-clear']
  },
  {
    id: 'art-9',
    slug: 'how-to-build-routine-without-10-products',
    title: 'How to Build a Skincare Routine Without Buying 10 Products',
    category: 'ROUTINES',
    readTime: '4 min read',
    date: 'March 02, 2026',
    author: 'AEGIS Editorial Lab',
    summary: 'Streamlining your bathroom cabinet to the essential clinical formulations.',
    content: [
      'The multi-step Korean beauty trend popularized the 10-step routine, but male skin typically responds better to a minimalist, highly concentrated approach.',
      'Every product in your cabinet must serve a distinct biological purpose. Redundancy leads to irritation and barrier compromise.',
      'A complete clinical routine requires only three steps: a non-stripping cleanser, a targeted treatment serum, and a protective moisturizer with SPF.',
      'By focusing on high-quality, multi-functional formulas, you optimize your time and your results without cluttering your sink.'
    ],
    image: 'https://images.unsplash.com/photo-1580870059805-47c63be3db94?auto=format&fit=crop&w=800&q=80',
    relatedProducts: ['aegis-starter-bundle']
  }
];
`;

fs.writeFileSync(path.join(__dirname, 'src/data/journal.ts'), journalsContent, 'utf8');
console.log('Fixed journals');
