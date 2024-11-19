import type { Metadata } from 'next';
import './global.css';

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
      <body>{children}</body>
    </html>
  );
}
