import Link from 'next/link'

export default function Footer() {
  const services = [
    { name: 'Personal Loans Online', href: 'personal-loans-online' },
    { name: 'Debt Consolidation Loans', href: 'debt-consolidation-loans' },
    { name: 'Emergency Cash Loans', href: 'emergency-cash-loans' },
    { name: 'Bad Credit Loans', href: 'bad-credit-loans' },
    { name: 'Same Day Funding', href: 'same-day-funding' },
    { name: 'Loan Calculator Tool', href: '#calculator' },
    { name: 'Check Application Status', href: '#apply' },
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
        <div id="disclaimer" className='text-gray-400'>
              <h2>Disclaimer Section</h2>
              <p>zocaloans is not an offer or solicitation to lend. We do not make any loan or credit decisions and are not representatives, brokers or agents of any lender. Participating lenders offer loans from $200 up to $5,000. Not all lenders can offer you amounts up to $5,000. Our service is not available in all states. Submission of a request through this website does not guarantee that you will receive a loan offer or an offer you’ll be satisfied with. Funds transfer time may vary depending on your lender and/or financial institution. If you have any questions about your loan, please contact your lеndеr directly. Credit checks may be performed with the three reporting credit bureaus: Experian, Equifax, and TransUnion. Submission of a request means you are authorizing the lenders to check your creditworthiness and your personal details.
This service is not a solicitation for loan products and does not constitute a loan offer for any loan products that are prohibited by state law. This service is void where prohibited.
State Availability: Not all lenders from our system operate in all US states. Residents of some US states may not be eligible for loan products in accordance with their legislation. By selecting your State at the start of our loan offer process, you shall be informed of any limitations regarding obtaining a loan if you reside in individual US states.
This website collects personal information and transfers it to its third-party partners.
The website contains links to third-party websites. Accessing them may result in a commission.
Please note that personal loans should not be treated as financial cure-it-all. If you have major budget difficulties, consult specialists first.</p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-gray-400 border-t border-gray-800 md:flex-row">
          {/* Paragraph: Copyright and legal */}
          <p>
            © 2025 zocaloans. All rights reserved. Licensed lender in all 50 states.
          </p>
          {/* Paragraph: Contact information */}
          <p>
            Customer Service: 1-800-QUICK-CASH (1-800-784-2522) | Email: support@zocaloans.info
          </p>
        </div>
      </div>
    </footer>
  )
}
