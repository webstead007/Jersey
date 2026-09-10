import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#f2ece4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'ATELIER 90 | Cinematic 3D Football Jersey Store & Showroom',
  description:
    'Experience our interactive 3D cinematic showroom transformation. Authentic matchday football kits, national pride, and iconic club jerseys.',
  keywords: [
    'football jerseys',
    'cinematic 3d store',
    'authentic soccer kits',
    'brazil home jersey',
    'argentina away jersey',
    'spain home jersey',
    'atelier 90',
  ],
  openGraph: {
    title: 'ATELIER 90 | Cinematic 3D Football Jersey Store',
    description:
      'The luxury interactive 3D showroom for the world’s most iconic football kits.',
    url: 'https://atelier90jerseys.com',
    siteName: 'Atelier 90 Jersey Store',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body className="bg-[#f2ece4] text-[#171513] font-sans antialiased selection:bg-[#a87c28] selection:text-white">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
