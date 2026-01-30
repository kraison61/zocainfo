'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const faqs = [
    {
      question: 'What are personal loans online?',
      answer: 'Personal loans online are unsecured loans offered by banks, credit unions, or online lenders through digital platforms. Borrowers can compare options, review estimated costs, and apply without visiting a physical branch.',
    },
    {
      question: 'How do I apply for personal loans online?',
      answer: 'The process typically involves completing an online request, providing basic personal and income information, reviewing available offers from third-party lenders, and accepting a loan if the terms fit your needs. Approval and funding timelines vary by lender.',
    },
    {
      question: 'Can I apply for a small loan amount, such as $3,000?',
      answer: 'Yes. Many lenders offer smaller loan amounts, including personal loans of around $3,000, depending on eligibility, income, and lender policies. Not all lenders offer the same loan sizes.',
    },
    {
      question: 'How does a personal loan online calculator work?',
      answer: 'A personal loan online calculator estimates monthly payments and total repayment costs based on loan amount, interest rate, and repayment term. Results are estimates only and may differ from actual loan offers.',
    },
    {
      question: 'What are debt consolidation loans?',
      answer: 'Debt consolidation loans combine multiple existing debts—such as credit cards or personal loans—into one loan with a single monthly payment. This can simplify repayment but does not reduce the total debt automatically..',
    },
    {
      question: 'Can debt consolidation loans lower my monthly payment?',
      answer: 'They may lower monthly payments if the interest rate or repayment structure is more favorable. However, longer loan terms can increase the total interest paid over time.',
    },
    {
      question: 'Are debt consolidation loans suitable for everyone?',
      answer: 'No. They may be suitable for borrowers with stable income and manageable debt levels. They may not be appropriate for those with ongoing financial hardship or difficulty meeting basic expenses.',
    },
    {
      question: 'Do debt consolidation loans affect credit scores?',
      answer: 'Applying for a loan and repayment behavior can affect credit scores. Consistent, on-time payments may help over time, while missed payments can negatively impact credit.',
    },
    {
      question: 'What are emergency cash loans?',
      answer: 'Emergency cash loans are short- to medium-term loans used for urgent expenses such as medical bills, car repairs, or essential living costs. They are designed for time-sensitive financial needs.',
    },
    {
      question: 'How fast can I receive funds from an emergency cash loan?',
      answer: 'Funding times vary by lender and financial institution. Some lenders process loans faster than traditional banks, but speed is not guaranteed and depends on individual circumstances.',
    },
    {
      question: 'Are emergency cash loans risky?',
      answer: 'They can carry higher costs due to urgency and shorter repayment terms. Borrowers should carefully review interest rates, fees, and repayment obligations before accepting any offer.',
    },
    {
      question: 'Are emergency cash loans the same as payday loans?',
      answer: 'No. While both are used for urgent needs, emergency cash loans typically have structured repayment terms. Payday loans often involve very short repayment periods and higher risk.',
    },
    {
      question: 'Does submitting a request guarantee loan approval?',
      answer: 'No. Submitting a request does not guarantee that you will receive a loan offer or that any offer will meet your expectations. Loan decisions are made solely by third-party lenders.',
    },
    {
      question: 'Is the website a lender?',
      answer: 'No. Platforms like Zoca Loans are not lenders. They do not make credit decisions, approve loans, or issue funds. They connect users with independent third-party lenders.',
    },
    {
      question: 'Will my credit be checked?',
      answer: 'By submitting a request, you authorize participating lenders to assess your creditworthiness. This may include checks with credit reporting agencies such as Experian, Equifax, or TransUnion, depending on lender practices.',
    },
    {
      question: 'Are loan options available in all U.S. states?',
      answer: 'No. Not all lenders operate in all U.S. states. Availability depends on state laws and lender policies. Services are void where prohibited by law.',
    },
    {
      question: 'Does the website earn money from loan offers?',
      answer: 'The website may receive compensation when users click on links or submit requests through partner offers. This does not increase the cost of any loan or affect lender decisions.',
    },
    {
      question: 'Are personal loans a long-term financial solution?',
      answer: 'Personal loans should not be considered a financial cure-all. If you are facing serious or ongoing financial difficulties, consulting a qualified financial professional or credit counselor may be more appropriate.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary-pale to-white" id="faq">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
            FREQUENTLY ASKED QUESTIONS
          </div>
          {/* H2: Main section heading */}
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display">
            Got Questions? We Have Answers
          </h2>
          {/* Paragraph: FAQ intro */}
          <p className="text-xl leading-relaxed text-gray-600">
            Find answers to the most common questions about personal loans, our application process, and what to expect when you apply with QuickCash.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-primary shadow-lg shadow-primary/10'
                  : 'border-gray-200 hover:border-primary-light'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left group"
                aria-expanded={openIndex === index}
              >
                {/* H3: Question heading */}
                <h3 className={`text-lg font-display font-semibold transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                }`}>
                  {faq.question}
                </h3>

                {/* Icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-primary text-white rotate-180'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary-light group-hover:text-primary'
                }`}>
                  <svg
                    className="w-5 h-5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer Collapse */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t-2 border-gray-100">
                    {/* Paragraph: Answer */}
                    <p className="pt-4 leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Still have questions? Our customer support team is here to help!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:1-800-784-2522"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 bg-white border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 1-800-QUICK-CASH
            </a>
            <a
              href="mailto:support@quickcash.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-primary-dark shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
