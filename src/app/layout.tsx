import type { Metadata } from 'next';
import './global.css';
import Navbar from '@/components/Navbar';

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
