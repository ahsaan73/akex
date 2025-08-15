import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BlogCMS - Modern Blog Platform',
    template: '%s | BlogCMS'
  },
  description: 'A modern blog platform for sharing knowledge and insights across technology, design, business, and more.',
  keywords: ['blog', 'CMS', 'technology', 'design', 'business', 'articles'],
  authors: [{ name: 'BlogCMS Team' }],
  creator: 'BlogCMS',
  publisher: 'BlogCMS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blogcms.example.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blogcms.example.com',
    siteName: 'BlogCMS',
    title: 'BlogCMS - Modern Blog Platform',
    description: 'A modern blog platform for sharing knowledge and insights across technology, design, business, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blogcms',
    creator: '@blogcms',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BlogCMS",
              "url": "https://blogcms.example.com",
              "description": "A modern blog platform for sharing knowledge and insights",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://blogcms.example.com/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}