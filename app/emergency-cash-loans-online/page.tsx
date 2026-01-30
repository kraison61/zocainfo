import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CTASection />
      <section className="max-w-6xl mx-auto px-4 py-12 my-10">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Personal Loans Online – Compare Options and Apply Responsibly
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Personal loans online allow borrowers to explore loan options
            digitally without visiting a physical bank. By comparing lenders,
            reviewing estimated costs, and understanding repayment terms, users
            can decide whether an online personal loan fits their short-term or
            long-term financial needs.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Are Personal Loans Online?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Personal loans online are unsecured loans offered by banks, credit
            unions, and online lenders through digital platforms. These loans
            are commonly used for expenses such as emergency costs, debt
            consolidation, or planned purchases. Loan terms, interest rates, and
            eligibility vary depending on the lender and borrower profile.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Estimate Costs With a Personal Loan Online Calculator
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Before applying, many borrowers use a personal loan online
            calculator to estimate monthly payments and total repayment costs.
            Calculators help compare loan amounts, interest rates, and repayment
            periods so you can understand affordability before moving forward.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How to Apply for Personal Loans Online
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Complete an Online Request
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Provide basic personal, income, and loan amount details through
                a secure online form.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Compare Available Offers
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Review potential loan options from third-party lenders,
                including rates and repayment terms.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Review Loan Terms
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Carefully read all terms, fees, and repayment details before
                accepting any offer.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Receive Funds
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                If approved, funds are transferred according to the lender’s
                processing timeline.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why Borrowers Choose Personal Loans Online
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="border border-gray-200 rounded-xl p-5">
              Convenient online access without visiting a branch
            </li>
            <li className="border border-gray-200 rounded-xl p-5">
              Ability to compare lenders and loan terms
            </li>
            <li className="border border-gray-200 rounded-xl p-5">
              Fixed monthly payments for easier budgeting
            </li>
            <li className="border border-gray-200 rounded-xl p-5">
              Flexible loan amounts for different needs
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-amber-900 mb-3">
            Important Risks to Consider
          </h2>
          <p className="text-amber-900 leading-relaxed">
            Personal loans involve repayment obligations and interest costs.
            Longer loan terms may reduce monthly payments but increase total
            interest. Late or missed payments can negatively affect your credit
            profile. Always evaluate affordability before borrowing.
          </p>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Explore Personal Loan Options
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Comparing personal loans online allows you to review rates, terms,
            and repayment options before deciding. Take a moment to explore
            available offers and choose an option that fits your financial
            situation.
          </p>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default page;
