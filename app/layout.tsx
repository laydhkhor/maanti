import type { Metadata } from 'next';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsappButton } from '@/components/layout/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
});

export const metadata: Metadata = {
  title: 'Manti | Mehendi & Resin Art Studio',
  description: 'Premium Bridal Mehendi, Festive Mehendi, and Custom Resin Art by Manti.',
  keywords: ['Mehendi', 'Resin Art', 'Bridal Mehendi', 'Custom Art', 'Manti Studio'],
  openGraph: {
    title: 'Manti | Mehendi & Resin Art Studio',
    description: 'Premium Bridal Mehendi, Festive Mehendi, and Custom Resin Art by Manti.',
    url: 'https://manti-studio.com',
    siteName: 'Manti Studio',
    images: [
      {
        url: 'https://picsum.photos/seed/manti/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manti | Mehendi & Resin Art Studio',
    description: 'Premium Bridal Mehendi, Festive Mehendi, and Custom Resin Art by Manti.',
    images: ['https://picsum.photos/seed/manti/1200/630'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Manti Studio',
    image: 'https://picsum.photos/seed/manti/1200/630',
    description: 'Premium Bridal Mehendi, Festive Mehendi, and Custom Resin Art by Manti.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressRegion: 'Your Region',
      addressCountry: 'Your Country',
    },
    telephone: '+1234567890',
    url: 'https://manti-studio.com',
    sameAs: [
      'https://instagram.com/manti.studio',
      'https://facebook.com/manti.studio'
    ],
    priceRange: '$$',
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-light text-dark selection:bg-primary/20 selection:text-primary" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}