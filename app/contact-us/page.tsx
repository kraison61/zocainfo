import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-pale via-white to-primary-light">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-float -z-10" />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 ">
            {/* Left Content */}
            <div className="space-y-8">
            <h1 className="text-3xl font-bold leading-tight text-center text-gray-900 lg:text-4xl font-display animate-fade-in-up">
             Contact Us
              <br />
              <span className="text-2xl text-primary lg:text-3xl">"Understanding Your Fast Funding Options"
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 animate-fade-in-up animation-delay-200">When you’re facing an unexpected financial hurdle, finding zoca loans reviews that offer a transparent look at the lending process is crucial. Zoca Loans provides a platform for short-term installment loans, often utilized by those who need emergency cash but may not qualify for traditional bank products. While the zoca loans apply process is designed for speed, it is vital to understand the terms, interest rates, and the nature of tribal lending before committing to a contract. This review breaks down the costs, the zoca loans login experience, and what actual borrowers are saying about their services.
            </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}

export default page;
