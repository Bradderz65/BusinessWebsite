import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Consulting | Transforming Businesses Through Innovation',
  description: 'Nexus Consulting provides world-class business consulting, digital transformation, and strategic growth services to help enterprises thrive in the modern economy.',
  keywords: ['business consulting', 'digital transformation', 'strategy', 'growth', 'enterprise solutions'],
  authors: [{ name: 'Nexus Consulting' }],
  creator: 'Nexus Consulting',
  publisher: 'Nexus Consulting',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexus-consulting.com',
    siteName: 'Nexus Consulting',
    title: 'Nexus Consulting | Transforming Businesses Through Innovation',
    description: 'World-class business consulting and digital transformation services for enterprises.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexus Consulting - Transforming Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Consulting | Transforming Businesses Through Innovation',
    description: 'World-class business consulting and digital transformation services.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://nexus-consulting.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};
