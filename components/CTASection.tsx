export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary to-primary-dark" id="apply">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 rounded-full w-96 h-96 bg-white/10 blur-3xl translate-x-1/4" />
      
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        {/* H2: Action-oriented heading with urgency */}
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl font-display">
          Ready to Get Your Personal Loan? Apply in 5 Minutes!
        </h2>
        <a
          href="/application-form"
          className="inline-block px-12 py-5 text-xl font-semibold transition-all duration-300 bg-white rounded-full shadow-2xl text-primary shadow-black/20 hover:scale-105 hover:shadow-3xl"
        >
          Start Your Application Now →
        </a>
        {/* Paragraph: Final CTA with benefits and no-risk messaging */}
        <p className="m-10 text-xl leading-relaxed text-white/90">
          Join thousands of satisfied customers who have received fast approval and same-day funding. No application fees, no obligation to accept the loan offer. Check your rate in minutes without impacting your credit score. Get the financial relief you need today with QuickCash—America's trusted online lender.
        </p>

        
      </div>
    </section>
  )
}
