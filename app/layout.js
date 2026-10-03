import './globals.css';
import { Lora, Jost, Caveat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { site } from '@/lib/content';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-hand',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: 'Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
  description: site.description,
  keywords: [
    'anxiety therapist Santa Monica',
    'trauma therapy Santa Monica',
    'EMDR therapy California',
    'burnout therapy',
    'perfectionism therapy',
    'telehealth therapy California',
    'licensed psychologist Santa Monica',
    'Dr. Maya Reynolds',
  ],
  openGraph: {
    title: 'Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description: site.description,
    type: 'website',
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description: site.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${jost.variable} ${caveat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}