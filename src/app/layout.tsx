import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Growth Website Generator | AI-Powered Business Growth',
  description:
    'Generate premium, conversion-optimized websites with AI. Powered by Claude. Includes SEO, Local SEO, GEO, AEO, color psychology, storytelling, and a 16-dimension growth score.',
  keywords: [
    'AI website generator',
    'business growth',
    'SEO strategy',
    'local SEO',
    'conversion optimization',
    'website blueprint',
  ],
  openGraph: {
    title: 'Growth Website Generator',
    description: 'AI-powered business growth website blueprints',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface-900 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
