import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zoca Loans Reviews: Get Fast Funding with Subprime Credit (Read First)',
  description: 'Need fast cash? Read our expert Zoca Loans review. We cover the Zoca Loans login steps, approval times, and essential requirements for borrowers with poor credit.',
  keywords: ['zoca loans','personal loans', 'fast cash loans', 'online loans', 'bad credit loans', 'instant approval loans', 'emergency loans', 'same day loans', 'quick cash', 'debt consolidation loans'],
  authors: [{ name: 'QuickCash' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://zocaloan.info/',
    title: "Zoca Loans Reviews: Get Fast Funding with Subprime Credit (Read First)",
  description: "Need fast cash? Read our expert Zoca Loans review. We cover the Zoca Loans login steps, approval times, and essential requirements for borrowers with poor credit.",
    siteName: 'zocaloan',
    images: [
      {
        url: 'https://zocaloan.info/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zoca Loans Reviews: Get Fast Funding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoca Loans Reviews: Get Fast Funding with Subprime Credit (Read First)',
    description: 'Need fast cash? Read our expert Zoca Loans review. We cover the Zoca Loans login steps, approval times, and essential requirements for borrowers with poor credit.',
    images: ['https://zocaloan.info/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://zocaloan.info/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'zocaloan',
              description: 'Fast personal loans with 24-hour approval',
              url: 'https://zocaloan.info/',
              logo: 'https://zocaloan.info/logo.png',
              telephone: '+1 (855) 826-4788',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '50000',
              },
              priceRange: '$1,000 - $50,000',
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
