import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Tea Planet — Premium Beverage Ingredients & B2B Solutions',
    template: '%s | The Tea Planet',
  },
  description:
    'India\'s leading manufacturer of Boba, Syrups, Premixes & Tea ingredients. FSSC 22000 certified. Trusted by 1000+ cafes, QSRs & cloud kitchens.',
  keywords: ['boba tea', 'tea premix', 'beverage ingredients', 'B2B beverage', 'bulk tea', 'FSSC certified'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.theteaplanet.com',
    siteName: 'The Tea Planet',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
