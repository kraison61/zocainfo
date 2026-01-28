import Link from 'next/link'

export default function Footer() {
  const services = [
    { name: 'Personal Loans Online', href: '#' },
    { name: 'Debt Consolidation Loans', href: '#' },
    { name: 'Emergency Cash Loans', href: '#' },
    { name: 'Bad Credit Loans', href: '#' },
    { name: 'Same Day Funding', href: '#' },
    { name: 'Loan Calculator Tool', href: '#' },
    { name: 'Check Application Status', href: '#' },
  ]

  const company = [
    { name: 'About QuickCash', href: '#' },
    { name: 'How It Works', href: '#how' },
    { name: 'Customer Reviews', href: '#testimonials' },
    { name: 'Press & News', href: '#' },
    { name: 'Career Opportunities', href: '#' },
    { name: 'Contact Our Team', href: '#' },
    { name: 'Loan Rates & Fees', href: '#' },
  ]

  const support = [
    { name: 'Frequently Asked Questions', href: '#' },
    { name: 'Loan Application Guide', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Responsible Lending', href: '#' },
    { name: 'Security & Protection', href: '#' },
    { name: '24/7 Help Center', href: '#' },
  ]

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* H3: Brand heading in footer */}
            <h3 className="mb-4 text-2xl font-bold font-display text-primary">
            Zoca Loans - Your Fast Online Funding Solution
            </h3>
            {/* Paragraph: Company description with keywords */}
            <p className="mb-6 leading-relaxed text-gray-400">
            When it comes to finding reliable zoca loans reviews, transparency is everything. Zoca Loans has established itself as a go-to tribal lender for Americans who need to move fast when life throws a financial curveball. Whether you need to zoca loans apply for an emergency car repair or use your zoca loans login to manage a medical bill payment, the platform is built for speed and accessibility. Having supported thousands of borrowers with subprime credit, Zoca focuses on getting you the cash you need today while maintaining the high security standards you expect from a modern online lender.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/20 text-primary-light">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Regulated Lender
            </div>
          </div>

          {/* Services Column */}
          <div>
            {/* H4: Footer column heading */}
            <h4 className="mb-6 text-lg font-semibold font-display">
              Loan Products & Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            {/* H4: Footer column heading */}
            <h4 className="mb-6 text-lg font-semibold font-display">
              Company Information
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            {/* H4: Footer column heading */}
            <h4 className="mb-6 text-lg font-semibold font-display">
              Support & Resources
            </h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-gray-400 border-t border-gray-800 md:flex-row">
          {/* Paragraph: Copyright and legal */}
          <p>
            © 2025 QuickCash Financial Services. All rights reserved. Licensed lender in all 50 states.
          </p>
          {/* Paragraph: Contact information */}
          <p>
            Customer Service: 1-800-QUICK-CASH (1-800-784-2522) | Email: support@quickcash.com
          </p>
        </div>
      </div>
    </footer>
  )
}
