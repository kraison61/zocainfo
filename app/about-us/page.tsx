import Navigation from '@/components/Navigation'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'


export default function aboutUs() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="max-w-5xl mx-auto px-4 py-12 my-10">
  <header className="mb-10">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Zoca Loans</h1>
    <p className="text-gray-700 leading-relaxed">
      Zoca Loans is an online financial information platform designed to help users explore personal loan options through a network of third-party lenders. We are not a lender, bank, or financial institution. Our role is to connect consumers with potential lending partners who may offer loan products based on individual eligibility.
    </p>
  </header>

  <div className="space-y-10">
    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">What Zoca Loans Does — and Does Not Do</h2>
      <p className="text-gray-700 leading-relaxed">
        Zoca Loans does not make lending decisions, approve loans, or set loan terms. We do not issue funds or negotiate offers. When you submit a request through our platform, your information may be shared securely with independent third-party lenders who evaluate requests at their sole discretion.
      </p>
      <p className="text-gray-700 leading-relaxed mt-3">
        Submitting a request through Zoca Loans does not guarantee that you will receive a loan offer or that any offer provided will meet your expectations.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Lending Network</h2>
      <p className="text-gray-700 leading-relaxed">
        Our partner network includes independent lenders that may offer personal loan products, generally ranging from <strong>$200 up to $5,000</strong>, subject to lender criteria and applicable laws. Not all lenders can offer the maximum amount, and availability may vary by state.
      </p>
      <p className="text-gray-700 leading-relaxed mt-3">
        Zoca Loans is not a representative, broker, or agent of any lender. Each lender is responsible for its own loan decisions, terms, and customer communications.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">State Availability and Legal Compliance</h2>
      <p className="text-gray-700 leading-relaxed">
        Loan products available through our partner network are subject to federal and state regulations. Not all lenders operate in all U.S. states, and residents of certain states may not be eligible for specific loan products due to local legislation.
      </p>
      <p className="text-gray-700 leading-relaxed mt-3">
        By selecting your state during the request process, you will be informed of any applicable limitations. Our service is void where prohibited by law.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Credit Checks and Authorization</h2>
      <p className="text-gray-700 leading-relaxed">
        By submitting a request, you authorize participating lenders to review your information and assess creditworthiness. This may include credit checks with major reporting bureaus such as Experian, Equifax, and TransUnion, depending on lender practices.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Privacy and Third-Party Links</h2>
      <p className="text-gray-700 leading-relaxed">
        Zoca Loans collects personal information solely to connect users with potential lending partners. Information may be shared with third-party partners involved in the loan request process.
      </p>
      <p className="text-gray-700 leading-relaxed mt-3">
        Our website may contain links to third-party websites. Accessing these links may result in compensation to Zoca Loans at no additional cost to you. We encourage users to review third-party privacy policies and terms.
      </p>
    </section>

    <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Responsible Borrowing Notice</h2>
      <p className="text-gray-700 leading-relaxed">
        Personal loans should not be treated as a financial cure-all. Borrowing involves risk and repayment obligations. If you are experiencing significant or ongoing financial difficulties, consulting a qualified financial professional or credit counselor may be more appropriate.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Commitment to Transparency</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Clear disclosure of our role as a referral platform</li>
        <li>Honest communication about risks and limitations</li>
        <li>Compliance with applicable laws and regulations</li>
        <li>Support for informed and responsible financial decisions</li>
      </ul>
    </section>
  </div>
</section>
      <CTASection />
      <Footer />
    </main>
  )
}