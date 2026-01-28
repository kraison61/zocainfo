export default function Benefits() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning-Fast Approval Process',
      description: 'The most frequently cited advantage in zoca loans reviews is the speed of the lending cycle. Once you begin to zoca loans apply, the automated underwriting system processes your data to deliver an initial decision within minutes. This efficiency reduces the anxiety associated with financial emergencies, such as urgent vehicle repairs or unexpected medical expenses.',
    },
    {
      icon: '💰',
      title: 'High Accessibility for Subprime Credit',
      description: 'Zoca Loans provides a vital credit bridge for individuals who may have "less-than-perfect" credit scores. Unlike traditional banking institutions that often disqualify applicants based solely on past mistakes, the zoca loans model focuses on your current ability to repay the debt. This inclusive approach makes the zoca loans apply process a viable option for those excluded from mainstream financial systems.',
    },
    {
      icon: '🛡️',
      title: 'Seamless 100% Online Experience',
      description: 'YThe entire loan lifecycle can be managed from the comfort of your home using a smartphone or computer. From the initial zoca loans apply form to managing your balance via the zoca loans login, the process is entirely paperless. This convenience saves time and eliminates the logistical hurdles of visiting a physical bank branch or waiting in long lines.',
    },
    {
      icon: '📱',
      title: 'Transparent Installment Structure',
      description: 'Despite the high interest rates, zoca loans offers a clear and predictable repayment structure. Before you finalize your agreement through the zoca loans login portal, the lender provides a full disclosure of the total repayment amount and the fixed installment schedule. This transparency ensures there are no hidden fees or unexpected charges, allowing for better monthly budgeting.',
    },
    {
      icon: '💳',
      title: 'Bank-Level Security Data Protection',
      description: 'Protecting your personal and financial information is a top priority for the platform. The website utilizes 256-bit SSL encryption—the same security technology used by major banks—to safeguard your data during the zoca loans apply phase. Borrowers can feel confident that their sensitive details, such as Social Security numbers and bank accounts, are protected from unauthorized access.',
    },
    {
      icon: '👥',
      title: 'Flexible Early Repayment Options',
      description: 'A significant advantage for borrowers is the ability to pay off the loan balance ahead of schedule to save on interest. Zoca Loans typically does not charge prepayment penalties, allowing you to settle your debt as soon as your finances improve. By using your zoca loans login to make extra payments, you can effectively reduce the total cost of credit, which is the best strategy for managing high-interest loans.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-pale" id="benefits">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
            OUR BENEFITS
          </div>
          {/* H2: Main section heading with value proposition */}
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
          Why Borrowers Consider Zoca Loans
          </h2>
          {/* Paragraph: Overview with trust signals */}
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Borrowers often turn to zoca loans when they have been turned away by mainstream financial institutions. As a tribal lender, Zoca operates under the jurisdiction of the Rosebud Sioux Tribe, which allows them to offer credit products to those with "less-than-perfect" credit scores. While this provides accessibility, it comes with a significantly higher cost of capital compared to credit union loans.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-white border-2 border-transparent shadow-lg rounded-2xl shadow-gray-200 hover:border-primary hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mb-6 text-5xl bg-primary-light rounded-2xl">
                {benefit.icon}
              </div>

              {/* H3: Benefit-specific heading */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900 font-display">
                {benefit.title}
              </h3>

              {/* Paragraph: Benefit description with keywords */}
              <p className="leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
