'use client';

import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PRODUCTS, Product } from '@/lib/products';

interface Preset {
  kitId: string;
  name: string;
  number: string;
  badge: string;
}

const PRESETS: Preset[] = [
  { kitId: 'argentina-away-special-2026', name: 'MESSI', number: '10', badge: 'FIFA WORLD CHAMPIONS' },
  { kitId: 'brazil-home-2026', name: 'VINÍCIUS JR', number: '7', badge: 'COPA AMÉRICA GOLD' },
  { kitId: 'real-madrid-home-2026', name: 'BELLINGHAM', number: '5', badge: 'UCL 15 STARBALL' },
  { kitId: 'barcelona-home-blaugrana-2026', name: 'LAMINE YAMAL', number: '19', badge: 'LALIGA GOLD' },
  { kitId: 'spain-home-furia-2026', name: 'RODRI', number: '16', badge: 'EURO 2024 CHAMPIONS' },
  { kitId: 'manchester-united-home-2026', name: 'BRUNO F.', number: '8', badge: 'PREMIER LEAGUE LION' },
];

export function KitCustomizer() {
  const { addToCart } = useCart();
  const [selectedKitId, setSelectedKitId] = useState('argentina-away-special-2026');
  const [playerName, setPlayerName] = useState('MESSI');
  const [playerNumber, setPlayerNumber] = useState('10');
  const [selectedBadge, setSelectedBadge] = useState('FIFA WORLD CHAMPIONS');
  const [selectedSize, setSelectedSize] = useState('M');
  const [fontColor, setFontColor] = useState<'gold' | 'white' | 'black'>('gold');
  const [isAdded, setIsAdded] = useState(false);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedKitId) || PRODUCTS[0];
  const customFee = 350;
  const totalPrice = selectedProduct.price + customFee;

  const applyPreset = (preset: Preset) => {
    setSelectedKitId(preset.kitId);
    setPlayerName(preset.name);
    setPlayerNumber(preset.number);
    setSelectedBadge(preset.badge);
    if (preset.kitId.includes('real-madrid')) {
      setFontColor('black');
    } else {
      setFontColor('gold');
    }
  };

  const handleAddToCart = () => {
    const customizedProduct: Product = {
      ...selectedProduct,
      id: `${selectedProduct.id}-custom-${playerName}-${playerNumber}`,
      name: `${selectedProduct.name} [${playerName} #${playerNumber}]`,
      price: totalPrice,
      edition: `Custom Stamped Edition (${selectedBadge})`,
    };

    addToCart(customizedProduct, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const getJerseyBgColor = () => {
    switch (selectedKitId) {
      case 'argentina-away-special-2026':
        return 'from-[#0b1b36] via-[#102447] to-[#070e1c] border-[#1f3b6c]';
      case 'brazil-home-2026':
        return 'from-[#f2be1a] via-[#e5b010] to-[#c79603] border-[#ffe066] text-black';
      case 'spain-home-furia-2026':
        return 'from-[#9e1b21] via-[#b82229] to-[#701015] border-[#d4373e]';
      case 'real-madrid-home-2026':
        return 'from-[#ffffff] via-[#f0f0f5] to-[#e4e4eb] border-white text-black';
      case 'barcelona-home-blaugrana-2026':
        return 'from-[#12264b] via-[#6a152d] to-[#12264b] border-[#8a1c3b]';
      case 'manchester-united-home-2026':
        return 'from-[#ba111a] via-[#cf1520] to-[#870a10] border-[#e6222d]';
      default:
        return 'from-[#14141c] to-[#0a0a0f] border-white/10';
    }
  };

  const isLightJersey = selectedKitId === 'brazil-home-2026' || selectedKitId === 'real-madrid-home-2026';

  return (
    <section id="customizer-section" className="py-10 md:py-14 bg-[#ebe5dc] border-t border-[#ded5c7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ded5c7] bg-white/80 mb-3 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#a87c28]" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6e665c]">
                THE PRINTING STUDIO // BESPOKE MATCHDAY LAB
              </span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] tracking-tight uppercase">
              Bespoke Kit Printing
            </h2>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#6e665c] font-mono max-w-sm">
            Heat-pressed official federation font foils & sleeve badges applied by master craftsmen in our atelier.
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-[#faf7f2] border border-[#ded5c7] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
          {/* Left Column: Live Interactive Jersey Back Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* The Jersey Back Visualizer */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-8 flex flex-col justify-between items-center shadow-2xl overflow-hidden bg-gradient-to-b border border-black/10 transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-b ${getJerseyBgColor()} opacity-95`} />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />

              {/* Collar Silhouette */}
              <div className="relative z-10 w-28 h-6 rounded-b-full border-b border-white/20 bg-black/25 backdrop-blur-xs mx-auto mb-4" />

              {/* Player Name Stamped across Shoulders */}
              <div className="relative z-10 w-full text-center px-4 mt-2">
                <span
                  className={`font-mono font-black text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] uppercase transition-all duration-300 select-none ${
                    fontColor === 'gold'
                      ? 'text-[#f5d070] drop-shadow-[0_2px_10px_rgba(245,208,112,0.5)]'
                      : fontColor === 'white'
                      ? 'text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]'
                      : 'text-[#111116] drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  {playerName || 'YOUR NAME'}
                </span>
              </div>

              {/* Huge Player Number */}
              <div className="relative z-10 my-auto text-center">
                <span
                  className={`font-mono font-black text-7xl sm:text-8xl md:text-9xl tracking-tight transition-all duration-300 drop-shadow-2xl select-none leading-none ${
                    fontColor === 'gold'
                      ? 'text-[#f5d070] drop-shadow-[0_4px_20px_rgba(245,208,112,0.4)]'
                      : fontColor === 'white'
                      ? 'text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.4)]'
                      : 'text-[#111116] drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  {playerNumber || '10'}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 w-full flex items-center justify-between border-t border-white/20 pt-4 text-[10px] font-mono tracking-widest uppercase">
                <span className={isLightJersey && fontColor === 'black' ? 'text-black/80 font-bold' : 'text-white/80 font-bold'}>
                  {selectedBadge}
                </span>
                <span className={isLightJersey && fontColor === 'black' ? 'text-black/60' : 'text-white/60'}>
                  THERMO-SEALED VINYL
                </span>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#736a60] tracking-widest uppercase mt-4 text-center">
              INTERACTIVE 1:1 LIVE PRINT PREVIEW • CRAFTED AT OUR ATELIER
            </p>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Star Player Presets */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#a87c28] block mb-2 font-semibold">
                LEGEND & STAR PRESETS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRESETS.map((p) => {
                  const isActive = playerName === p.name && selectedKitId === p.kitId;
                  return (
                    <button
                      key={p.name}
                      onClick={() => applyPreset(p)}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-mono transition-all ${
                        isActive
                          ? 'bg-[#1e1c1a] text-white font-bold shadow-sm'
                          : 'bg-white border border-[#ded5c7] text-[#6e665c] hover:bg-[#f2ece4] hover:text-[#171513]'
                      }`}
                    >
                      <div className="font-bold truncate">{p.name}</div>
                      <div className="text-[10px] opacity-75">#{p.number}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Kit Base */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6e665c] block mb-2">
                SELECT BASE JERSEY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedKitId(prod.id)}
                    className={`p-2.5 rounded-xl text-xs font-mono text-left transition-all truncate ${
                      selectedKitId === prod.id
                        ? 'bg-[#1e1c1a] text-white font-bold shadow-sm'
                        : 'bg-white border border-[#ded5c7] text-[#6e665c] hover:bg-[#f2ece4] hover:text-[#171513]'
                    }`}
                  >
                    <div className="truncate font-medium">{prod.team}</div>
                    <div className="text-[10px] opacity-60 truncate">{prod.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-8">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[#6e665c] block mb-1.5">
                  CUSTOM NAME (MAX 12 CHARS)
                </label>
                <input
                  type="text"
                  maxLength={12}
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
                  placeholder="YOUR NAME"
                  className="w-full bg-white border border-[#ded5c7] rounded-xl px-4 py-2.5 text-sm font-mono uppercase tracking-widest text-[#171513] focus:outline-none focus:border-[#a87c28] transition-colors shadow-xs"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[#6e665c] block mb-1.5">
                  NUMBER
                </label>
                <input
                  type="text"
                  maxLength={2}
                  value={playerNumber}
                  onChange={(e) => setPlayerNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="10"
                  className="w-full bg-white border border-[#ded5c7] rounded-xl px-4 py-2.5 text-sm font-mono text-center tracking-widest text-[#171513] focus:outline-none focus:border-[#a87c28] transition-colors shadow-xs font-bold"
                />
              </div>
            </div>

            {/* Font Foil Color & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6e665c] block mb-1.5">
                  FOIL COLOR
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontColor('gold')}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      fontColor === 'gold'
                        ? 'bg-[#a87c28] text-white font-bold shadow-xs'
                        : 'bg-white border border-[#ded5c7] text-[#6e665c]'
                    }`}
                  >
                    METALLIC GOLD
                  </button>
                  <button
                    onClick={() => setFontColor('white')}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      fontColor === 'white'
                        ? 'bg-[#1e1c1a] text-white font-bold shadow-xs'
                        : 'bg-white border border-[#ded5c7] text-[#6e665c]'
                    }`}
                  >
                    SNOW WHITE
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6e665c] block mb-1.5">
                  SELECT MATCH SIZE
                </span>
                <div className="flex gap-1.5">
                  {selectedProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`flex-1 py-2 rounded-xl text-xs font-mono transition-all ${
                        selectedSize === sz
                          ? 'bg-[#1e1c1a] text-white font-bold shadow-xs'
                          : 'bg-white border border-[#ded5c7] text-[#6e665c] hover:bg-[#f2ece4]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Button */}
            <div className="pt-4 border-t border-[#ded5c7] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#736a60] block uppercase tracking-widest">
                  TOTAL WITH CUSTOM STAMP
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-mono font-medium text-[#171513]">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-mono text-[#a87c28]">
                    (Includes ₹{customFee} Customization)
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-full flex items-center justify-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md ${
                  isAdded
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-[#1e1c1a] hover:bg-[#a87c28] text-white active:scale-98'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>CUSTOM KIT ADDED!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD CUSTOM KIT TO CART</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
