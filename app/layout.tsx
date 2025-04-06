import type { Metadata } from 'next';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';

// const interSans = Inter({
//   variable: '--font-inter-sans',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Wakhan Trails',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
