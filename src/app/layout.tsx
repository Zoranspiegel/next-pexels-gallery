import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './global.css';

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
      <body className={ralewayFont.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
