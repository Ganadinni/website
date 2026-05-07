import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Tea Planet — Premium Beverage Ingredients & B2B Solutions',
    template: '%s | The Tea Planet',
  },
  description:
    "India's leading manufacturer of Boba, Syrups, Premixes & Tea ingredients. FSSC 22000 certified. Trusted by 100+ cafes, QSRs & cloud kitchens. Cost per cup from ₹19.",
  keywords: ['boba tea', 'tea premix', 'beverage ingredients', 'B2B beverage', 'popping boba', 'FSSC certified', 'bubble tea ingredients India'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.theteaplanet.com',
    siteName: 'The Tea Planet',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
