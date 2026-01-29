export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark overflow-hidden" id="apply">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* H2: Action-oriented heading with urgency */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Get Your Personal Loan? Apply in 5 Minutes!
        </h2>
        
        {/* Paragraph: Final CTA with benefits and no-risk messaging */}
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Join thousands of satisfied customers who have received fast approval and same-day funding. No application fees, no obligation to accept the loan offer. Check your rate in minutes without impacting your credit score. Get the financial relief you need today with QuickCash—America's trusted online lender.
        </p>

        <a
          href="/application-form"
          className="inline-block bg-white text-primary px-12 py-5 rounded-full text-xl font-semibold shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
        >
          Start Your Application Now →
        </a>
      </div>
    </section>
  )
}
