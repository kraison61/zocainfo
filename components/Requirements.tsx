export default function Requirements() {
  const requirements = [
    'Valid Government-Issued Photo ID (Driver\'s License, Passport, or State ID)',
    'Proof of Current Address (Utility Bill, Lease Agreement, or Bank Statement)',
    'Proof of Steady Income (Recent Pay Stubs, Tax Returns, or Bank Deposits)',
    'Active Bank Account for Direct Deposit (Checking or Savings Account Statement)',
    'Age Requirement: Must be at least 18 years old and a US Citizen.',
    'A steady source of recurring income (employment or benefits).',
  ]

  return (
    <section className="py-24 bg-white" id="requirements">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
            REQUIREMENTS
          </div>
          {/* H2: Main section heading with keywords */}
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
          Zoca Loans Eligibility: What You Need to Qualify
          </h2>
          {/* Paragraph: Requirements overview with qualification keywords */}
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
          Before you attempt a zoca loans login to start an application, ensure you meet the minimum criteria. Tribal lenders have specific requirements that differ from state-licensed lenders, primarily focusing on your current ability to service the debt rather than your past credit mistakes.
          </p>
        </div>

        {/* Requirements Content */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border-2 bg-primary-pale rounded-3xl md:p-12 border-primary-light">
            <div className="grid gap-6 md:grid-cols-2">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 transition-all duration-300 bg-white border rounded-xl border-primary-light hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
                >
                  {/* Check Icon */}
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white rounded-full bg-primary">
                    ✓
                  </div>

                  {/* Requirement Text */}
                  <span className="font-medium leading-relaxed text-gray-800">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
