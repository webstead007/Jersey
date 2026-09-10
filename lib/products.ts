export interface Product {
  id: string;
  name: string;
  team: string;
  category: 'national' | 'club' | 'retro' | 'training';
  edition: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: string[];
  sizes: string[];
  description: string;
  details: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  stockCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'brazil-home-2026',
    name: 'Brazil Home Canarinho Edition',
    team: 'CBF Brasil',
    category: 'national',
    edition: '2026 Matchday Pro Kit',
    price: 2799,
    originalPrice: 3499,
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM.jpeg',
    badges: ['OFFICIAL LICENSED', 'AEROKNIT PRO', '5★ WORLD CHAMPIONS'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'The iconic Amarelinha reborn with engineered aerodynamic micro-mesh and subtle green side vents. Engineered to feel featherlight under matchday heat with heat-pressed federation silicone crest.',
    details: [
      '100% Recycled Hydrophobic Polyester',
      'Silicone 3D Raised Federation Crest',
      'Tailored Athletic Fit with Ergonomic Seams',
      'Antimicrobial Odor-Resistant Weave',
      'Authentic Matchday Hologram Seal',
    ],
    isFeatured: true,
    isBestseller: true,
    stockCount: 14,
  },
  {
    id: 'argentina-away-special-2026',
    name: 'Argentina Away Sun Tribute Edition',
    team: 'AFA Selección Argentina',
    category: 'national',
    edition: 'Special Edition Sol de Mayo',
    price: 2999,
    originalPrice: 3799,
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM (2).jpeg',
    badges: ['LIMITED EDITION', 'SOL DE MAYO EMBOSSED', 'CHAMPIONS BADGE'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'A masterpiece of football haute couture. Deep navy fabric intricately layered with illuminated tonal filigree inspired by the golden Sol de Mayo and Argentine baroque art.',
    details: [
      'Luxury Sublimated Jacquard Damask Pattern',
      'Embroidered Golden 3-Star Crest',
      'Dual-Toned Raglan Shoulder Paneling',
      'Breathable VaporKnit Core Zone',
      'Individually Numbered Production Tag',
    ],
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    stockCount: 8,
  },
  {
    id: 'spain-home-furia-2026',
    name: 'Spain Home La Furia Roja Kit',
    team: 'RFEF Selección Española',
    category: 'national',
    edition: 'Euro Champions Edition',
    price: 2699,
    originalPrice: 3299,
    image: '/product-list/WhatsApp Image 2026-09-08 at 7.34.41 PM (1).jpeg',
    badges: ['EURO CHAMPIONS', 'HYDRO-VENT PRO', 'CLASSIC PINSTRIPE'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Honoring Spanish football dominance with fiery crimson, gold speed pinstripes, and deep maritime navy accents across the collar and sleeves. Crafted for high-tempo precision.',
    details: [
      'High-Tensile Moisture Dispersion Mesh',
      'Embroidered Spanish Royal Crest',
      'Golden Stitched Shoulder Accents',
      'Laser-Perforated Underarm Breathing Grid',
      'Standard Athletic Match Fit',
    ],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    stockCount: 19,
  },
  {
    id: 'real-madrid-home-2026',
    name: 'Real Madrid Home Galáctico Kit',
    team: 'Real Madrid CF',
    category: 'club',
    edition: '15x UCL Champions Edition',
    price: 2899,
    originalPrice: 3599,
    image: '/product-list/WhatsApp Image 2026-09-10 at 10.29.57 PM (2).jpeg',
    badges: ['UCL 15 BADGE', 'ROYAL WHITE', 'GOLDEN THREAD'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Pristine royal white with subtle houndstooth texture and metallic gold detailing celebrating an unmatched European dynasty.',
    details: [
      'Engineered Moisture-Wicking Heat.RDY',
      'Thermal Sealed Real Madrid Crest',
      'UCL Starball and Respect Arm Patches Included',
      'Ventilated Ribbed Collar',
    ],
    isFeatured: false,
    isBestseller: true,
    stockCount: 11,
  },
  {
    id: 'barcelona-home-blaugrana-2026',
    name: 'FC Barcelona Blaugrana Heritage',
    team: 'FC Barcelona',
    category: 'club',
    edition: '125th Anniversary Edition',
    price: 2899,
    originalPrice: 3599,
    image: '/product-list/WhatsApp Image 2026-09-10 at 10.29.57 PM (1).jpeg',
    badges: ['125 YEARS ANNIVERSARY', 'DRI-FIT ADV', 'MES QUE UN CLUB'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Split-half Blaugrana legacy design commemorating 125 glorious years of Catalan football artistry, with gold crest and Spotify centerpiece.',
    details: [
      'Dri-FIT ADV Vapor Breathable Knit',
      'Commemorative 125th Anniversary Inner Collar Print',
      'Catalan Senyera Flag Tag on Neck',
      'Slim Matchday Silhouette',
    ],
    isFeatured: false,
    isBestseller: true,
    stockCount: 16,
  },
  {
    id: 'manchester-united-home-2026',
    name: 'Manchester United Red Devil Edition',
    team: 'Manchester United',
    category: 'club',
    edition: 'Theatre of Dreams Kit',
    price: 2799,
    originalPrice: 3399,
    image: '/product-list/WhatsApp Image 2026-09-10 at 10.29.57 PM.jpeg',
    badges: ['RED DEVIL PRIDE', 'AEROREADY', 'OLD TRAFFORD'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Classic bold Manchester scarlet with black gradient side inserts and white trim, reviving the golden treble-era aura for the modern supporter.',
    details: [
      'Aeroready Moisture-Absorbing Fabric',
      'Woven Club Crest with Metallic Outline',
      'Iconic Devil Insignia on Back Collar',
      'Reinforced Collar Stitches',
    ],
    isFeatured: false,
    isBestseller: false,
    stockCount: 12,
  },
];

export const CATEGORIES = [
  { id: 'all', name: 'ALL KITS', count: 6 },
  { id: 'national', name: 'NATIONAL TEAMS', count: 3 },
  { id: 'club', name: 'EUROPEAN CLUBS', count: 3 },
  { id: 'retro', name: 'RETRO & CLASSIC', count: 2 },
  { id: 'training', name: 'MATCHDAY TRAINING', count: 2 },
];
