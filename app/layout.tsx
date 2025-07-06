import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nitin Chaudhary - Professional Video Editor | Cutting Stories That Stick',
  description: 'Professional video editor specializing in commercials, music videos, social media content, and brand storytelling. 5+ years of experience creating compelling narratives.',
  keywords: 'video editor, video editing, commercials, music videos, social media content, color grading, motion graphics, New Delhi, India',
  authors: [{ name: 'Nitin Chaudhary' }],
  openGraph: {
    title: 'Nitin Chaudhary - Professional Video Editor',
    description: 'Professional video editor crafting compelling narratives through rhythm, emotion, and visual storytelling',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitin Chaudhary - Professional Video Editor',
    description: 'Professional video editor crafting compelling narratives through rhythm, emotion, and visual storytelling',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}