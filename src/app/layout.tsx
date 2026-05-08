import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-archivo',
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
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
