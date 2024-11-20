import type { Metadata } from 'next';
import { Raleway, Metamorphous } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './global.css';

const font = Metamorphous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-font'
});

const ralewayFont = Raleway({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Zoran's Pexels Gallery",
  description: ''
};

export default function rootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ralewayFont.variable} ${font.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
