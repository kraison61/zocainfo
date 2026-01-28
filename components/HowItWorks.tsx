export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Online Application',
      description: 'To begin, you will need to access the official website to zoca loans apply. The form requires basic personal information, including your Social Security number, income details, and an active checking account. The system is designed to be mobile-friendly, allowing for submissions in under 10 minutes.',
    },
    {
      number: 2,
      title: 'Account Access and Verification',
      description: 'Once your initial data is submitted, you can use your zoca loans login credentials to track your status. The lender may use third-party services like Clarity or Experian to verify your identity and financial standing. Unlike some "no credit check" lenders, Zoca may perform a soft or hard inquiry depending on the specific product.',
    },
    {
      number: 3,
      title: 'Approval and E-Signature',
      description: 'If you meet the eligibility criteria, an offer is presented through your zoca loans login dashboard. It is imperative at this stage to review the Truth in Lending Act (TILA) disclosure, which outlines the total cost of the loan, the APR, and the repayment schedule.',
    },
    {
      number: 4,
      title: 'Receiving Funds',
      description: 'Upon signing the digital agreement, funds are typically dispatched via ACH transfer. If the application is finalized before the afternoon cutoff, same-day or next-business-day funding is common, making zoca loans a frequent choice for urgent car repairs or medical bills.',
    },
  ]

  return (
    <section className="py-24 bg-white" id="how">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
            HOW IT WORKS
          </div>
          {/* H2: Main section heading with keywords */}
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
          How to Navigate the Zoca Loans Application Process
          </h2>
          {/* Paragraph: Process description with long-tail keywords */}
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
          The zoca loans platform is built on a streamlined digital infrastructure, allowing users to move from inquiry to a decision quickly. Unlike traditional lenders that may require days of paperwork, this process is automated to handle high-interest, short-term credit products. However, because these are installment loans with high APRs, the speed of the zoca loans apply system should be met with careful financial consideration.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="p-8 transition-all duration-300 border-2 bg-primary-pale rounded-2xl border-primary-light hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary group"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl font-bold text-white transition-transform rounded-full shadow-lg bg-gradient-to-br from-primary to-primary-dark font-display shadow-primary/30 group-hover:scale-110">
                {step.number}
              </div>

              {/* H3: Step-specific heading */}
              <h3 className="mb-4 text-xl font-bold text-center text-gray-900 font-display">
                {step.title}
              </h3>

              {/* Paragraph: Step description */}
              <p className="leading-relaxed text-center text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
