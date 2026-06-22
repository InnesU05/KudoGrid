import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KudoGrid | Collect & Embed Reviews Effortlessly',
  description: 'The easiest way to collect text reviews and embed a Wall of Love on your website. Zero-touch, high-converting, and beautiful.',
  keywords: 'customer reviews, testimonials widget, embed reviews, wall of love, collect feedback, micro-SaaS',
  openGraph: {
    title: 'KudoGrid | Collect & Embed Reviews Effortlessly',
    description: 'The easiest way to collect text reviews and embed a Wall of Love on your website.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 selection:bg-emerald-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
